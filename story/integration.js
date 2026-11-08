'use strict';
// One chronology and one event owner per narrative family. Stable save IDs remain valid.
function story155Data(){
 if(!state.story155||typeof state.story155!=='object'){
  const oldDays=Number(state.day)||1;
  state.story155={version:155,introPath:state.v94?.path||null,seen:{},completedDays:{},memories:[],arcMigration:{},legacyDay:oldDays};
  // A previous choice is a remembered decision, not a new chance to earn its reward.
  const families={miguel:'miguel',alex:'alex',court:'npc'};
  for(const [family,kind] of Object.entries(families)){
   for(let v=47;v>=25;v--){const d=state['v'+v];if(!d)continue;
    const items=[...(Array.isArray(d.arcs)?d.arcs:[]),...(Array.isArray(d.pending)?d.pending:[])];
    const last=items.filter(x=>x&&(x.kind===kind||x.arc===family)).at(-1);
    if(!last)continue;
    state.story155.arcMigration[family]={from:v,mode:last.mode||null,finished:!!last.done||Number(last.stage)>=3};
    if(!v55Data().arcs.some(x=>x.arc===family))v55Data().arcs.push({id:'merged_'+family,arc:family,mode:last.mode||'observe',stage:Math.min(3,Math.max(0,Number(last.stage)||0)),due:Math.min(7,oldDays),parent:last.parent||last.id||null});
    break;
   }
  }
 }
 const d=state.story155;d.seen||={};d.completedDays||={};d.memories||=[];return d;
}
function story155Remember(id,node){
 if(!node||!node.text||id==='explore'||id==='v88_crossroads')return;
 const d=story155Data(),key=id+'\n'+node.text;
 if(!d.memories.some(x=>x.key===key))d.memories.push({key,id,day:state.day,speaker:node.speaker,text:node.text,thought:node.thought||'',title:node.chapter||'이야기'});
}
function story155Journal(){
 const wrap=document.createElement('div'),search=document.createElement('input'),list=document.createElement('div');
 search.type='search';search.placeholder='인물 또는 사건 검색';search.setAttribute('aria-label','이야기 기록 검색');wrap.append(search,list);
 const all=[...(Array.isArray(state.v16?.memories)?state.v16.memories:[]),...Object.entries(state).filter(([k])=>/^v\d+$/.test(k)).flatMap(([,v])=>Array.isArray(v?.events)?v.events:[]),...(state.story155?.memories||[])];
 const unique=new Map();for(const e of all){if(!e||typeof e.text!=='string')continue;const text=e.text.replaceAll('황궁','왕궁').replaceAll('황실','왕실').replaceAll('아셀 사절단','방문 사절단');if(!unique.has(text))unique.set(text,{...e,text});}
 const entries=[...unique.values()].sort((a,b)=>(a.day||0)-(b.day||0));
 const paint=()=>{list.replaceChildren();for(const e of entries){if(search.value&&!((e.title||'')+' '+e.text).includes(search.value))continue;const card=document.createElement('div');card.className='journal-entry';const title=document.createElement('strong');title.textContent='DAY '+(e.day||1)+' · '+(e.title||e.speaker||'이야기').replace(/\bv\d+\s*[·:]?\s*/g,'');const body=document.createElement('p');body.textContent=e.text;card.append(title,body);list.append(card);}if(!list.childNodes.length)list.textContent='아직 해당 기록이 없습니다.';};search.oninput=paint;paint();modal('이야기 기록',wrap);
}
function story155EndDay(){
 if(v49Finished())return;
 const d=story155Data(),day=Math.min(7,Math.max(1,state.day));d.completedDays[day]=true;resetNight();v56View={section:'main',page:0};
 if(day<7){state.node='v108_day'+(day+1);state.day=day+1;}
 else{state.node='v93_temptation_open';state.v94=state.v94||{};state.v94.path=d.introPath||state.v94.path||'reason';}
 render();
}
function story155Arc(family,loc){
 const d=v55Data(),pending=d.arcs.find(x=>x.arc===family&&x.stage<3);
 if(pending)return v55Follow(family);
 // Every family now has one entry and one three-part consequence chain.
 if(d.arcs.some(x=>x.arc===family)||Object.keys(d.seen).some(k=>k.startsWith(family+'_')))return false;
 if(family==='alex'&&(state.day===5||state.day===6))return false;
 if(family==='court'&&state.day>=5)return false;
 return family==='miguel'?v55Miguel(loc):family==='alex'?v55Alex(loc):v55Court(loc);
}
function story155Move(loc){
 if(!LOCATIONS.some(x=>x.id===loc)||v49Finished())return;
 const d=story155Data(),ex=exploration();if(state.day>7){state.node='story155_resolution';render();return;}
 if(ex.turn>=7){story155EndDay();return;}
 const turn=ex.turn++;ex.location=loc;ex.visited.push(loc);state.history.push('explore');
 v18CheckMissedPromise();
 if(v18PromiseEncounter(loc,turn)){v22PromiseScene(loc);render();return;}
 const absent=state.day===5||state.day===6;
 // Non-repeating, authored side stories retain their own dependency chains.
 for(const [key,e] of Object.entries(V69_STORIES)){
  if(e.location!==loc||state.day<e.day||(absent&&['alex','council'].includes(key)))continue;
  const seen=state.v69?.seen||{},ready=key==='route'?state.v68?.seen?.court:seen[e.requires];
  if(!ready||seen[key])continue;state.v69=state.v69||{seen:{}};state.v69.seen[key]=true;state.node='v69_'+key+'_0';render();return;
 }
 for(const [key,e] of Object.entries(V68_STORIES)){
  if(e.location!==loc||state.day<e.day||(absent&&['alex','promise'].includes(key))||state.v68?.seen?.[key])continue;
  state.v68=state.v68||{seen:{}};state.v68.seen[key]=true;state.node='v68_'+key+'_0';render();return;
 }
 const miguel=v16Route(state.day)[turn],alex=absent?null:scheduleFor(ALEX_SCHEDULES,state.day)[turn];
 if(loc===miguel&&loc===alex){markMiguelMeeting();markAlexMeeting(true);sharedEncounterV15();state.node='alex_miguel';}
 else if(loc===miguel){
  markMiguelMeeting();ex.found=true;
  if(!story155Arc('miguel',loc)&&!v18OfferPromise()){
   // Greeting, confession and reconciliation are no longer reset on every meeting.
   const privatePlace=['garden','terrace'].includes(loc);
   NODES.story155_meeting={speaker:'미겔 코트리먼',chapter:'PROLOGUE · 아셀의 7일',text:privatePlace?'인적이 드문 길에서 미겔이 발걸음을 늦추었다.\n\n“다니엘, 또 만났구나. 잠시 쉬어 가렴.”\n\n나는 그녀의 걸음에 보폭을 맞췄다. 함께 걷는 시간을 더 큰 약속으로 바꾸지 않으려 애쓰면서.':'미겔은 지나가는 귀빈에게 인사를 마친 뒤 나를 향해 고개를 끄덕였다.\n\n“레온하르트 경, 편안히 지내고 계신지요.”\n\n나는 정중히 답하고 그녀의 다음 인사를 방해하지 않도록 길을 비켰다.',next:'explore'};state.node='story155_meeting';
  }
 }else if(loc===alex){markAlexMeeting();if(!story155Arc('alex',loc)&&!v54FamilyScene(loc))state.node='explore_alex';}
 else if(!story155Arc('court',loc)&&!v19PromiseFollowup(loc)&&!v21NpcFollowup(loc)&&!v21RumorEcho(loc)&&!v20ErrandEvent(loc)&&!v18SerialEvent(loc)&&!v16QuestEvent(loc)&&!questEvent(loc)&&!specialDayEvent(loc)&&!v19NpcEncounter(loc)&&!v19RumorEncounter(loc)&&!v18NpcEvent(loc,turn))ambientScene(loc);
 render();
}
function story155Explore(){
 const ex=exploration();$('choices').replaceChildren();$('nextBtn').classList.add('hidden');
 $('speaker').textContent='아셀 왕궁';$('chapter').textContent='PROLOGUE · 아셀의 7일';
 $('line').textContent='DAY '+state.day+' · '+CLOCK_LABELS[Math.min(ex.turn,7)]+'\n남은 이동 '+Math.max(0,7-ex.turn)+' / 7\n\n연회의 밤, 어디로 향하시겠습니까?';
 for(const loc of LOCATIONS)v56Item(loc.name,()=>moveTo(loc.id));
 v56Item('소문과 흔적을 살핀다',()=>{if(ex.turn<7)clueSearch();else story155EndDay();});
 v56Item('의뢰와 약속',()=>{const wrap=document.createElement('div');for(const [label,fn] of [['의뢰 수첩',v16QuestBoard],['약속과 연속 사건',v18Board],['동선 추리',inferenceV15],['소문 확인',()=>{closeModal();if(ex.turn<7)v20VerifyRumor();}],['약속 장소 정하기',v21PromiseMenu]]){const b=document.createElement('button');b.textContent=label;b.onclick=fn;wrap.append(b);}modal('의뢰와 약속',wrap);});
 v56Item('이야기 기록',story155Journal);
 v56Item(state.day===7?'마지막 무도회를 마무리한다':'오늘의 연회를 마친다',story155EndDay);
}
(function(){
 // Latest author decisions supersede obsolete introductions and endless banquet days.
 for(let day=1;day<=7;day++)NODES['v108_day'+day].next=day===1?'v92_court_whispers':'explore';
 for(const id of ['v92_alex_truth','v92_alex_silence','v92_alex_question'])NODES[id].next='explore';
 NODES.v108_day7.text='알렉스 형님은 약속대로 돌아왔다. 왕궁에서는 마지막 대무도회를 준비하고 있었다.\n\n형님과 코트리먼이 함께 입장하던 순간, 기둥의 그늘에 서 있던 내 모습을 떠올렸다. 일주일 동안 쌓인 기억을 안고, 나는 그 밤의 남은 시간을 걸었다.';
 NODES.v93_afterglow.next='v108_fireworks';
 NODES.v94_morning.day=9;NODES.v95_invitation.day=10;
 // This is a continuous sequel to the estate visit, not a second first meeting.
 NODES.v94_morning.text='코트리먼 영지를 다녀온 뒤에도 온실의 장미 향이 기억에 남았다. 연회에서 내린 선택과 영지에서 나눈 대화는 하나의 마음에 이어져 있었다.\n\n알렉스 형님이 서재로 나를 불렀다. 평소와 같은 목소리였다. 그 평범함이 오히려 두려웠다.';
 NODES.v94_alex_intro.text=NODES.v94_alex_intro.text.replace('어제는 늦게까지 있었더구나. 무도회는 즐거웠어?','코트리먼 영지는 어땠어? 미겔을 만나고 왔겠지.');
 for(const [id,n] of Object.entries(NODES))if(id.startsWith('v94_')||id.startsWith('v95_')){
  for(const key of ['text','thought'])if(n[key])n[key]=n[key].replaceAll('어젯밤','그날').replaceAll('전날 밤','연회 마지막 밤');
 }
 for(const id of ['v95_ending_truth','v95_ending_cover','v95_ending_inquiry'])NODES[id].next='story155_resolution';
 NODES.story155_resolution={speaker:'다니엘 레온하르트',chapter:'선택이 남긴 것',text:'연회도, 영지에서의 하루도 지나갔다. 그러나 내가 내린 선택과 그들이 건넨 대답은 아직 남아 있었다.\n\n다음 걸음은 내가 정해야 했다.',choices:[{text:'나의 결말을 돌아본다.',story155Ending:true},{text:'운명의 갈림길로 향한다.',next:'v88_crossroads'},{text:'이야기 기록을 읽는다.',story155Journal:true},{text:'타이틀로 돌아간다.',action:'home'}]};
 NODES.story155_meeting={speaker:'미겔 코트리먼',text:'미겔과 나눈 인사를 떠올렸다.',next:'explore'};
 // Unique diplomacy arc fits the latest seven-day royal schedule.
 Object.assign(V68_STORIES.court,{day:2});V68_STORIES.promise.day=4;
 for(const [key,day]of Object.entries({route:3,alex:4,miguel:5,council:7}))V69_STORIES[key].day=day;
 // Old entry IDs resume at the current equivalent, without replaying a second invitation.
 const aliases={decision:'v108_day1',read:'v108_day1',prepare:'v108_day1',reflect:'v108_day1',end:'v108_day1',ball_arrival:'v108_day1',ball_daniel:'v108_day1',ball_choice:'v92_court_whispers'};
 for(const [old,id]of Object.entries(aliases))NODES[old]=NODES[id];
 const root=$('choices');root.addEventListener('click',function(e){
  const b=e.target.closest('button');if(!b||!root.contains(b)||b.disabled)return;
  const choice=NODES[state.node]?.choices?.[[...root.children].filter(x=>x.tagName==='BUTTON').indexOf(b)];if(!choice)return;
  if(choice.story155Ending||choice.story155Journal){e.preventDefault();e.stopImmediatePropagation();return choice.story155Ending?v48EndingMenu():story155Journal();}
  if(choice.v55Arc){
   const key=state.node+'#'+state.day+'#'+choice.v55Mode,d=story155Data();d.awards||={};
   if(!d.awards[key]){d.awards[key]=true;const rel=v34Data();
    if(choice.v55Arc==='miguel'){if(choice.v55Mode==='confess')rel.miguel.warmth=(rel.miguel.warmth||0)+2;else rel.miguel.restraint=(rel.miguel.restraint||0)+2;}
    if(choice.v55Arc==='alex')rel.alex.trust=(rel.alex.trust||0)+2;
    if(choice.v55Arc==='court')state.stats.reputation=Math.min(100,state.stats.reputation+3);
   }
  }
  const paths={asel_reason:'reason',asel_instinct:'instinct',asel_boundary:'boundary'};
  if(paths[choice.next])story155Data().introPath=paths[choice.next];
 },true);
 const oldRender=render;
 render=function(){
  const d=story155Data();
  if(state.node==='explore'&&state.day>7)state.node='story155_resolution';
  if(state.node==='explore_timeout'){story155EndDay();return;}
  if(state.node==='v93_temptation_choice'&&d.introPath){state.v94=state.v94||{};state.v94.path=d.introPath;state.node={reason:'v93_reason',instinct:'v93_instinct',boundary:'v93_crossed_line'}[d.introPath];}
  if(String(state.node).startsWith('rose_')&&!state.v94?.path){state.v94={...(state.v94||{}),path:d.introPath||'reason'};}
  const n=NODES[state.node];
  if(n&&[5,6].includes(state.day)&&n.text)n.text=n.text.replace('알렉스와는 익숙한 눈인사를 나누었으나, 사적인 친밀함을 공적인 언사에 섞지 않았다.','알렉스가 자리를 비운 동안에도 공적인 격식은 흐트러지지 않았다.');
  if(n)story155Remember(state.node,n);
  oldRender();
 };
 // One record interface reads existing memories without replaying obsolete generators.
 const oldUnlock=v48Unlock;
 v48Unlock=function(e){if(e?.id==='court_guardian'&&state.day>=7&&state.stats.reputation>=55&&v55Data().arcs.some(a=>a.arc==='court'&&a.stage===3))return true;return oldUnlock(e);};
 journal=story155Journal;$('journalBtn').onclick=story155Journal;
})();

// All existing collection keys feed one spoiler-safe ending catalogue.
function story155Gallery(){
 const wrap=document.createElement('div'),old=new Set(v48GalleryRead().map(x=>x.id)),karma=new Set(v88Unlocked());
 const count=V48_ENDINGS.filter(e=>old.has(e.id)).length+V88_ENDINGS.filter(e=>karma.has(e.id)).length;
 const head=document.createElement('p');head.textContent='수집 '+count+' / '+(V48_ENDINGS.length+V88_ENDINGS.length);wrap.append(head);
 for(const [items,found,legacy] of [[V48_ENDINGS,old,true],[V88_ENDINGS,karma,false]])for(const e of items){
  const b=document.createElement('button'),yes=found.has(e.id);b.textContent=yes?'✦ '+(e.name||e.title):'🔒 미해금 엔딩';b.disabled=!yes;
  b.onclick=()=>{const page=document.createElement('div'),body=document.createElement('p'),back=document.createElement('button');body.style.whiteSpace='pre-wrap';body.textContent=legacy?v50EndingText(e.id):NODES['v88_ending_'+e.id]?.text||e.text;back.textContent='도감으로 돌아가기';back.onclick=story155Gallery;page.append(body,back);modal(e.name||e.title,page);};wrap.append(b);
 }
 modal('엔딩 도감',wrap);
}
gallery=story155Gallery;v48Gallery=story155Gallery;v88Gallery=story155Gallery;
if($('galleryBtn'))$('galleryBtn').onclick=story155Gallery;
