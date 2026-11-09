/* Shared menus and player preferences; story save keys remain unchanged. */
(()=>{'use strict';
 const key='delharsha_preferences_v158';let prefs={speed:40,font:15,motion:true};
 try{const p=JSON.parse(localStorage.getItem(key)||'{}');if([0,20,40,65].includes(p.speed))prefs.speed=p.speed;if([14,15,17,19].includes(p.font))prefs.font=p.font;if(typeof p.motion==='boolean')prefs.motion=p.motion;}catch{}
 window.DELHARSA_PREFS=prefs;
 function apply(){document.documentElement.style.setProperty('--reader-size',prefs.font+'px');document.body.classList.toggle('reduce-effects',!prefs.motion);try{localStorage.setItem(key,JSON.stringify(prefs));}catch{}}
 apply();
 const button=(text,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.onclick=fn;return b;};
 const section=(root,title)=>{const s=document.createElement('section');s.className='settings-section';const h=document.createElement('h3');h.textContent=title;s.append(h);root.append(s);return s;};
 const select=(root,label,values,current,fn)=>{const row=document.createElement('label');row.className='settings-row';const title=document.createElement('span');title.textContent=label;const input=document.createElement('select');for(const [v,t]of values){const o=new Option(t,v);input.append(o);}input.value=String(current);input.onchange=()=>fn(input.value);row.append(title,input);root.append(row);};
 settings=function(){
 const root=document.createElement('div');root.className='royal-settings';
 const reading=section(root,'읽기');
 select(reading,'글자 크기',[[14,'작게'],[15,'기본'],[17,'크게'],[19,'아주 크게']],prefs.font,v=>{prefs.font=Number(v);apply();});
 select(reading,'글자 표시 속도',[[65,'천천히'],[40,'기본'],[20,'빠르게'],[0,'즉시 표시']],prefs.speed,v=>{prefs.speed=Number(v);apply();});
 select(reading,'반짝임과 움직임',[[1,'켜기'],[0,'줄이기']],prefs.motion?1:0,v=>{prefs.motion=v==='1';apply();});
 const sound=section(root,'음악'),track=document.getElementById('bgmTrack'),volume=document.getElementById('bgmVolume');
 if(track)select(sound,'배경음악',[...track.options].map(o=>[o.value,o.textContent]),track.value,v=>{track.value=v;track.dispatchEvent(new Event('change',{bubbles:true}));});
 if(volume){const row=document.createElement('label');row.className='settings-row';const label=document.createElement('span');label.textContent='음량';const slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=100;slider.value=volume.value;slider.setAttribute('aria-label','배경음악 음량');const value=document.createElement('output');value.textContent=slider.value+'%';slider.oninput=()=>{volume.value=slider.value;value.textContent=slider.value+'%';volume.dispatchEvent(new Event('input',{bubbles:true}));};row.append(label,slider,value);sound.append(row);}
 const playback=document.createElement('div');playback.className='royal-actions';playback.append(button('재생',()=>$('bgmPlay').click()),button('일시정지',()=>$('bgmPause').click()));sound.append(playback);
 const records=section(root,'저장과 기록');records.append(button('게임 메뉴',menu158));
 const danger=button('현재 진행 저장 삭제',()=>{const box=document.createElement('div'),p=document.createElement('p');p.textContent='현재 진행 저장을 삭제할까요? 수집한 엔딩과 특전은 유지됩니다.';const actions=document.createElement('div');actions.className='royal-actions';actions.append(button('취소',settings),button('저장 삭제',()=>{try{localStorage.removeItem(SAVE_KEY);modal('삭제 완료','현재 진행 저장을 삭제했습니다.');}catch{modal('삭제 실패','저장소에 접근할 수 없습니다.');}}));box.append(p,actions);modal('저장 삭제 확인',box);});danger.dataset.royalDanger='true';records.append(danger);
 modal('환경 설정',root);
 };
 function menu158(){const wrap=document.createElement('div');wrap.className='royal-menu-grid';for(const [name,fn]of [['저장',save],['불러오기',load],['이야기 기록',journal],['인물 도감',characters],['엔딩 도감',gallery],['환경 설정',settings],['타이틀로',()=>show('home')]])wrap.append(button(name,()=>{closeModal();fn();}));modal('게임 메뉴',wrap);}
 $('settingsBtn').onclick=settings;
 $('gameSettingsBtn').addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();menu158();},true);
 // Existing toolbar shortcuts delegate to the same live handlers.
 const panel=$('modal');new MutationObserver(()=>{if(!panel.classList.contains('hidden'))$('closeModal').focus();}).observe(panel,{attributes:true,attributeFilter:['class']});
})();
