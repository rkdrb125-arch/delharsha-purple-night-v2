/* DELHARSA v145: Royal cursor glitter emits from jeweled tail, not clicking tip. Visual only. */
(()=>{'use strict';
 const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(!fine.matches||reduced.matches)return;
 const canvas=document.createElement('canvas');canvas.id='v125-glitter';canvas.setAttribute('aria-hidden','true');document.body.appendChild(canvas);
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
 let width=0,height=0,dpr=1,particles=[],running=false,lastEmit=0,lastX=-100,lastY=-100;
 const resize=()=>{dpr=Math.min(window.devicePixelRatio||1,2);width=window.innerWidth;height=window.innerHeight;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
 resize();window.addEventListener('resize',resize,{passive:true});
 function spawn(x,y,count){for(let i=0;i<count&&particles.length<65;i++){const angle=Math.random()*Math.PI*2;const speed=.25+Math.random()*1.1;particles.push({x,y,vx:Math.cos(angle)*speed-.25,vy:Math.sin(angle)*speed-.35,age:0,life:22+Math.random()*24,size:.8+Math.random()*2.2,gold:Math.random()>.45})}if(!running){running=true;requestAnimationFrame(draw)}}
 function draw(){ctx.clearRect(0,0,width,height);particles=particles.filter(p=>p.age<p.life);for(const p of particles){p.age++;p.x+=p.vx;p.y+=p.vy;p.vy+=.012;const opacity=Math.max(0,1-p.age/p.life)*.78;ctx.globalAlpha=opacity;ctx.fillStyle=p.gold?'#f7dfaa':'#d8a8ff';ctx.beginPath();ctx.arc(p.x,p.y,p.size*.55,0,Math.PI*2);ctx.fill();if(p.size>1.9){ctx.strokeStyle=p.gold?'#ffecc6':'#ead1ff';ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(p.x-p.size*1.7,p.y);ctx.lineTo(p.x+p.size*1.7,p.y);ctx.moveTo(p.x,p.y-p.size*1.7);ctx.lineTo(p.x,p.y+p.size*1.7);ctx.stroke()}}ctx.globalAlpha=1;if(particles.length)requestAnimationFrame(draw);else{running=false;ctx.clearRect(0,0,width,height)}}
 window.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const now=performance.now();if(now-lastEmit<25)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;if(dx*dx+dy*dy<16)return;lastEmit=now;lastX=e.clientX;lastY=e.clientY;spawn(e.clientX+33,e.clientY+37,2)},{passive:true});
 window.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0)spawn(e.clientX+33,e.clientY+37,9)},{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){particles=[];ctx.clearRect(0,0,width,height)} });
})();
