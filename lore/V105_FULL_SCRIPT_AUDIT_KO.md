# DELHARSA v105 — 전수 스크립트 구조 감사 및 확정 오류 교정

## 검수 범위
- 원본: DELHARSA_v104_script_audit_first_pass.zip
- game.js: 468,066자, 3,724줄
- ZIP 전체 파일: 127개
- NODES 선언/추가 감지: 96개
- next 참조(정적 문자열): 461개
- 선언 목록에 없는 next 참조(동적 노드 가능): 33개

## 확정 가능한 표현 오류 수정
- 1회: `약혼자가 마음에 들어 했던 차림이니, 괜한 불평은 삼가야겠지.` → `코트리먼이 이 차림을 본다면 무슨 말을 할까. ……또 그런 생각부터 하는군.`
- 1회: `형이 이곳에 없다는 사실에 안도한` → `형님께서 이곳에 계시지 않다는 사실에 안도한`
- 1회: `형과 그의 약혼자. 두 사람의 관계는 분명하고 당연한 것이었다.` → `형님과 코트리먼. 두 사람의 약혼은 오래전부터 분명한 사실이었다.`
- 1회: `형의 약혼자를 찾고 있다. 그렇게 생각하는 것만으로도 다니엘은 목덜미가 뜨거워졌다. ……그저 예의를 갖추려는 것뿐인데.` → `형님의 약혼녀를 또 찾고 있다. 예의를 핑계 삼는 일도 이제 지겹다. ……그런데도 멈출 수가 없다.`
- 1회: `미겔 후작님을 찾고 있었다고` → `코트리먼을 찾고 있었다고`
- 1회: `후작님을 찾아다녔다고` → `코트리먼을 찾아다녔다고`
- 1회: `하필 후작님의 드레스에` → `하필 코트리먼의 드레스에`
- 2회: `형이 무엇을 알고 있는지` → `형님이 무엇을 알고 계신지`

## 스토리 정합성 핵심 판정
- **중대/미해결:** 사용자가 확정한 시작 배경은 아셀 왕국 연회지만 현재 게임 서막과 CH01은 델하르사 제국 황궁 무도회. 왕국·제국·연회 주최자·연대기 확정 없이 자동 치환하지 않음.
- **중대/미해결:** 게임 시작 시 다니엘의 기존 약혼자를 암시하는 대사가 있어 명백한 오류로 수정. 다니엘의 별도 약혼 여부는 확정되지 않았음.
- **중대/미해결:** 3년(36개월) 경과와 조기 엔딩 시스템은 아직 설계·구현 필요. 현재 day 및 챕터 시스템과 분리 검토.
- **중대/미해결:** 다니엘의 일인칭 내면과 3인칭 서술이 혼재. 서술자 표기와 내면 독백은 역할별로 구분해야 함.
- **중대/미해결:** 미겔의 귀족 영애식 반존대가 모든 대사에 균일하지 않음. 화자별 대사 추출 후 장면별 인물성 검수 필요.
- **중대/미해결:** 본편 CH01의 이성·본능·경계 침범은 다니엘이 이미 사랑하고 억제 중이라는 전제에 맞춰 장면별 후속 반응을 연결해야 함.
- **유지:** 「노란 장미의 주인」은 deferred-story 아래 보류. ACT05~06은 아직 실제 코드 구현되지 않음.
- **주의:** 미겔의 선택권과 알렉스의 약혼 관계를 무시하는 로맨스 성립으로 자동 보정하지 않음.
- **주의:** 정확히 세 개의 달, 야간에만 달 묘사.

## 정적 연결 검사
- 감지된 노드: 96
- `next:` 직접 참조: 461
- 미확인 대상: v88_ending_, v88_ending_doll_bride, v94_alex_intro, v94_boundary_account, v94_boundary_excuse, v94_letter, v95_brother_alone, v95_brother_together, v95_miguel_silence, v95_miguel_voice, v95_rumor_cover, v95_rumor_inquiry, v95_rumor_truth, v96_library_entry, v96_library_hide, v96_library_read, v96_library_refuse, v96_library_report, v98_spell_cast, v98_spell_reject, v99_after, v99_alex, v99_before_choice, v99_brother, v99_court, v99_empty_answer, v99_final, v99_last_question, v99_letter, v99_rose, v99_spell_price, v99_vows, v99_wedding
- 정적 정규식 감사이며 런타임 분기, 동적 노드, 세이브 복원까지 증명하지 않음.

## 검토 검색 지표

### 장소·연회 설정: 226개 줄 일치
- L7: cinematic_palace:{speaker:'서막 · 황궁',chapter:'INTRO · 세 개의 달',text:'황궁의 문이 다시 열리고 있었다. 마물의 습격이 남긴 상흔이 아직 도시의 골목에 남아 있었지만, 황실은 성대한 무도회를 열어 제국의 안녕을 선포하고자 했다.\n\n수많은 초대장이 귀족들의 저택으로 향했다. 봉인된 종이 한 장이 어떤 이에게
- L8: cinematic_daniel:{speaker:'다니엘 레온하르트',chapter:'INTRO · 세 개의 달',text:'레온하르트가의 막내아들 다니엘은 창가에 서서 저무는 하늘을 바라보았다. 익숙한 저택의 정원에도 곧 세 개의 달빛이 내릴 터였다.\n\n문밖에서 시종의 발소리가 멎었다. 황실의 인장이 찍힌 초대장이 도착했다는 소식이었다. 다니엘은 곧장 
- L9: cinematic_invitation:{speaker:'서막 · 초대장',chapter:'INTRO · 세 개의 달',text:'문이 열리고, 짙은 봉랍이 찍힌 봉투가 조심스레 건네졌다. 다니엘은 그것을 두 손으로 받았다. 얇은 종이의 무게는 보잘것없었지만, 그 안에 적힌 황궁의 이름은 유난히 무겁게 느껴졌다.\n\n그날 밤, 다니엘이 마주할 것은 화려한 
- L10: intro:{speaker:'SYSTEM',text:'황실의 인장이 찍힌 초대장이 델하르사 제국의 귀족 저택마다 도착했다. 봉랍을 뜯은 자리에는 옅은 향이 남아 있었다.\n마물의 습격이 지나간 뒤, 제국은 평화를 기원한다는 명목으로 성대한 무도회를 준비하고 있었다. 그러나 궁정의 화려한 불빛이 모든 상처를 가려 줄 수 있는 것은 아니었다.',next:'in
- L11: invitation:{speaker:'초대장',text:'황실 무도회 초대장\n\n제국의 안녕과 화합을 기원하는 밤, 귀하를 황궁 연회장으로 초대합니다.\n세 개의 달이 떠오르는 저녁, 보라색 장식을 갖추어 참석해 주십시오.\n\n얇고 단단한 종이 끝에 금빛 문장이 정교하게 새겨져 있었다.',next:'daniel'},
- L12: daniel:{speaker:'다니엘 레온하르트',text:'다니엘은 초대장을 책상 위에 내려놓았다가 다시 집어 들었다. 손가락이 스친 자리를 따라 종이의 가장자리가 조금 휘었다.\n무도회는 낯설지 않았다. 귀족의 막내아들로서 그 정도의 예법은 몸에 익어 있었다. 다만 알렉스 형님의 곁에 설 코트리먼을 아무렇지도 않게 바라보는 일만큼은 여전히 익숙해지지 않
- L13: decision:{speaker:'SYSTEM',text:'초대장을 접어 두려던 다니엘은 잠시 손을 멈췄다. 황궁으로 향하기 전, 마음을 가다듬을 시간이 조금은 남아 있었다.',choices:[{text:'초대장을 다시 읽는다.',thought:'서두르지 말자. 차근차근 준비하면 괜찮을 거야.',next:'read',effects:{resolve:1}},{
- L17: end:{speaker:'SYSTEM',text:'황궁으로 향할 시간이 되었다. 마차가 준비되었다는 시종의 목소리가 문밖에서 들려왔다. 다니엘은 마지막으로 초대장을 확인한 뒤 자리에서 일어섰다.',choices:[{text:'황실 연회장으로 향한다.',next:'ball_arrival'},{text:'처음부터 다시 보기',next:'intro',reset:
- L18: ball_arrival:{speaker:'SYSTEM',text:'CHAPTER 01 · 보라색의 밤\n\n세 개의 달이 차례로 모습을 드러내자 황궁의 높은 창마다 불빛이 켜졌다. 마차에서 내린 손님들이 대리석 계단을 오르고, 열린 문 너머에서는 현악기의 선율이 흘러나왔다.\n다니엘은 그 화려한 광경 앞에서 잠시 발을 멈췄다.',thought:'이렇게 사람
- L20: ball_choice:{speaker:'SYSTEM',text:'연회장의 안쪽에서는 웃음소리와 잔 부딪치는 소리가 끊이지 않았다. 다니엘은 익숙한 얼굴을 찾으려 주변을 살폈다. 어느 쪽으로 먼저 발을 옮겨야 할까.',chapter:'CHAPTER 01',choices:[{text:'연회장 안쪽으로 들어간다.',next:'v92_court_whispers',
- L23: v92_court_whispers:{speaker:'서술',chapter:'CHAPTER 01 · 황궁의 속삭임',text:'연회장의 서쪽 회랑에는 향초의 달콤한 냄새가 감돌았다. 다니엘은 샹들리에 아래를 지나려다 자기 가문의 문장이 수놓인 소매를 보고 시선을 피하는 귀족 둘을 발견했다.\n\n“레온하르트가의 막내라지요.”\n\n“알렉스 경의 약혼녀와도 친
- L24: v92_court_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 황궁의 속삭임',text:'기둥 너머에서 누군가의 잔이 가볍게 부딪혔다. 소문은 사실을 묻기 전에 사람을 먼저 판단한다. 다니엘은 발걸음을 옮기려다 멈췄다.',choices:[{text:'근거 없는 소문을 정중하게 바로잡는다.',next:'v92_co

### 호칭·관계: 11개 줄 일치
- L37: v92_alex_question:{speaker:'알렉스 레온하르트',chapter:'CHAPTER 01',text:'알렉스는 놀란 듯 눈썹을 올렸다가, 다니엘의 얼굴을 가만히 살폈다.\n\n“행복하냐고? 물론이지. 그렇다고 미겔이 내 뜻대로만 움직이는 사람이라는 뜻은 아니야.”\n\n그는 잠시 연회장 쪽을 돌아보았다. “우리는 서로 다른 사람이니까. 그래
- L263: function sharedEncounterV15(){recordGallery('alex_miguel');NODES.alex_miguel={speaker:'SYSTEM',text:'미겔의 곁에 알렉이 서 있었다. 그녀가 낮게 “알렉.” 하고 부르는 소리에 다니엘의 발이 멈췄다.\n형의 약혼자다. 그 사실을 모르고 있던 것도 아닌데, 가슴이 불편했다.\n……
- L930: const text=tier===12?'알렉은 한참이나 다니엘을 살피다가 입을 열었다. “요즘 네가 무엇을 걱정하는지 모르겠구나.”\n\n다니엘은 형의 시선을 마주하지 못했다. 설명할 수 없는 마음을 가진 것 자체가 부끄러웠다.':'알렉은 다니엘의 굳은 어깨를 보고 물었다. “무도회가 불편하냐?”\n\n다니엘은 대답하기 전에 옷깃을 고쳐 잡았다. 형이 걱정
- L931: v24Record('alex_arc_'+tier,'형이 알아챈 망설임',text);
- L1061: const body=last.mode==='avoid'?'알렉은 다니엘을 불러 세웠다. “그날은 네가 말을 피했지.”\n\n다니엘은 목이 메었다. 형이 자신의 속마음을 알고 있다고 단정할 수는 없었다.':'알렉은 잠시 동생을 바라보다가 말했다. “지난번에는 네 말을 들었다. 오늘은 좀 나아졌느냐?”\n\n다니엘은 형이 자신을 걱정한다는 사실에 오히려 더 죄
- L1109: const restore=['listen','truth','apologize','time'].includes(x.mode);const body=restore?'알렉은 동생을 잠시 바라보다가 낮게 물었다. “요즘은 좀 괜찮으냐.”\n\n다니엘은 선뜻 대답하지 못했다. 그래도 형이 먼저 말을 건넨 사실만큼은 놓치고 싶지 않았다.':'“또 말을 피할 생각이냐.”
- L1265: if(pending){pending.done=true;const good=pending.mode==='repair',txt=good?'알렉은 동생의 인사를 받아 주었다. 짧은 대화였지만 다니엘은 형이 자신의 말을 끝까지 들어 주었다는 사실을 오래 생각했다.':'알렉과 다니엘 사이에는 말하지 못한 것이 남아 있었다. 형이 걸음을 멈추자 다니엘은 먼저 시선을 
- L1309: const trust=v26Data().alex.trust||0;const text=trust>=0?'알렉은 동생의 안색을 살피고 잠시 걸음을 늦췄다. 다니엘은 형이 건네는 평범한 관심조차 떳떳하게 받기 어려웠다.':'알렉은 무언가 묻고 싶은 듯 다니엘을 바라보았다. 다니엘은 먼저 입을 열어야 한다는 것을 알면서도 목소리가 나오지 않았다.';
- L2892: {id:'brother_funeral',title:'형제의 장례식',kind:'BAD',text:'알렉스는 끝까지 가문과 약혼자를 지키려 했다. 다니엘은 그 앞에서 칼을 거두지 않았다.\n\n장례식 날, 남색과 금색의 깃발이 내려왔다. 다니엘은 형이 없는 집에서 처음으로 자신의 죄를 똑바로 보았다.',thought:'형님이 없으면 모든 게 해결될 줄 알았어
- L3549: NODES["v99_brother"]={speaker:"서술",chapter:chapter,text:"알렉스는 동생의 멱살을 잡지 않았다. 분노보다 먼저 찾아온 것은 이해할 수 없다는 표정이었다. 다니엘이 어릴 적 잘못을 저지르면 자신에게 먼저 달려와 털어놓던 모습을 기억하는 사람의 얼굴이었다.\n\n“네가 좋아했던 건 미겔의 어떤 모습이었지?”\n\n다니
- L3554: NODES["v99_letter"]={speaker:"서술",chapter:chapter,text:"알렉스에게서 편지가 도착한 것은 겨울의 초입이었다. 봉투에는 레온하르트가의 인장이 찍혀 있었으나, 편지에는 형제 사이의 안부가 없었다.\n\n「네가 사랑한 사람은 네가 지웠다. 네 곁에 남은 것은 그녀의 동의가 아니라 네 명령의 메아리다. 그 사실을 잊지 마

### 미겔 말투: 75개 줄 일치
- L38: ball_miguel:{speaker:'SYSTEM',text:'연회장 건너편에서 익숙한 모습이 눈에 들어왔다. 미겔 코트리먼이었다.\n그녀는 화려한 장식 사이에서도 지나치게 자신을 드러내지 않았다. 누군가 말을 건네면 고개를 기울여 듣고, 적당한 순간에 부드럽게 미소 지었다. 다니엘은 자신도 모르게 걸음을 늦췄다.\n그녀는 둘째 형 알렉스의 약혼자였다. 
- L55: explore_found:{speaker:'SYSTEM',text:'온실 입구에는 노란 장미가 가지런히 심겨 있었다. 유리 천장 너머로 스며든 달빛이 꽃잎 위에 희미한 윤곽을 남겼다.\n조용한 발소리에 미겔 코트리먼이 고개를 돌렸다.\n“어머, 다니엘 공자님. 여기까지 오셨구나. 밤바람이 차니 안으로 들어오렴.”\n다니엘은 준비해 둔 인사말을 순간 잊어버렸
- L57: found_honest:{speaker:'미겔 코트리먼',text:'“그랬구나, 귀여운 아이. 어떤 마음으로 찾아왔는지 굳이 서둘러 말하지 않아도 된단다.”\n미겔은 다니엘이 말을 고를 수 있도록 조용히 기다렸다. 재촉하지 않는 태도가 오히려 그를 조금 편안하게 했다.',chapter:'CHAPTER 01',thought:'이상하게 생각하지 않으시는 걸까.
- L58: found_polite:{speaker:'미겔 코트리먼',text:'“괜찮단다. 잠시 머물다 가렴. 이곳은 바람이 제법 온화하거든.”\n미겔은 온실 안쪽으로 시선을 돌렸다. 유리창에 비친 달빛이 그녀의 옆얼굴을 부드럽게 밝혔다. 다니엘은 물러서려던 발을 조심스럽게 멈췄다.',chapter:'CHAPTER 01',thought:'머물러도 된다고 하셨으니까. 
- L59: miguel_conversation:{speaker:'미겔 코트리먼',text:'“오늘은 알렉과 함께 왔단다. 혹시 그를 찾고 있니?”\n미겔은 담담하게 물었다. 그녀에게는 자연스러운 질문이었다. 다니엘은 형의 이름을 듣고 자신도 모르게 손끝에 힘을 주었다.',chapter:'CHAPTER 01',choices:[{text:'“아닙니다. 코트리먼께 인사를 
- L60: miguel_truth:{speaker:'미겔 코트리먼',text:'“그랬구나, 귀여운 아이.”\n미겔은 그 이상 캐묻지 않았다. 잠시 그의 소매를 살피던 그녀가 부드럽게 말을 이었다.\n“오늘은 평소와 다른 옷을 입었구나, 다니엘. 네게 잘 어울려.”\n다니엘은 얼른 감사 인사를 해야 한다는 걸 알면서도 잠깐 말을 잃었다.',chapter:'CHAPTER
- L61: miguel_alex:{speaker:'미겔 코트리먼',text:'“알렉이라면 연회장 안쪽에 있을 거란다.”\n미겔은 자연스럽게 방향을 알려 주었다. 다니엘은 정중히 감사 인사를 했지만, 정작 그가 찾아 헤매던 사람은 눈앞에 있었다.',chapter:'CHAPTER 01',thought:'형님께서 어디 계시는지 궁금했던 건 아닌데. 이제 와서 말을 바꿀 수
- L64: v93_temptation_rose:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01 · 미겔의 유혹',text:'“꽃잎이 네 어깨에 붙었구나.”\n\n미겔은 손을 뻗으려다 다니엘이 굳어 있는 것을 보고 잠시 멈췄다. “떼어 줘도 되겠니?”\n\n다니엘이 고개를 끄덕이자 그녀는 어깨 위의 꽃잎만 조심스럽게 집어 들었다. 손끝이 스쳐 지나
- L69: v93_accept:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01',text:'“그래. 그 말이라면 믿을 수 있겠구나.”\n\n미겔은 다니엘의 말을 가볍게 여기지 않았다. 그 마음을 받아 줄 수 없다는 사실과, 그 마음이 진실하다는 사실은 서로 모순되지 않았다.\n\n다니엘은 그녀와 나란히 온실을 나섰다. 비밀을 털어놓았는데도 마음이
- L70: v93_linger:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01',text:'“기억해 두마. 하지만 그걸 약속으로 여기지는 말아 주렴.”\n\n미겔은 부드럽지만 흔들림 없는 목소리로 말했다. 다니엘은 그녀가 자신을 달래기 위해 거짓 희망을 주지 않는다는 것을 깨달았다.\n\n유리 천장 위로 세 개의 달빛이 겹쳤다. 다니엘은 한동안 
- L80: wine_handoff:{speaker:'미겔 코트리먼',text:'“손수건을 건네주겠니?”\n미겔은 건네받은 천으로 드레스의 와인을 조용히 눌렀다. “크게 상한 곳은 없단다. 그리 걱정하지 않아도 돼.”',chapter:'CHAPTER 01',next:'wine_question'},
- L83: wine_question:{speaker:'미겔 코트리먼',text:'“어디를 그리 급히 가던 중이었니, 다니엘 공자님?”\n그녀의 목소리는 낮고 차분했다. 다니엘은 대답하기 전 옷깃을 한 번 고쳐 잡았다.',chapter:'CHAPTER 01',choices:[{text:'“속이 좋지 않아 잠시 바람을 쐬려 했습니다.”',next:'wine_after',

### 시간·엔딩: 230개 줄 일치
- L18: ball_arrival:{speaker:'SYSTEM',text:'CHAPTER 01 · 보라색의 밤\n\n세 개의 달이 차례로 모습을 드러내자 황궁의 높은 창마다 불빛이 켜졌다. 마차에서 내린 손님들이 대리석 계단을 오르고, 열린 문 너머에서는 현악기의 선율이 흘러나왔다.\n다니엘은 그 화려한 광경 앞에서 잠시 발을 멈췄다.',thought:'이렇게 사람
- L88: let state={node:'cinematic_moons',day:1,stats:{affection:0,trust:0,resolve:0,reputation:50,risk:0},history:[],exploration:{turn:0,clues:[],visited:[],found:false,sceneCounts:{}}};
- L156: {day:2,place:'garden',speaker:'SYSTEM',text:'정원사의 바구니에 노란 장미가 담겨 있었다. 시든 꽃을 버리기 전 마지막으로 살피는 모습에 다니엘은 걸음을 멈췄다. 코트리먼 영지에도 이런 꽃이 피겠지.',options:[['정원사에게 꽃의 관리법을 묻는다.','정원사는 꽃을 오래 피우는 것보다 제때 돌보는 일이 중요하다고 답
- L157: {day:3,place:'drawing',speaker:'시종',text:'응접실에 놓인 차가 식어 가고 있었다. 시종은 손님이 남긴 잔을 치워도 될지 고민하고 있었다.',options:[['정리를 도와준다.','다니엘은 잔을 조심히 옮겨 주었다. 시종이 감사 인사를 했다.',{reputation:1}],['손님이 돌아올지 먼저 확인한다.','서두르지 않고
- L158: {day:4,place:'terrace',speaker:'SYSTEM',text:'세 개의 달빛이 난간 위에 겹쳤다. 누군가 접어 둔 보랏빛 리본이 바람에 흔들렸다. 다니엘은 이 연회가 오래 기억에 남으리라 생각했다.',options:[['리본을 시종에게 맡긴다.','분실물을 받은 시종은 주인을 찾아보겠다고 했다.',{reputation:1}],['잠시 달
- L159: {day:5,place:'corridor',speaker:'경비병',text:'회랑의 통행로가 잠시 바뀌었다. 경비병은 손님들이 길을 헤매지 않도록 안내하고 있었다.',options:[['안내를 돕는다.','다니엘은 길을 묻는 손님들에게 차근차근 방향을 알려 주었다.',{reputation:2}],['조용히 우회한다.','다니엘은 다른 회랑으로 걸음을 옮겼
- L330: v16Data().memories.push({id:'v17_bond_'+tier,title:'관계 · '+tier,text,day:state.day,category:'관계'});
- L337: v16Data().memories.push({id:'v17_quest_'+id,title:q.title+' · '+kind,text,day:state.day,category:'의뢰'});
- L338: NODES.explore_v17_ending={speaker:'SYSTEM',text,chapter:'CHAPTER 01',next:'explore'};
- L371: d.memories.push({id:'bond_'+s.miguelMeetings,title:'미겔 · '+tier,text:words,day:state.day});
- L382: v16Data().memories.push({id:'alex_'+state.day+'_'+state.exploration.turn,title:'알렉과의 거리',text:msg,day:state.day});
- L412: if(!memories.some(m=>m.id===id))memories.push({id,title,text,day:state.day,category});

### 선택지: 69개 줄 일치
- L24: v92_court_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 황궁의 속삭임',text:'기둥 너머에서 누군가의 잔이 가볍게 부딪혔다. 소문은 사실을 묻기 전에 사람을 먼저 판단한다. 다니엘은 발걸음을 옮기려다 멈췄다.',choices:[{text:'근거 없는 소문을 정중하게 바로잡는다.',next:'v92_co
- L29: v92_servant_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 작은 선택',text:'지금 손을 내밀면 사람들의 눈길이 자신에게 쏠릴 것이다. 반대로 그냥 지나치면 누구도 그를 탓하지 않을 터였다.',choices:[{text:'시종을 일으키고 치료를 부탁한다.',next:'v92_servant_help',v
- L34: v92_alex_choice:{speaker:'알렉스 레온하르트',chapter:'CHAPTER 01 · 형의 약속',text:'“미겔도 오늘 왔어. 나중에 같이 인사하자. 그 사람은 네가 긴장하면 더 신경 써 줄 거야.”\n\n알렉스는 웃었다. 다니엘은 그 웃음에 아무런 의심이 없다는 사실이 문득 두려웠다.',choices:[{text:'형에게 연회장에서
- L65: v93_temptation_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 이성과 본능',text:'미겔이 온실 문을 향해 몸을 돌렸다. 한 걸음만 더 내디디면 그녀를 붙잡을 수 있을 것 같았다.\n\n다니엘은 손을 들어 올리다 멈췄다.\n\n이성은 말한다. 오래전부터 알고 있었다. 그녀는 형님의 약혼녀이고, 그녀의
- L68: v93_instinct_accept:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 본능의 대가',text:'미겔의 눈빛은 여전히 다정했다. 그래서 더 아팠다. 다니엘은 한참 만에 입을 열었다.',choices:[{text:'“알겠습니다. 제 마음은 제가 책임지겠습니다.”',next:'v93_accept',v91Moral:'vi
- L72: v93_crossed_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 선택의 흔적',text:'사과한다고 방금 전의 일이 없던 일이 되지는 않는다. 다니엘은 그것을 알면서도 입을 열어야 했다.',choices:[{text:'즉시 사과하고 더는 다가가지 않는다.',next:'v93_crossed_apology',v91
- L2899: const V88_KARMA_KEY='delharsha_v88_karma_gallery';
- L2901: function v88Karma(){if(!state.karma||typeof state.karma!=='object')state.karma=v88Default();const k=state.karma;for(const [name,val] of Object.entries(v88Default()))if(k[name]===undefined)k[name]=val;
- L2940: fresh=function(){return{...v88OriginalFresh(),karma:v88Default()};};
- L2973: // v89: positive resolutions use the same karma state, choice flow and persistent gallery.
- L3000: // v90 — THE SCALES OF FATE. Independent irreversible virtue / wrongdoing ledgers.
- L3005: function v90Data(){if(!state.scales||typeof state.scales!=='object')state.scales={virtue:0,karma:0,events:[],daily:{},coins:100,completed:false,revealed:false,runId:'run-'+Date.now()};const d=state.sc

## 후속 수정 순서
1. 아셀 왕국 연회와 델하르사 황궁 무도회의 관계를 설정으로 확정한 뒤 서막/CH01 전체 재구성
2. 대사 화자별 추출과 미겔 영애식 반존대 전면 통일
3. 다니엘의 형님 호칭, 기존 감정, 선택지 후속 대사 전면 교차 검토
4. 36개월 시간 경과, 조기 탈락, 메리 해피 엔딩 조건 구현 및 저장 데이터 호환성 검증
5. 모든 선택지 실제 플레이 경로별 회귀 테스트

이번 패키지는 전체 파일 감사 및 확정 오류 교정판이지, 모든 서사적 쟁점 해결판이 아님.