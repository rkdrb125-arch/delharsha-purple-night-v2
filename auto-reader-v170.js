/* Auto mode waits for completed text; never chooses a branch for the reader. */
(()=>{'use strict';
 const $=id=>document.getElementById(id),game=$('game'),line=$('line');
 const old=game.querySelector('.v126-advance'),mark=document.createElement('button');
 mark.id='advance170';mark.type='button';mark.className='v126-advance';old.replaceWith(mark);
 const gem=document.createElement('img');gem.src='assets/ui/advance-amethyst.png';gem.alt='';const status=document.createElement('span');mark.append(gem,status);
 let enabled=false,data=window.DELHARSA_READING,started=0,lastKey='',blocked=true;
 const duration=()=>Math.max(1800,Math.min(15000,1200+Array.from(data?.text||'').length*65));
 function eligible(){return !!(data?.ready&&data.canAdvance&&data.node===state.node&&game.classList.contains('active')&&!game.classList.contains('ui-hidden169')&&$('modal').classList.contains('hidden')&&!document.hidden&&!document.body.classList.contains('opening-video-active')&&!document.body.classList.contains('v111-letter-active')&&!v49Finished()&&(data.more||!$('choices').children.length)&&line.scrollTop+line.clientHeight>=line.scrollHeight-3);}
 function set(value){enabled=value;started=0;blocked=true;update();const b=$('autoToggle170');if(b){b.textContent=enabled?'자동재생: 켜짐':'자동재생: 꺼짐';b.setAttribute('aria-pressed',String(enabled));}}
 function update(){
  const allowed=eligible(),key=data?data.node+':'+data.token+':'+data.page:'';
  mark.hidden=!(data?.ready&&data.canAdvance);
  status.textContent=enabled?(allowed?'AUTO':'AUTO Ⅱ'):'';
  mark.setAttribute('aria-label',enabled?'자동재생 끄기':'다음 대사');
  mark.title=enabled?(allowed?'자동재생 중 · 누르면 정지':'자동재생 대기 · 선택/메뉴/숨김/스크롤 상태에서는 멈춥니다'):'대사 출력 완료 · 다음';
  mark.classList.toggle('auto-running',enabled&&allowed);
  if(!enabled||!allowed){started=0;blocked=true;mark.style.setProperty('--auto-progress','0deg');return;}
  if(blocked||lastKey!==key||!started){started=performance.now();lastKey=key;blocked=false;}
  const progress=Math.min(1,(performance.now()-started)/duration());mark.style.setProperty('--auto-progress',progress*360+'deg');
  if(progress===1){started=0;blocked=true;$('nextBtn').click();}
 }
 mark.onclick=e=>{e.stopPropagation();if(enabled)set(false);else if(eligible())$('nextBtn').click();};
 window.addEventListener('delharsa-reading',e=>{data=e.detail;update();});
 document.addEventListener('visibilitychange',()=>{started=0;blocked=true;update();});
 // Check blockers immediately, including fast open/close within one timer tick.
 new MutationObserver(update).observe($('modal'),{attributes:true,attributeFilter:['class']});
 new MutationObserver(update).observe(game,{attributes:true,attributeFilter:['class']});
 line.addEventListener('scroll',()=>{started=0;blocked=true;update();},{passive:true});
 const oldSettings=settings;settings=function(){oldSettings();const root=$('modalContent').querySelector('.unified-settings');if(!root)return;
  const b=document.createElement('button');b.id='autoToggle170';b.type='button';b.textContent=enabled?'자동재생: 켜짐':'자동재생: 꺼짐';b.setAttribute('aria-pressed',String(enabled));b.onclick=()=>set(!enabled);root.prepend(b);
 };
 setInterval(update,80);update();
})();
