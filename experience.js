/* WishLinks 7.0: pointer-aware 3D effects. No tracker, no third-party network calls.
   Delegated events keep working when the live preview is rebuilt. */
(function(){
 'use strict';
 if(window.__wlExperienceBound)return;
 window.__wlExperienceBound=true;
 const rm=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
 let last=null,raf=0;
 document.addEventListener('pointermove',e=>{
  if(rm()||e.pointerType==='touch')return;
  const target=e.target.closest('.v7-hero-tilt,.hoverfx-tilt .crafted-block,.hoverfx-magnetic .crafted-block,.hoverfx-glow .crafted-block,.videostyle-side3d,.v7-floating-video');
  if(!target){if(last){last.style.removeProperty('--v7-x');last.style.removeProperty('--v7-y');last.style.removeProperty('--v7-rx');last.style.removeProperty('--v7-ry');last=null;}return;}
  const {left,top,width,height}=target.getBoundingClientRect();if(!width||!height)return;
  const x=Math.max(-1,Math.min(1,((e.clientX-left)/width-.5)*2));
  const y=Math.max(-1,Math.min(1,((e.clientY-top)/height-.5)*2));
  const strength=Math.max(1,Math.min(24,Number(target.closest('.public-page')?.dataset.hoverIntensity||8)));
  cancelAnimationFrame(raf);
  raf=requestAnimationFrame(()=>{
   if(last&&last!==target){for(const v of ['--v7-x','--v7-y','--v7-rx','--v7-ry'])last.style.removeProperty(v);}
   target.style.setProperty('--v7-x',`${Math.round((x+1)*50)}%`);
   target.style.setProperty('--v7-y',`${Math.round((y+1)*50)}%`);
   target.style.setProperty('--v7-rx',`${(-y*strength).toFixed(2)}deg`);
   target.style.setProperty('--v7-ry',`${(x*strength).toFixed(2)}deg`);
   last=target;
  });
 },{passive:true});
 document.addEventListener('pointerout',e=>{
   if(!last||!last.contains(e.target))return;
   if(e.relatedTarget&&last.contains(e.relatedTarget))return;
   for(const v of ['--v7-x','--v7-y','--v7-rx','--v7-ry'])last.style.removeProperty(v);
   last=null;
 },{passive:true});
})();
