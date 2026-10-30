/* WishLinks Motion Studio v6 – progressive enhancement; no network dependencies.
   Uses Web Animations API + IntersectionObserver; reduces work offscreen.
   Exported standalone HTML embeds this same engine. */
(function(){
'use strict';
const clamp=(n,low,high,def)=>{n=Number(n);return Number.isFinite(n)?Math.max(low,Math.min(high,n)):def};
const effects={
 'fade':k=>[{opacity:0},{opacity:1}],
 'fade-up':k=>[{opacity:0,transform:`translateY(${k*34}px)`},{opacity:1,transform:'translateY(0)'}],
 'fade-down':k=>[{opacity:0,transform:`translateY(-${k*32}px)`},{opacity:1,transform:'translateY(0)'}],
 'slide-left':k=>[{opacity:0,transform:`translateX(${k*62}px)`},{opacity:1,transform:'translateX(0)'}],
 'slide-right':k=>[{opacity:0,transform:`translateX(-${k*62}px)`},{opacity:1,transform:'translateX(0)'}],
 'zoom-in':k=>[{opacity:0,transform:`scale(${Math.max(.1,1-.23*k)})`},{opacity:1,transform:'scale(1)'}],
 'pop':k=>[{opacity:0,transform:'scale(.15)'},{opacity:1,transform:`scale(${1+.11*k})`,offset:.70},{opacity:1,transform:'scale(1)'}],
 'flip':k=>[{opacity:0,transform:`perspective(900px) rotateY(${k*78}deg)`},{opacity:1,transform:'perspective(900px) rotateY(0)'}],
 'blur':k=>[{opacity:0,filter:`blur(${k*11}px)`},{opacity:1,filter:'blur(0)'}],
 'rotate':k=>[{opacity:0,transform:`rotate(-${k*35}deg) scale(.7)`},{opacity:1,transform:'rotate(0) scale(1)'}],
 'bounce':k=>[{opacity:0,transform:`translateY(-${k*50}px)`},{opacity:1,transform:'translateY(9px)',offset:.7},{transform:'translateY(-4px)',offset:.86},{transform:'translateY(0)'}],
 'fade-out':k=>[{opacity:1},{opacity:0}],
 'slide-out-up':k=>[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:`translateY(-${k*48}px)`}],
 'slide-out-down':k=>[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:`translateY(${k*48}px)`}],
 'zoom-out':k=>[{opacity:1,transform:'scale(1)'},{opacity:0,transform:`scale(${Math.max(.1,1-k*.36)})`}],
 'blur-out':k=>[{opacity:1,filter:'blur(0)'},{opacity:0,filter:`blur(${k*11}px)`}],
 'spin-out':k=>[{opacity:1,transform:'rotate(0) scale(1)'},{opacity:0,transform:`rotate(${k*90}deg) scale(.5)`}],
 'float':k=>[{transform:'translateY(0)'},{transform:`translateY(-${k*14}px)`,offset:.5},{transform:'translateY(0)'}],
 'pulse':k=>[{transform:'scale(1)'},{transform:`scale(${1+.085*k})`,offset:.5},{transform:'scale(1)'}],
 'heartbeat':k=>[{transform:'scale(1)'},{transform:`scale(${1+.13*k})`,offset:.14},{transform:'scale(1)',offset:.28},{transform:`scale(${1+.10*k})`,offset:.42},{transform:'scale(1)',offset:.6},{transform:'scale(1)'}],
 'breathe':k=>[{opacity:.92,transform:'scale(.98)'},{opacity:1,transform:`scale(${1+.035*k})`,offset:.5},{opacity:.92,transform:'scale(.98)'}],
 'twinkle':k=>[{opacity:.48,transform:'scale(.83)'},{opacity:1,transform:`scale(${1+.19*k})`,offset:.5},{opacity:.48,transform:'scale(.83)'}],
 'swing':k=>[{transform:`rotate(-${k*8}deg)`},{transform:`rotate(${k*8}deg)`,offset:.5},{transform:`rotate(-${k*8}deg)`}],
 'spin':k=>[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],
 'drift':k=>[{transform:'translate(0,0)'},{transform:`translate(${k*15}px,-${k*22}px)`,offset:.5},{transform:'translate(0,0)'}],
 'bounce-loop':k=>[{transform:'translateY(0)'},{transform:`translateY(-${k*20}px)`,offset:.40},{transform:'translateY(0)',offset:.75},{transform:'translateY(0)'}],
 'wobble':k=>[{transform:'rotate(0)'},{transform:`rotate(-${k*10}deg)`,offset:.25},{transform:`rotate(${k*9}deg)`,offset:.6},{transform:'rotate(0)'}],
 'orbit':k=>[{transform:'rotate(0) translateX(12px) rotate(0)'},{transform:`rotate(360deg) translateX(${k*12}px) rotate(-360deg)`}],
 'rain':k=>[{opacity:.2,transform:`translateY(-${k*35}px)`},{opacity:1,offset:.4},{opacity:.2,transform:`translateY(${k*42}px)`}],
 'shake':k=>[{transform:'translateX(0)'},{transform:`translateX(-${k*6}px)`,offset:.25},{transform:`translateX(${k*6}px)`,offset:.5},{transform:'translateX(0)'}],
 'glow':k=>[{filter:'brightness(1)'},{filter:`brightness(${1+.3*k}) drop-shadow(0 0 ${k*14}px currentColor)`,offset:.5},{filter:'brightness(1)'}]
};
const exits=new Set(['none','fade-out','slide-out-up','slide-out-down','zoom-out','blur-out','spin-out']);
const enters=new Set(['none','fade','fade-up','fade-down','slide-left','slide-right','zoom-in','pop','flip','blur','rotate','bounce']);
const loops=new Set(['none','float','pulse','heartbeat','breathe','twinkle','swing','spin','drift','bounce-loop','wobble','orbit','rain','shake','glow']);
const easings=['ease','ease-in','ease-out','ease-in-out','linear','cubic-bezier(.18,.89,.32,1.28)'];
const reduced=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches===true;
const parse=node=>{
 let cfg={};try{cfg=JSON.parse(node.getAttribute('data-wl-motion')||'{}');}catch{}
 return {enter:enters.has(cfg.enter)?cfg.enter:'none',exit:exits.has(cfg.exit)?cfg.exit:'none',loop:loops.has(cfg.loop)?cfg.loop:'none',
 duration:clamp(cfg.duration,100,6000,720),exitDuration:clamp(cfg.exitDuration,100,6000,500),delay:clamp(cfg.delay,0,5000,0),loopDuration:clamp(cfg.loopDuration,500,30000,4000),
 intensity:clamp(cfg.intensity,10,250,100)/100,count:clamp(cfg.count,0,30,0),easing:easings.includes(cfg.easing)?cfg.easing:'ease-out',trigger:cfg.trigger==='load'?'load':'scroll'};
};
function boot(root=document){
 if(!root)return ()=>{};
 if(typeof root.__wlMotionCleanup==='function')root.__wlMotionCleanup();
 if(reduced()||document.documentElement.classList.contains('preview-motion-off')||typeof Element==='undefined'||typeof Element.prototype.animate!=='function'){root.__wlMotionCleanup=()=>{};return root.__wlMotionCleanup;}
 const nodes=[...(root.matches?.('[data-wl-motion]')?[root]:[]),...root.querySelectorAll('[data-wl-motion]')];
 const registry=[];let observer;
 for(const node of nodes){
   const cfg=parse(node),child=node.querySelector(':scope > .wl-motion-loop')||node;
   let running=[],shown=false,entering=false,exitTimer=null;
   const animate=(target,name,time,opts={})=>{
      if(name==='none'||!effects[name])return null;
      try{const a=target.animate(effects[name](cfg.intensity),{duration:time,fill:'none',easing:opts.easing||cfg.easing,iterations:opts.iterations||1,delay:opts.delay||0});running.push(a);return a;}catch{return null;}
   };
   const stop=()=>{clearTimeout(exitTimer);for(const a of running)a.cancel();running=[];};
   const loop=()=>{if(cfg.loop!=='none'&&node.isConnected){const a=animate(child,cfg.loop,cfg.loopDuration,{iterations:cfg.count||Infinity,easing:['spin','orbit','rain'].includes(cfg.loop)?'linear':'ease-in-out'});if(a) a.finished.catch(()=>{});}};
   const enter=()=>{
     if(shown||entering)return;stop();shown=true;entering=true;node.style.opacity='1';
     const a=animate(node,cfg.enter,cfg.duration,{delay:cfg.delay});
     if(a){a.finished.then(()=>{entering=false;if(shown)loop();}).catch(()=>{});}else{entering=false;loop();}
   };
   const leave=()=>{
     if(!shown||cfg.exit==='none'){
       if(cfg.exit==='none'&&cfg.trigger==='scroll'){const looping=running.filter(a=>a.playState==='running'&&a.effect?.target===child);for(const a of looping)a.pause();}
       return;
     }
     shown=false;entering=false;stop();const a=animate(node,cfg.exit,cfg.exitDuration);if(a){a.finished.then(()=>{if(!shown)node.style.opacity='0';}).catch(()=>{});}else node.style.opacity='0';
   };
   const resume=()=>{for(const a of running)if(a.effect?.target===child&&a.playState==='paused')a.play();};
   registry.push({node,cfg,enter,leave,resume,stop});
 }
 if(typeof IntersectionObserver==='function'){
  observer=new IntersectionObserver(entries=>{
   for(const entry of entries){const r=registry.find(x=>x.node===entry.target);if(!r)continue;
    if(entry.isIntersecting){r.enter();r.resume();}
    else r.leave();
   }
  },{threshold:0.04,rootMargin:'45px 0px 45px 0px'});
 }
 for(const r of registry){if(r.cfg.trigger==='load'||!observer)r.enter();if(observer)observer.observe(r.node);}
 const cleanup=()=>{observer?.disconnect();for(const r of registry){r.stop();r.node.style.opacity='';}};root.__wlMotionCleanup=cleanup;return cleanup;
}
const clear=root=>{if(root&&typeof root.__wlMotionCleanup==='function'){root.__wlMotionCleanup();root.__wlMotionCleanup=null;}};
window.WishMotion={boot,clear,effects:{enter:[...enters],exit:[...exits],loop:[...loops]}};
})();
