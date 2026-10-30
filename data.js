export const newId = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `i_${Date.now()}_${Math.random().toString(36).slice(2)}`;
export const themes = [
  {id:'nebula',name:'Nebula',description:'Violeta espacial',bg:'#0b071b',surface:'#211438',accent:'#ac89ff',text:'#fff8ff',secondary:'#c2b0db',mood:'dark'},
  {id:'starlight',name:'Starlight',description:'Crema & rosa',bg:'#f9ecfb',surface:'#ffffff',accent:'#b45bb9',text:'#382445',secondary:'#846c88',mood:'light'},
  {id:'cyber',name:'Cyberpunk',description:'Neón eléctrico',bg:'#050a12',surface:'#101e27',accent:'#63fbd2',text:'#e9fff7',secondary:'#85c4b5',mood:'dark'},
  {id:'sunset',name:'Golden hour',description:'Atardecer cálido',bg:'#250e25',surface:'#4d2340',accent:'#ffbb81',text:'#fff3e8',secondary:'#f5bdc7',mood:'dark'},
  {id:'ocean',name:'Deep ocean',description:'Azul profundo',bg:'#061828',surface:'#122e41',accent:'#66cdf9',text:'#f2fbff',secondary:'#a0c9d8',mood:'dark'},
  {id:'mocha',name:'Mocha',description:'Editorial cálido',bg:'#f5eee6',surface:'#fffaf2',accent:'#995f47',text:'#3c302b',secondary:'#8b7b74',mood:'light'},
  {id:'mono',name:'Monochrome',description:'Blanco y negro',bg:'#0d0d10',surface:'#242427',accent:'#e7e7eb',text:'#ffffff',secondary:'#b9b9c0',mood:'dark'},
  {id:'candy',name:'Cotton candy',description:'Rosa & azul',bg:'#e9f6ff',surface:'#ffffff',accent:'#fa76bb',text:'#334660',secondary:'#69829c',mood:'light'},
  {id:'mimikyu',name:'Midnight Plush',description:'Kawaii nocturno',bg:'#171021',surface:'#392642',accent:'#ffe27e',accent2:'#cba3ff',text:'#fff8ed',secondary:'#e0c4e6',mood:'dark'},
  {id:'lavender',name:'Lavender Milk',description:'Pastel delicado',bg:'#f6eefd',surface:'#ffffff',accent:'#9570c7',accent2:'#ffa6c8',text:'#45375a',secondary:'#8d7a9f',mood:'light'},
  {id:'arcade',name:'Arcade Night',description:'Retro gaming',bg:'#080b22',surface:'#181d48',accent:'#ff70da',accent2:'#66f3ff',text:'#ffffff',secondary:'#aaa8dc',mood:'dark'},
  {id:'forest',name:'Enchanted',description:'Bosque encantado',bg:'#0a201b',surface:'#173a2f',accent:'#99f4b5',accent2:'#ffeeaf',text:'#e7ffec',secondary:'#afd1c2',mood:'dark'},
  {id:'peach',name:'Peach Soda',description:'Melocotón fresco',bg:'#fff1e8',surface:'#ffffff',accent:'#fb826c',accent2:'#ffcc83',text:'#54352d',secondary:'#a27c73',mood:'light'},
  {id:'chrome',name:'Chrome Y2K',description:'Futurismo brillante',bg:'#0c101b',surface:'#1b2636',accent:'#9de9ff',accent2:'#f1b5ff',text:'#edf9ff',secondary:'#b8ccdb',mood:'dark'},
  {id:'berry',name:'Berry Pop',description:'Frambuesa intensa',bg:'#300b35',surface:'#572153',accent:'#ff9cc9',accent2:'#fcc56e',text:'#fff5ff',secondary:'#efd0ea',mood:'dark'},
  {id:'paper',name:'Paper Notes',description:'Minimal editorial',bg:'#f0ecdf',surface:'#fffefa',accent:'#68836e',accent2:'#d5a975',text:'#333d35',secondary:'#79867c',mood:'light'},

  {id:'cosmos',name:'Cosmic Bloom',description:'Nebulosa de fucsia',bg:'#0d071e',surface:'#251737',accent:'#ff93dc',accent2:'#9c8cff',text:'#fff7ff',secondary:'#cebedc',mood:'dark'},
  {id:'pixel',name:'Pixel Arcade',description:'Arcade de medianoche',bg:'#101129',surface:'#23284c',accent:'#ffda68',accent2:'#ff7fca',text:'#fffbea',secondary:'#d5cbd9',mood:'dark'},
  {id:'cloud',name:'Cloud Nine',description:'Cielo despejado',bg:'#e9f4ff',surface:'#ffffff',accent:'#5d8fe7',accent2:'#d29ff5',text:'#293a64',secondary:'#6d82a2',mood:'light'},
  {id:'rose',name:'Rose Atelier',description:'Moda editorial',bg:'#1c0e1a',surface:'#392332',accent:'#f2a9b4',accent2:'#efcf9d',text:'#ffeff0',secondary:'#e0c0ca',mood:'dark'},
  {id:'mint',name:'Mint Studio',description:'Minimalismo fresco',bg:'#eefaf3',surface:'#ffffff',accent:'#3f9b7f',accent2:'#f2b777',text:'#1c4540',secondary:'#6b9288',mood:'light'},
  {id:'voltage',name:'Voltage',description:'Limón electrónico',bg:'#111111',surface:'#252526',accent:'#ddff55',accent2:'#6efbea',text:'#f9ffeb',secondary:'#c4d4b0',mood:'dark'},
  {id:'terra',name:'Terracotta',description:'Atelier natural',bg:'#f3ebe0',surface:'#fffcf6',accent:'#ad6654',accent2:'#e7b891',text:'#463b34',secondary:'#877970',mood:'light'},
  {id:'glacier',name:'Glacier Glow',description:'Hielo & cobalto',bg:'#06152b',surface:'#132b48',accent:'#75e1ff',accent2:'#ad99ff',text:'#f3faff',secondary:'#bad1e8',mood:'dark'},
];
// V4 original theme packs with independent identities.
themes.push(
  {id:'candycore',name:'Candycore',description:'Caramelo rosa & menta',bg:'#230e2c',surface:'#422148',accent:'#ffb2e3',accent2:'#90ffe2',text:'#fff1ff',secondary:'#d8b6d8',mood:'dark'},
  {id:'sakura',name:'Sakura Rain',description:'Flor de cerezo',bg:'#fff0f5',surface:'#ffffff',accent:'#c65b85',accent2:'#e9a6bd',text:'#482436',secondary:'#87596e',mood:'light'},
  {id:'obsidian',name:'Obsidian',description:'Minimal oscuro premium',bg:'#080b12',surface:'#171e29',accent:'#c7d3ee',accent2:'#69d4d5',text:'#f4f6ff',secondary:'#97a7c3',mood:'dark'},
  {id:'jelly',name:'Jelly Pop',description:'Gelatina ultravioleta',bg:'#1e1152',surface:'#42278f',accent:'#f7b2ff',accent2:'#77fff4',text:'#fff5fe',secondary:'#c7b7f4',mood:'dark'},
  {id:'mossgarden',name:'Moss Garden',description:'Bosque sereno',bg:'#0f231e',surface:'#244238',accent:'#a7df9d',accent2:'#e5d5a0',text:'#f3fbeb',secondary:'#b4cbb9',mood:'dark'},
  {id:'sunsetwave',name:'Sunset Wave',description:'Atardecer playero',bg:'#35182c',surface:'#59314a',accent:'#ffc68b',accent2:'#ff93bf',text:'#fff1ea',secondary:'#f3c0c7',mood:'dark'},
  {id:'cloudnine',name:'Cloud Nine',description:'Cielo algodón',bg:'#ecf5ff',surface:'#ffffff',accent:'#6486e8',accent2:'#d497d9',text:'#233457',secondary:'#697ca0',mood:'light'},
  {id:'retrocity',name:'Retro City',description:'Arcade nocturno',bg:'#140e24',surface:'#2c2244',accent:'#ffb25a',accent2:'#68f7ff',text:'#fff7e7',secondary:'#c4b4d2',mood:'dark'},
);
export const fonts = ['Outfit','Space Grotesk','Manrope','DM Sans','Poppins','Nunito','Quicksand','Rubik','Playfair Display','Fredoka','Caveat','Bebas Neue','Pacifico','Cinzel','Dancing Script','Abril Fatface','Montserrat','Inter','Press Start 2P'];
export const socialPlatforms = ['TikTok','Instagram','YouTube','Twitch','Discord','X / Twitter','Spotify','GitHub','Kick','Facebook','Threads','Telegram','Pinterest','LinkedIn','Snapchat','Reddit','SoundCloud','Patreon','PayPal','Steam','Bluesky','WhatsApp','Bandcamp','Web','Email'];
export const blockTypes=[
  {type:'link', label:'Enlace',desc:'Botón con título, emoji y descripción',icon:'link'},
  {type:'heading',label:'Encabezado',desc:'Separa tus secciones',icon:'heading'},
  {type:'text',label:'Texto',desc:'Cuéntales tu historia',icon:'text'},
  {type:'image',label:'Imagen',desc:'Foto o ilustración',icon:'image'},
  {type:'divider',label:'Separador',desc:'Un pequeño respiro visual',icon:'minus'},
  {type:'quote',label:'Cita',desc:'Una frase que te representa',icon:'quote'},
  {type:'faq',label:'Pregunta frecuente',desc:'Pregunta y respuesta desplegable',icon:'help'},
  {type:'video',label:'Video',desc:'Embed de YouTube',icon:'video'},
  {type:'countdown',label:'Cuenta regresiva',desc:'Evento con fecha objetivo',icon:'clock'},
  {type:'gallery',label:'Galería',desc:'Collage de fotos responsive',icon:'image'},
  {type:'music',label:'Música',desc:'Reproductor embebido de Spotify',icon:'music'},
  {type:'notice',label:'Aviso / anuncio',desc:'Destaca un lanzamiento o novedad',icon:'sparkles'},
  {type:'stats',label:'Logros',desc:'Números grandes en tarjetas',icon:'chart'},
  {type:'schedule',label:'Horario',desc:'Días y horarios de tus streams',icon:'clock'},
  {type:'collection',label:'Colección de links',desc:'Varios enlaces en una sección',icon:'layers'},
  {type:'timeline',label:'Historia / timeline',desc:'Tu recorrido o próximos hitos',icon:'clock'},
  {type:'skills',label:'Barras de progreso',desc:'Habilidades, metas y progreso',icon:'chart'},
  {type:'support',label:'Apoya mi proyecto',desc:'Donaciones, Ko-fi o membresías',icon:'heart'},
  {type:'contact',label:'Contáctame',desc:'Correo, propuestas y negocios',icon:'mail'},
  {type:'event',label:'Evento + calendario',desc:'Evento elegante con descarga .ICS',icon:'clock'},
  {type:'downloads',label:'Descargas / recursos',desc:'Archivos externos en una tarjeta ordenada',icon:'download'},
  {type:'testimonial',label:'Reseñas / testimonios',desc:'Opiniones de tu comunidad',icon:'quote'},
  {type:'coupon',label:'Código / cupón',desc:'Caja para copiar un código con un clic',icon:'copy'},
  {type:'services',label:'Servicios / comisiones',desc:'Tarjetas de servicios con enlaces externos',icon:'layers'},
  {type:'ticker',label:'Marquesina',desc:'Un mensaje animado horizontal',icon:'sparkles'},
];

// Separate entrance / exit / loop animation settings per page component.
export const motionEnter=['none','fade','fade-up','fade-down','slide-left','slide-right','zoom-in','pop','flip','blur','rotate','bounce'];
export const motionExit=['none','fade-out','slide-out-up','slide-out-down','zoom-out','blur-out','spin-out'];
export const motionLoop=['none','float','pulse','heartbeat','breathe','twinkle','swing','spin','drift','bounce-loop','wobble','orbit','rain','shake','glow'];
export const makeMotion=(o={})=>({enter:'fade-up',exit:'none',loop:'none',duration:720,exitDuration:480,delay:0,loopDuration:3800,intensity:100,count:0,easing:'ease-out',trigger:'scroll',...o});
export function normalizeMotion(o,fallback={}){
 const v=o&&typeof o==='object'?o:{};const b=makeMotion(fallback);
 const safe=(n,min,max,d)=>{const x=Number(n);return Number.isFinite(x)?Math.max(min,Math.min(max,x)):d};
 return {enter:motionEnter.includes(v.enter)?v.enter:b.enter,exit:motionExit.includes(v.exit)?v.exit:b.exit,loop:motionLoop.includes(v.loop)?v.loop:b.loop,
 duration:safe(v.duration,100,6000,b.duration),exitDuration:safe(v.exitDuration,100,6000,b.exitDuration),delay:safe(v.delay,0,5000,b.delay),loopDuration:safe(v.loopDuration,500,30000,b.loopDuration),
 intensity:safe(v.intensity,10,250,b.intensity),count:safe(v.count,0,30,b.count),easing:['ease','ease-in','ease-out','ease-in-out','linear','cubic-bezier(.18,.89,.32,1.28)'].includes(v.easing)?v.easing:b.easing,trigger:v.trigger==='load'?'load':b.trigger};
}

export const makeScene = (enabled=false)=>({enabled,items:[],pattern:{enabled:false,glyph:'✦',src:'',count:35,mobileCount:15,size:20,opacity:52,animation:'twinkle',speed:8,depth:'back',seed:47},cursor:false});
export function normalizeScene(v){
 const base=makeScene(false);const scene=(v&&typeof v==='object')?v:{};const pat=(scene.pattern&&typeof scene.pattern==='object')?scene.pattern:{};
 const validAnim=['none','float','twinkle','drift','spin','pulse','sway','pop','rain','orbit'];
 const clean=(x,i)=>({id:String(x.id||`decor-${i}`).slice(0,100),kind:['image','emoji','text'].includes(x.kind)?x.kind:'emoji',src:safeImageUrl(x.src)||'',text:String(x.text||'✦').slice(0,100),x:Math.max(0,Math.min(100,Number(x.x)||0)),y:Math.max(0,Math.min(100,Number(x.y)||0)),size:Math.max(12,Math.min(320,Number(x.size)||68)),mobileX:Math.max(0,Math.min(100,Number(x.mobileX??x.x)||0)),mobileY:Math.max(0,Math.min(100,Number(x.mobileY??x.y)||0)),mobileSize:Math.max(12,Math.min(240,Number(x.mobileSize??x.size)||68)),opacity:Math.max(0,Math.min(100,Number(x.opacity??100))),rotation:Math.max(-360,Math.min(360,Number(x.rotation)||0)),animation:validAnim.includes(x.animation)?x.animation:'float',speed:Math.max(1,Math.min(40,Number(x.speed)||7)),motion:normalizeMotion(x.motion,{enter:'none',loop:({float:'float',twinkle:'twinkle',drift:'drift',spin:'spin',pulse:'pulse',sway:'swing',pop:'bounce-loop',rain:'rain',orbit:'orbit'})[x.animation]||'none',loopDuration:(Number(x.speed)||7)*1000}),depth:x.depth==='front'?'front':'back',desktop:x.desktop!==false,mobile:x.mobile!==false});
 return {...base,...scene,enabled:scene.enabled===true,cursor:scene.cursor===true,pattern:{...base.pattern,...pat,src:safeImageUrl(pat.src)||'',glyph:String(pat.glyph||'✦').slice(0,8),count:Math.max(0,Math.min(110,Number(pat.count)||0)),mobileCount:Math.max(0,Math.min(55,Number(pat.mobileCount??15))),size:Math.max(8,Math.min(100,Number(pat.size)||20)),opacity:Math.max(0,Math.min(100,Number(pat.opacity??52))),speed:Math.max(1,Math.min(40,Number(pat.speed)||8)),seed:Math.max(1,Math.min(10000,Number(pat.seed)||47)),animation:validAnim.includes(pat.animation)?pat.animation:'twinkle',motion:normalizeMotion(pat.motion,{enter:'none',loop:({float:'float',twinkle:'twinkle',drift:'drift',spin:'spin',pulse:'pulse',sway:'swing',pop:'bounce-loop',rain:'rain',orbit:'orbit'})[pat.animation]||'none',loopDuration:(Number(pat.speed)||8)*1000}),depth:pat.depth==='front'?'front':'back'},items:Array.isArray(scene.items)?scene.items.filter(x=>x&&typeof x==='object').slice(0,48).map(clean):[]};
}
export const scenePresets=[
 {id:'stars',label:'Constelación',icon:'✦',glyph:'✦',count:55,animation:'twinkle',size:20,opacity:58},
 {id:'hearts',label:'Corazones',icon:'💗',glyph:'♡',count:36,animation:'float',size:26,opacity:60},
 {id:'petals',label:'Lluvia de pétalos',icon:'🌸',glyph:'✿',count:46,animation:'rain',size:26,opacity:70},
 {id:'sparkles',label:'Polvo mágico',icon:'✨',glyph:'✧',count:70,animation:'drift',size:17,opacity:65},
 {id:'snow',label:'Nieve suave',icon:'❄',glyph:'❅',count:72,animation:'rain',size:20,opacity:64},
 {id:'retro',label:'Pixel party',icon:'★',glyph:'★',count:34,animation:'pulse',size:25,opacity:68},
];
export const defaults={
  theme:{scene:makeScene(false),motionProfile:makeMotion({enter:'pop',duration:950,trigger:'load'}),motionAvatar:makeMotion({enter:'zoom-in',loop:'float',duration:850,loopDuration:4200,trigger:'load'}),motionSocial:makeMotion({enter:'fade-up',duration:680,trigger:'load'}),motionCover:makeMotion({enter:'fade',duration:1400,trigger:'load'}),name:'nebula',bg:'#0b071b',surface:'#211438',accent:'#ac89ff',accent2:'#ff9ed4',headerStyle:'center',avatarShape:'circle',avatarSize:92,socialStyle:'glass',socialPosition:'top',borderStrength:36,gradientAngle:130,contentWidth:460,headingScale:100,backgroundImage:'',backgroundDim:45,profileGlow:65,text:'#fff8ff',secondary:'#c2b0db',font:'Outfit',profileFont:'Outfit',bioFont:'Outfit',profileFontSize:100,bioFontSize:100,screenFx:'none',screenFxStrength:36,backgroundMotion:'drift',backgroundMotionSpeed:14,hoverFx:'tilt',hoverIntensity:8,layout:'stack',background:'aurora',button:'glass',corners:22,spacing:13,shadow:52,opacity:86,animation:'float',motion:60,particles:true,glow:true,showBrand:true},
  settings:{publish:false,showSocials:true,showBadge:true,openNewTab:true,seoTitle:'',seoDescription:''}
};
export const makeBlock=(type)=>({
 id:newId(),type,visible:true,fx:'auto',motion:makeMotion(),align:'inherit',pad:0,borderColor:'',cardBg:'',cardRadius:0,cardStyle:'auto',cardLift:0,cardPadding:0,
 ...(type==='link'?{title:'Mi nuevo enlace',subtitle:'Descubre más aquí',url:'https://example.com',emoji:'',featured:false,layout:'regular',image_url:'',platform:'Web',badge:'',buttonColor:'',highlight:false,startsAt:'',endsAt:''}:{}),
 ...(type==='heading'?{title:'Una parte de mi universo',subtitle:''}:{}),
 ...(type==='text'?{text:'Escribe aquí algo sobre ti, tus proyectos o tu comunidad...'}:{}),
 ...(type==='image'?{url:'',caption:'',alt:'Imagen de mi página'}:{}),
 ...(type==='quote'?{text:'Lo mejor está por venir.',author:''}:{}),
 ...(type==='faq'?{title:'¿Dónde puedo encontrar tus directos?',text:'Sígueme en mis redes para enterarte de todo.'}:{}),
 ...(type==='video'?{url:'https://www.youtube.com/watch?v=jfKfPfyJRdk',caption:''}:{}),
 ...(type==='countdown'?{title:'Próximo gran evento',date:new Date(Date.now()+7*864e5).toISOString().slice(0,16)}:{}),
 ...(type==='gallery'?{title:'Momentos favoritos',images:'',caption:'Mi pequeño álbum'}:{}),
 ...(type==='music'?{title:'Lo que estoy escuchando',url:'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M'}:{}),
 ...(type==='notice'?{title:'¡Novedad!',text:'Se viene algo muy especial ✨',style:'glow'}:{}),
 ...(type==='stats'?{title:'Mis logros',item1:'100+',label1:'Streams',item2:'5k+',label2:'Amigos',item3:'24/7',label3:'Creatividad'}:{}),
 ...(type==='schedule'?{title:'Nos vemos en directo',text:'Lunes · 8 PM\nMiércoles · 8 PM\nSábado · 9 PM'}:{}),
 ...(type==='collection'?{title:'Mis rincones favoritos',items:'🎮 Directos | https://www.tiktok.com/ | Estamos en vivo\n💬 Comunidad | https://discord.com/ | Entra al Discord'}:{}),
 ...(type==='timeline'?{title:'Nuestra historia',items:'2024 | El inicio | La primera idea\n2025 | Creciendo juntos | Nuevos proyectos\n2026 | Lo que viene | Aventuras por descubrir'}:{}),
 ...(type==='skills'?{title:'Mis aventuras',items:'Creatividad | 96\nGaming | 85\nEdición | 76'}:{}),
 ...(type==='support'?{title:'Apoya mi universo',text:'Tu apoyo ayuda a seguir creando 💜',url:'https://ko-fi.com/',label:'Apoyar proyecto'}:{}),
 ...(type==='contact'?{title:'¿Creamos algo juntos?',text:'Colaboraciones, arte y proyectos',email:'hola@example.com',label:'Enviar correo'}:{}),
 ...(type==='event'?{title:'¡Próximo evento!',description:'Ven a pasar una noche increíble',date:new Date(Date.now()+864e5*5).toISOString().slice(0,16),duration:90,place:'En línea',url:'https://www.tiktok.com/'}:{}),
 ...(type==='downloads'?{title:'Recursos para ti',items:'Kit de creador | https://example.com/recurso.pdf | PDF · Descarga externa'}:{}),
 ...(type==='testimonial'?{title:'Lo que dice la comunidad',items:'Me encanta el contenido | Anónimo | ★★★★★\nUn lugar genial para pasar el rato | La comunidad | ★★★★★'}:{}),
 ...(type==='coupon'?{title:'Código de la comunidad',description:'Copia este código y úsalo cuando quieras',code:'WISHLOVE',label:'Copiar código'}:{}),
 ...(type==='services'?{title:'Trabajemos juntos',items:'Diseño personalizado | Descripción de un servicio | https://example.com | Solicitar\nColaboraciones | Hablemos de ideas | https://example.com | Contactar'}:{}),
 ...(type==='ticker'?{text:'✦ CREANDO NUEVOS UNIVERSOS ✦ GRACIAS POR ESTAR AQUÍ ✦',speed:24}:{}),
});
export function makePage(slug='zeryux'){
  return {id:newId(),slug,title:'Zeryux',description:'Streamer, creador digital y habitante del multiverso ✦\nBienvenid@ a mi pequeño rincón de internet.',avatar_url:'',cover_url:'',tag:'EN DIRECTO CUANDO EL UNIVERSO QUIERE',theme:{...defaults.theme,scene:{...makeScene(true),pattern:{...makeScene(true).pattern,enabled:true,count:42,mobileCount:16},items:[{id:newId(),kind:'emoji',text:'✧',x:13,y:14,size:58,opacity:78,rotation:-16,animation:'float',speed:7,depth:'back',desktop:true,mobile:true},{id:newId(),kind:'emoji',text:'☾',x:89,y:22,size:88,opacity:65,rotation:10,animation:'sway',speed:10,depth:'back',desktop:true,mobile:false}]}},settings:{...defaults.settings},socials:[
   {id:newId(),platform:'TikTok',url:'https://www.tiktok.com/'}, {id:newId(),platform:'Discord',url:'https://discord.com/'}, {id:newId(),platform:'YouTube',url:'https://youtube.com/'}
  ],blocks:[
   {...makeBlock('heading'),title:'MIS UNIVERSOS',subtitle:'Un poquito de todo lo que hago'},
   {...makeBlock('link'),title:'Mis streams en TikTok',subtitle:'Ven a pasar un buen rato conmigo',url:'https://www.tiktok.com/',emoji:'',platform:'TikTok',featured:true,highlight:true},
   {...makeBlock('link'),title:'Únete a la comunidad',subtitle:'Discord · eventos · diversión',url:'https://discord.com/',emoji:'',platform:'Discord'},
   {...makeBlock('link'),title:'Videos & momentos épicos',subtitle:'Clips, proyectos y más',url:'https://youtube.com/',emoji:'',platform:'YouTube'},
   {...makeBlock('quote'),text:'Todo gran universo comienza con una pequeña chispa.',author:'— por aquí'},
  ],is_published:false,view_count:0,click_count:0};
}
export function applyPreset(page,preset){return {...page,theme:{...page.theme,...preset,accent2:preset.accent2||page.theme.accent2,name:preset.id}}}
const allowedProtocols = new Set(['https:','http:','mailto:']);
export function safeUrl(value){
  if(typeof value!=='string'||!value.trim())return null;
  try{const u=new URL(value.trim());return allowedProtocols.has(u.protocol)?u.href:null;}catch{return null;}
}
export function safeImageUrl(value){if(typeof value==='string' && /^data:image\/(?:png|jpeg|webp|gif);base64,[a-zA-Z0-9+/=]+$/.test(value))return value;const uri=safeUrl(value);return uri && /^https?:/i.test(uri) ? uri:null;}
export function youtubeEmbed(value){
  let u;try{u=new URL(value);}catch{return null;}
  if(u.protocol!=='https:' && u.protocol!=='http:') return null;
  let id=null;
  if(['youtube.com','www.youtube.com','m.youtube.com'].includes(u.hostname)) {id=u.searchParams.get('v');if(!id && u.pathname.startsWith('/shorts/')) id=u.pathname.split('/')[2];if(!id && u.pathname.startsWith('/embed/')) id=u.pathname.split('/')[2];}
  if(u.hostname==='youtu.be') id=u.pathname.replace('/','');
  return id && /^[a-zA-Z0-9_-]{11}$/.test(id)?`https://www.youtube-nocookie.com/embed/${id}`:null;
}
export function validSlug(s){return /^[a-z0-9][a-z0-9_-]{2,29}$/.test(String(s||''));}
export function toSlug(s){return String(s||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9_-]/g,'-').replace(/-+/g,'-').replace(/^-+|-+$/g,'').slice(0,30);}
export function normalizePage(page){page=(page&&typeof page==='object')?page:{};return {...makePage(page.slug),...page,theme:{...defaults.theme,...(page.theme||{}),motionProfile:normalizeMotion(page.theme?.motionProfile,defaults.theme.motionProfile),motionAvatar:normalizeMotion(page.theme?.motionAvatar,defaults.theme.motionAvatar),motionSocial:normalizeMotion(page.theme?.motionSocial,defaults.theme.motionSocial),motionCover:normalizeMotion(page.theme?.motionCover,defaults.theme.motionCover),scene:normalizeScene(page.theme?.scene)},settings:{...defaults.settings,...(page.settings||{})},blocks:Array.isArray(page.blocks)?page.blocks.filter(b=>b&&typeof b==='object'&&typeof b.type==='string').slice(0,80).map(b=>({...b,typography:{title:{},description:{},body:{},...(b.typography||{})}})):[],socials:Array.isArray(page.socials)?page.socials.filter(b=>b&&typeof b==='object').slice(0,30):[]};}

// V3 helpers: input from creators is data, never executable code.
export function parseRows(raw,limit=12){return String(raw||'').split(/\r?\n/).map(line=>line.split('|').map(part=>part.trim())).filter(row=>row.some(Boolean)).slice(0,limit);}
export function linkAudit(page){const issues=[];const blocks=page?.blocks||[];
 for(const b of blocks){if(b.visible===false)continue;
  if(['link','support'].includes(b.type)&&!safeUrl(b.url))issues.push({id:b.id,message:`Enlace inválido: ${b.title||'sin título'}`});
  if(b.type==='event'&&b.url&&!safeUrl(b.url))issues.push({id:b.id,message:'URL de evento inválida'});
   if(b.type==='contact'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email||''))issues.push({id:b.id,message:'Correo de contacto inválido'});
  if(b.type==='video'&&!youtubeEmbed(b.url))issues.push({id:b.id,message:'Video de YouTube inválido'});
  if(b.type==='music'&&!/^https:\/\/open\.spotify\.com\//.test(b.url||''))issues.push({id:b.id,message:'Revisa el enlace de Spotify'});
  if(b.type==='collection')for(const row of parseRows(b.items,16)){if(row[1]&&!safeUrl(row[1]))issues.push({id:b.id,message:`URL de colección inválida: ${row[0]}`});}
 }
 for(const s of page?.socials||[])if(s.url&&!safeUrl(s.url))issues.push({id:s.id,message:`Revisa tu enlace de ${s.platform}`});
 if(!validSlug(page?.slug))issues.push({id:'slug',message:'Nombre de usuario inválido (3-30 caracteres)'});
 return issues;
}
export function contrastRatio(hex1,hex2){const lum=(hex)=>{const v=String(hex||'').match(/^#([0-9a-f]{6})$/i);if(!v)return 0;const rgb=[0,2,4].map(i=>parseInt(v[1].slice(i,i+2),16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2]};const a=lum(hex1),b=lum(hex2);return Math.round(((Math.max(a,b)+.05)/(Math.min(a,b)+.05))*10)/10;}
