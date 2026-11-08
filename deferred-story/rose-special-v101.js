'use strict';
// v108 MAIN STORY ACT 01: self-contained nodes, original save key and story untouched.
(function(){
NODES["rose_intro"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "ACT 01 · 초대받지 않은 손님\n\n코트리먼가의 광활한 정원에는 노란 장미가 바람을 따라 흔들렸다. 흰 벽과 초록빛 창틀 너머로 수로를 향하는 인부들의 발소리가 들렸다.\n\n“아가씨께서는 서쪽 수로가 무너져 복구를 지휘하고 계십니다.” 집사가 고개를 숙였다.\n\n나는 예정된 다과회보다 영지의 일을 먼저 택한 그녀를 떠올렸다. 놀랍지는 않았다. 다만 내가 도착했다는 사실이 그녀의 하루를 조금쯤 바꿔 놓기를 바랐던 모양이었다.\n\n그녀는 형님의 약혼녀였고, 나는 그저 형님의 동생이었다. 지금 내가 선택할 수 있는 것은 기다리는 방법뿐이었다.", "choices": [{"text": "응접실에서 기다린다.", "next": "rose_wait"}, {"text": "수로 현장으로 간다.", "next": "rose_help"}, {"text": "집사에게 즉시 면담을 요청한다.", "next": "rose_demand"}]};
NODES["rose_wait"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“알겠습니다. 응접실에서 기다리겠습니다. 일이 끝나면 전해 주십시오.”\n\n코트리먼가의 응접실은 금박 대신 흰 벽과 초록 화분으로 장식되어 있었다. 나는 식어 가는 차를 마시며 창밖의 소란에 귀를 기울였다.\n\n그녀에게는 그녀의 하루가 있다. 내 방문만으로 그것을 내려놓을 이유는 없었다. 꽃병을 돌리다 장미 가시가 손끝을 스쳤다. 아름다운 것을 가까이 두고 싶은 마음과 함부로 만져도 된다는 생각은 전혀 달랐다.", "next": "rose_meet"};
NODES["rose_help"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“수로까지 안내해 주시겠습니까? 도움이 될 일이 있다면 돕겠습니다.”\n\n작업 책임자에게 무엇이 필요한지 묻고, 젖은 목재를 옮겼다. 생각보다 무거웠고 진흙은 구두를 붙잡았다.\n\n“다니엘 공자님?” 미겔이 장부를 들고 돌아보았다. “책임자께 필요한 일을 확인하셨나요?”\n\n“예. 알려 주신 대로 하고 있습니다.”\n\n“그렇다면 감사드립니다. 다만 무리하지는 마세요.”\n\n그녀는 내 행동을 과장해 칭찬하지 않고 다시 현장을 지휘했다. 나는 그 사실이 오히려 좋았다.", "next": "rose_meet"};
NODES["rose_demand"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“제가 도착했다는 사실은 전해졌습니까? 그렇다면 지금 만나야 한다고 전해 주십시오.”\n\n집사의 얼굴이 굳었다. “수로의 복구가 시급하여…….”\n\n“지금 전해 달라는 뜻입니다.”\n\n잠시 뒤 진흙이 묻은 옷차림으로 미겔이 나타났다. “기다리게 해 드려 죄송합니다. 하지만 현장에 아직 급한 일이 남아 있습니다. 다과회는 시간을 다시 정해도 괜찮을까요?”\n\n그녀는 내 무례를 비난하지도, 당연하게 받아들이지도 않았다. “제가 책임져야 할 사람들이 기다리고 있습니다.”\n\n“……알겠습니다.” 그녀가 떠난 뒤 나는 다시 응접실에서 기다렸다.", "next": "rose_meet"};
NODES["rose_meet"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "ACT 02 · 노란 장미의 주인\n\n노을이 코트리먼가의 노란 장미 위로 길게 번졌다. 미겔의 승마 예복 소매에는 아직 젖은 흙이 묻어 있었다. 장갑을 벗는 손끝에는 숨기지 못한 피로가 배어 있었다.\n\n“오래 기다리셨지요, 다니엘 공자님.”\n\n나는 그녀를 바라보았다. 이곳에 와서 알게 된 것은 장미의 아름다움보다 그 아름다움을 지키는 사람들의 무게였다.", "next": "rose_meet_route"};
NODES["rose_meet_a"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“괜찮습니다. 생각보다 구경할 게 많더군요.”\n\n그녀는 내 손에 들린 책을 보고 웃었다. “아버지께서 아끼시는 책이에요. 마음에 드셨나요?”\n\n“기다리는 동안 읽기에는 충분했습니다.” 그녀는 내 기다림에 감사하면서도 그것을 특별한 희생으로 받아들이지는 않았다.", "next": "rose_tour"};
NODES["rose_meet_b"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“손은 괜찮으세요, 공자님?” 미겔이 붉어진 내 손가락을 살폈다.\n\n“이 정도는 괜찮습니다. 코트리먼은 늘 이런 일을 하시잖습니까.”\n\n“저 혼자 하는 일은 아니에요. 오늘도 여러 사람이 힘을 보태 주었지요. 공자님도 그중 한 분이셨고요.”\n\n그 말에는 진심 어린 감사가 있었다. 그녀는 다른 이들의 수고도 잊지 않았다.", "next": "rose_tour"};
NODES["rose_meet_c"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“급한 부분은 마무리했습니다.” 미겔은 예의를 갖추되 신중하게 말했다. “다만 다음에는 제 일정을 조금 더 이해해 주셨으면 합니다.”\n\n“……알겠습니다.”\n\n그녀는 고개를 끄덕였다. 한 번의 대답으로 사라지지 않는 거리가 우리 사이에 남았다.", "next": "rose_tour"};
NODES["rose_tour"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "우리는 나란히 화원으로 걸었다. 미겔은 일하는 사람들의 이름을 기억하고, 각자의 안부를 물었다.\n\n“형님께서 그러시더군요. 코트리먼은 장미보다 흙을 먼저 보는 사람이라고요.”\n\n그녀가 웃었다. “알렉스 님께서 그런 말씀을 하셨어요?”\n\n그 웃음은 내게 건넨 칭찬 때문이 아니었다. 형님의 이름 하나가 그녀에게 가져다준 온기였다. 두 사람 사이에는 내가 알지 못하는 시간이 있었다.\n\n“꽃은 누구나 좋아할 수 있지요. 하지만 꽃이 피기까지 필요한 일들은 눈에 띄지 않아요.” 미겔이 장미 줄기를 조심스레 받쳤다. “수로를 관리하는 사람도, 병든 뿌리를 골라내는 사람도요. 그 수고를 외면하면 결국 영지가 무너지겠지요.”\n\n“그런 일까지 코트리먼께서 전부 알아야 합니까? 관리인들에게 맡기셔도 될 텐데요.”\n\n“맡긴다는 것과 모른 척한다는 것은 다르니까요. 제 이름으로 누리는 만큼 책임도 져야 한다고 생각합니다. 알렉스 님도 그렇지 않으신가요?”\n\n나는 대답하지 못했다. 형님과 그녀가 서로를 이해하는 이유를 조금은 알 것 같았다.", "next": "rose_tour_thought"};
NODES["rose_thought_low"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "그녀의 작은 어깨는 얼마나 많은 것을 지켜 온 걸까. 더 알고 싶었다. 하지만 형님이 이미 알고 있는 것들을 내가 궁금해한다는 사실이 아팠다.\n\n나는 형님의 동생이다. 이런 마음을 품어도 되는 걸까.", "next": "rose_canal"};
NODES["rose_thought_mid"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "그녀의 의지는 눈부셨다. 그런데 어째서 나는 그 단단한 사람이 단 한 번쯤 내게 기대 주기를 바라는 걸까. 형님이 아닌 내 이름을 먼저 불러 준다면, 나는 과연 거기서 만족할 수 있을까.", "next": "rose_canal"};
NODES["rose_thought_high"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "그녀는 누구를 믿고 누구에게 웃어 줄지 스스로 결정했다. 그 선택 속에 내 자리가 없다는 사실을 받아들이고 싶지 않았다.\n\n그녀가 단 한 번이라도 내 뜻을 거절할 수 없다면. 나는 아무 일도 없다는 듯 미소 지었다.", "next": "rose_canal"};
NODES["rose_canal"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "ACT 03 · 무너진 수로\n\n무너진 제방에는 인부들이 젖은 돌과 목재를 옮기고 있었다. 나이 든 농부가 모자를 움켜쥐었다. “아가씨, 이번 수확이 망가지면 올겨울을 넘기기 어렵습니다.”\n\n미겔은 장부를 펼쳤다. “피해 농가가 세 곳이지요. 복구 인력과 종자, 당장 필요한 식량은 저택에서 지원하겠습니다. 임차인에게 청구하지 말고 우선 가문에서 부담하세요.”\n\n관리인이 수익 감소를 걱정하자 그녀는 다른 공사의 우선순위를 조정하라고 지시했다. 위로보다 실질적인 대책이었다.\n\n그때 돌무더기 사이에서 쇠쐐기 하나가 눈에 들어왔다. 녹슨 표면 한쪽에 마찰 흔적이 있었다. 붕괴 과정에서 끼어든 물건일 수도, 누군가 사용한 도구일 수도 있었다.\n\n어떻게 해야 할까?", "choices": [{"text": "코트리먼께 쇠쐐기를 보여드린다.", "next": "rose_evidence"}, {"text": "사람들 앞에서 단정적으로 말한다.", "next": "rose_accuse"}, {"text": "쇠쐐기를 가져간다.", "next": "rose_hide"}]};
NODES["rose_evidence"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“코트리먼, 잠시 저쪽을 봐주시겠습니까? 돌 사이에 쇠쐐기가 있습니다. 복구 자재인지 확인해야 할 듯합니다.”\n\n미겔은 가까이 다가가 살폈다. “저 위치에 있을 이유가 있는지부터 알아봐야겠군요.”\n\n그녀는 작업 책임자에게 현장을 보존하고 사용 자재를 확인하라고 지시했다. “감사합니다, 공자님. 다만 누가 왜 사용했는지는 아직 알 수 없어요.”\n\n“동의합니다. 필요하시면 조사에 협조하겠습니다.”\n\n“그렇게 해주신다면 든든하겠네요.” 나는 기뻤지만, 그 말이 특별한 애정의 약속이 아님을 알았다.", "next": "rose_glass"};
NODES["rose_accuse"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“이 쇠쐐기를 보십시오! 누군가 제방을 훼손한 것이 아닙니까?”\n\n농부들이 술렁였다. 누군가는 외부인을, 다른 누군가는 보수 인부들을 의심했다.\n\n“모두 잠시 조용히 해주세요.” 미겔이 말했다. “공자님, 의심과 증명은 다릅니다. 아직 확인되지 않은 의혹으로 사람들을 서로 의심하게 해서는 안 됩니다.”\n\n그녀는 단서의 보존을 지시하고 사람들을 진정시켰다. 나는 입술을 깨물었다. 내가 발견한 것이 중요한 것과 그것을 현명하게 말한 것은 별개였다.", "next": "rose_glass"};
NODES["rose_hide"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "사람들의 관심이 다른 곳으로 쏠린 사이 쇠쐐기를 뽑아 손수건에 감쌌다. 녹과 진흙이 손바닥에 묻었다.\n\n그것이 무엇을 뜻하는지는 아직 알 수 없었다. 하지만 내가 그것을 가지고 있다는 사실은 누구도 몰랐다.\n\n“다니엘 공자님, 괜찮으세요?” 미겔이 물었다.\n\n“……괜찮습니다.”\n\n나는 외투 안쪽의 무게를 느끼며 그녀를 따라 걸었다. 중요한 사실을 숨기고 있다는 감각은 점점 무거워졌다.", "next": "rose_glass"};
NODES["rose_glass"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "ACT 04 · 서쪽 온실의 비밀\n\n밤이 내려앉자 정확히 세 개의 달이 유리 지붕 위로 떠올랐다. 온실 안에는 싹이 튼 토분과 시든 장미들이 나란히 놓여 있었다.\n\n“이곳은 관리가 제대로 되지 않은 모양이군요.”\n\n“일부러 남겨 둔 거예요. 실패한 이유를 알아야 다음에는 살릴 수 있으니까요.” 미겔이 마른 잎을 들었다. “그렇다고 모든 꽃을 살릴 수는 없지만요.”\n\n“코트리먼께서 바라시는 대로 되지 않는 일도 있습니까?”\n\n“물론이지요. 저는 신이 아니니까요. 제가 책임질 수 있는 일에는 끝까지 책임지고 싶지만, 다른 사람의 마음까지 제 뜻대로 만들 수는 없어요.”\n\n그녀는 나를 바라보았다. “그 사람의 마음을 존중하지 않으면서 소중히 여긴다고 말할 수는 없겠지요.”\n\n그 말은 내게 질문처럼 남았다.", "next": "rose_glass_thought"};
NODES["rose_glass_low"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "그녀의 말이 옳았다. 누군가를 좋아한다는 이유로 대답을 요구할 수는 없었다. 알고 있으면서도 마음이 아팠다.", "next": "rose_path"};
NODES["rose_glass_mid"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "다른 사람의 마음은 뜻대로 할 수 없다. 알고 있습니다, 코트리먼. 그런데 어째서 형님께는 웃어 주면서 내게는 선을 이야기하는 것이 불공평하게 느껴지는 걸까.", "next": "rose_path"};
NODES["rose_glass_high"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "다른 사람의 마음은 뜻대로 할 수 없다. 정말 그럴까. 돈과 권력으로 움직일 수 있는 것은 너무나 많았다. 그녀의 마음만은 끝내 예외로 남아야 하는 걸까.", "next": "rose_path"};
NODES["rose_reason"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“코트리먼께서 하시는 일을 좀 더 알고 싶습니다. 오늘 제가 얼마나 적은 것만 보고 판단했는지 알게 되었습니다.”\n\n그녀의 표정이 부드러워졌다. “그렇게 말씀해 주시니 기쁘네요. 다만 오늘은 늦었으니 내일 다시 이야기해도 괜찮을까요?”\n\n“물론입니다. 제가 너무 오래 붙잡고 있었군요.”\n\n“그런 뜻은 아니었어요.” 그녀가 웃었다. 나는 그녀가 내게 보여 준 것이 존중임을 알았다. 그것만으로도 마음이 따뜻해졌다.", "next": "rose_end"};
NODES["rose_instinct"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“저는 가끔…… 코트리먼께서 형님의 약혼녀라는 사실을 잊고 싶어집니다.”\n\n그녀의 손길이 멈췄다. “그 사실은 잊으시면 안 됩니다, 다니엘 공자님.”\n\n“알고 있습니다. 그런데도 마음이 뜻대로 되지 않는군요.”\n\n“마음이 뜻대로 되지 않을 수는 있어요. 하지만 행동은 스스로 선택하실 수 있겠지요. 저는 알렉스 님과 약혼했고, 그것은 제 선택입니다.”\n\n“……형님이기 때문입니까?”\n\n“누군가가 공자님보다 나아서가 아니에요. 제 삶의 선택을 다른 사람과의 경쟁으로 만들지 말아 주세요.”\n\n“……실례했습니다.” 그녀는 더 이상 이 이야기를 이어 가지 않았다.", "next": "rose_end"};
NODES["rose_boundary"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "“지난번 일은 사과드리고 싶습니다. 제가 경솔했습니다.”\n\n미겔은 잠시 침묵했다. “사과는 듣겠습니다, 공자님. 하지만 제가 다시 편안하게 대하기까지는 시간이 필요할 것 같아요. 그 시간을 존중해 주세요.”\n\n“……알겠습니다.”\n\n사과했다고 그녀가 용서해야 할 의무가 생기는 것은 아니었다. 나는 그 사실을 받아들여야 했다.", "next": "rose_boundary_extra"};
NODES["rose_boundary_hidden"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "외투 안쪽에서 쇠쐐기의 무게가 느껴졌다. 경솔했다고 사과하면서도 나는 지금 그녀에게 중요한 사실을 숨기고 있었다. 그 모순을 알면서도 끝내 꺼내지 않았다.", "next": "rose_end"};
NODES["rose_boundary_plain"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "그녀의 요구는 분명했다. 시간이 필요하다고 했다. 나는 그 시간을 요구하거나 단축할 권리가 없었다.", "next": "rose_end"};
NODES["rose_end"]={"speaker": "다니엘 레온하르트", "chapter": "ACT 01 · 노란 장미의 주인", "text": "미겔은 온실의 등불을 확인했다. “이제 돌아가야겠어요. 내일도 일찍 일어나야 하니까요.”\n\n“……알겠습니다.”\n\n나는 시든 장미를 돌아보았다. 그녀는 죽은 꽃을 억지로 피우려 하지 않았다. 실패를 인정하고 원인을 살피며 다음 꽃을 준비했다.\n\n그런데 나는 이미 내 것이 아닌 마음을 향해 얼마나 오래 손을 뻗고 있었던 걸까.\n\n“다니엘 공자님?”\n\n“지금 가겠습니다.”\n\n세 개의 달 아래에서 온실 문이 닫혔다. 형님께서 보내실 편지는 아직 도착하지 않았다. 이 이야기는 ACT 05에서 계속된다.", "choices": [{"text": "특별 에피소드를 마치고 타이틀로 돌아간다.", "action": "home"}]};

const KEY='roseSpecial01';
function info(){if(!state[KEY]||typeof state[KEY]!=='object')state[KEY]={};return state[KEY];}
function karma(){return v90Data().karma||0;}
function tier(){return karma()>=70?'high':karma()>=35?'mid':'low';}
function pickPath(){return (state.v94&&state.v94.path)||'reason';}
function advance(id){state.history.push(state.node);state.node='rose_'+id;render();}
for(const [id,fn] of Object.entries({
 meet_route:()=>({wait:'meet_a',help:'meet_b',demand:'meet_c'})[info().visit]||'meet_a',
 tour_thought:()=> 'thought_'+tier(),
 glass_thought:()=> 'glass_'+tier(),
 path:()=>({reason:'reason',instinct:'instinct',boundary:'boundary'})[pickPath()]||'reason',
 boundary_extra:()=>info().canal==='hide'?'boundary_hidden':'boundary_plain'
})){
 Object.defineProperty(NODES['rose_'+id]={speaker:'서술',chapter:'ACT 01 · 노란 장미의 주인',text:'이어지는 장면',},'next',{get(){return 'rose_'+fn();},configurable:true});
}
// Award exact values and retain exclusive branch flags. Capture before older moral classifiers.
document.addEventListener('click',function(ev){
 const b=ev.target.closest&&ev.target.closest('#choices button');if(!b||!String(state.node).startsWith('rose_'))return;
 const node=NODES[state.node],idx=Array.from(document.querySelectorAll('#choices button')).indexOf(b),c=node.choices&&node.choices[idx];if(!c)return;
 const m={rose_intro:{rose_wait:['visit','wait','virtue',2],rose_help:['visit','help','virtue',4],rose_demand:['visit','demand','karma',4]},rose_canal:{rose_evidence:['canal','evidence','virtue',3],rose_accuse:['canal','accuse','karma',3],rose_hide:['canal','hide','karma',5]}};
 const x=m[state.node]&&m[state.node][c.next];if(!x)return;
 const d=v90Data();const prohibited=(d.virtue>=100&&x[2]==='karma')||(d.karma>=100&&x[2]==='virtue');
 if(prohibited){ev.preventDefault();ev.stopImmediatePropagation();const msg=d.virtue>=100?'그럴 생각이 들지 않는다.':'그런 행동을 할 마음이 들지 않는다.';if(typeof v90Flash==='function')v90Flash(msg);return;}
 const i=info();i[x[0]]=x[1];i[x[0]==='visit'?'visit'+x[1][0].toUpperCase()+x[1].slice(1):'canal'+x[1][0].toUpperCase()+x[1].slice(1)]=true;
 v90Add(x[2],x[3],'노란 장미의 주인 · '+c.text);
},true);
document.getElementById('nextBtn')?.addEventListener('click',function(){if(state.node==='rose_path'&&pickPath()==='reason'&&!info().reasonReward){info().reasonReward=true;v90Add('virtue',2,'노란 장미의 주인 · 이성');}},true);
// Existing V91/V97 generic moral listeners should not double-count special selections.
// Their broad text classifiers are bypassed by using neutral choice labels at integration time.
const menu=document.querySelector('#home .menu');
if(menu){const b=document.createElement('button');b.id='roseSpecialStart';b.textContent='✿ 특별 에피소드 01 · 노란 장미의 주인 (ACT 01~04)';b.addEventListener('click',()=>{if(typeof v80Transitioning!=='undefined'&&v80Transitioning)return;if(!state||typeof state!=='object')state=fresh();state[KEY]={};show('game');state.node='rose_intro';render();});menu.appendChild(b);}
// Set route once after entering ACT04: old v94.path is read without modifying CH01.
// For new players without a CH01 route, the respectful branch is the safe default.
})();
