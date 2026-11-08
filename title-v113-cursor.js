/* DELHARSA v113: decorative sliding title-menu focus; preserves existing click handlers. */
(()=>{'use strict';
const home=document.getElementById('home');
const menu=home&&home.querySelector('.menu');
if(!home||!menu)return;
const cursor=document.createElement('div');cursor.className='v113-menu-cursor';cursor.setAttribute('aria-hidden','true');
cursor.innerHTML='<span class="v113-wing v113-left"><svg viewBox="0 0 54 32" xmlns="http://www.w3.org/2000/svg"><path d="M52 16H26L16 6 5 16 16 26 26 16M26 16l-9-9M26 16l-9 9"/><path d="M48 10l-6 6 6 6"/></svg></span><span class="v113-wing v113-right"><svg viewBox="0 0 54 32" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h26L38 6l11 10-11 10-10-10M28 16l9-9M28 16l9 9"/><path d="M6 10l6 6-6 6"/></svg></span>';
menu.prepend(cursor);
let index=0,hasPosition=false;
const buttons=()=>Array.from(menu.querySelectorAll('button')).filter(b=>!b.disabled&&!b.hidden&&!b.classList.contains('hidden')&&getComputedStyle(b).display!=='none'&&b.getClientRects().length);
function active(){return home.classList.contains('active')&&getComputedStyle(home).display!=='none'}
function blocked(){const e=document.activeElement;if(e&&(/INPUT|TEXTAREA|SELECT/.test(e.tagName)||e.isContentEditable))return true;
 return !!document.querySelector('[role="dialog"][aria-modal="true"]:not([hidden]), dialog[open]');}
function select(i,focus=false){const bs=buttons();if(!bs.length){cursor.style.opacity='0';return}index=(i+bs.length)%bs.length;const b=bs[index];
 bs.forEach((el,j)=>{el.classList.toggle('v113-selected',j===index);if(j===index)el.setAttribute('data-v113-current','true');else el.removeAttribute('data-v113-current')});
 const menuRect=menu.getBoundingClientRect(),rect=b.getBoundingClientRect();
 const y=rect.top-menuRect.top+rect.height/2;
 if(!hasPosition){cursor.style.transition='none';cursor.style.transform=`translate3d(0,${y}px,0)`;cursor.getBoundingClientRect();cursor.style.removeProperty('transition');hasPosition=true}
 else cursor.style.transform=`translate3d(0,${y}px,0)`;
 cursor.style.opacity=active()?'1':'0';if(focus)b.focus({preventScroll:true});}
function sync(){const bs=buttons();const idx=bs.findIndex(b=>b.classList.contains('v113-selected'));select(idx>=0?idx:Math.min(index,bs.length-1))}
menu.addEventListener('pointerover',e=>{if(!active())return;const b=e.target.closest('button');if(b){const i=buttons().indexOf(b);if(i>=0)select(i)}});
menu.addEventListener('focusin',e=>{const b=e.target.closest('button');if(b){const i=buttons().indexOf(b);if(i>=0)select(i)}});
menu.addEventListener('click',e=>{const b=e.target.closest('button');if(b){const i=buttons().indexOf(b);if(i>=0)select(i)}});
document.addEventListener('keydown',e=>{if(!active()||blocked()||e.altKey||e.ctrlKey||e.metaKey||e.defaultPrevented)return;
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();select(index+(e.key==='ArrowDown'?1:-1),true)}
 else if((e.key==='Enter'||e.key===' ')&&document.activeElement===document.body){const b=buttons()[index];if(b){e.preventDefault();b.click()}}
});
if(typeof ResizeObserver!=='undefined'){const ro=new ResizeObserver(()=>{if(active())sync()});ro.observe(menu)}
window.addEventListener('resize',()=>{if(active())sync()},{passive:true});
const observer=new MutationObserver(()=>{if(active())sync();else cursor.style.opacity='0'});observer.observe(home,{attributes:true,attributeFilter:['class']});
requestAnimationFrame(sync);
})();
