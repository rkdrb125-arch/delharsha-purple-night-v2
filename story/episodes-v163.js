'use strict';
// Four continuous episodes. Legacy absolute day remains internal for save compatibility.
const EPISODES163=[null,{title:'아셀의 7일',entry:'cinematic_moons'},{title:'노란 장미의 주인',entry:'v108_after_ball'},{title:'말의 대가',entry:'ep163_ep3_echo'},{title:'우리의 선택',entry:'ep163_ep4_miguel'}];
function episodeOf163(id){
 if(/^ep163_ep4|^ep163_final|^ep163_outcome/.test(id)||id==='story155_resolution')return 4;
 if(/^v94_|^v95_|^v96_|^ep163_ep3/.test(id))return 3;
 if(/^rose_|^ep163_ep2/.test(id)||id==='v108_after_ball')return 2;
 return 1;
}
function episodeData163(){
 if(!state.episodes163||state.episodes163.version!==163){
  const ep=episodeOf163(String(state.node||''));
  state.episodes163={version:163,current:ep,completed:[],choices:{},promises:{},feel:null,final:null,legacy:!!(state.history?.length||state.day>1)};
  for(let i=1;i<ep;i++)state.episodes163.completed.push(i);
 }
 const d=state.episodes163;d.choices||={};d.promises||={};d.completed||=[];
 return d;
}
function episodeRecord163(node,choice,index){
 const d=episodeData163(),key=node+'|'+state.day+'|'+index;
 if(!d.choices[key])d.choices[key]={node,next:choice.next||null,label:choice.text,day:state.day,episode:episodeOf163(node)};
 if(choice.ep163Feeling)d.feel=choice.ep163Feeling;
}
function episodePromise163(){
 const p=state.v18?.promise;if(!p||!Number.isInteger(p.day))return;
 const key=p.day+':'+(p.loc||'none'),d=episodeData163();
 d.promises[key]={day:p.day,loc:p.loc||null,turn:p.turn??null,status:p.status||'unknown'};
}
function episodeEvidence163(){
 const d=episodeData163(),values=Object.values(d.choices),has=id=>values.some(x=>x.next===id)||state.history?.includes(id);
 return {path:state.v94?.path||null,response:state.v94?.response||null,canal:state.roseSpecial01?.canal||null,visit:state.roseSpecial01?.visit||null,
  rumor:state.v95?.rumor||null,brother:state.v95?.brother||null,
  kept:Object.values(d.promises).some(p=>p.status==='met'),missed:Object.values(d.promises).some(p=>p.status==='missed'),
  accountable:has('v94_boundary_account'),excused:has('v94_boundary_excuse')};
}
function episodeFinalOptions163(){
 const f=episodeEvidence163(),list=[];
 list.push({text:'지금의 거리를 받아들이고 내 삶으로 돌아간다.',ep163End:'independent'});
 if(['reason','instinct'].includes(f.path)&&f.canal!=='hide'&&f.rumor!=='cover')list.push({text:'미겔이 정한 거리를 지키며 인연을 이어 간다.',ep163End:'miguel_respect'});
 if(f.path==='instinct'&&f.response==='accept'&&f.canal!=='hide'&&f.rumor!=='cover')list.push({text:'대답을 재촉하지 않겠다는 말을 끝까지 지킨다.',ep163End:'miguel_confession'});
 if(f.brother==='together'&&f.rumor!=='cover'&&f.canal!=='hide'&&!f.excused)list.push({text:'형님께 먼저 다가가 남은 이야기를 나눈다.',ep163End:'alex_reconcile'});
 if(f.brother==='alone'&&(f.rumor==='cover'||f.canal==='hide'||f.excused))list.push({text:'오늘은 형님과의 대화를 끝내고 물러난다.',ep163End:'alex_fracture'});
 if(f.path==='reason'&&f.kept&&f.canal==='evidence'&&f.rumor!=='cover')list.push({text:'말하지 않은 마음은 간직하되 두 사람의 약속을 지킨다.',ep163End:'secret'});
 if(f.canal==='evidence'&&f.rumor==='truth'&&state.v95?.miguel==='voice')list.push({text:'확인한 사실을 기록하고 왕궁에 남은 일을 마무리한다.',ep163End:'court_guardian'});
 for(const e of V88_ENDINGS)if(v88Can(e.id))list.push({text:'지나온 선택의 결말을 마주한다 · '+e.title,ep163KarmaEnd:e.id});
 list.push({text:'미겔에게 보내려던 인사를 접고 마음을 정리한다.',ep163End:'miguel_separation'});
 return list;
}
function episodeJournal163(){
 episodePromise163();const d=episodeData163(),wrap=document.createElement('div');
 const line=text=>{const p=document.createElement('p');p.textContent=text;wrap.append(p);};
 line('내가 한 선택과 실제로 확인한 약속만 기록합니다.');
 const labels={met:'이행',missed:'불참',accepted:'예정',declined:'사양'};
 for(const p of Object.values(d.promises))line('EP.1 · DAY '+p.day+' · '+(LOCATIONS.find(x=>x.id===p.loc)?.name||'약속')+' · '+(labels[p.status]||'확인되지 않음'));
 for(const c of Object.values(d.choices))line('EP.'+c.episode+' · '+c.label);
 if(!Object.keys(d.choices).length)line('이전 저장에서 확인되지 않은 선택은 새로 만들어 기록하지 않습니다.');
 modal('선택과 약속',wrap);
}
function episodeMenu163(){
 const d=episodeData163(),wrap=document.createElement('div');
 for(let i=1;i<=4;i++){
  const p=document.createElement('p');p.textContent='EP.'+i+' · '+EPISODES163[i].title+' — '+(d.completed.includes(i)?'완료':i===d.current?'진행 중':'미진행');wrap.append(p);
 }
 const b=document.createElement('button');b.textContent='선택과 약속 기록';b.onclick=episodeJournal163;wrap.append(b);
 const g=document.createElement('button');g.textContent='도달한 결말 회상';g.onclick=story155Gallery;wrap.append(g);
 modal('에피소드',wrap);
}
(function(){
 const add=(id,text,choices,next,speakers=[])=>{NODES[id]={speaker:'다니엘 레온하르트',chapter:'',text,...(choices?{choices}:{next})};SPEAKERS159[id]=speakers;};
 // The opening contains a feeling, not an irrevocable action or a moral reward.
 NODES.asel_entrance_choice.choices=[
 {text:'표정을 가다듬으며 마음을 숨긴다.',next:'ep163_feeling_hidden',ep163Feeling:'hidden'},
 {text:'그녀가 나를 알아봐 주기를 바란다.',next:'ep163_feeling_open',ep163Feeling:'open'},
 {text:'밀려드는 질투를 외면하지 않는다.',next:'ep163_feeling_jealous',ep163Feeling:'jealous'}];
 NODES.asel_entrance_choice.chapter='EP.1 · 마지막 밤의 기억';
 add('ep163_feeling_hidden','나는 잔의 차가운 표면을 손끝으로 눌렀다. 얼굴에 무엇이 드러났을까.\n그 밤을 떠올리면, 먼저 일곱 날의 기억이 되살아난다.',null,'v108_title');
 add('ep163_feeling_open','그녀의 시선이 이쪽을 향하기를 바랐다. 바라기만 했는지, 무엇인가 말했는지.\n기억은 왕궁에 도착했던 첫날로 돌아갔다.',null,'v108_title');
 add('ep163_feeling_jealous','웃음소리를 듣는 동안 잔을 쥔 손에 힘이 들어갔다. 내 안의 감정에는 이름을 붙일 수 있었다.\n그 감정으로 무엇을 했는지는, 일곱 날의 끝에 남아 있었다.',null,'v108_title');
 NODES.v108_fireworks.next='ep163_ep1_end';
 add('ep163_ep1_end','아셀의 일곱 밤이 끝났다. 나는 돌아갈 채비를 하며 그곳에서 한 말과 하지 못한 말을 떠올렸다.\n다음 장소로 간다고, 남겨 둔 약속까지 사라지는 것은 아니었다.',[
 {text:'EP.2 · 노란 장미의 주인으로',next:'v108_after_ball'}, {text:'선택과 약속을 돌아본다.',ep163Journal:true}, {text:'저장한다.',ep163Save:true}]);
 for(const id of ['v96_library_refuse','v96_library_report','v96_library_hide'])NODES[id].next='ep163_ep3_end';
 NODES.rose_end.choices=[{text:'영지에서 들은 답을 안고 돌아간다.',next:'ep163_ep2_end'}];
 add('ep163_ep2_end','온실 문이 닫혔다. 나는 영지에서 본 것과 내가 처리한 일을 따로 떠올렸다.\n형님께 어떤 말을 전할지, 돌아가는 길에 생각해야 했다.',[
 {text:'EP.3 · 말의 대가로',next:'ep163_ep3_echo'}, {text:'선택과 약속을 돌아본다.',ep163Journal:true}, {text:'저장한다.',ep163Save:true}]);
 add('ep163_ep3_echo','',null,'v94_morning');
 for(const id of ['v95_ending_truth','v95_ending_cover','v95_ending_inquiry'])NODES[id].next='ep163_ep3_end';
 add('ep163_ep3_end','회의가 끝난 뒤에도 내가 한 말은 남았다. 이제는 같은 이야기를 반복하는 대신, 그 말대로 살아갈 차례였다.',[
 {text:'EP.4 · 우리의 선택으로',next:'ep163_ep4_miguel'}, {text:'선택과 약속을 돌아본다.',ep163Journal:true}, {text:'저장한다.',ep163Save:true}]);
 add('ep163_ep4_miguel','',null,'ep163_ep4_alex');
 add('ep163_ep4_alex','',null,'ep163_final_choice');
 add('ep163_final_choice','두 사람에게 들은 말을 되짚었다. 내가 기대한 답과 그들이 건넨 답은 같지 않을 수 있었다.\n그래도 다음 행동만큼은 내가 정해야 했다.',[]);
 // Old crossroads saves resume here without gaining statistics or re-awarding collections.
 NODES.story155_resolution.next='ep163_ep4_miguel';delete NODES.story155_resolution.choices;
 const originalUnlock=v48Unlock;
 v48Unlock=function(e){if(state.episodes163)return !!episodeData163().final&&episodeData163().final===e?.id;return originalUnlock(e);};
 v48EndingMenu=episodeMenu163;
 v88Open=episodeMenu163;
 v88Crossroads=function(){NODES.v88_crossroads.text='지나온 이야기와 이미 도달한 결말을 돌아본다.';NODES.v88_crossroads.choices=[{text:'도달한 결말 회상',ep163Gallery:true},{text:'에피소드와 기록',ep163Menu:true},{text:'이야기로 돌아간다.',next:episodeData163().returnNode||(state.day<=7?'explore':'ep163_ep4_miguel')}];};
 // Capture at window before legacy document/root moral and reward handlers.
 window.addEventListener('click',e=>{
  const b=e.target.closest?.('#choices button');if(!b||b.disabled)return;
  const node=state.node,c=NODES[node]?.choices?.[Array.from(document.querySelectorAll('#choices button')).indexOf(b)];if(!c)return;
  if(c.v88Action!==undefined||c.v88Ending){e.preventDefault();e.stopImmediatePropagation();episodeMenu163();return;}
  if(c.ep163Save||c.ep163Journal||c.ep163Menu||c.ep163Gallery||c.ep163End||c.ep163KarmaEnd){
   e.preventDefault();e.stopImmediatePropagation();
   if(c.ep163Save){save();return;}if(c.ep163Journal){episodeJournal163();return;}if(c.ep163Menu){episodeMenu163();return;}if(c.ep163Gallery){story155Gallery();return;}
   if(c.ep163KarmaEnd){if(state.node!=='ep163_final_choice'||!episodeFinalOptions163().some(x=>x.ep163KarmaEnd===c.ep163KarmaEnd)||episodeData163().final)return;const d=episodeData163();d.final='karma:'+c.ep163KarmaEnd;d.completed.push(4);state.node='v88_ending_'+c.ep163KarmaEnd;render();save();return;}
   if(c.ep163End){if(state.node!=='ep163_final_choice'||!episodeFinalOptions163().some(x=>x.ep163End===c.ep163End)||v49Finished())return;episodeRecord163(node,c,0);const d=episodeData163();d.final=c.ep163End;if(!d.completed.includes(4))d.completed.push(4);v48Finish(c.ep163End);return;}
  }
  if(c.ep163Feeling){e.preventDefault();e.stopImmediatePropagation();episodeRecord163(node,c,0);state.history.push(node);state.node=c.next;render();return;}
 },true);
 const oldEndDay=story155EndDay;
 story155EndDay=function(){const p=state.v18?.promise;if(p?.status==='accepted'&&p.day<=state.day)p.status='missed';episodePromise163();oldEndDay();};
 const oldExplore=story155Explore;
 story155Explore=function(){oldExplore();const p=state.v18?.promise;if(p?.status==='accepted'&&p.day===state.day){const name=LOCATIONS.find(x=>x.id===p.loc)?.name||p.loc;$('line').textContent+='\n약속: '+name+' · '+(CLOCK_LABELS[p.turn]||'정해진 시간')+' (이동 '+(p.turn+1)+'번째)';}v56Item('선택과 약속 기록',episodeJournal163);};
 const oldRender=render;
 render=function(){
  const d=episodeData163();episodePromise163();
  if(state.node==='story155_resolution')state.node='ep163_ep4_miguel';
  if(d.final?.startsWith('karma:'))state.node='v88_ending_'+d.final.slice(6);
  const id=String(state.node||'');
  if(!id.startsWith('v88_')){d.current=episodeOf163(id);d.returnNode=id;}
  const completed={ep163_ep1_end:1,ep163_ep2_end:2,ep163_ep3_end:3};if(completed[id]&&!d.completed.includes(completed[id]))d.completed.push(completed[id]);
  const f=episodeEvidence163();
  if(id==='ep163_ep3_echo')NODES[id].text=(f.canal==='hide'?'외투 안쪽에 감춰 두었던 쇠쐐기가 떠올랐다. 형님께 영지 이야기를 하려면, 내가 숨긴 일부터 마주해야 했다.':f.canal==='accuse'?'수로 앞에서 서둘러 의심을 말했던 순간이 떠올랐다. 내가 본 것과 내가 단정한 것을 구별해 말씀드려야 했다.':f.canal==='evidence'?'수로에서 발견한 것을 미겔에게 보여 드렸다. 아직 밝혀지지 않은 원인까지 아는 것처럼 말하지는 않기로 했다.':'영지에서 들은 말들을 정리했다. 기억나지 않는 선택까지 그럴듯하게 꾸며 말할 수는 없었다.')+'\n\n'+(f.kept?'아셀에서 지켰던 약속도 떠올랐다. 말보다 먼저 도착했던 그날의 나를 기억했다.':f.missed?'아셀에서 놓친 약속이 마음에 걸렸다. 이번 대화마저 미루고 싶지는 않았다.':'나는 형님을 찾아갈 준비를 했다.');
  if(id==='ep163_ep4_miguel'){
   const speech=f.path==='boundary'?'내가 부탁한 거리는 지금도 필요하단다. 오늘의 일이 그 부탁을 없애지는 않아.':f.path==='instinct'?'네가 전한 마음은 기억한단다. 하지만 알렉과의 약속에 관한 내 답은 달라지지 않았어.':'네가 하지 않은 말을 내가 대신 정하고 싶지는 않구나. 앞으로도 서로의 뜻을 물으며 지냈으면 해.';
   NODES[id].text='미겔은 먼저 자신의 뜻을 말했다.\n“'+speech+'”\n\n'+(f.rumor==='cover'?'회의에서 내가 덮어 두려 했던 말이 떠올랐다. 이번에는 그녀가 말한 그대로 받아들여야 했다.':'나는 그녀의 말을 중간에 끊지 않았다.');SPEAKERS159[id]=['미겔 코트리먼'];
  }
  if(id==='ep163_ep4_alex'){
   const speech=f.brother==='together'&&f.rumor!=='cover'&&f.canal!=='hide'&&!f.excused?'함께 확인하겠다고 했지. 아직 남은 이야기도 끝까지 들어 보자.':'내가 모르는 일까지 괜찮다고 말할 수는 없어. 네가 말할 준비가 되었을 때, 사실부터 이야기하자.';
   NODES[id].text='형님은 잠시 서류를 내려놓았다.\n“'+speech+'”\n나는 그 말을 화해의 약속으로 앞질러 해석하지 않았다.';SPEAKERS159[id]=['알렉스 레온하르트'];
  }
  if(id==='ep163_final_choice')NODES[id].choices=episodeFinalOptions163();
  if(d.final?.startsWith('karma:'))NODES[id].choices=[{text:'도달한 결말 회상',ep163Gallery:true},{text:'타이틀로 돌아가기',action:'home'}];
  oldRender();
  const rendered=state.node;for(const [i,b] of Array.from(document.querySelectorAll('#choices button')).entries()){const c=NODES[rendered]?.choices?.[i],fn=b.onclick;if(c&&fn)b.onclick=function(e){episodeRecord163(rendered,c,i);return fn.call(this,e);};}
  const current=String(state.node).startsWith('v88_')?d.current:episodeOf163(String(state.node||''));d.current=current;
  if(v49Finished()||d.final?.startsWith('karma:')){$('chapter').textContent='에필로그';$('day').textContent='EP.4 이후';return;}
  $('chapter').textContent='EP.'+current+' · '+EPISODES163[current].title;
  $('day').textContent=current===1?'DAY '+Math.min(7,state.day):current===2?'코트리먼 영지':current===3?'영지 방문 이후':'마지막 선택';
 };
 const b=document.createElement('button');b.type='button';b.textContent='에피소드';b.onclick=episodeMenu163;document.querySelector('#home .menu')?.append(b);
 const h=document.createElement('button');h.type='button';h.textContent='에피소드';h.onclick=episodeMenu163;document.querySelector('.hud')?.append(h);
})();
