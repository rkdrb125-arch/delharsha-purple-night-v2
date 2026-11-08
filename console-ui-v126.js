/* DELHARSA v126 — presentation-only console VN controls. Save schema unchanged. */
(()=>{
 const game=document.getElementById('game'), hud=game?.querySelector('.hud'), next=document.getElementById('nextBtn');
 if(!game||!hud||!next)return;
 const tools=document.createElement('div');tools.className='v126-tools';tools.setAttribute('aria-label','게임 조작');
 const menu=document.createElement('div');menu.className='v126-menu';menu.hidden=true;menu.id='v126Menu';
 const shortcuts=[['journalBtn','기록','☷'],['saveBtn','저장','✧'],['gameSettingsBtn','설정','⚙']];
 for(const [id,label,symbol] of shortcuts){const b=document.createElement('button');b.type='button';b.className='v126-tool';b.title=label;b.setAttribute('aria-label',label);b.textContent=symbol;b.addEventListener('click',()=>document.getElementById(id)?.click());tools.append(b);}
 const menuBtn=document.createElement('button');menuBtn.type='button';menuBtn.className='v126-tool';menuBtn.title='전체 메뉴';menuBtn.setAttribute('aria-label','전체 메뉴');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';tools.append(menuBtn);
 hud.parentNode.insertBefore(tools,hud);hud.classList.add('v126-hud');menu.appendChild(hud);tools.after(menu);
 function close(){menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');}
 menuBtn.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuBtn.setAttribute('aria-expanded',String(!menu.hidden));});
 hud.addEventListener('click',e=>{if(e.target.closest('button'))close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 const marker=document.createElement('span');marker.className='v126-advance';marker.setAttribute('aria-hidden','true');marker.textContent='◆';game.querySelector('.dialogue')?.append(marker);
 function blocked(target){return target.closest('button,a,input,select,textarea,summary,details,.v126-tools,.v126-menu,#choices,#choicePager,#modal,[role="dialog"]');}
 game.addEventListener('click',e=>{
  if(blocked(e.target)||!document.getElementById('modal')?.classList.contains('hidden'))return;
  if(document.body.classList.contains('v111-letter-thought')||document.getElementById('v111LetterOverlay')?.getClientRects().length)return;
  const choices=document.getElementById('choices');
  if(choices && !choices.classList.contains('v87-waiting') && [...choices.children].some(x=>x.matches('button')&&x.getClientRects().length))return;
  // One physical click must cause exactly one text action. Capture before the
  // older dialogue click listener; otherwise one tap can both reveal and advance.
  e.preventDefault();
  e.stopImmediatePropagation();
  next.click();
 }, true);
 document.addEventListener('click',e=>{if(!menu.hidden&&!tools.contains(e.target)&&!menu.contains(e.target))close();});
})();
