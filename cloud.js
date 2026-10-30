import {CONFIG} from './config.js';
import {normalizePage,validSlug} from './data.js';
export const cloudEnabled = Boolean(CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY);
const sessionKey='wishlinks-auth-v1';
let authSession=null;
try{authSession=JSON.parse(localStorage.getItem(sessionKey))||null;}catch{}
export function currentUser(){return authSession?.user||null;}
export function logout(){authSession=null;localStorage.removeItem(sessionKey);}
function saveSession(obj){authSession=obj;localStorage.setItem(sessionKey,JSON.stringify(obj));}
const root=CONFIG.SUPABASE_URL?.replace(/\/$/,'');
function keyHeaders(){return {'apikey':CONFIG.SUPABASE_ANON_KEY}}
async function api(path,{method='GET',body,privateAuth=true,binary=false,keepalive=false}={}){
 if(!cloudEnabled) throw Error('Configura Supabase en config.js para activar la nube.');
 if(privateAuth && authSession && authSession.expires_at && Date.now()/1000 > authSession.expires_at-50)await refreshSession();
 const headers={...keyHeaders()};
 if(privateAuth && authSession?.access_token)headers.Authorization='Bearer '+authSession.access_token;
 else headers.Authorization='Bearer '+CONFIG.SUPABASE_ANON_KEY;
 if(!binary) headers['Content-Type']='application/json';else if(body instanceof Blob)headers['Content-Type']=body.type||'application/octet-stream';
 if(path.startsWith('/rest/v1/pages')&&method!=='GET')headers['Prefer']='resolution=merge-duplicates,return=representation';
 const res=await fetch(root+path,{method,headers,body:body?binary?body:JSON.stringify(body):undefined,keepalive});
 let content;const text=await res.text();try{content=text?JSON.parse(text):null;}catch{content=text;}
 if(!res.ok)throw Error(content?.msg || content?.message || content?.error_description || content?.error || 'Error '+res.status);
 return content;
}
async function refreshSession(){
 if(!authSession?.refresh_token)return logout();
 const data=await fetch(root+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{...keyHeaders(),'Content-Type':'application/json'},body:JSON.stringify({refresh_token:authSession.refresh_token})}).then(r=>r.json());
 if(!data.access_token){logout();throw Error('Tu sesión venció. Inicia sesión nuevamente.');}
 saveSession({...data,expires_at:Math.floor(Date.now()/1000)+data.expires_in});
}
export async function login(email,password){
 const data=await api('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password},privateAuth:false});
 saveSession({...data,expires_at:Math.floor(Date.now()/1000)+data.expires_in});return currentUser();
}
export async function signup(email,password){
 const redirect=encodeURIComponent(location.origin+'/studio');const data=await api('/auth/v1/signup?redirect_to='+redirect,{method:'POST',body:{email,password},privateAuth:false});
 if(data.access_token)saveSession({...data,expires_at:Math.floor(Date.now()/1000)+data.expires_in});
 return data;
}
export function recoverHashSession(){
 let h=new URLSearchParams(location.hash.substring(1));
 if(h.get('access_token')&&h.get('refresh_token')){
   const access_token=h.get('access_token'),refresh_token=h.get('refresh_token');
   const jwt=access_token.split('.')[1];let user=null;try{const x=JSON.parse(atob(jwt.replace(/-/g,'+').replace(/_/g,'/')));user={id:x.sub,email:x.email};}catch{}
   saveSession({access_token,refresh_token,user,expires_at:Math.floor(Date.now()/1000)+Number(h.get('expires_in')||3600)});
   history.replaceState({},'',location.pathname);
 }
}
export async function ownerPages(){
 const user=currentUser();if(!user)throw Error('Inicia sesión.');
 return (await api(`/rest/v1/pages?select=*&user_id=eq.${encodeURIComponent(user.id)}&order=updated_at.desc`)).map(normalizePage);
}
export async function saveRemote(page){
 const user=currentUser();if(!user)throw Error('Inicia sesión.');
 if(!validSlug(page.slug))throw Error('URL inválida. Usa de 3 a 30 letras, números, guiones o guiones bajos.');
 const obj={id:page.id,user_id:user.id,slug:page.slug.toLowerCase(),title:page.title,description:page.description,avatar_url:page.avatar_url||'',cover_url:page.cover_url||'',tag:page.tag||'',theme:page.theme,settings:page.settings,socials:page.socials,blocks:page.blocks,is_published:Boolean(page.is_published),updated_at:new Date().toISOString()};
 try{const existing=Boolean(page.created_at);const url=existing?'/rest/v1/pages?id=eq.'+encodeURIComponent(page.id):'/rest/v1/pages';const method=existing?'PATCH':'POST';if(existing){delete obj.id;delete obj.user_id;}const data=await api(url,{method,body:obj});if(!Array.isArray(data)||!data[0])throw Error('No se pudo confirmar el guardado de esta página.');return normalizePage(data[0]);}
 catch(e){if(/page_limit_reached|maximum_two_pages|wishlinks_limit_2/i.test(e.message))throw Error('Tu cuenta ya tiene dos páginas. Puedes editarlas o eliminar una antes de crear otra.');if(/duplicate|unique|23505/i.test(e.message))throw Error('Ese nombre de usuario ya está ocupado. Elige otro.');throw e;}
}
export async function createDraftSnapshot(page){
 const user=currentUser();if(!user)throw Error('Inicia sesión para guardar borradores en la nube.');
 if(!page.created_at)throw Error('Guarda primero la página para crear un punto de restauración.');
 return api('/rest/v1/page_drafts',{method:'POST',body:{page_id:page.id,user_id:user.id,title:(page.title||'Borrador').slice(0,120),snapshot:{title:page.title,description:page.description,theme:page.theme,settings:page.settings,socials:page.socials,blocks:page.blocks,avatar_url:page.avatar_url,cover_url:page.cover_url,tag:page.tag}}});
}
export async function getDraftSnapshots(pageId){
 const user=currentUser();if(!user)throw Error('Inicia sesión.');
 return api('/rest/v1/page_drafts?select=id,title,snapshot,created_at&page_id=eq.'+encodeURIComponent(pageId)+'&user_id=eq.'+encodeURIComponent(user.id)+'&order=created_at.desc&limit=10');
}
export async function deleteDraftSnapshot(id){
 const user=currentUser();if(!user)throw Error('Inicia sesión.');
 return api('/rest/v1/page_drafts?id=eq.'+encodeURIComponent(id)+'&user_id=eq.'+encodeURIComponent(user.id),{method:'DELETE'});
}
export async function deleteRemote(id){await api('/rest/v1/pages?id=eq.'+encodeURIComponent(id),{method:'DELETE'});}
export async function fetchPublicPage(slug){
 if(!cloudEnabled)return null;
 const data=await api(`/rest/v1/pages?select=*&slug=eq.${encodeURIComponent(slug)}&is_published=eq.true&limit=1`,{privateAuth:false});
 return data[0]?normalizePage(data[0]):null;
}
export function trackView(id){return api('/rest/v1/rpc/wishlinks_track_view',{method:'POST',body:{p_page:id},privateAuth:false,keepalive:true}).catch(()=>{});}
export function trackClick(id,blockId){return api('/rest/v1/rpc/wishlinks_track_click',{method:'POST',body:{p_page:id,p_block:blockId},privateAuth:false,keepalive:true}).catch(()=>{});}
export async function uploadAsset(file){
 const user=currentUser();if(!user)throw Error('Inicia sesión para subir imágenes.');
 if(file.size>5*1024*1024)throw Error('Límite 5MB.');
 const ext=({'image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/gif':'gif'})[file.type];if(!ext)throw Error('Utiliza PNG, JPG, WebP o GIF.');
 const path=`${user.id}/${crypto.randomUUID()}.${ext}`;
 await api('/storage/v1/object/wishlinks-assets/'+path,{method:'POST',body:file,binary:true});
 return root+'/storage/v1/object/public/wishlinks-assets/'+path;
}
export function localPages(){try{const a=JSON.parse(localStorage.getItem('wishlinks-demo-v1'));return Array.isArray(a)?a.map(normalizePage):null;}catch{return null;}}
export function saveLocal(pages){localStorage.setItem('wishlinks-demo-v1',JSON.stringify(pages));}
