/* One visible menu/settings entry; legacy controls remain delegated, not duplicated. */
(()=>{'use strict';
 const $=id=>document.getElementById(id),key='delharsha_preferences_v158';
 let prefs={speed:40,font:15,motion:true};try{const p=JSON.parse(localStorage.getItem(key)||'{}');if([0,20,40,65].includes(p.speed))prefs.speed=p.speed;if([14,15,17,19].includes(p.font))prefs.font=p.font;if(typeof p.motion==='boolean')prefs.motion=p.motion;}catch{}
 window.DELHARSA_PREFS=prefs;
 function apply(){document.documentElement.style.setProperty('--reader-size',prefs.font+'px');document.body.classList.toggle('reduce-effects',!prefs.motion);try{localStorage.setItem(key,JSON.stringify(prefs));}catch{}}
 apply();
 const button=(text,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.onclick=fn;return b;};
 const section=(root,title)=>{const s=document.createElement('section');s.className='settings-section';const h=document.createElement('h3');h.textContent=title;s.append(h);root.append(s);return s;};
 const select=(root,label,values,current,fn)=>{const row=document.createElement('label');row.className='settings-row';const title=document.createElement('span');title.textContent=label;const input=document.createElement('select');for(const [v,t]of values)input.append(new Option(t,v));input.value=String(current);input.onchange=()=>fn(input.value);row.append(title,input);root.append(row);};
 settings=function(){
  const root=document.createElement('div');root.className='unified-settings';
  const nav=section(root,'게임과 기록'),grid=document.createElement('div');grid.className='settings-grid';nav.append(grid);
  for(const [label,fn]of [['저장',()=>save()],['불러오기',()=>load()],['이야기 기록',()=>journal()],['인물 도감',()=>characters()],['엔딩 도감',()=>gallery()],['에피소드',()=>episodeMenu163()]])grid.append(button(label,()=>{closeModal();fn();}));
  const reading=section(root,'읽기');
  select(reading,'글자 크기',[[14,'작게'],[15,'기본'],[17,'크게'],[19,'아주 크게']],prefs.font,v=>{prefs.font=Number(v);apply();});
  select(reading,'표시 속도',[[65,'천천히'],[40,'기본'],[20,'빠르게'],[0,'즉시 표시']],prefs.speed,v=>{prefs.speed=Number(v);apply();});
  select(reading,'화면 효과',[[1,'켜기'],[0,'움직임 줄이기']],prefs.motion?1:0,v=>{prefs.motion=v==='1';apply();});
  const sound=section(root,'음악'),track=$('bgmTrack'),volume=$('bgmVolume');
  select(sound,'배경음악',[...track.options].map(o=>[o.value,o.textContent]),track.value,v=>{track.value=v;track.dispatchEvent(new Event('change',{bubbles:true}));});
  const row=document.createElement('label');row.className='settings-row volume-row';const label=document.createElement('span');label.textContent='음량';const slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=100;slider.value=volume.value;slider.setAttribute('aria-label','배경음악 음량');const value=document.createElement('output');value.textContent=slider.value+'%';slider.oninput=()=>{volume.value=slider.value;value.textContent=slider.value+'%';volume.dispatchEvent(new Event('input',{bubbles:true}));};row.append(label,slider,value);sound.append(row);
  const playback=document.createElement('div');playback.className='settings-grid';playback.append(button('음악 재생',()=>$('bgmPlay').click()),button('일시정지',()=>$('bgmPause').click()));sound.append(playback);
  // Preserve additional gameplay actions formerly hidden in the clipped toolbar.
  const excluded=new Set(['statusBtn','saveBtn','loadBtn','journalBtn','charactersBtn','galleryBtn','titleBtn','moveBtn','gameSettingsBtn']);
  const extras=[...document.querySelectorAll('#game .hud button')].filter(b=>!excluded.has(b.id)&&!['에피소드','✦ 엔딩 도감','☾ 운명의 갈림길'].includes(b.textContent.trim()));
  if($('game').classList.contains('active')){const other=section(root,'진행 도구');other.append(button('이동',()=>{closeModal();$('moveBtn').click();}));other.append(button('관계 상태',()=>{closeModal();$('statusBtn').click();}));for(const b of extras)other.append(button(b.textContent,()=>{closeModal();b.click();}));}
  const back=section(root,'화면 이동');back.append(button('오프닝 다시 보기',()=>{closeModal();$('openingPlay').click();}),button('타이틀로',()=>{closeModal();show('home');}));
  const release=document.createElement('p');release.className='release-info';release.textContent='DELHARSA v167 · 본편 4개 에피소드 + 에필로그';root.append(release);
  modal('메뉴 · 설정',root);
 };
 // Intercept before older settings listeners can append another audio menu.
 window.addEventListener('click',e=>{const b=e.target.closest?.('#settingsBtn,#gameSettingsBtn,#v112OptionsBtn');if(!b)return;e.preventDefault();e.stopImmediatePropagation();settings();},true);
 $('settingsBtn').textContent='☰ 메뉴 · 설정';$('settingsBtn').setAttribute('aria-label','메뉴와 설정 열기');
 $('v112OptionsBtn').hidden=true;
 document.querySelectorAll('.v126-tools,.v126-menu').forEach(e=>{e.hidden=true;e.setAttribute('aria-hidden','true');});
 $('bgmPanel').hidden=true;
 // Root classes distinguish narrative waiting from choices that are actually available.
 const context=document.createElement('div');context.id='choiceContext164';context.hidden=true;$('game').append(context);
 const oldNarrative=v67RenderNarrative;v67RenderNarrative=function(node){if(node.explore){oldNarrative({...node,text:'',thought:''});nameplate159(null);}else oldNarrative(node);};
 function sync(){const c=$('choices');if(NODES[state.node]?.explore&&c.classList.contains('v87-waiting'))c.classList.remove('v87-waiting');const available=c.children.length>0&&!c.classList.contains('v87-waiting');$('game').classList.toggle('choices-ready',available);const exploring=available&&!!NODES[state.node]?.explore;context.hidden=!exploring;$('game').classList.toggle('explore-ready',exploring);if(exploring){const p=state.v18?.promise;context.textContent='남은 이동 '+Math.max(0,7-exploration().turn)+' / 7'+(p?.status==='accepted'&&p.day===state.day?' · 약속: '+(LOCATIONS.find(x=>x.id===p.loc)?.name||p.loc)+' '+(CLOCK_LABELS[p.turn]||''):'');}}
 new MutationObserver(sync).observe($('choices'),{childList:true,attributes:true,attributeFilter:['class']});sync();
 const oldRender=render;render=function(){oldRender();sync();};
 let previousFocus=null;
 const oldModal=modal;modal=function(title,content){previousFocus=document.activeElement;oldModal(title,content);$('modalContent').scrollTop=0;$('closeModal').focus({preventScroll:true});};
 const oldClose=closeModal;closeModal=function(){oldClose();if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};
 window.addEventListener('keydown',e=>{if($('modal').classList.contains('hidden'))return;if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();closeModal();return;}if(e.key==='Tab'){const items=[...$('modal').querySelectorAll('button,input,select,textarea,a[href]')].filter(x=>!x.disabled&&!x.hidden);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}},true);
})();
