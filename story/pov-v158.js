/* Edited first-person prose; quoted dialogue and the official letter are retained. */
const POV158={
  "v108_title": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_rose_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_rose_3": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_alex_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_alex_3": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_court_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_court_3": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_promise_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v68_promise_3": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_route_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_route_3": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_alex_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_alex_4": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_miguel_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_miguel_4": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_council_0": {
    "speaker": "다니엘 레온하르트"
  },
  "v69_council_4": {
    "speaker": "다니엘 레온하르트"
  },
  "v94_alex_intro": {
    "text": "서재 창문에는 아침빛이 길게 걸려 있었다. 알렉스는 서류를 덮고 나를 맞았다.\n“코트리먼 영지는 어땠어? 미겔을 만나고 왔겠지.”\n익숙한 미소였다. 나는 그 미소가 조금도 가볍지 않다는 것을 알았다."
  },
  "v94_boundary_account": {
    "text": "“말이 아니라 행동으로 보여 줘.” 알렉스는 단호하게 말했다. “미겔에게 용서를 재촉하지 마. 그 사람에게는 네 사과를 받아들이지 않을 자유도 있어.”\n나는 고개를 숙였다. 책임을 받아들인다고 해서 그날이 사라지는 것은 아니었다."
  },
  "v94_miguel_intro": {
    "text": "며칠 뒤, 코트리먼가의 노란 장미가 장식된 응접실에서 미겔을 다시 만났다. 그녀는 나를 마주 보고 앉았지만, 연회 마지막 밤과 같은 거리를 허락하지는 않았다.\n“다니엘, 우리 이야기를 조금 해도 되겠니?”\n그녀의 목소리는 부드러웠으나 대답은 분명할 것 같았다."
  },
  "v94_miguel_respect": {
    "text": "“그날 네가 내 뜻을 존중해 줘서 고마웠어.” 미겔이 말했다.\n“네 마음을 모르고 한 말은 아니란다. 다만 나는 알렉과의 약속을 소중히 여기고 있어. 그 점은 알아 주렴.”\n나는 조금 아팠지만, 그녀가 내게 솔직하다는 사실을 알았다."
  },
  "v94_epilogue": {
    "text": "나는 복도를 걸으며 창밖을 보았다. 장미는 여전히 피어 있었고, 누구도 그날을 되돌릴 수 없었다.\n앞으로의 삶에는 또 다른 선택이 기다리고 있었다. 선행은 선행대로, 잘못은 잘못대로 남는다. 나는 그 무게를 지고 다음 날로 걸어갔다."
  },
  "v95_invitation": {
    "text": "왕궁에서 온 봉투에는 레온하르트가의 사자 문장과 왕실의 인장이 나란히 찍혀 있었다.\n“왕실 자선 기금의 운영과 코트리먼가의 토지 기부에 관하여, 관계자 전원의 출석을 명한다.”\n겉보기에는 자선 사업에 관한 회의였다. 그러나 봉투 안쪽에는 다른 문장이 적혀 있었다.\n“귀족 가문 간 약혼을 둘러싼 불미스러운 풍문에 대해서도 사실관계를 확인한다.”\n나는 봉투를 접었다. 그날의 선택이 이제 세 사람만의 일이 아니게 되었다."
  }
};
for(const [id,edit] of Object.entries(POV158))if(NODES[id])Object.assign(NODES[id],edit);
function pov158Text(text){
 if(typeof text!=='string')return text;
 return text.split(/(“[^”]*”|「[^」]*」)/gs).map((s,i)=>i%2?s:s.replace(/다니엘 레온하르트는/g,'나는').replace(/다니엘 레온하르트가/g,'내가').replace(/다니엘 자신이/g,'나 자신이').replace(/다니엘에게/g,'내게').replace(/다니엘의/g,'내').replace(/다니엘은/g,'나는').replace(/다니엘이/g,'내가').replace(/다니엘을/g,'나를').replace(/다니엘과/g,'나와').replace(/다니엘도/g,'나도')).join('');
}
// Dynamic encounter text is edited before the existing renderer and recorder run.
const pov158Render=render;
render=function(){const n=NODES[state.node];if(n&&state.node!=='invitation'){
 if(['서술','SYSTEM'].includes(n.speaker))n.speaker='다니엘 레온하르트';
 n.text=pov158Text(n.text);
 }return pov158Render();};
for(const e of V88_ENDINGS){const n=NODES['v88_ending_'+e.id];if(n)e.text=n.text;}
for(const e of V48_ENDINGS)e.text=pov158Text(e.text);
for(const [id,value]of Object.entries(V49_EPILOGUES))V49_EPILOGUES[id]=pov158Text(value);
for(const scenes of Object.values(V50_SCENES))for(let i=0;i<scenes.length;i++)scenes[i]=pov158Text(scenes[i]);
for(const e of V48_ENDINGS){
 const fixes={miguel_respect:[['그가 지킨','내가 지킨']],miguel_separation:[['자신의 선택','내 선택']],alex_reconcile:[['동생에게','내게'],['자신의 말','내 말']],court_guardian:[['그의 이름','내 이름'],['그가 지킨','내가 지킨']],independent:[['그에게','내게'],['그의 이야기','내 이야기']]};
 for(const [a,b]of fixes[e.id]||[])e.text=e.text.replaceAll(a,b);
}
for(const id of ['miguel_confession','miguel_separation','alex_fracture','independent'])V49_EPILOGUES[id]=V49_EPILOGUES[id].replaceAll('그는','나는').replaceAll('자신이','내가').replaceAll('자신의','내').replaceAll('자기 삶','내 삶');
V50_SCENES.miguel_respect=V50_SCENES.miguel_respect.map(s=>s.replaceAll('자신의 마음','내 마음'));
V50_SCENES.independent=V50_SCENES.independent.map(s=>s.replaceAll('그의 다음','내 다음'));
