/* v194 · approved DAY 3–6 tone, with original DAY 9 v94 sequel preserved. */
(function(){
 'use strict';
 const key='ep1d3ChoiceV194';
 function choiceRecord(){
   if(!state[key]||typeof state[key]!=='object')state[key]={distance:null,temptation:null};
   return state[key];
 }
 function branch(){
   const bc=state.bodyCountV175||{};
   const c=state[key]||{};
   if((Number(bc.count)||0)>0||bc.trueLocked||c.temptation==='confirm')return 'instinct';
   if(c.temptation==='stop')return 'reason';
   if(c.distance==='hesitate')return 'boundary';
   if(c.distance==='reason')return 'reason';
   if(c.distance==='instinct')return 'boundary'; // attraction without intimacy is not sex
   const r=state.v94||{};
   if(r.path==='boundary')return 'boundary';
   if(r.path==='instinct')return r.response==='accept'?'reason':'boundary';
   return 'reason';
 }
 window.DELHARSA_V194_BRANCH=()=>branch();
 // Capture the choice before the main click handler changes the node; persist in normal save state.
 const root=document.getElementById('choices');
 if(root)root.addEventListener('click',function(e){
   const b=e.target.closest('button');if(!b||!root.contains(b)||b.disabled)return;
   const n=NODES[state.node];if(!n||!Array.isArray(n.choices))return;
   const idx=Array.from(root.children).filter(x=>x.tagName==='BUTTON').indexOf(b);
   const selected=n.choices[idx];if(!selected)return;
   const c=choiceRecord();
   const mapping={ep1d3_distance_reason:'reason',ep1d3_distance_instinct:'instinct',ep1d3_distance_hesitate:'hesitate'};
   if(mapping[selected.next])c.distance=mapping[selected.next];
   if(selected.next==='ep1d3_temptation_stop')c.temptation='stop';
   if(selected.next==='ep1d3_temptation_confirm')c.temptation='confirm';
 },true);
 // Preserve original story dialogue; add internal reflection without changing spoken lines.
 const a=NODES.ep1d3_moonlight_01;
 if(a&&!a.text.includes('그녀가 먼저 나를 불렀다'))a.text+='\n코트리먼이 먼저 말을 꺼내는 일은 드물었다. 그녀는 대개 상대가 입을 열 때까지 기다리는 사람이었다. ……그런데 지금은, 그녀가 먼저 나를 불렀다.';
 const b=NODES.ep1d3_moonlight_04;
 if(b&&!b.text.includes('술에 약한 사람이'))b.text+='\n코트리먼은 술에 약한 사람이 아니다. 그런데 오늘 그녀의 목소리에는 평소라면 삼켰을 말이 묻어 있었다. ……내가 그것을 들을 자격이 있을까.';
 const c=NODES.ep1d3_moonlight_11;
 if(c)c.text='우리.\n그 한 단어가 귓속에 오래 남았다.\n코트리먼이 말하는 ‘우리’가 귀족들의 허울뿐인 도덕을 뜻하는지, 연회장 안에서 오가는 소문을 뜻하는지, 아니면…… 형님과 그녀 자신을 뜻하는지. 나는 알 수 없었다.\n그 말 안에 나도 있기를 바랐다. 동시에, 그럴 리 없다고 생각했다.\n……아니. 알 수 없어서 다행인지도 모른다.';
 const d=NODES.ep1d3_moonlight_23;
 if(d&&!d.text.includes('질투라는 말을'))d.text=d.text.replace('애초에 물을 자격도 없었다.','애초에 물을 자격도 없었다.\n그 질문에 이름을 붙인다면 질투일 것이다. 그것을 인정하는 순간, 나는 형님 앞에서 어떤 얼굴을 해야 할까.');
 const end=NODES.ep1d3_moonlight_33;
 if(end&&!end.text.includes('당신을 비참하게'))end.text=end.text.replace('그녀가 무엇을 두려워하는지,','……비참하게 만들지 말라니.\n코트리먼. 저는 지금 당신을 비참하게 만들고 있는 걸까. 아니면 나 자신을 비참하게 만들고 있는 걸까.\n그녀가 무엇을 두려워하는지,');
 // DAY 4: keep the seven-day banquet timeline, no jump into the post-estate v94 sequel.
 const morning={
 reason:'서재 문을 열자 알렉스 형님이 서류에서 눈을 들었다. 왕실 인장이 찍힌 봉투가 책상 한쪽에 놓여 있었다.\n“어제는 늦게까지 있었더구나. 무도회는 즐거웠어?”\n형님은 평소처럼 웃었다.\n“……예. 즐거웠습니다, 형님.”\n“그래? 다행이군. 미겔이 네 덕분에 편했다고 하더라. 고맙다, 다니엘.”\n나는 대답하지 못했다. 어젯밤 코트리먼과 맞잡았던 손이 떠올랐다.\n“왜 그래? 피곤해?”\n“……조금요.”\n형님은 내 어깨를 가볍게 두드렸다. “그럼 오늘은 무리하지 마.”\n형님은 아무것도 의심하지 않았다. 그것이 어떤 심문보다 무거웠다.',
 instinct:'서재 문을 열자 알렉스 형님이 반갑게 손을 들었다. 왕실 인장이 찍힌 봉투가 책상 위에 놓여 있었다.\n“어제는 늦게까지 있었더구나. 무도회는 즐거웠어?”\n형님은 평소처럼 웃고 있었다.\n나는 형님의 얼굴을 똑바로 볼 수 없었다. 어젯밤 그녀가 내게 허락한 시간과, 내가 저버린 신뢰가 한꺼번에 떠올랐다.\n“……예. 즐거웠습니다.”\n“하하, 그럼 됐지. 미겔도 네 덕분에 편했다고 하더라. 내 동생답군!”\n“……아닙니다, 형님.”\n“왜, 또 겸손한 척이야?” 형님은 웃으며 내 어깨를 두드렸다.\n나는 그 손길을 피하지 못했다. 형님은 모르신다. 내가 어젯밤 무엇을 했는지.\n그 믿음 앞에서, 나는 아무 변명도 떠올릴 수 없었다.',
 boundary:'서재 문을 열자 알렉스 형님이 서류에서 눈을 들었다.\n“어제는 늦게까지 있었더구나. 무도회는 즐거웠어?”\n형님은 평소처럼 웃었다.\n어젯밤 아무 일도 일어나지 않았다. 그런데 나는 코트리먼에게서 돌아선 뒤에도 그녀를 생각했다. 그 사실을 형님께 들킬까 두려웠다.\n“……예. 즐거웠습니다.”\n“그래? 다행이군. 미겔이 네 덕분에 편했다고 하더라.”\n“……형님.”\n“응?”\n“아무것도 아닙니다.”\n형님은 웃으며 의자를 밀어 주었다. “무슨 일 있으면 말해. 혼자 고민하는 건 네 버릇이잖아.”\n나는 고개를 숙였다. 형님이 나를 믿는다는 사실이 두려웠다.'
 };
 const reunion={
 reason:'정원 회랑에서 코트리먼을 다시 만났다. 그녀는 발걸음을 늦추고 내 표정을 살폈다.\n“다니엘. 그날 밤…… 고마웠어.”\n“……무엇이요.”\n“네가 멈춰 주어서.”\n그녀는 잠시 시선을 내렸다. “나도 내 마음이 어디까지 흔들리는지 알 수 없었단다.”\n나는 그녀의 말을 위안으로 삼고 싶었다. 그러나 그녀는 알렉의 약혼녀였다.\n“다음에도 우리가 그 자리에 서게 된다면…… 내가 먼저 물러날지도 모르겠구나.”\n그녀가 스스로를 경계하고 있다는 사실을, 나는 뒤늦게 깨달았다.',
 instinct:'코트리먼은 회랑 끝에 서 있었다. 나를 보자 찻잔을 내려놓듯 손을 모았다.\n“다니엘. 그날 밤의 일은…… 나도 내 뜻으로 선택했어.”\n“……코트리먼.”\n“그러니 네가 혼자 모든 책임을 짊어지지는 마. 하지만 그렇다고 가벼워지는 일도 아니란다.”\n그녀는 내 시선을 피하지 않았다.\n“다음에는 그러지 않으려고 해. 나 자신에게도 약속했어.”\n“……알겠습니다.”\n“그런데도 나는 아직 네가 어떤 사람인지 다 알지 못하겠구나.”\n그 말에 안도할 자격이 내게 있는지는 알 수 없었다.',
 boundary:'회랑에서 코트리먼을 만났다. 그녀는 먼저 내 이름을 불렀다.\n“다니엘. 요즘 네가 자꾸…… 멀어지는 것 같아.”\n“……그럴 리가요.”\n“그랬으면 좋겠구나.”\n그녀는 손끝으로 숄을 매만졌다. “나는 알렉과의 약속을 지킬 거야. 그건 변하지 않아.”\n“……알고 있습니다.”\n“그런데 네가 아무 일도 없었다고 말할 때마다, 내가 무엇을 놓치고 있는지 모르겠어.”\n그녀는 더 말하지 않았다. 나는 그 침묵을 멋대로 고백이라고 부르지 않기로 했다.'
 };
 NODES.v194_day4_morning={speaker:'다니엘 레온하르트',chapter:'EP.1 · DAY 4 / 믿음의 무게',day:4,text:morning.reason,next:'v194_day4_reunion'};
 NODES.v194_day4_reunion={speaker:'다니엘 레온하르트',chapter:'EP.1 · DAY 4 / 남겨진 말',day:4,text:reunion.reason,next:'v108_day5'};
 // Original DAY 4 node is still the chapter's entry and can be resumed from old saves.
 NODES.v108_day4.next='v194_day4_morning';
 NODES.v108_day5.text='“영지에 일이 생겼어. 직접 가서 정리하고 오지.”\n\n형님은 성가신 일을 처리하러 가는 사람답게 빠르고 자신 있게 결정을 내렸다.\n\n“다니엘, 내가 없는 동안 미겔이 불편하지 않게 신경 좀 써 줘. 마지막 무도회 전에는 돌아올 테니까.”\n\n“……알겠습니다, 형님.”\n\n그 신뢰가 내게는 잔인했다.\n\n알렉스 형님은 문가에서 돌아보며 웃었다.\n\n“아, 그리고 다니엘. 내가 없는 동안 나쁜 짓은 하지 말라고.”\n\n형님은 호탕하게 웃었다. “농담이야!”\n\n문이 닫혔다.\n\n……농담. 형님은 정말 농담으로 하신 말이다. 내가 형님의 믿음을 저버릴 수 있다고는 상상조차 못 하실 테니까.';
 const day6={
 reason:'형님이 없는 동안, 코트리먼과 나는 잠시 정원에 나란히 섰다.\n\n“귀여운 아이. 무슨 걱정이 그리 많니?”\n\n그녀는 남들 앞에서의 미소 대신 피곤하고 솔직한 얼굴로 나를 보았다.\n\n“요즘 네가 자꾸…… 내게 예의를 갖추는 것 같아서.”\n\n“……예의를 갖추는 게 잘못입니까.”\n\n“잘못은 아니지. 다만 네가 그럴 때마다 조금 멀어지는 것 같구나.”\n\n그녀는 작게 웃었다. “이리 오렴. 잠깐만.”\n\n나는 한 걸음 다가갔다. 한 걸음만. 그 이상은 아직.',
 instinct:'형님이 없는 동안, 코트리먼과 나는 정원 끝에서 마주쳤다.\n\n“다니엘. 그날 이후로 계속 생각했단다.”\n\n그녀는 노란 장미가 아닌 보랏빛 연회 등불 쪽으로 눈길을 돌렸다.\n\n“알렉에게 말하지 않을 거야. 그건 내가 내린 선택이야.”\n\n“……코트리먼.”\n\n“하지만 그렇다고 네가 면죄부를 받은 건 아니란다.”\n\n“……알고 있습니다.”\n\n그녀는 한참을 망설였다.\n\n“이제는 너를…… 피하지 않으려고 해. 그게 옳은 일인지는 모르겠지만.”\n\n나는 그 말을 약속이라고 부르지 않았다. 그럴 수 없었다.',
 boundary:'형님이 없는 동안, 코트리먼과 나는 정원에 잠시 나란히 섰다.\n\n“다니엘. 요즘 네가…… 나를 피하는 것 같아.”\n\n“……그럴 리가요.”\n\n“그랬으면 좋겠구나.”\n\n그녀는 한동안 말을 고르다가 나를 보았다.\n\n“네가 어떤 사람인지 알고 싶어. 오래전부터 궁금했단다.”\n\n“……코트리먼.”\n\n“이런 말이 너를 더 혼란스럽게 한다는 것도 알아.”\n\n그녀는 고개를 숙였다. “알면서도 자꾸 묻게 되는구나.”\n\n나는 그 말에 이름을 붙이지 않았다. 사랑도 약속도 아닌, 스스로를 다스리지 못할지도 모른다는 예감이었다.'
 };
 // Update on render, so loaded saves and a freshly selected route both use their own branch.
 const prior=render;
 render=function(){
   if(state.node==='v194_day4_morning')NODES.v194_day4_morning.text=morning[branch()];
   if(state.node==='v194_day4_reunion')NODES.v194_day4_reunion.text=reunion[branch()];
   if(state.node==='v108_day6')NODES.v108_day6.text=day6[branch()];
   prior();
 };
})();
