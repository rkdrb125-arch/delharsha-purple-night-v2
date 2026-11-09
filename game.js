'use strict';
// Story data is intentionally modular: replace or extend NODES without changing the UI.
const SAVE_KEY='delharsha_purple_night_v1'; // v1 save compatibility retained
const NODES={
 // v70 opening sequence: new games only; older saves retain their node IDs.
 cinematic_moons:{speaker:'다니엘 레온하르트',chapter:'PRELUDE · 왕실의 초대',text:'아셀 왕국에서 편지가 도착한 것은, 비가 그친 늦은 오후였다.\n\n백색 봉투 위에 내려앉은 보랏빛 봉랍. 금박으로 새겨진 왕실의 문장은 지나치게 아름다워서, 도리어 불길했다.\n\n일곱 날의 연회. 그리고 마지막 밤의 대무도회.\n\n그 이름을 읽는 데는 한순간이면 충분했다.\n\n미겔 코트리먼.\n\n형님의 약혼녀. 삼 년 동안 애써 외면해 온 내 마음의 유일한 이름.\n\n초대장을 접었는데도, 손끝에는 여전히 보랏빛 밀랍의 감촉이 남아 있었다.',next:'v108_intro_entrance'},
 invitation:{"speaker":"아셀 왕실의 초대장","chapter":"PROLOGUE · 아셀의 초대장","text":"아셀 왕국 왕실 초청 서한\n\n아셀 왕국 왕실 문장 아래\n\n존귀하신 레온하르트 백작 각하와 그 일가에,\n\n아셀 왕국의 왕실은 오랜 세월 이어져 온 양국의 우호와 신의를 기리며, 레온하르트 가문에 깊은 경의와 변함없는 친선의 뜻을 전합니다.\n\n다가오는 계절의 끝자락, 아셀 왕궁에서는 왕실의 이름으로 일곱 날에 걸친 성대한 연회를 개최하고자 합니다.\n\n이번 연회는 양국의 귀족과 사절들이 한자리에 모여 지난날의 우의를 되새기고, 앞으로 이어질 평화와 번영을 축원하는 자리입니다. 이에 왕실은 레온하르트 백작 각하와 그 일가를 특별한 귀빈으로 정중히 초청하는 바입니다.\n\n연회는 왕궁의 대연회장에서 시작되어, 일곱 날 동안 음악과 만찬, 교류와 축하의 자리로 이어질 것입니다.\n\n마지막 일곱 번째 밤에는 왕실이 주관하는 대무도회가 열릴 예정입니다.\n\n세 개의 달이 아셀의 하늘을 밝히는 그 밤, 왕궁의 문은 초대받은 귀빈들을 위하여 열릴 것이며, 보랏빛 등불 아래 펼쳐지는 축제는 오래도록 기억될 영예로운 자리가 될 것입니다.\n\n레온하르트 가문의 참석은 아셀 왕실에 더없는 기쁨이자 영광이 될 것입니다.\n\n부디 왕실의 초청을 너그러이 받아 주시어, 귀 가문의 고귀한 발걸음으로 이 자리를 빛내 주시기를 바랍니다.\n\n귀 가문의 안녕과 번영을 기원하며, 아셀 왕국의 이름으로 깊은 존경을 표합니다.\n\n아셀 왕국 왕실의 명에 따라\n왕실 의전관실\n왕실 인장 날인","next":"daniel"},
 daniel:{"speaker":"다니엘 레온하르트","text":"나는 초대장을 책상 위에 내려놓았다가 다시 집어 들었다. 연회 예법은 익숙했다. 그러나 형님의 팔에 손을 얹은 코트리먼을 태연히 바라보는 법은 삼 년 동안 한 번도 익히지 못했다.","thought":"오늘은 그녀를 찾지 말자. ……그런 다짐을 하면서도 벌써 그녀를 기다리고 있다.","next":"decision"},
 decision:{speaker:"다니엘 레온하르트",text:'초대장을 접어 두려던 다니엘은 잠시 손을 멈췄다. 왕궁으로 향하기 전, 마음을 가다듬을 시간이 조금은 남아 있었다.',choices:[{text:'초대장을 다시 읽는다.',thought:'서두르지 말자. 차근차근 준비하면 괜찮을 거야.',next:'read',effects:{resolve:1}},{text:'연회 준비를 시작한다.',next:'prepare',effects:{resolve:2}},{text:'잠시 생각에 잠긴다.',next:'reflect',effects:{resolve:1}}]},
 read:{speaker:'다니엘',text:'그는 초대장의 마지막 문장을 다시 읽었다. 세 개의 달이 떠오르는 밤이라는 표현이 유독 눈에 걸렸다. 종이 위의 금빛 장식이 촛불을 받아 작게 반짝였다.',thought:'보랏빛 밤이라니. 오늘 밤은 평소와 조금 다를지도 모르겠어.',next:'end'},
 prepare:{speaker:"다니엘 레온하르트",text:'다니엘은 옷장 문을 열고 예복의 주름부터 살폈다. 소매 단추를 가지런히 맞추는 단순한 일에도 생각보다 오랜 시간이 걸렸다.\n거울 속 자신을 바라보다가 그는 어깨를 펴고, 다시 한번 옷깃을 정리했다.',thought:'이 정도면 괜찮겠지. 너무 눈에 띄지도, 무례해 보이지도 않을 거야.',next:'end'},
 reflect:{speaker:'다니엘',text:'창가에 선 다니엘은 저택의 정원을 내려다보았다. 해가 기울고 있었고, 바람에 흔들리는 나뭇잎 사이로 저녁의 서늘함이 스며들었다.',thought:'오늘만은 코트리먼을 찾지 말자. 눈을 마주쳐도 평소처럼 인사하고, 형님 곁에 있는 모습을 견디자. 몇 번이나 다짐했지만 믿음은 가지 않았다.',next:'end'},
 end:{"speaker":"SYSTEM","text":"아셀 왕국의 연회장으로 향할 시간이 되었다. 마차가 준비되었다는 시종의 목소리에 나는 마지막으로 예복의 목깃을 정리했다.","choices":[{"text":"아셀 왕국 연회장으로 향한다.","next":"ball_arrival"},{"text":"처음부터 다시 보기","next":"intro","reset":true},{"text":"타이틀로 돌아가기","action":"home"}]},
 ball_arrival:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 아셀의 보랏빛 밤","day":1,"text":"아셀 왕국의 연회장에는 금빛 샹들리에와 보랏빛 휘장이 드리워져 있었다. 높은 창 너머로 세 개의 달이 떠올랐다.\n\n나는 홀로 입장했다. 곁에는 약혼녀도 동행인도 없었다. 차가운 잔을 쥔 채 기둥의 그늘에 멈춰 섰다. 사람들의 인사는 익숙했지만, 시선은 한 사람을 찾아 헤맸다.","thought":"코트리먼. 어디 계십니까.","next":"asel_entrance_watch"},
 ball_daniel:{speaker:'다니엘 레온하르트',text:'다니엘은 소매 끝에 달린 보라색 장식을 조심스럽게 고쳐 매었다. 반듯하게 다듬어진 옷깃과 낯선 향수 냄새가 어쩐지 자기 것이 아닌 듯했다.\n주변의 귀족들은 웃으며 대화를 나누고 있었다. 그들 사이에 서 있자니 자신의 손을 어디에 두어야 할지조차 새삼 의식되었다.',thought:'실수하지 말자. 이 옷이 어색해도 티를 내서는 안 돼. 코트리먼이 이 차림을 본다면 무슨 말을 할까. ……또 그런 생각부터 하는군.',next:'ball_choice',chapter:'CHAPTER 01'},

 asel_entrance_watch:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 빛과 그림자","text":"왈츠가 연회장을 채웠다. 나는 보랏빛 휘장과 귀족들의 어깨 너머로 문가를 바라보았다.\n\n그리고 그녀를 발견했다. 미겔 코트리먼. 남들 앞에서 한 치의 흐트러짐도 허락하지 않는, 익숙하고도 낯선 미소.\n\n나는 무의식중에 넥타이를 고쳐 매고 한 걸음을 내디뎠다.","thought":"삼 년이다. 이미 사랑하고 있다는 사실을 알면서도 참아 온 시간이. 오늘은 그저 인사만 하자.","next":"asel_entrance_alex"},
 asel_entrance_alex:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 형님의 자리","text":"그 순간 알렉스 형님이 그녀의 곁에 섰다. 형님은 익숙한 몸짓으로 코트리먼에게 팔을 내밀었다.\n\n“안색이 좋지 않군, 미겔. 불편한가?”\n\n“설마요. 제가 오늘을 얼마나 기다렸는지 모르시나요?”\n\n그녀의 대답은 매끄러웠다. 사교계가 기대하는 정략 약혼녀의 미소. 나는 그것을 알면서도 가슴이 조여 왔다.","thought":"형님께서는 아무렇지도 않게 그녀의 곁에 서신다. 나는 한 걸음 다가가는 것조차 망설이는데.","next":"asel_entrance_announce"},
 asel_entrance_announce:{"speaker":"연회 사회자","chapter":"CHAPTER 01 · 화려한 입장","text":"“귀빈 여러분, 알렉스 레온하르트 님과 미겔 코트리먼 님께서 입장하십니다!”\n\n문이 활짝 열리고 박수가 쏟아졌다. 알렉스 형님은 코트리먼과 팔짱을 낀 채 빛이 쏟아지는 중앙으로 걸어 나갔다.\n\n나는 기둥의 그림자에 남았다. 모두가 두 사람을 축복하는 동안, 내 눈에는 형님의 손과 그녀의 팔이 맞닿은 자리만 보였다.","thought":"그 자리에 서 있는 사람이 왜 나는 아닐까.","next":"asel_entrance_kiss"},
 asel_entrance_kiss:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 입맞춤","text":"“드디어 온 세상에 전하는군. 그대가 내 약혼녀라는 사실을.”\n\n형님이 웃으며 코트리먼의 뺨에 입을 맞췄다. 그녀는 예의 바르게 미소 지었다.\n\n“……그렇지도 몰라요.”\n\n잔의 테두리가 내 손가락을 파고들었다. 환호는 멀어지고, 내 귀에는 심장이 뛰는 소리만 남았다.\n\n그녀가 형님을 사랑하는지 나는 알지 못한다. 다만 형님은 세상의 허락을 받아 그녀에게 닿을 수 있고, 나는 그 장면을 숨죽여 바라봐야 한다.","thought":"형님은 좋으시겠습니다. ……이런 생각을 하는 제가 싫습니다.","next":"asel_entrance_choice"},
 asel_entrance_choice:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 이성 / 본능 / 경계 침범","text":"삼 년 동안 참아 왔다. 형님의 동생으로, 코트리먼의 귀여운 아이로.\n\n그녀가 나를 향해 꾸밈없이 웃어 주던 순간들을 나는 기억한다. 그러나 그 친밀함이 그녀를 내 것으로 만들어 주지는 않는다.\n\n지금 내 안에서 무언가가 끊어질 듯 팽팽해졌다. 나는 이 감정을 어떻게 다룰 것인가.","thought":"사랑은 이미 시작되었다. 이제 남은 건, 그 마음으로 무엇을 하느냐뿐이다.","choices":[{"text":"【이성】 아무렇지 않은 얼굴로 축복한다.","next":"asel_reason","v91Moral":"virtue","effects":{"resolve":2}},{"text":"【본능】 그녀가 나를 보기를 바라며 빛 쪽으로 걸어간다.","next":"asel_instinct","effects":{"risk":2}},{"text":"【경계 침범】 두 사람 사이를 갈라놓을 명분을 찾는다.","next":"asel_boundary","v91Moral":"karma","effects":{"risk":4}}]},
 asel_reason:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 이성","text":"나는 잔을 내려놓고 천천히 숨을 골랐다. 형님의 약혼을 축하하는 박수에 조용히 손을 보탰다.\n\n손바닥이 아팠다. 코트리먼의 웃음을 바라보는 것보다, 그 웃음이 내게 향하지 않는다는 사실을 인정하는 것이 더 아팠다.","thought":"그녀가 행복할 권리와 내가 그녀를 사랑하는 마음은 별개다. 그 사실을 잊지 말자.","next":"v108_title"},
 asel_instinct:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 본능","text":"나는 기둥의 그림자에서 나와 사람들 사이로 한 걸음 옮겼다. 코트리먼이 나를 발견할 수 있는 자리였다.\n\n그녀의 시선이 이쪽을 스친 듯했다. 우연일지도 모른다. 그럼에도 나는 그 짧은 순간을 놓지 못했다.","thought":"한 번만. 형님의 약혼녀가 아니라, 나를 아는 코트리먼으로 나를 봐 주시면 안 됩니까.","next":"v108_title"},
 asel_boundary:{"speaker":"다니엘 레온하르트","chapter":"CHAPTER 01 · 경계 침범","text":"박수 소리 속에서 나는 생각했다. 형님을 잠시 다른 곳으로 부를 수 있다면, 그녀와 단둘이 이야기할 기회가 생길 것이다.\n\n그것이 그녀의 뜻인지 나는 묻지 않았다. 내 마음이 급하다는 이유로 그녀의 선택을 뒤로 미루는 순간이었다.","thought":"그저 한 번만 내 쪽을 보게 하면 된다. ……나는 지금 무엇을 정당화하고 있는 거지.","next":"v108_title"},
 v108_intro_entrance:{"speaker": "다니엘 레온하르트", "chapter": "INTRO · 사슬의 시작", "text": "아셀 연회의 마지막 밤. 대무도회장의 빛은 눈부셨고, 나는 기둥의 그늘에 홀로 서 있었다.\n\n세 개의 달이 뜬 창 너머로, 내 시선은 단 한 사람을 찾았다.\n\n미겔 코트리먼. 삼 년 동안 사랑해 온, 형님의 약혼녀.", "next": "asel_entrance_watch", "day": 7},
 v108_title:{"speaker": "SYSTEM", "chapter": "DELHARSA · 보라색의 밤", "text": "《 DELHARSA : 보라색의 밤 》\n\n그날 밤의 마지막 불꽃이 사그라지기 전, 이야기는 연회가 시작된 첫날로 돌아간다.", "next": "v108_prologue_invite", "day": 1},
 v108_prologue_invite:{"speaker": "아셀 왕실의 초대장", "chapter": "PROLOGUE · 아셀의 7일", "text": "처음 아셀의 편지를 받았던 날이 떠올랐다. 일주일간의 연회, 그리고 마지막 날의 대무도회.\n\n봉투를 내려놓고 여행 채비를 시작했다. 그곳에서 그녀를 마주할 일곱 날을 생각하며.", "next": "v108_day1", "day": 1},
 v108_day1:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · DAY 1 / 개막", "text": "아셀의 보랏빛 휘장 아래, 귀족들은 저마다의 가면을 쓰고 인사했다. 나는 사람들 사이에서 코트리먼을 보았다.\n\n그녀는 완벽하게 웃었다. 누구에게나 공평하게, 속내를 조금도 드러내지 않는 미소였다.", "next": "v108_day2", "day": 1},
 v108_day2:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · DAY 2 / 오래된 기억", "text": "그녀의 목소리를 듣자 삼 년 전의 기억이 떠올랐다. 그때 나는 그저 형님의 약혼녀를 예의 바르게 대하려 했다.\n\n하지만 어느 순간부터 그녀가 내 이름을 부르는 방식과, 다른 이들이 떠난 뒤 조금 느슨해지는 표정을 기다리게 되었다.\n\n어느 한순간의 기적이 아니라, 되풀이되는 작은 순간들이 나를 바꾸었다.", "next": "v108_day3", "day": 2},
 v108_day3:{"speaker": "미겔 코트리먼", "chapter": "PROLOGUE · DAY 3 / 가면 아래", "text": "사람들이 떠난 작은 회랑에서 코트리먼이 어깨를 가볍게 풀었다.\n\n“아아, 오늘도 긴 하루였구나. 다니엘, 너는 아직도 그렇게 반듯하게 서 있을 셈이니?”\n\n나는 웃음을 참았다. 사교계가 아는 영애와 내 앞의 그녀는 조금 달랐다. 그 사실이 내게 어떤 권리도 주지 않는다는 것을 알면서도.", "next": "v108_day4", "day": 3},
 v108_day4:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · DAY 4 / 사랑의 이름", "text": "삼 년 전, 나는 깨달았다. 그녀를 만나지 못한 날에도 그녀의 말과 표정을 떠올리고 있다는 사실을.\n\n그것을 사랑이라고 부르는 순간, 가장 먼저 떠오른 것은 기쁨이 아니었다. 형님이었다.\n\n그때부터 나는 형님의 동생으로 남기 위해 내 마음을 숨겼다.", "next": "v108_day5", "day": 4},
 v108_day5:{"speaker": "알렉스 레온하르트", "chapter": "PROLOGUE · DAY 5 / 형의 부재", "text": "“영지에 일이 생겼어. 직접 가서 정리하고 오지.”\n\n알렉스 형님은 성가신 일을 처리하러 가는 사람답게 빠르고 자신 있게 결정을 내렸다.\n\n“다니엘, 내가 없는 동안 미겔이 불편하지 않게 신경 좀 써 줘. 마지막 무도회 전에는 돌아올 테니까.”\n\n“……알겠습니다, 형님.”\n\n그 신뢰가 내게는 잔인했다.", "next": "v108_day6", "day": 5},
 v108_day6:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · DAY 6 / 두 사람의 거리", "text": "형님이 없는 동안, 코트리먼과 나는 잠시 정원에 나란히 섰다.\n\n“귀여운 아이. 무슨 걱정이 그리 많니?”\n\n그녀는 남들 앞에서의 미소 대신, 피곤하고 솔직한 얼굴로 나를 바라보았다.\n\n나는 그 얼굴을 사랑했다. 그래서 더욱, 그녀가 허락하지 않은 의미를 멋대로 붙이지 않으려 애썼다.", "next": "v108_day7", "day": 6},
 v108_day7:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · DAY 7 / 마지막 대무도회", "text": "형님은 약속대로 돌아왔다. 대무도회장의 문이 열리고, 형님은 코트리먼에게 손을 내밀었다.\n\n두 사람이 함께 빛 속으로 걸어가는 모습을 바라보자, 첫날부터 쌓아 온 일주일의 기억이 한꺼번에 되살아났다.\n\n일주일 내내 피하려 했던 순간이 눈앞에 와 있었다.", "next": "v108_fireworks", "day": 7},
 v108_fireworks:{"speaker": "다니엘 레온하르트", "chapter": "PROLOGUE · FIN / 보라색의 밤", "text": "테라스 너머로 마법의 불꽃들이 솟아올랐다. 세 개의 달 아래, 보라색 밤하늘에 흰 불꽃이 부서졌다.\n\n일주일이라는 길고도 짧은 시간. 누군가에게는 찬란한 축제였을 그 밤들이 내게는 끝나지 않을 형벌과도 같았다.\n\n아셀의 연회는 끝났다. 그러나 내 안의 밤은 이제 막 시작되었을 뿐이었다.", "next": "v108_after_ball", "day": 7},
 v108_after_ball:{"speaker": "알렉스 레온하르트", "chapter": "ACT 01 · 영지로 향하는 길", "text": "연회가 끝난 뒤, 형님은 내게 코트리먼 영지의 수로와 관개 상태를 살펴 달라고 부탁했다. 자신의 일정이 겹친다는 이유였다.\n\n“미겔에게도 이야기해 뒀어. 네가 가 주면 마음이 놓이겠군.”\n\n나는 형님의 부탁을 거절하지 못했다.", "next": "rose_intro", "day": 8},
 ball_choice:{speaker:"다니엘 레온하르트",text:'연회장의 안쪽에서는 웃음소리와 잔 부딪치는 소리가 끊이지 않았다. 다니엘은 익숙한 얼굴을 찾으려 주변을 살폈다. 어느 쪽으로 먼저 발을 옮겨야 할까.',chapter:'CHAPTER 01',choices:[{text:'연회장 안쪽으로 들어간다.',next:'v92_court_whispers',effects:{resolve:1}},{text:'주변 귀족들에게 인사한다.',next:'ball_greeting',effects:{reputation:2}},{text:'잠시 숨을 고른다.',next:'ball_rest',effects:{resolve:2}}]},
 ball_greeting:{speaker:"다니엘 레온하르트",text:"나는 먼저 눈이 마주친 귀족들에게 정중히 인사를 건넸다. 처음에는 목소리가 조금 굳었지만, 상대가 웃으며 답하자 숨을 고를 수 있었다.\n짧은 대화가 끝나고 나서야 나는 내가 줄곧 잔의 받침을 꽉 쥐고 있었다는 사실을 깨달았다.",thought:'생각보다 어렵지는 않았어. 다음에도 이렇게 하면 되겠지.',next:'v92_court_whispers',chapter:'CHAPTER 01'},
 ball_rest:{speaker:'다니엘 레온하르트',text:"나는 사람들의 동선에서 조금 비켜섰다. 대리석 기둥에 기대지는 않은 채 조용히 숨을 골랐다. 멀리서 들려오는 음악은 여전히 우아했지만, 가까운 곳에서는 수많은 목소리가 뒤섞여 있었다.",thought:'괜찮아. 잠깐만 숨을 고르면 돼. 아무도 나를 이상하게 보지 않았을 거야.',next:'v92_court_whispers',chapter:'CHAPTER 01'},
 v92_court_whispers:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 왕궁의 속삭임',text:"연회장의 서쪽 회랑에는 향초의 달콤한 냄새가 감돌았다. 나는 샹들리에 아래를 지나려다 우리 가문의 문장이 수놓인 소매를 보고 시선을 피하는 귀족 둘을 발견했다.\n\n“레온하르트가의 막내라지요.”\n\n“알렉스 경의 약혼녀와도 친분이 있다던데. 코트리먼 후작 영애 말이에요.”\n\n이름 하나가 입 밖으로 나오자 두 사람의 목소리가 낮아졌다. 나는 내가 아직 아무 말도 하지 않았다는 사실이 오히려 불편했다.",thought:'형님과 코트리먼 이야기를 왜 저렇게 하는 거지. 모르는 척 지나가야 하나.',next:'v92_court_choice'},
 v92_court_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 왕궁의 속삭임',text:"기둥 너머에서 누군가의 잔이 가볍게 부딪혔다. 소문은 사실을 묻기 전에 사람을 먼저 판단한다. 나는 발걸음을 옮기려다 멈췄다.",choices:[{text:'근거 없는 소문을 정중하게 바로잡는다.',next:'v92_court_correct',v91Moral:'virtue',effects:{reputation:1}},{text:'아무 말 없이 자리를 떠난다.',next:'v92_court_leave',effects:{resolve:1}},{text:'그들의 말을 이용해 미겔을 압박할 생각을 한다.',next:'v92_court_shadow',v91Moral:'karma'}]},
 v92_court_correct:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"“실례합니다. 두 분께서 말씀하시는 일에 제가 관련되어 있는 듯합니다.”\n\n나는 목소리가 떨리지 않도록 천천히 숨을 골랐다. “코트리먼과 형님의 약혼을 두고 확인되지 않은 이야기를 퍼뜨리는 건 삼가 주셨으면 합니다.”\n\n두 귀족은 불편한 표정으로 고개를 돌렸다. 나는 그들의 사과를 강요하지 않았다. 다만 한 번 꺼낸 말은 주워 담을 수 없다는 사실을, 나부터 기억하기로 했다.",thought:'괜한 참견이었을까. 그래도 형님이 이 말을 들으셨다면 나처럼 하셨을 거야.',next:'v92_servant_event'},
 v92_court_leave:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 소리가 나지 않도록 걸음을 옮겼다. 나를 향한 시선이 사라진 뒤에도 귀 끝이 뜨거웠다.\n\n소문을 바로잡을 용기가 없었다는 사실과, 누군가의 약혼을 가벼운 화제로 삼는 이들에게 화가 났다는 사실은 동시에 참일 수 있었다.",thought:'지금은 끼어들지 않는 편이 낫겠지. 그렇지만 나중에는…….',next:'v92_servant_event'},
 v92_court_shadow:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 두 귀족의 목소리를 끝까지 들었다. 그들이 두려워하는 이름, 궁정에서 통하는 소문, 누구의 눈치를 보는지까지.\n\n누군가의 평판은 생각보다 쉽게 흔들린다. 그 사실을 알아차린 순간 나는 스스로가 낯설어졌다. 아직 아무 일도 하지 않았는데도, 마음 한쪽에 차가운 계산이 자리 잡았다.",thought:'이런 말 한마디에도 사람은 움직이는구나. ……내가 왜 그런 생각을 했지.',next:'v92_servant_event'},
 v92_servant_event:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 작은 선택',text:"회랑 끝에서 유리잔이 깨지는 소리가 났다. 어린 시종이 무릎을 꿇은 채 파편을 줍고 있었다. 바닥에 번진 포도주가 고급 융단으로 스며들자, 근처의 귀족이 노골적으로 얼굴을 찌푸렸다.\n\n“그 융단 값은 네 평생 품삯으로도 모자라겠구나.”\n\n시종은 대답 대신 손등으로 눈가를 문질렀다. 나는 그 아이의 손가락에 작은 상처가 난 것을 보았다.",next:'v92_servant_choice'},
 v92_servant_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 작은 선택',text:"지금 손을 내밀면 사람들의 눈길이 내게 쏠릴 것이다. 반대로 그냥 지나치면 누구도 나를 탓하지 않을 터였다.",choices:[{text:'시종을 일으키고 치료를 부탁한다.',next:'v92_servant_help',v91Moral:'virtue',effects:{trust:1}},{text:'관리인에게 조용히 상황을 알린다.',next:'v92_servant_report',effects:{resolve:1}},{text:'시종에게 책임을 떠넘기며 귀족의 비위를 맞춘다.',next:'v92_servant_betray',v91Moral:'karma',effects:{reputation:1}}]},
 v92_servant_help:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 손수건을 꺼내 아이의 손을 감쌌다. “파편은 제가 치우겠습니다. 먼저 치료를 받으세요.”\n\n“도련님, 저는…….”\n\n“다친 사람이 먼저입니다.”\n\n내가 고개를 들자 몇몇 귀족이 어색하게 시선을 돌렸다. 시종은 몇 번이나 허리를 숙였다. 나는 감사 인사를 받을 때마다 내가 한 일이 거창하지 않다는 생각만 들었다.",thought:'누구든 다치면 도와야지. 그런데 왜 이런 일에까지 용기가 필요할까.',next:'v92_alex_foreshadow'},
 v92_servant_report:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 가까운 관리인을 불러 시종이 다쳤다고 알렸다. 아이를 혼내려던 귀족은 관리인이 다가오자 입을 다물었다.\n\n나는 직접 나서지는 못했지만, 시종이 치료실로 향하는 것을 끝까지 지켜보았다. 아무것도 하지 않은 것과, 할 수 있는 만큼 한 것은 다르다고 믿고 싶었다.",thought:'더 잘할 수도 있었겠지. 그래도 저 아이가 다친 채 남아 있지는 않겠어.',next:'v92_alex_foreshadow'},
 v92_servant_betray:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 시종에게 눈길을 주지 않은 채 귀족의 말에 동조했다. 상대는 만족스럽게 웃었고, 잠시 뒤 내게 잔을 건넸다.\n\n그러나 깨진 유리 조각이 치워진 자리에는 붉은 얼룩이 남았다. 나는 잔을 받으면서도 손끝을 감추었다. 방금 내가 무엇을 얻었는지, 그 대가로 누가 울었는지 알 수 없었다.",thought:'고작 이런 일로 호의를 얻었어. ……기뻐해야 하는 걸까.',next:'v92_alex_foreshadow'},
 v92_alex_foreshadow:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 형의 약속',text:"“다니엘.”\n\n익숙한 목소리에 돌아보니 알렉스가 회랑 입구에 서 있었다. 둘째 형은 연회장에서도 여유를 잃지 않는 사람이었다. 하지만 내 얼굴을 살피는 눈길만큼은 조금도 가볍지 않았다.\n\n“얼굴이 굳었네. 누가 우리 막내를 괴롭혔어?”\n\n장난스러운 말투였다. 나는 그 말 뒤에 숨은 걱정을 알아차렸다.",next:'v92_alex_choice'},
 v92_alex_choice:{speaker:'알렉스 레온하르트',chapter:'CHAPTER 01 · 형의 약속',text:"“미겔도 오늘 왔어. 나중에 같이 인사하자. 그 사람은 네가 긴장하면 더 신경 써 줄 거야.”\n\n알렉스는 웃었다. 나는 그 웃음에 아무런 의심이 없다는 사실이 문득 두려웠다.",choices:[{text:'형에게 연회장에서 들은 소문을 솔직히 말한다.',next:'v92_alex_truth',v91Moral:'virtue',effects:{trust:1}},{text:'괜찮다며 웃어 보인다.',next:'v92_alex_silence',effects:{resolve:1}},{text:'미겔과의 약혼이 정말 행복한지 날카롭게 묻는다.',next:'v92_alex_question',effects:{resolve:1}}]},
 v92_alex_truth:{speaker:'알렉스 레온하르트',chapter:'CHAPTER 01',text:"내 설명을 들은 알렉스는 잠시 웃음을 거두었다. 그러나 화를 내는 대신 내 어깨에 손을 올렸다.\n\n“네가 그 말을 혼자 듣게 해서 미안하다. 하지만 소문은 소문일 뿐이야. 미겔과 나는 서로에게 책임질 말을 하고 있어.”\n\n알렉스는 이내 눈을 휘었다. “그리고 넌 내 동생이잖아. 혼자 다 짊어지지 마.”",thought:'형님은 언제나 이렇게 쉽게 나를 믿는다. 그 믿음을 잃게 된다면…….',next:'ball_miguel'},
 v92_alex_silence:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"“그럼 다행이고.”\n\n알렉스는 내 옷깃을 한 번 매만졌다. 어릴 적부터 해 오던 버릇이었다. 나는 형의 손이 떨어진 자리를 한참 내려다보았다.\n\n말하지 않은 것이 거짓말이 되는 순간이 있을까. 나는 아직 답을 알지 못했다.",thought:'형님께는 걱정을 끼치고 싶지 않아. 적어도 오늘 밤만큼은.',next:'ball_miguel'},
 v92_alex_question:{speaker:'알렉스 레온하르트',chapter:'CHAPTER 01',text:"알렉스는 놀란 듯 눈썹을 올렸다가, 내 얼굴을 가만히 살폈다.\n\n“행복하냐고? 물론이지. 그렇다고 미겔이 내 뜻대로만 움직이는 사람이라는 뜻은 아니야.”\n\n그는 잠시 연회장 쪽을 돌아보았다. “우리는 서로 다른 사람이니까. 그래서 더 오래 이야기하려고 해.”\n\n나는 형이 나를 꾸짖지 않았다는 사실에 오히려 가슴이 답답해졌다.",thought:'형님은 미겔을 소유하려 하지 않는다. ……그런데 나는 왜 그 말을 듣고 마음이 불편하지.',next:'ball_miguel'},
 ball_miguel:{speaker:"다니엘 레온하르트",text:"연회장 건너편에서 익숙한 모습이 눈에 들어왔다. 미겔 코트리먼이었다.\n그녀는 화려한 장식 사이에서도 지나치게 자신을 드러내지 않았다. 누군가 말을 건네면 고개를 기울여 듣고, 적당한 순간에 부드럽게 미소 지었다. 나는 나도 모르게 걸음을 늦췄다.\n그녀는 둘째 형 알렉스의 약혼자였다. 처음 알게 된 사실도, 새삼 깨달은 사실도 아니었다. 나는 그 사실을 알고도 오래도록 그녀를 사랑해 왔다.",thought:'코트리먼이다. 형님과 함께 오셨겠지. 저 얼굴을 보려고 연회장을 몇 번이나 훑었는지 들키면 안 돼.',next:'ball_meeting',chapter:'CHAPTER 01'},
 ball_meeting:{speaker:"다니엘 레온하르트",text:"나는 손에 쥔 잔을 내려다보았다. 이쪽에서 몇 걸음만 옮기면 그녀에게 닿을 거리였다. 그러나 그 짧은 거리가 이상하리만치 멀게 느껴졌다.",chapter:'CHAPTER 01',choices:[{text:'정중히 인사를 건넨다.',thought:'괜히 대화를 방해하는 건 아닐까. 그래도 못 본 척 지나치는 건 예의가 아니겠지.',next:'ball_hello',effects:{trust:2}},{text:'적당한 거리를 유지한다.',next:'ball_distance',effects:{resolve:2}},{text:'먼저 주변 상황을 살핀다.',next:'ball_watch',effects:{reputation:1}}]},
 ball_hello:{speaker:"다니엘 레온하르트",text:"나는 자세를 바로잡고 미겔 앞에서 고개를 숙였다.\n“코트리먼. ……안녕하십니까.”\n인사 자체는 무난했다. 그런데도 고개를 드는 순간, 그녀가 어떤 표정을 짓고 있을지 괜히 신경이 쓰였다.",thought:'평소처럼 인사했을 뿐이다. 그런데도 저 사람이 나를 바라보는 순간, 준비한 말이 전부 사라져 버린다.',next:'demo_end',chapter:'CHAPTER 01'},
 ball_distance:{speaker:"다니엘 레온하르트",text:"나는 인사를 건넬 기회를 기다리며 한 발 물러섰다. 그녀가 대화를 마칠 때까지 서둘러 끼어들 생각은 없었다.\n하지만 기다리는 동안에도 시선은 자꾸만 같은 곳으로 향했다.",thought:'지금은 방해하지 않는 편이 낫겠어. 조금 뒤에 다시 기회가 있겠지.',next:'demo_end',chapter:'CHAPTER 01'},
 ball_watch:{speaker:"다니엘 레온하르트",text:"나는 주변의 움직임부터 살폈다. 시종들이 빈 잔을 거두고, 손님들은 음악이 바뀔 때마다 자리를 옮겼다.\n미겔에게 다가갈 적당한 순간을 찾는 일이 이렇게 어려울 줄은 몰랐다.",thought:'너무 갑작스럽게 다가가면 실례일 테니까. 자연스러운 때를 기다리자.',next:'demo_end',chapter:'CHAPTER 01'},
 demo_end:{speaker:'다니엘 레온하르트',text:"나는 연회장 너머로 시선을 돌렸다. 조금 전까지 보이던 미겔의 모습은 어느새 사람들 사이로 사라지고 없었다.\n나는 무심코 발을 옮겼다가, 내 행동을 깨닫고 멈춰 섰다.",chapter:'CHAPTER 01',thought:'어디로 가셨지? 아니, 굳이 찾는 건 아니야. 아직 제대로 인사를 드리지 못했을 뿐이니까.',next:'explore'},
 explore:{speaker:"다니엘 레온하르트",text:'왕궁 탐색 · 미겔의 행방을 찾아보세요.\n장소를 이동하면 시간이 흐릅니다. 단서를 모으면 특별한 장소가 열립니다.',chapter:'CHAPTER 01',explore:true},
 explore_hint:{speaker:"다니엘 레온하르트",text:'회랑의 시종에게 조심스레 행방을 묻자 최근 목격 장소를 알려주었다.\n하지만 미겔도 계속 이동하고 있다. 너무 늦으면 단서가 빗나갈지도 모른다.',chapter:'CHAPTER 01',next:'explore'},
 explore_empty:{speaker:'다니엘 레온하르트',text:"나는 텅 빈 회랑을 다시 한번 둘러보았다. 멀리서 문이 닫히는 소리가 들렸지만, 기다리던 발소리는 아니었다.\n나는 조금 전 지나온 길을 떠올리며 소매 끝을 만지작거렸다.",chapter:'CHAPTER 01',thought:'여기도 안 계시는군. 형님의 약혼자에게 인사를 드리는 건 당연한 일인데…… 같은 길을 몇 번이나 돌아다닐 필요까지 있을까.',next:'explore'},
 explore_alex:{speaker:"다니엘 레온하르트",text:"회랑 건너편에서 알렉스 레온하르트가 모습을 드러냈다. 사람들과 여유롭게 인사를 나누던 둘째 형은 나를 발견하자 익숙한 얼굴로 고개를 돌렸다.\n나는 반사적으로 자세를 바로잡았다. 평소라면 반가웠을 만남이 오늘만큼은 묘하게 당황스러웠다.",chapter:'CHAPTER 01',choices:[{text:'정중하게 인사한다.',thought:'형님께서 왜 여기 계시지? 코트리먼을 찾고 있었다고 말씀드리면 이상하게 생각하실까.',next:'alex_greeting',effects:{reputation:2}},{text:'연회장에 관한 이야기로 화제를 돌린다.',next:'alex_smalltalk',effects:{resolve:1}},{text:'잠시 자리를 피해도 되는지 양해를 구한다.',next:'alex_excuse',effects:{risk:1}}]},
 alex_greeting:{speaker:'다니엘 레온하르트',text:"“형님. ……안녕하십니까.”\n나는 정중하게 고개를 숙였다. 알렉스가 자연스럽게 인사를 받아 주는 동안에도 나는 소매를 한번 고쳐 잡았다.",chapter:'CHAPTER 01',thought:'평소처럼 행동하면 돼. 형님은 아무것도 이상하게 여기지 않으실 거야.',next:'explore'},
 alex_smalltalk:{speaker:'다니엘 레온하르트',text:"“오늘 연회는…… 성대하군요.”\n내 말에 알렉스는 가볍게 웃으며 연회장 쪽을 돌아보았다. 평범한 대화였지만, 나는 괜히 내가 지나치게 말을 고르고 있다고 느꼈다.",chapter:'CHAPTER 01',thought:'왜 이렇게 뻔한 말밖에 떠오르지 않지. 형님 앞인데도.',next:'explore'},
 alex_excuse:{speaker:'다니엘 레온하르트',text:"“죄송합니다. 잠시 실례해도 되겠습니까?”\n알렉스가 선선히 길을 비켜 주자 나는 고개를 숙이고 회랑 끝으로 걸음을 옮겼다. 발소리가 멀어진 뒤에야 어깨에 들어간 힘이 조금 풀렸다.",chapter:'CHAPTER 01',thought:'갑자기 자리를 뜬 건 무례했을까. 다음에 만나면 다시 인사를 드려야겠어.',next:'explore'},
 alex_miguel:{speaker:"다니엘 레온하르트",text:"미겔의 곁에는 알렉스가 서 있었다. 두 사람은 오래 알고 지낸 사이답게 자연스럽게 대화를 이어 갔다.\n“알렉.”\n미겔이 익숙한 호칭으로 그를 부르는 소리에 나는 잠시 멈췄다. 형님과 코트리먼. 두 사람의 약혼은 오래전부터 분명한 사실이었다.",chapter:'CHAPTER 01',choices:[{text:'두 사람에게 정중히 인사한다.',thought:'두 분이 함께 계시는군. 당연한 일인데…… 내가 지금 끼어들어도 괜찮을까.',next:'alex_miguel_greet',effects:{reputation:2,trust:1}},{text:'방해하지 않고 조용히 물러선다.',next:'alex_miguel_leave',effects:{resolve:1}},{text:'급히 발걸음을 돌린다.',next:'alex_miguel_flee',effects:{risk:2}}]},
 alex_miguel_greet:{speaker:'다니엘 레온하르트',text:"“형님, 코트리먼. ……좋은 밤입니다.”\n나는 두 사람에게 차례로 고개를 숙였다. 알렉스는 평소와 다름없이 반갑게 응했고, 미겔 역시 온화한 미소를 지었다.\n그것만으로도 나는 조금 안도했다.",chapter:'CHAPTER 01',thought:'괜찮아. 평범한 인사였어. 그런데 왜 이렇게 심장이 빨리 뛰는 거지.',next:'explore'},
 alex_miguel_leave:{speaker:"다니엘 레온하르트",text:"나는 두 사람에게 방해가 되지 않도록 조용히 물러섰다. 뒤편에서 이어지는 대화 소리가 한동안 귓가에 남았다.\n회랑으로 접어든 뒤에도 나는 쉽게 발걸음을 재촉하지 못했다.",chapter:'CHAPTER 01',thought:'인사는 다음에 드려도 돼. 지금은 두 분만의 시간을 방해하지 않는 편이 낫겠지.',next:'explore'},
 alex_miguel_flee:{speaker:'다니엘 레온하르트',text:"“……아.”\n나는 무심코 방향을 틀었다. 너무 급한 움직임이었다는 사실을 깨달은 것은 이미 몇 걸음이나 멀어진 뒤였다.\n나는 천천히 속도를 늦추며 아무 일도 없었던 듯 옷깃을 정리했다.",chapter:'CHAPTER 01',thought:'오히려 더 눈에 띄었을지도 몰라. 왜 이렇게 서둘렀지.',next:'explore'},
 explore_found:{speaker:"다니엘 레온하르트",text:"온실 입구에는 노란 장미가 가지런히 심겨 있었다. 유리 천장 너머로 스며든 달빛이 꽃잎 위에 희미한 윤곽을 남겼다.\n조용한 발소리에 미겔 코트리먼이 고개를 돌렸다.\n“어머, 다니엘 공자님. 여기까지 오셨구나. 밤바람이 차니 안으로 들어오렴.”\n나는 준비해 둔 인사말을 순간 잊어버렸다.",chapter:'CHAPTER 01',choices:[{text:'“우연히 지나던 길이었습니다.”',thought:'드디어 뵈었다. 그런데 이제 무슨 말씀을 드려야 하지.',next:'found_shy',effects:{affection:2,risk:1}},{text:'“인사를 드리고 싶었습니다.”',next:'found_honest',effects:{trust:3,resolve:2}},{text:'“불편하셨다면 물러나겠습니다.”',next:'found_polite',effects:{trust:2}}]},
 found_shy:{speaker:'다니엘 레온하르트',text:"“우연히 지나던 길이었습니다.”\n입 밖으로 나온 말을 듣고 나는 속으로 한숨을 삼켰다. 이미 같은 복도를 여러 번 지나왔으면서도 하필 이런 변명을 고른 것이다.\n나는 미겔의 눈을 오래 마주하지 못하고 시선을 내렸다.",chapter:'CHAPTER 01',thought:'우연이라니. 정말 어설픈 변명이야. 그저 인사를 드리고 싶었다고 말하면 될 텐데.',next:'miguel_conversation'},
 found_honest:{speaker:'미겔 코트리먼',text:"“그랬구나, 귀여운 아이. 어떤 마음으로 찾아왔는지 굳이 서둘러 말하지 않아도 된단다.”\n미겔은 내가 말을 고를 수 있도록 조용히 기다렸다. 재촉하지 않는 태도가 오히려 나를 조금 편안하게 했다.",chapter:'CHAPTER 01',thought:'이상하게 생각하지 않으시는 걸까. 조금은 안심해도 되겠지.',next:'miguel_conversation'},
 found_polite:{speaker:'미겔 코트리먼',text:"“괜찮단다. 잠시 머물다 가렴. 이곳은 바람이 제법 온화하거든.”\n미겔은 온실 안쪽으로 시선을 돌렸다. 유리창에 비친 달빛이 그녀의 옆얼굴을 부드럽게 밝혔다. 나는 물러서려던 발을 조심스럽게 멈췄다.",chapter:'CHAPTER 01',thought:'머물러도 된다고 하셨으니까. 잠깐만 더 있어도 괜찮겠지.',next:'miguel_conversation'},
 miguel_conversation:{speaker:'미겔 코트리먼',text:"“오늘은 알렉과 함께 왔단다. 혹시 그를 찾고 있니?”\n미겔은 담담하게 물었다. 그녀에게는 자연스러운 질문이었다. 나는 형의 이름을 듣고 나도 모르게 손끝에 힘을 주었다.",chapter:'CHAPTER 01',choices:[{text:'“아닙니다. 코트리먼께 인사를 드리고 싶었습니다.”',thought:'형님을 찾고 있었던 건 아닌데. 그렇다고 코트리먼을 찾아다녔다고 솔직하게 말씀드려도 될까.',next:'miguel_truth',effects:{trust:2,affection:1,risk:1}},{text:'“형님께서 어디 계신지 여쭈려 했습니다.”',next:'miguel_alex',effects:{reputation:1,resolve:1}},{text:'“실례했습니다. 이만 물러나겠습니다.”',next:'miguel_retreat',effects:{resolve:2}}]},
 miguel_truth:{speaker:'미겔 코트리먼',text:"“그랬구나, 귀여운 아이.”\n미겔은 그 이상 캐묻지 않았다. 잠시 내 소매를 살피던 그녀가 부드럽게 말을 이었다.\n“오늘은 평소와 다른 옷을 입었구나, 다니엘. 네게 잘 어울려.”\n나는 얼른 감사 인사를 해야 한다는 걸 알면서도 잠깐 말을 잃었다.",chapter:'CHAPTER 01',thought:'이런 작은 변화까지 알아보셨구나. 괜히 얼굴이 뜨거워지는 것 같아.',next:'v93_temptation_open'},
 miguel_alex:{speaker:'미겔 코트리먼',text:"“알렉이라면 연회장 안쪽에 있을 거란다.”\n미겔은 자연스럽게 방향을 알려 주었다. 나는 정중히 감사 인사를 했지만, 정작 내가 찾아 헤매던 사람은 눈앞에 있었다.",chapter:'CHAPTER 01',thought:'형님께서 어디 계시는지 궁금했던 건 아닌데. 이제 와서 말을 바꿀 수도 없겠지.',next:'v93_temptation_open'},

 v93_temptation_open:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 미겔의 유혹',text:"온실 안쪽에서 바람이 불자 노란 장미의 향이 두 사람 사이로 번졌다. 미겔은 떨어진 꽃잎 하나를 집어 손바닥 위에 올려놓았다.\n\n“어머, 다니엘 공자님. 그리 긴장하지 않아도 된단다. 내가 그렇게 무서워 보이니?”\n\n그녀가 장난스럽게 눈을 휘었다. 나는 대답 대신 숨을 삼켰다. 미겔의 말은 다정한 농담에 가까웠다. 그런데도 내게는 한 발 가까이 다가오라는 유혹처럼 들렸다.\n\n그 순간 연회장 쪽에서 알렉스의 웃음소리가 희미하게 들려왔다. 나는 형님께서 이곳에 계시지 않다는 사실에 안도한 나를 깨닫고 흠칫했다.",thought:'형님의 약혼자야. 알고 있어. 그런데 왜…… 이 순간이 끝나지 않았으면 좋겠지.',next:'v93_temptation_rose'},
 v93_temptation_rose:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01 · 미겔의 유혹',text:"“꽃잎이 네 어깨에 붙었구나.”\n\n미겔은 손을 뻗으려다 내가 굳어 있는 것을 보고 잠시 멈췄다. “떼어 줘도 되겠니?”\n\n내가 고개를 끄덕이자 그녀는 어깨 위의 꽃잎만 조심스럽게 집어 들었다. 손끝이 스쳐 지나간 것은 한순간이었다.\n\n“이제 됐단다.”\n\n미겔은 아무 일도 없었다는 듯 웃었다. 내게는 그 짧은 순간이 오래 남았다. 다정함과 허락, 그리고 그 너머의 욕망을 구별해야 한다는 사실을 나는 알고 있었다.",thought:'그분은 내게 친절했을 뿐이야. 하지만 내 마음은 그렇게 간단하지 않아.',next:'v93_temptation_choice'},
 v93_temptation_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 이성과 본능',text:"미겔이 온실 문을 향해 몸을 돌렸다. 한 걸음만 더 내디디면 그녀를 붙잡을 수 있을 것 같았다.\n\n나는 손을 들어 올리다 멈췄다.\n\n이성은 말한다. 오래전부터 알고 있었다. 그녀는 형님의 약혼녀이고, 그녀의 다정함은 약속이 아니다. 오늘도 참아야 한다.\n\n본능은 속삭인다. 이미 수없이 참았으니, 이번 한 번만큼은 마음을 드러내도 되지 않겠느냐고.\n\n나는 어느 쪽의 목소리를 따라야 할까.",thought:'선택해야 해. 그분의 마음을 멋대로 정하지 않고도, 내 마음을 인정할 수 있을까.',choices:[{text:'【이성】 마음을 가라앉히고 미겔의 뜻과 약속을 존중한다.',next:'v93_reason',v91Moral:'virtue',effects:{trust:2,resolve:3}},{text:'【본능】 한 걸음 다가가 솔직하게 마음을 드러낸다.',next:'v93_instinct',effects:{affection:2,risk:3}},{text:'【경계 침범】 떠나려는 미겔의 손목을 붙잡는다.',next:'v93_crossed_line',v91Moral:'karma',effects:{risk:5,trust:-3}}]},
 v93_reason:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 이성',text:"“코트리먼. 오늘도 저를 다정히 대해 주셔서 감사합니다.”\n\n나는 들려 있던 손을 천천히 내렸다. “형님과 함께 돌아가셔야 할 시간이겠지요. 제가 배웅해 드리겠습니다.”\n\n미겔은 나를 잠시 바라보다 온화하게 고개를 끄덕였다. “고맙구나, 다니엘. 알렉도 네가 함께 오면 좋아할 거야.”\n\n그녀가 먼저 걸었다. 나는 조금 뒤에서 보폭을 맞췄다. 아쉬움이 사라진 것은 아니었다. 다만 그 감정을 누군가의 자유보다 앞세우지 않기로 했다.",thought:'좋아하는 마음까지 없앨 수는 없어. 하지만 그 마음으로 무엇을 할지는 내가 정할 수 있어.',next:'v93_afterglow'},
 v93_instinct:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 본능',text:"“잠깐만요, 코트리먼.”\n\n나는 충동적으로 한 걸음 다가섰다. “저는…… 오늘 밤에도 코트리먼을 뵙고 싶었습니다. 늘 그랬던 것처럼요. 더는 아무렇지 않은 척하기가 어렵습니다.”\n\n말을 끝내자 심장이 요란하게 뛰었다. 미겔은 놀란 듯 나를 바라보았다. 그러나 물러서지도, 다가오지도 않았다.\n\n“네 마음을 솔직히 말해 줘서 고맙구나. 하지만 다니엘, 나는 알렉의 약혼녀란다. 그 사실을 잊어서는 안 돼. 네가 상처받지 않도록 분명히 말해 두마.”\n\n나는 고개를 숙였다. 본능을 따른 대가는 고백 그 자체가 아니라, 대답을 받아들일 용기였다.",thought:'말해 버렸어. 돌아갈 수는 없겠지. 그래도 그분의 대답까지 내 뜻대로 만들 수는 없어.',next:'v93_instinct_accept'},
 v93_instinct_accept:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 본능의 대가',text:"미겔의 눈빛은 여전히 다정했다. 그래서 더 아팠다. 나는 한참 만에 입을 열었다.",choices:[{text:'“알겠습니다. 제 마음은 제가 책임지겠습니다.”',next:'v93_accept',v91Moral:'virtue',effects:{trust:2,resolve:2}},{text:'“그래도 오늘 밤만은 제 마음을 기억해 주세요.”',next:'v93_linger',effects:{risk:2,affection:1}}]},
 v93_accept:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01',text:"“그래. 그 말이라면 믿을 수 있겠구나.”\n\n미겔은 내 말을 가볍게 여기지 않았다. 그 마음을 받아 줄 수 없다는 사실과, 그 마음이 진실하다는 사실은 서로 모순되지 않았다.\n\n나는 그녀와 나란히 온실을 나섰다. 비밀을 털어놓았는데도 마음이 홀가분하지만은 않았다. 그래도 내가 넘지 말아야 할 선을 분명히 보았다.",thought:'아프지만, 이게 대답이야. 나는 들었고, 받아들여야 해.',next:'v93_afterglow'},
 v93_linger:{speaker:'미겔 코트리먼',chapter:'CHAPTER 01',text:"“기억해 두마. 하지만 그걸 약속으로 여기지는 말아 주렴.”\n\n미겔은 부드럽지만 흔들림 없는 목소리로 말했다. 나는 그녀가 나를 달래기 위해 거짓 희망을 주지 않는다는 것을 깨달았다.\n\n유리 천장 위로 세 개의 달빛이 겹쳤다. 나는 한동안 그 자리에 서 있었다.",thought:'기억해 주겠다고 하셨어. 그런데 나는 왜 그 한마디에 또 기대를 걸고 있지.',next:'v93_afterglow'},
 v93_crossed_line:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 넘지 말아야 할 선',text:"내 손이 미겔의 손목을 붙잡았다. 미겔의 미소가 사라졌다.\n\n“다니엘, 놓아주렴. 지금 당장.”\n\n짧고 단호한 말이었다. 나는 곧바로 손을 놓았다. 그녀의 손목에 남은 붉은 자국을 보고서야 내가 무엇을 했는지 실감했다.\n\n“네 마음이 어떻든, 내 뜻을 대신 정할 수는 없어.”\n\n미겔은 나를 더 꾸짖지 않았다. 다만 한 걸음 물러서며 분명한 거리를 두었다.",thought:'내가…… 무슨 짓을 한 거지. 그분이 웃어 주셨다는 이유로 어디까지 허락받았다고 생각한 거야.',next:'v93_crossed_choice'},
 v93_crossed_choice:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01 · 선택의 흔적',text:"사과한다고 방금 전의 일이 없던 일이 되지는 않는다. 나는 그것을 알면서도 입을 열어야 했다.",choices:[{text:'즉시 사과하고 더는 다가가지 않는다.',next:'v93_crossed_apology',v91Moral:'virtue',effects:{resolve:1}},{text:'변명하지 못한 채 고개를 숙이고 물러난다.',next:'v93_crossed_silence',effects:{risk:1}}]},
 v93_crossed_apology:{speaker:'다니엘 레온하르트',chapter:'CHAPTER 01',text:"“죄송합니다. 제가 선을 넘었습니다.”\n\n미겔은 사과를 들었다. 그러나 곧바로 웃어 주지는 않았다. “다시는 그러지 않기를 바란단다.”\n\n나는 고개를 끄덕였다. 사과는 잘못을 지우지 않는다. 다음 행동을 바꿀 책임만 남긴다.",thought:'사과했어도 내가 한 일은 남아. 앞으로 어떻게 행동하는지가 중요해.',next:'v93_afterglow'},
 v93_crossed_silence:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01',text:"나는 아무 말도 하지 못했다. 미겔은 나를 지나 온실을 떠났다.\n\n나는 내 손을 내려다보았다. 조금 전까지 아름답게만 보였던 밤이 낯설게 느껴졌다.",thought:'모른 척한다고 사라지지 않아. 내가 한 일은 내가 알고 있어.',next:'v93_afterglow'},
 v93_afterglow:{speaker:"다니엘 레온하르트",chapter:'CHAPTER 01 · 남겨진 향기',text:"온실 문이 닫히자 장미 향이 희미해졌다. 세 개의 달이 유리창 위로 길게 번졌다.\n\n나는 오늘의 선택이 다른 누구에게는 사소한 장면일지 몰라도, 내게는 오래 남으리라는 것을 알았다.\n\n이성도 본능도 내 일부였다. 하지만 선택한 행동은 나 내가 책임져야 했다.",thought:'이 밤을 어떻게 기억하게 될까. 언젠가 오늘의 나를 다시 마주하게 되겠지.',next:'explore_finish'},
 miguel_retreat:{speaker:'다니엘 레온하르트',text:"“……실례했습니다.”\n나는 고개를 숙이고 돌아섰다. 온실 문턱을 넘어서자 서늘한 공기가 뺨에 닿았다. 나는 조금 전 내가 지나치게 서둘렀던 것은 아닌지 생각했다.",chapter:'CHAPTER 01',thought:'조금 더 이야기해도 됐을까. 아니, 무리하게 시간을 빼앗는 건 예의가 아니야.',next:'explore_finish'},
 explore_finish:{speaker:"다니엘 레온하르트",text:"CHAPTER 01 · 탐색 완료\n오늘 밤의 만남은 여기까지입니다. 아직 할 말이 남은 듯하지만, 나는 예를 갖추어 물러납니다.",chapter:'CHAPTER 01',choices:[{text:'다음 날 연회에 참석한다.',next:'explore',action:'nextDay'},{text:'오늘 밤 다시 둘러보기',next:'explore',action:'restartExplore'},{text:'타이틀로 돌아가기',action:'home'}]},
 wine_accident:{speaker:"다니엘 레온하르트",text:"사람들 사이를 빠져나오던 내 손목이 누군가의 팔꿈치에 스쳤다. 잔이 기울고, 붉은 와인이 허공에 짧은 곡선을 그렸다.\n미겔의 연보랏빛 드레스 위로 선명한 얼룩이 번졌다. 음악과 대화는 여전히 이어졌지만 내게는 주변 소리가 갑자기 멀어진 듯했다.",chapter:'CHAPTER 01',thought:'큰일 났다. 하필 코트리먼의 드레스에…… 어떻게 사과드려야 하지.',next:'wine_apology'},
 wine_apology:{speaker:'다니엘 레온하르트',text:"“……죄, 죄송합니다. 괜찮으십니까?”\n나는 황급히 손수건을 꺼냈다. 그러나 드레스에 손을 뻗으려던 순간 멈칫했다. 직접 닦으려 드는 것은 더 큰 실례일지도 몰랐다.\n나는 손수건을 두 손으로 정중히 내밀었다.",chapter:'CHAPTER 01',choices:[{text:'손수건을 정중히 건넨다.',thought:'침착하자. 먼저 사과드리고, 허락 없이 손을 대지 말자.',next:'wine_handoff',effects:{trust:3,resolve:1}},{text:'당황한 채 변상을 약속한다.',next:'wine_compensate',effects:{trust:1,reputation:1}},{text:'어째서 서둘렀는지 솔직히 말한다.',next:'wine_confess',effects:{affection:2,risk:2}}]},
 wine_handoff:{speaker:'미겔 코트리먼',text:'“손수건을 건네주시겠습니까?”\n미겔은 건네받은 천으로 드레스의 와인을 조용히 눌렀다. “크게 상한 곳은 없습니다. 너무 염려하지 않으셔도 됩니다.”',chapter:'CHAPTER 01',next:'wine_question'},
 wine_compensate:{speaker:'다니엘 레온하르트',text:"“그…… 드레스는 제가 변상하겠습니다. 반드시.”\n미겔은 잠시 내 손에 쥐어진 손수건을 보았다. “우선 손수건부터 건네주시겠습니까, 레온하르트 경?”",chapter:'CHAPTER 01',next:'wine_question'},
 wine_confess:{speaker:'다니엘 레온하르트',text:'“코트리먼께 인사를…… 드리려 했습니다. 그뿐입니다.”\n말을 끝내자마자 스스로도 변명처럼 들렸다. 미겔은 잠시 침묵하다 손수건을 청했다.',chapter:'CHAPTER 01',next:'wine_question'},
 wine_question:{speaker:'미겔 코트리먼',text:"“어디를 그리 급히 가시던 길이었습니까, 레온하르트 경?”\n그녀의 목소리는 낮고 차분했다. 나는 대답하기 전 옷깃을 한 번 고쳐 잡았다.",chapter:'CHAPTER 01',choices:[{text:'“속이 좋지 않아 잠시 바람을 쐬려 했습니다.”',next:'wine_after',effects:{trust:1}},{text:'“……코트리먼을 찾고 있었습니다.”',next:'wine_after',effects:{affection:2,risk:2}},{text:'“부주의했습니다. 다시 한번 사과드립니다.”',next:'wine_after',effects:{reputation:1}}]},
 wine_after:{speaker:'다니엘 레온하르트',text:"미겔은 더 이상 나를 추궁하지 않았다. 차분한 태도에 나는 오히려 고개를 들기 어려웠다.\n주변의 시선이 다른 곳으로 옮겨 간 뒤에도 나는 드레스의 붉은 얼룩이 마음에 걸렸다.\n“……다시 한번 죄송합니다.”",chapter:'CHAPTER 01',thought:'화를 내셔도 이상하지 않을 텐데. 이렇게 배려해 주시니 더 죄송해.',next:'explore_finish'},
 explore_timeout:{speaker:"다니엘 레온하르트",text:"연회의 밤이 깊어 가자 복도의 촛불이 하나둘 짧아졌다. 나는 소매 끝을 만지며 오늘 있었던 일들을 천천히 떠올렸다.\n찾던 사람을 만나지 못했더라도 왕궁의 밤은 끝나지 않았다. 세 개의 달이 떠 있는 하늘 아래, 내일은 또 다른 만남이 기다릴지도 몰랐다.",chapter:'CHAPTER 01',choices:[{text:'다음 날 연회에 참석한다.',thought:'오늘은 여기까지인가 봐. 다음에는 조금 더 자연스럽게 인사를 드릴 수 있으면 좋겠어.',next:'explore',action:'nextDay'},{text:'오늘 밤 다시 둘러보기',next:'explore',action:'restartExplore'},{text:'타이틀로 돌아가기',action:'home'}]}
};
for(const [oldId,currentId] of Object.entries({cinematic_palace:'v108_intro_entrance',cinematic_daniel:'v108_intro_entrance',cinematic_invitation:'v108_prologue_invite',intro:'v108_prologue_invite'}))NODES[oldId]=NODES[currentId];

const $=id=>document.getElementById(id);
let state={node:'cinematic_moons',day:1,stats:{affection:0,trust:0,resolve:0,reputation:50,risk:0},history:[],exploration:{turn:0,clues:[],visited:[],found:false,sceneCounts:{}}};
const clone=x=>JSON.parse(JSON.stringify(x));
// v80: single-flight title transition, cancellable when returning home.
// This only changes presentation and input guards; save data and scene IDs stay untouched.
let v80LeaveTimer=null;
let v80ArrivalTimer=null;
let v80Transitioning=false;
let v81TransitionSerial=0;
function v81StopTitleAudio(){document.dispatchEvent(new Event('delharsha:title-audio-stop'));}
function v81StopGameAudio(){document.dispatchEvent(new Event('delharsha:game-audio-stop'));}
function v80CancelTransition(){
 v81TransitionSerial++;
 if(v80LeaveTimer!==null){clearTimeout(v80LeaveTimer);v80LeaveTimer=null;}
 if(v80ArrivalTimer!==null){clearTimeout(v80ArrivalTimer);v80ArrivalTimer=null;}
 v80Transitioning=false;
 const home=$('home'),game=$('game');
 if(home)home.classList.remove('v79-leaving','v80-leaving');
 if(game)game.classList.remove('v79-arriving','v80-arriving');
 document.body.classList.remove('v79-transitioning','v80-transitioning');
}
function show(id){
 const home=$('home'),game=$('game');
 const activate=()=>document.querySelectorAll('.screen').forEach(e=>e.classList.toggle('active',e.id===id));
 if(id==='game'&&v80Transitioning)return; // repeated start/continue cannot stack timers
 if(id!=='game'){v80CancelTransition();v81StopTitleAudio();v81StopGameAudio();activate();return;}
 if(!home||!home.classList.contains('active')){v80CancelTransition();v81StopTitleAudio();activate();return;}
 const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){v80CancelTransition();v81StopTitleAudio();v81StopGameAudio();activate();return;}
 v80CancelTransition();v80Transitioning=true;
 const serial=v81TransitionSerial;
 v81StopTitleAudio();v81StopGameAudio();
 home.classList.add('v79-leaving','v80-leaving');
 document.body.classList.add('v79-transitioning','v80-transitioning');
 v80LeaveTimer=setTimeout(()=>{
  v80LeaveTimer=null;
  // The timer is invalidated by title return or a new navigation.
  if(!v80Transitioning||serial!==v81TransitionSerial)return;
  activate();home.classList.remove('v79-leaving','v80-leaving');
  document.body.classList.remove('v79-transitioning','v80-transitioning');
  if(game){game.classList.add('v79-arriving','v80-arriving');
   v80ArrivalTimer=setTimeout(()=>{v80ArrivalTimer=null;game.classList.remove('v79-arriving','v80-arriving');},840);
  }
  v80Transitioning=false;
 },700);
}
const LOCATIONS=[
 {id:'hall',name:'대연회장',desc:'음악과 웃음소리 사이에서 익숙한 실루엣을 찾습니다.'},
 {id:'corridor',name:'대리석 회랑',desc:'시종에게 미겔의 행방을 물어볼 수 있습니다.'},
 {id:'terrace',name:'달빛 테라스',desc:'세 개의 달이 비추는 조용한 테라스입니다.'},
 {id:'drawing',name:'응접실',desc:'귀족들의 대화가 오가는 곳입니다.'},
 {id:'garden',name:'장미 정원',desc:'노란 장미가 보이는 온실로 이어집니다.'}
];
// Game-only rotating itineraries, not official AU canon. Each day has a distinct path.
const NIGHT_SCHEDULES=[
 ['hall','corridor','garden','terrace','drawing','garden','hall'],
 ['drawing','terrace','hall','garden','corridor','drawing','terrace'],
 ['garden','hall','drawing','corridor','terrace','hall','garden'],
 ['terrace','garden','corridor','drawing','hall','terrace','drawing']
];
const ALEX_SCHEDULES=[
 ['drawing','hall','corridor','hall','garden','drawing','corridor'],
 ['hall','corridor','drawing','terrace','hall','garden','drawing'],
 ['corridor','drawing','terrace','hall','drawing','garden','hall'],
 ['drawing','hall','garden','corridor','terrace','hall','corridor']
];
function scheduleFor(table,day){return table[(Math.max(1,day)-1)%table.length];}
// v14 game-only events; original character canon is unchanged.
const DAY_SPECIALS=[
 {day:2,place:'garden',speaker:"다니엘 레온하르트",text:'정원사의 바구니에 노란 장미가 담겨 있었다. 시든 꽃을 버리기 전 마지막으로 살피는 모습에 다니엘은 걸음을 멈췄다. 코트리먼 영지에도 이런 꽃이 피겠지.',options:[['정원사에게 꽃의 관리법을 묻는다.','정원사는 꽃을 오래 피우는 것보다 제때 돌보는 일이 중요하다고 답했다.',{resolve:1}],['그대로 지나간다.','다니엘은 꽃잎을 밟지 않도록 조심히 걸었다.',{reputation:1}]]},
 {day:3,place:'drawing',speaker:'시종',text:'응접실에 놓인 차가 식어 가고 있었다. 시종은 손님이 남긴 잔을 치워도 될지 고민하고 있었다.',options:[['정리를 도와준다.','다니엘은 잔을 조심히 옮겨 주었다. 시종이 감사 인사를 했다.',{reputation:1}],['손님이 돌아올지 먼저 확인한다.','서두르지 않고 확인하자 시종도 안도했다.',{trust:1}]]},
 {day:4,place:'terrace',speaker:"다니엘 레온하르트",text:'세 개의 달빛이 난간 위에 겹쳤다. 누군가 접어 둔 보랏빛 리본이 바람에 흔들렸다. 다니엘은 이 연회가 오래 기억에 남으리라 생각했다.',options:[['리본을 시종에게 맡긴다.','분실물을 받은 시종은 주인을 찾아보겠다고 했다.',{reputation:1}],['잠시 달빛을 바라본다.','그는 이유 없이 가슴이 답답해지는 것을 느꼈다.',{resolve:1}]]},
 {day:5,place:'corridor',speaker:'경비병',text:'회랑의 통행로가 잠시 바뀌었다. 경비병은 손님들이 길을 헤매지 않도록 안내하고 있었다.',options:[['안내를 돕는다.','다니엘은 길을 묻는 손님들에게 차근차근 방향을 알려 주었다.',{reputation:2}],['조용히 우회한다.','다니엘은 다른 회랑으로 걸음을 옮겼다.',{resolve:1}]]}
];
const CLUE_LINES={hall:['악단의 연주가 끝날 즈음, 누군가 정원으로 향하는 모습을 보았다고 한다.','한 시종이 응접실에 새 찻잔을 준비하라는 말을 들었다.'],corridor:['경비병은 조금 전 테라스 쪽으로 손님들이 지나갔다고 한다.','회랑 끝에 노란 꽃잎 하나가 떨어져 있다.'],terrace:['시종이 실내 응접실에 담요를 가져다 놓으러 갔다고 한다.','난간에 남은 장미 향이 어디에서 왔는지는 알 수 없다.'],drawing:['응접실의 손님이 연회장으로 돌아간다는 말을 남겼다.','한 시종이 정원으로 향하는 문을 잠시 열어 두었다.'],garden:['정원사가 회랑 쪽에서 발소리를 들었다고 한다.','꽃을 구경하던 손님들이 테라스 쪽으로 향했다고 한다.']};
const CLOCK_LABELS=['19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
function exploration(){if(!state.exploration)state.exploration={turn:0,clues:[],visited:[],found:false,sceneCounts:{}};return state.exploration;}
function resetNight(){const questV15=state.exploration?.questV15||{step:0,done:false};state.exploration={turn:0,clues:[],visited:[],found:false,sceneCounts:{},dayEvents:[],clueChecks:0,questV15};}
function nextDay(){return story155EndDay();}
// 장소별 일반 장면과 익명 NPC. 동일한 장소를 반복 방문해도 다른 사건이 등장합니다.
const AMBIENT_SCENES={
 hall:[
  {speaker:"다니엘 레온하르트",text:'악단이 느린 왈츠를 연주한다. 홀 중앙에서는 무도회가 한창이다. 다니엘은 인파 사이를 살폈다가 공연히 시선을 내렸다.'},
  {speaker:'시종',text:'“레온하르트 경, 포도주를 더 드릴까요?”\n다니엘은 얼른 고개를 저었다. “아, 아닙니다. 감사합니다.”'},
  {speaker:'귀족',text:'“오늘은 세 개의 달이 유난히 밝군요.”\n옆에 선 귀족의 말에 다니엘은 정중히 맞장구쳤다. “……그렇습니다.”'},
  {speaker:"다니엘 레온하르트",text:'춤을 마친 손님들이 연회장 가장자리로 몰려왔다. 다니엘은 길을 비켜 주고는 제자리에 잠시 멈춰 섰다.'}
 ],
 corridor:[
  {speaker:'시종',text:'“찾으시는 분이 계십니까, 경?”\n다니엘은 잠깐 입술을 달싹였다. “아니…… 그저 길을 살피고 있었습니다.”'},
  {speaker:"다니엘 레온하르트",text:'대리석 바닥에 촛불이 길게 비쳤다. 멀리서 발소리가 들려왔으나, 지나간 것은 은식기를 든 시종뿐이었다.'},
  {speaker:'경비병',text:'“이쪽은 응접실로 이어집니다, 경.”\n“알려주셔서 감사합니다.” 다니엘은 필요 이상으로 정중히 고개를 숙였다.'},
  {speaker:"다니엘 레온하르트",text:'열린 창으로 서늘한 바람이 들었다. 다니엘은 흐트러진 소매를 고쳐 매고 복도 끝을 바라보았다.'}
 ],
 terrace:[
  {speaker:"다니엘 레온하르트",text:'세 개의 달빛이 테라스의 난간에 내려앉았다. 밤은 깊어지는데 하늘은 좀처럼 어두워지지 않았다.'},
  {speaker:'귀족',text:'“연회장 안이 너무 덥지 않습니까?”\n다니엘은 잠시 생각하다 답했다. “……조금은 그렇군요.”'},
  {speaker:"다니엘 레온하르트",text:'바람에 보랏빛 리본이 흔들렸다. 다니엘은 누군가 다가오는 소리에 돌아보았지만, 빈 잔을 치우는 시종이었다.'},
  {speaker:'시종',text:'“담요를 가져다드릴까요?”\n“괜찮습니다. 신경 써주셔서 감사합니다.”'}
 ],
 drawing:[
  {speaker:"다니엘 레온하르트",text:'응접실에서는 차와 과자가 오가고 있었다. 다니엘은 대화를 방해하지 않으려 문가에 조용히 섰다.'},
  {speaker:'귀족',text:'“코트리먼 영지의 장미가 그리 유명하다지요.”\n다니엘은 찻잔을 내려놓으며 잠시 귀를 기울였다.'},
  {speaker:'시종',text:'“차를 준비해 드릴까요, 경?”\n“아, 예. 부탁드립니다.” 말하고 나서야 다니엘은 자리에 앉을 생각이 없었음을 깨달았다.'},
  {speaker:"다니엘 레온하르트",text:'장작 타는 소리만 조용히 이어졌다. 다니엘은 시계를 확인한 뒤, 괜히 창가로 걸음을 옮겼다.'}
 ],
 garden:[
  {speaker:'정원사',text:'“장미를 구경하러 오셨습니까, 경?”\n“그…… 예. 아름답군요.” 다니엘은 가까운 꽃송이를 바라보았다.'},
  {speaker:"다니엘 레온하르트",text:'노란 장미의 향이 희미하게 퍼졌다. 정원 길 끝에 사람이 있는 듯했으나, 바람에 흔들린 가지였다.'},
  {speaker:'시종',text:'“정원은 이 시간에도 개방되어 있습니다.”\n“알려주셔서 감사합니다.” 다니엘은 길 가장자리로 비켜섰다.'},
  {speaker:"다니엘 레온하르트",text:'꽃잎 하나가 다니엘의 구두 앞에 떨어졌다. 그는 잠시 발을 멈추었다가 다시 걸었다.'}
 ]
};

// v9: additional slice-of-life encounters, with optional two-way responses.
const EXTRA_AMBIENT_SCENES={
 hall:[{"speaker": "시종", "text": "은쟁반 위에 잔들이 나란히 놓여 있다. 시종이 다니엘을 향해 살짝 고개를 숙였다.", "options": [{"text": "물을 청한다.", "response": "“물 한 잔 부탁드립니다.” 시종은 미소를 지으며 맑은 잔을 건넸다.", "effects": {"resolve": 1}}, {"text": "정중히 사양한다.", "response": "“괜찮습니다. 수고가 많으십니다.” 시종이 뜻밖이라는 듯 눈을 깜빡였다.", "effects": {"reputation": 1}}]}, {"speaker": "악사", "text": "바이올린의 현 하나가 끊어졌다. 악사가 당황해 악기를 내려놓았다.", "options": [{"text": "악사를 위로한다.", "response": "“충분히 훌륭한 연주였습니다.” 다니엘은 진심으로 말했다.", "effects": {"resolve": 1}}, {"text": "조용히 자리를 비킨다.", "response": "다니엘은 공연을 방해하지 않도록 기둥 뒤로 물러섰다.", "effects": {"reputation": 1}}]}, {"speaker": "젊은 귀족", "text": "“레온하르트 경, 춤은 추지 않으십니까?” 낯선 귀족이 웃으며 물었다.", "options": [{"text": "춤을 잘 못 춘다고 인정한다.", "response": "“그…… 능숙한 편은 아닙니다.” 상대가 뜻밖이라는 듯 웃었다.", "effects": {"resolve": 1}}, {"text": "다른 손님을 먼저 권한다.", "response": "“저보다 적임자가 많을 겁니다.” 다니엘은 예를 갖춰 답했다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "천장에 걸린 보랏빛 유리 장식이 세 개의 달빛을 받아 반짝인다.", "options": [{"text": "잠시 장식을 감상한다.", "response": "다니엘은 고개를 들어 장식이 만들어 낸 빛의 무늬를 바라보았다.", "effects": {"resolve": 1}}, {"text": "연회장 구석으로 이동한다.", "response": "다니엘은 인파를 피해 조용한 기둥 옆으로 걸음을 옮겼다.", "effects": {"reputation": 1}}]}, {"speaker": "시종장", "text": "“경, 이쪽 통로는 손님들이 많이 오갑니다.” 시종장이 조심스럽게 알렸다.", "options": [{"text": "길을 비켜 준다.", "response": "“제가 방해가 되었군요. 죄송합니다.” 다니엘은 급히 물러섰다.", "effects": {"resolve": 1}}, {"text": "안내에 감사를 표한다.", "response": "“알려주셔서 감사합니다.” 그는 통로 끝으로 향했다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "한 귀족이 떨어뜨린 장갑을 찾느라 바닥을 두리번거린다.", "options": [{"text": "장갑을 주워 준다.", "response": "“이것을 찾으십니까?” 다니엘은 장갑을 먼지 털어 건넸다.", "effects": {"resolve": 1}}, {"text": "시종에게 위치를 알려 준다.", "response": "다니엘이 가리킨 곳에서 시종이 장갑을 찾아 주었다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "한 쌍의 무용수가 박자를 놓쳐 서로의 발을 밟았다. 웃음소리가 번진다.", "options": [{"text": "괜히 자신도 웃는다.", "response": "다니엘은 입가에 번진 웃음을 급히 감췄다. 남의 실수를 웃는 건 실례였다.", "effects": {"resolve": 1}}, {"text": "다른 쪽을 바라본다.", "response": "그는 무용수들이 민망하지 않도록 시선을 돌렸다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족 부인", "text": "“왕실의 보랏빛 장식이 참 아름답지 않나요?” 귀족 부인이 말을 건넸다.", "options": [{"text": "솔직히 칭찬한다.", "response": "“예. 세심하게 준비한 흔적이 보입니다.”", "effects": {"resolve": 1}}, {"text": "고개를 숙여 동의한다.", "response": "“그렇습니다.” 다니엘은 단정히 답했다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“잃어버린 물건을 찾으십니까?” 시종이 다니엘의 두리번거림을 보고 물었다.", "options": [{"text": "아니라고 답한다.", "response": "“아, 아닙니다. 걱정해 주셔서 감사합니다.”", "effects": {"resolve": 1}}, {"text": "잠시 망설인다.", "response": "다니엘은 누군가의 이름을 꺼내려다 입을 다물었다. “……괜찮습니다.”", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "화려한 샹들리에 아래에서 어린 시종이 촛불을 갈기 위해 사다리를 세웠다.", "options": [{"text": "사다리를 잡아 준다.", "response": "“잠시 붙잡고 있겠습니다.” 시종이 거듭 고개를 숙였다.", "effects": {"resolve": 1}}, {"text": "위험하지 않은지 살핀다.", "response": "다니엘은 시종이 내려올 때까지 가까이에서 지켜보았다.", "effects": {"reputation": 1}}]}],
 corridor:[{"speaker": "경비병", "text": "“이쪽 복도는 왕실 서고로 이어집니다.” 경비병이 안내한다.", "options": [{"text": "출입 가능 여부를 묻는다.", "response": "“오늘은 닫혀 있습니다, 경.” 다니엘은 즉시 고개를 숙였다.", "effects": {"resolve": 1}}, {"text": "안내에 감사한다.", "response": "“알겠습니다. 알려주셔서 감사합니다.”", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "한 시종이 리넨 더미를 안고 비틀거렸다.", "options": [{"text": "문을 열어 준다.", "response": "다니엘이 문을 잡아 주자 시종이 안도의 한숨을 내쉬었다.", "effects": {"resolve": 1}}, {"text": "짐을 나눠 들겠다고 한다.", "response": "“괜찮습니다, 경!” 시종이 화들짝 놀라자 다니엘도 덩달아 당황했다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "복도 벽의 초상화들이 희미한 촛불에 잠겨 있다.", "options": [{"text": "초상화의 설명을 읽는다.", "response": "왕실의 오래된 역사가 작은 금속 명패에 빼곡히 적혀 있다.", "effects": {"resolve": 1}}, {"text": "그대로 지나간다.", "response": "구두 굽 소리만 조용히 대리석 위를 울렸다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“방금 장미 향기가 나지 않았습니까?” 시종이 다른 시종에게 속삭였다.", "options": [{"text": "향기의 근원을 묻는다.", "response": "“꽃 장식을 옮겼습니다, 경.” 시종이 꽃바구니를 가리켰다.", "effects": {"resolve": 1}}, {"text": "그저 듣고 지나간다.", "response": "다니엘은 괜히 발걸음을 늦추었다가 다시 걸었다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“길을 잃었군요. 대연회장이 어느 쪽이죠?”", "options": [{"text": "길을 안내한다.", "response": "다니엘은 기억을 더듬어 왔던 길을 설명했다.", "effects": {"resolve": 1}}, {"text": "함께 표지판을 찾는다.", "response": "두 사람은 잠시 복도를 살펴보고 표지판을 발견했다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "열린 창문 사이로 보랏빛 밤하늘이 보인다.", "options": [{"text": "창문을 닫는다.", "response": "찬바람이 들지 않도록 창문을 닫자 복도가 한결 조용해졌다.", "effects": {"resolve": 1}}, {"text": "잠시 바깥을 바라본다.", "response": "세 개의 달이 나란히 떠 있었다. 다니엘은 말없이 그 빛을 바라보았다.", "effects": {"reputation": 1}}]}, {"speaker": "경비병", "text": "경비병이 다니엘의 예복을 보고 자세를 바로잡았다.", "options": [{"text": "가볍게 인사한다.", "response": "“수고가 많으십니다.” 경비병의 굳은 표정이 조금 풀렸다.", "effects": {"resolve": 1}}, {"text": "지나가도 되는지 묻는다.", "response": "“물론입니다, 경.” 다니엘은 정중히 고개를 숙였다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 바닥에 흩어진 초대장 몇 장을 주워 담는다.", "options": [{"text": "함께 줍는다.", "response": "“아, 경께서 이런 일을…….” “괜찮습니다.” 다니엘은 마지막 한 장을 건넸다.", "effects": {"resolve": 1}}, {"text": "발밑의 종이를 피해 간다.", "response": "다니엘은 초대장이 구겨지지 않도록 조심히 걸었다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "멀리서 구두 굽 소리가 들려왔다. 다니엘은 무심코 걸음을 멈췄다.", "options": [{"text": "소리 나는 쪽을 본다.", "response": "나타난 것은 커다란 화병을 든 시종 둘이었다.", "effects": {"resolve": 1}}, {"text": "그대로 걸어간다.", "response": "그는 이유 없이 서두른 자신을 의아하게 여겼다.", "effects": {"reputation": 1}}]}, {"speaker": "시종장", "text": "“이곳에선 큰 소리로 말씀하지 않으시면 좋겠습니다.”", "options": [{"text": "즉시 사과한다.", "response": "“……죄송합니다. 주의하겠습니다.” 실은 한마디도 하지 않았지만.", "effects": {"resolve": 1}}, {"text": "조용히 고개를 끄덕인다.", "response": "다니엘은 아무 말 없이 발걸음을 가볍게 옮겼다.", "effects": {"reputation": 1}}]}],
 terrace:[{"speaker": "SYSTEM", "text": "테라스 난간에는 밤이슬이 맺혀 있다.", "options": [{"text": "손수건으로 물기를 닦는다.", "response": "다니엘은 괜히 손수건을 꺼냈다가 자신이 무얼 하는지 깨닫고 멈칫했다.", "effects": {"resolve": 1}}, {"text": "난간에서 물러선다.", "response": "차가운 바람이 옷깃을 스쳤다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“밤이 이렇게 밝으면 별을 보기 어렵군요.”", "options": [{"text": "달 이야기를 나눈다.", "response": "“그렇지만 세 개의 달을 함께 보는 일도 드물지 않습니까.”", "effects": {"resolve": 1}}, {"text": "짧게 동의한다.", "response": "“……그러게 말입니다.”", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“바람이 찹니다. 숄을 가져다드릴까요?”", "options": [{"text": "정중히 거절한다.", "response": "“괜찮습니다. 신경 써 주셔서 감사합니다.”", "effects": {"resolve": 1}}, {"text": "안쪽 손님을 챙겨 달라고 한다.", "response": "“안에 계신 분들부터 살펴주십시오.” 시종은 미소 지었다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "하늘에 떠 있는 세 개의 달이 연못 위에 겹쳐 비친다.", "options": [{"text": "연못을 바라본다.", "response": "물결이 일 때마다 달의 형상이 길게 흐트러졌다.", "effects": {"resolve": 1}}, {"text": "눈을 감고 바람을 느낀다.", "response": "다니엘은 한동안 아무 생각도 하지 않으려 애썼다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“여기서도 음악이 들리는군요.” 누군가 난간에 기대어 말했다.", "options": [{"text": "연주에 귀를 기울인다.", "response": "멀리서 들려오는 선율은 연회장 안보다 부드러웠다.", "effects": {"resolve": 1}}, {"text": "안쪽으로 돌아갈 채비를 한다.", "response": "다니엘은 흐트러진 옷깃을 매만졌다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "테라스 구석에 작은 화분이 놓여 있다. 보랏빛 꽃이 바람에 흔들린다.", "options": [{"text": "꽃을 살펴본다.", "response": "낯선 꽃이었다. 다니엘은 이름을 짐작해 보다가 포기했다.", "effects": {"resolve": 1}}, {"text": "손대지 않고 지나간다.", "response": "꽃잎이 바람에 가볍게 떨렸다.", "effects": {"reputation": 1}}]}, {"speaker": "경비병", "text": "“밤이 깊었습니다. 발밑을 조심하십시오.”", "options": [{"text": "감사를 전한다.", "response": "“주의하겠습니다. 고맙습니다.”", "effects": {"resolve": 1}}, {"text": "주변의 위험을 살핀다.", "response": "다니엘은 난간 아래 어두운 계단을 확인했다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 비어 있는 찻잔을 수거한다.", "options": [{"text": "잔을 건네준다.", "response": "“여기 있습니다.” 다니엘은 빈 잔을 조심스럽게 건넸다.", "effects": {"resolve": 1}}, {"text": "잠시 길을 비켜 준다.", "response": "시종이 고개를 숙이며 지나갔다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "문이 열릴 때마다 연회장의 온기가 테라스로 흘러나왔다.", "options": [{"text": "문을 닫아 준다.", "response": "다니엘은 뒤따라오는 손님이 없는지 확인한 뒤 문을 닫았다.", "effects": {"resolve": 1}}, {"text": "실내의 음악을 듣는다.", "response": "현악기의 선율이 바람을 타고 흘러나왔다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“혹시 누구를 기다리고 계십니까?” 낯선 사람이 물었다.", "options": [{"text": "아니라고 답한다.", "response": "“그런 건 아닙니다만…….” 말끝이 조금 흐려졌다.", "effects": {"resolve": 1}}, {"text": "잠시 바람을 쐬는 중이라고 한다.", "response": "“예. 연회장이 조금 답답해서요.”", "effects": {"reputation": 1}}]}],
 drawing:[{"speaker": "시종", "text": "“차는 홍차와 허브차가 준비되어 있습니다.”", "options": [{"text": "홍차를 청한다.", "response": "따뜻한 찻잔이 손에 닿자 긴장이 조금 누그러졌다.", "effects": {"resolve": 1}}, {"text": "허브차를 청한다.", "response": "은은한 풀 향기가 응접실에 퍼졌다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“최근 영지 사정은 어떻습니까?” 낯선 귀족이 말을 건넸다.", "options": [{"text": "신중하게 답한다.", "response": "“제가 단정할 수는 없습니다만, 큰 문제는 없는 것으로 압니다.”", "effects": {"resolve": 1}}, {"text": "화제를 돌린다.", "response": "“먼저 경의 영지는 어떠십니까?”", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "벽난로에서 작은 불꽃이 튀었다.", "options": [{"text": "조금 더 가까이 앉는다.", "response": "불길이 얼굴을 따뜻하게 비추었다.", "effects": {"resolve": 1}}, {"text": "창가로 이동한다.", "response": "창밖에는 보랏빛 하늘이 펼쳐져 있었다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“과자를 조금 더 가져다드릴까요?”", "options": [{"text": "하나만 받는다.", "response": "“한 개면 충분합니다. 감사합니다.”", "effects": {"resolve": 1}}, {"text": "사양한다.", "response": "“괜찮습니다.” 다니엘은 빈 접시를 돌려주었다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족 부인", "text": "“오늘 연회에서는 어느 가문의 꽃장식이 가장 훌륭할까요?”", "options": [{"text": "장미를 칭찬한다.", "response": "“장미가 인상 깊었습니다.” 그 말이 왜 유독 조심스러웠는지 스스로도 몰랐다.", "effects": {"resolve": 1}}, {"text": "모두 훌륭하다고 답한다.", "response": "“각각의 장점이 있다고 생각합니다.”", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "탁자 위에 놓인 체스판은 중간에 멈춘 채다.", "options": [{"text": "말의 배치를 살핀다.", "response": "다니엘은 몇 수 앞을 생각하다 이내 손을 거두었다.", "effects": {"resolve": 1}}, {"text": "건드리지 않고 지나간다.", "response": "누군가 곧 돌아와 이어 둘 판이었다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“이 책은 손님들께서 자유롭게 읽으셔도 됩니다.”", "options": [{"text": "책을 펼쳐 본다.", "response": "오래된 시집의 책갈피가 바스락거렸다.", "effects": {"resolve": 1}}, {"text": "책을 제자리에 둔다.", "response": "다니엘은 표지가 구겨지지 않도록 책을 바로 놓았다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“왕실의 연회가 이렇게 길어질 줄은 몰랐습니다.”", "options": [{"text": "조심스럽게 동의한다.", "response": "“평화를 기리는 자리이니 의미가 있겠지요.”", "effects": {"resolve": 1}}, {"text": "의견을 삼간다.", "response": "다니엘은 찻잔을 들어 잠시 입술을 적셨다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "응접실 구석의 작은 시계가 정각을 알렸다.", "options": [{"text": "시간을 확인한다.", "response": "생각보다 시간이 많이 흘렀다. 다니엘은 문 쪽을 바라보았다.", "effects": {"resolve": 1}}, {"text": "차분히 자리에 머문다.", "response": "그는 무릎 위에 놓인 손을 가지런히 모았다.", "effects": {"reputation": 1}}]}, {"speaker": "시종장", "text": "“잠시 후 손님들이 이곳을 이용하실 예정입니다.”", "options": [{"text": "먼저 자리를 양보한다.", "response": "“그럼 저는 이만.” 다니엘은 급히 일어섰다.", "effects": {"resolve": 1}}, {"text": "정중히 물러난다.", "response": "“알겠습니다. 안내해 주셔서 감사합니다.”", "effects": {"reputation": 1}}]}],
 garden:[{"speaker": "정원사", "text": "“노란 장미는 이 계절에도 잘 피어납니다.”", "options": [{"text": "관리 방법을 묻는다.", "response": "정원사는 물과 햇빛에 대해 한참 설명했다. 다니엘은 진지하게 들었다.", "effects": {"resolve": 1}}, {"text": "꽃을 칭찬한다.", "response": "“정성이 많이 들었겠군요.” 정원사가 기분 좋게 웃었다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "장미 덤불 사이로 작은 나비가 날아올랐다.", "options": [{"text": "잠시 나비를 바라본다.", "response": "나비는 꽃 사이를 옮겨 다니다 달빛 속으로 사라졌다.", "effects": {"resolve": 1}}, {"text": "조용히 길을 따라간다.", "response": "자갈이 구두 밑에서 가볍게 소리를 냈다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“정원 안쪽은 길이 미끄러우니 조심하십시오.”", "options": [{"text": "길 상태를 확인한다.", "response": "다니엘은 젖은 돌바닥을 살피며 천천히 걸었다.", "effects": {"resolve": 1}}, {"text": "감사 인사를 한다.", "response": "“주의하겠습니다. 고맙습니다.”", "effects": {"reputation": 1}}]}, {"speaker": "정원사", "text": "“꽃을 꺾는 손님이 가끔 계십니다.” 정원사가 난처하게 웃었다.", "options": [{"text": "꽃을 지켜 달라고 한다.", "response": "“아름다운 것을 그대로 두는 편이 좋겠습니다.”", "effects": {"resolve": 1}}, {"text": "말없이 고개를 끄덕인다.", "response": "다니엘은 꽃잎에 손을 대지 않았다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "온실 유리벽에 보랏빛 달이 희미하게 비친다.", "options": [{"text": "유리벽을 살핀다.", "response": "서리처럼 얇은 물방울이 유리 위에 맺혀 있었다.", "effects": {"resolve": 1}}, {"text": "정원 벤치에 앉는다.", "response": "다니엘은 잠시 다리를 쉬었다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "“경, 길을 찾고 계십니까?”", "options": [{"text": "정원 출구를 묻는다.", "response": "시종은 친절하게 바깥길을 가리켰다.", "effects": {"resolve": 1}}, {"text": "그저 산책 중이라고 한다.", "response": "“……예. 잠시 꽃을 보고 있었습니다.”", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "꽃잎 몇 장이 돌계단에 흩어져 있다.", "options": [{"text": "꽃잎을 피해 걷는다.", "response": "다니엘은 구두 끝을 조심스럽게 옮겼다.", "effects": {"resolve": 1}}, {"text": "바람이 부는 방향을 본다.", "response": "노란 꽃잎이 한 번 더 허공에 흩날렸다.", "effects": {"reputation": 1}}]}, {"speaker": "정원사", "text": "“코트리먼 영지의 장미는 이곳 것보다 훨씬 넓게 피어 있다더군요.”", "options": [{"text": "영지 이야기를 듣는다.", "response": "다니엘은 무심코 한 걸음 가까이 다가섰다.", "effects": {"resolve": 1}}, {"text": "꽃의 품종을 묻는다.", "response": "정원사는 장미의 종류를 몇 가지 소개했다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "멀리 분수대가 조용히 물소리를 낸다.", "options": [{"text": "분수대까지 걸어간다.", "response": "수면에 달빛이 잘게 부서졌다.", "effects": {"resolve": 1}}, {"text": "벤치에 잠시 머문다.", "response": "다니엘은 조용한 정원에 귀를 기울였다.", "effects": {"reputation": 1}}]}, {"speaker": "정원사", "text": "“이 꽃은 아직 피지 않았습니다.” 정원사가 작은 봉오리를 가리켰다.", "options": [{"text": "언제 필지 묻는다.", "response": "“며칠만 기다리시면 됩니다.” 다니엘은 고개를 끄덕였다.", "effects": {"resolve": 1}}, {"text": "기다리는 것도 좋다고 말한다.", "response": "“……기다리는 일도 나쁘지 않겠군요.”", "effects": {"reputation": 1}}]}]
};

// v10: 궁중의 작은 일상과 익명 NPC 대화 25종 추가.
const V10_AMBIENT_SCENES={"hall": [{"speaker": "꽃장식 담당 시종", "text": "시종이 보랏빛 리본을 단 꽃병 앞에서 난처하게 서 있다. “매듭이 자꾸 풀려서요.”", "options": [{"text": "리본을 고쳐 묶어 준다.", "response": "“이렇게 하면 되겠습니까?” 시종은 활짝 웃었다. 다니엘은 어색하게 손을 거두었다.", "effects": {"resolve": 1}}, {"text": "담당자를 불러 주겠다고 한다.", "response": "“제가 직접 만지면 오히려 망칠지도 모르겠습니다.” 시종은 정중히 감사를 표했다.", "effects": {"reputation": 1}}]}, {"speaker": "연회 손님", "text": "“저쪽에 누가 오시는지 아십니까?” 손님이 묻자 다니엘은 문 쪽을 돌아본다.", "options": [{"text": "잘 모르겠다고 답한다.", "response": "“죄송합니다. 제가 사람을 잘 알아보는 편은 아니라서요.”", "effects": {"resolve": 1}}, {"text": "함께 입구를 살핀다.", "response": "문이 열렸지만 들어온 것은 악보를 든 악사였다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 무도회 순서표를 건넨다. 다음 곡이 곧 시작된다고 한다.", "options": [{"text": "순서표를 읽는다.", "response": "다니엘은 춤 이름을 조용히 따라 읽었다. 낯선 곡이 절반이었다.", "effects": {"resolve": 1}}, {"text": "정중히 돌려준다.", "response": "“알려주셔서 감사합니다.” 그는 시종에게 종이를 돌려주었다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "한 귀족이 장갑을 벗으며 “춤추기 전엔 손이 차가워서 곤란하군요.” 하고 중얼거린다.", "options": [{"text": "따뜻한 차를 권한다.", "response": "“차를 한 잔 드시는 건 어떻겠습니까?” 귀족은 좋은 생각이라며 웃었다.", "effects": {"resolve": 1}}, {"text": "고개를 끄덕인다.", "response": "“그렇군요.” 다니엘은 적당한 위로를 찾지 못했다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "문가에서 작은 웃음소리가 번진다. 누군가 꽃잎을 밟고 미끄러질 뻔했다.", "options": [{"text": "괜찮은지 살핀다.", "response": "“다치시진 않았습니까?” 다니엘의 진지한 표정에 상대는 멋쩍게 웃었다.", "effects": {"resolve": 1}}, {"text": "시종에게 바닥을 알려 준다.", "response": "다니엘은 바닥을 가리키며 조심스레 주의를 부탁했다.", "effects": {"reputation": 1}}]}], "corridor": [{"speaker": "어린 시종", "text": "어린 시종이 방향을 헷갈린 듯 은쟁반을 든 채 서성인다.", "options": [{"text": "길을 함께 찾는다.", "response": "다니엘은 벽의 표지판을 확인한 뒤 목적지까지 안내했다.", "effects": {"resolve": 1}}, {"text": "다른 시종을 불러 준다.", "response": "“잠시만 기다리십시오.” 곧 동료 시종이 다가왔다.", "effects": {"reputation": 1}}]}, {"speaker": "경비병", "text": "“회랑의 촛불은 새벽까지 꺼지지 않습니다.” 경비병이 말한다.", "options": [{"text": "이유를 묻는다.", "response": "“손님들의 안전을 위해서입니다.” 다니엘은 고개를 끄덕였다.", "effects": {"resolve": 1}}, {"text": "수고를 격려한다.", "response": "“밤새 고생이 많으십니다.” 경비병이 허리를 폈다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "복도 끝에 놓인 거울이 다니엘의 예복을 비춘다. 익숙하지 않은 모습이다.", "options": [{"text": "옷깃을 정리한다.", "response": "그는 반듯하게 옷깃을 세웠다. 그래도 어딘가 남의 옷을 입은 듯했다.", "effects": {"resolve": 1}}, {"text": "시선을 돌린다.", "response": "다니엘은 거울에서 눈을 떼고 걸음을 재촉했다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "길을 잃은 귀족이 “응접실이 어디였더라?” 하고 혼잣말한다.", "options": [{"text": "방향을 알려 준다.", "response": "“저쪽 계단을 지나 왼편입니다.” 다니엘은 기억을 더듬어 답했다.", "effects": {"resolve": 1}}, {"text": "함께 찾아보겠다고 한다.", "response": "“저도 가는 길입니다만…….” 사실은 아니었다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 회랑 창가에 놓인 작은 화병을 바꾸고 있다.", "options": [{"text": "꽃 이름을 물어본다.", "response": "“오늘 연회를 위해 들여온 꽃입니다.” 다니엘은 꽃잎을 조용히 바라보았다.", "effects": {"resolve": 1}}, {"text": "작업을 방해하지 않는다.", "response": "그는 시종이 지나갈 수 있도록 벽 쪽으로 물러섰다.", "effects": {"reputation": 1}}]}], "terrace": [{"speaker": "SYSTEM", "text": "바람에 달빛을 가린 구름이 천천히 지나간다. 잠깐 테라스가 어두워진다.", "options": [{"text": "하늘을 올려다본다.", "response": "세 개의 달은 곧 다시 모습을 드러냈다.", "effects": {"resolve": 1}}, {"text": "실내로 돌아갈 채비를 한다.", "response": "다니엘은 손끝에 스민 냉기를 털어 냈다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“이 밤이 끝나지 않았으면 좋겠군요.” 누군가 난간 너머를 보며 말한다.", "options": [{"text": "그 말에 공감한다.", "response": "“……기억에 남을 밤이긴 합니다.” 다니엘은 조심스럽게 답했다.", "effects": {"resolve": 1}}, {"text": "말없이 곁에 선다.", "response": "둘은 잠시 같은 하늘을 바라보았다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 바람에 날린 식탁보를 붙잡느라 애를 먹는다.", "options": [{"text": "식탁보를 잡아 준다.", "response": "“여기 잡고 있겠습니다.” 시종은 서둘러 모서리를 고정했다.", "effects": {"resolve": 1}}, {"text": "문을 닫아 바람을 막는다.", "response": "문이 닫히자 천이 더는 심하게 펄럭이지 않았다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "난간 아래 정원에서 작은 종소리가 울린다.", "options": [{"text": "소리의 근원을 찾는다.", "response": "정원사가 바람에 흔들리는 풍경을 매만지고 있었다.", "effects": {"resolve": 1}}, {"text": "그대로 음악을 듣는다.", "response": "멀리서 왈츠의 마지막 소절이 흘러나왔다.", "effects": {"reputation": 1}}]}, {"speaker": "경비병", "text": "경비병이 “테라스 계단은 밤이슬 때문에 미끄럽습니다.” 하고 당부한다.", "options": [{"text": "주의하겠다고 한다.", "response": "“알겠습니다. 고맙습니다.” 다니엘은 한 발 물러섰다.", "effects": {"resolve": 1}}, {"text": "표지판이 필요한지 묻는다.", "response": "“이미 준비 중입니다.” 경비병은 친절히 답했다.", "effects": {"reputation": 1}}]}], "drawing": [{"speaker": "시종", "text": "시종이 빈 의자에 놓인 책 한 권을 발견하고 주인을 찾는다.", "options": [{"text": "주변 손님에게 묻는다.", "response": "다니엘의 질문에 한 손님이 책을 두고 왔다며 돌아왔다.", "effects": {"resolve": 1}}, {"text": "시종에게 맡긴다.", "response": "“분실물로 보관해 주시는 편이 좋겠습니다.”", "effects": {"reputation": 1}}]}, {"speaker": "귀족", "text": "“체스는 잘 두십니까?” 한 귀족이 빈 체스판을 가리킨다.", "options": [{"text": "서툴다고 말한다.", "response": "“그리 능숙하지는 않습니다.” 다니엘은 괜히 말을 만지작거렸다.", "effects": {"resolve": 1}}, {"text": "관전하겠다고 한다.", "response": "“제가 방해되지 않는다면…….” 귀족은 흔쾌히 자리를 내주었다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "창가에 놓인 보랏빛 커튼이 느리게 흔들린다.", "options": [{"text": "창문을 살핀다.", "response": "창문 틈으로 서늘한 공기가 스며들었다.", "effects": {"resolve": 1}}, {"text": "커튼을 정리한다.", "response": "다니엘은 커튼을 고쳐 걸고 조용히 물러섰다.", "effects": {"reputation": 1}}]}, {"speaker": "귀족 부인", "text": "“요즘은 편지를 쓰는 사람이 드물다지요.” 귀족 부인이 말한다.", "options": [{"text": "편지의 장점을 말한다.", "response": "“기다리는 시간이 있어서 더 뜻깊지 않겠습니까.”", "effects": {"resolve": 1}}, {"text": "말없이 미소 짓는다.", "response": "다니엘은 찻잔을 들고 조용히 고개를 끄덕였다.", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 찻주전자를 바꾸며 “너무 뜨겁지는 않으셨습니까?” 하고 묻는다.", "options": [{"text": "괜찮다고 답한다.", "response": "“예, 적당했습니다. 감사합니다.”", "effects": {"resolve": 1}}, {"text": "조금 식혀 달라고 부탁한다.", "response": "“그…… 조금만 식혀 주실 수 있겠습니까?” 시종은 흔쾌히 응했다.", "effects": {"reputation": 1}}]}], "garden": [{"speaker": "정원사", "text": "정원사가 시든 장미를 가위로 정리하고 있다.", "options": [{"text": "이유를 물어본다.", "response": "“다음 꽃이 잘 피도록 하는 겁니다.” 다니엘은 한동안 그 말을 생각했다.", "effects": {"resolve": 1}}, {"text": "작업을 방해하지 않는다.", "response": "가위 소리가 일정한 간격으로 이어졌다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "꽃잎 사이에 작은 물방울이 맺혀 보랏빛 하늘을 비춘다.", "options": [{"text": "가까이에서 살펴본다.", "response": "다니엘은 꽃을 건드리지 않으려 몸을 숙였다.", "effects": {"resolve": 1}}, {"text": "그대로 지나친다.", "response": "젖은 흙냄새가 구두 끝을 따라왔다.", "effects": {"reputation": 1}}]}, {"speaker": "정원사", "text": "“온실 문은 바람이 불면 저절로 닫힙니다.” 정원사가 일러 준다.", "options": [{"text": "문을 잡아 준다.", "response": "다니엘은 뒤따라오는 사람을 확인하고 문을 붙잡았다.", "effects": {"resolve": 1}}, {"text": "주의하겠다고 한다.", "response": "“알겠습니다. 조심하겠습니다.”", "effects": {"reputation": 1}}]}, {"speaker": "시종", "text": "시종이 작은 꽃바구니를 들고 지나간다. “연회장 장식으로 쓰일 꽃입니다.”", "options": [{"text": "꽃을 칭찬한다.", "response": "“정말 아름답군요.” 시종은 수줍게 웃었다.", "effects": {"resolve": 1}}, {"text": "길을 비켜 준다.", "response": "다니엘은 바구니가 스치지 않도록 한쪽으로 물러섰다.", "effects": {"reputation": 1}}]}, {"speaker": "SYSTEM", "text": "정원 끝의 벤치에는 누군가 두고 간 얇은 책갈피가 놓여 있다.", "options": [{"text": "시종에게 전달한다.", "response": "“주인을 찾으시면 돌려주십시오.” 다니엘은 책갈피를 맡겼다.", "effects": {"resolve": 1}}, {"text": "손대지 않는다.", "response": "다니엘은 물건을 그대로 둔 채 발길을 돌렸다.", "effects": {"reputation": 1}}]}]};

const V13_AMBIENT_SCENES={"hall":[{"speaker":"무도회 안내원","text":"안내원이 손님들의 동선을 정리하며 춤 순서를 확인하고 있다.","options":[{"text":"순서를 확인한다.","response":"다니엘은 표를 두 번 읽고 고개를 끄덕였다.","effects":{"resolve":1}},{"text":"길을 비켜 준다.","response":"다른 손님들이 먼저 지나가도록 한 걸음 물러섰다.","effects":{"reputation":1}}]},{"speaker":"시종","text":"시종이 넘칠 듯한 과일 접시를 들고 지나간다.","options":[{"text":"접시를 받쳐 준다.","response":"“위험할 뻔했습니다.” 시종이 감사했다.","effects":{"resolve":1}},{"text":"통로를 비워 준다.","response":"다니엘은 발끝을 모으고 조심히 비켜섰다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"한 귀족이 오늘의 음악이 낯설다며 고개를 갸웃한다.","options":[{"text":"곡 이름을 함께 살핀다.","response":"둘은 프로그램의 작은 글씨를 한참 들여다보았다.","effects":{"resolve":1}},{"text":"잘 모른다고 답한다.","response":"“죄송합니다. 음악에는 문외한이라서요.”","effects":{"reputation":1}}]},{"speaker":"악사","text":"악사가 떨어뜨린 악보를 찾느라 의자 아래를 살핀다.","options":[{"text":"악보를 주워 준다.","response":"다니엘은 구겨지지 않도록 종이 끝을 조심히 잡았다.","effects":{"resolve":1}},{"text":"주변을 살핀다.","response":"발밑에서 악보 한 장을 발견해 위치를 알려 주었다.","effects":{"reputation":1}}]},{"speaker":"귀족 부인","text":"귀족 부인이 왕궁의 꽃 장식에 쓰인 보라색 리본을 칭찬한다.","options":[{"text":"조용히 동의한다.","response":"“……참 잘 어울리는 색입니다.”","effects":{"resolve":1}},{"text":"장식 담당을 칭찬한다.","response":"다니엘은 준비한 사람들의 노고를 떠올렸다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"음악이 잠시 멎고 연회장에 잔 부딪치는 소리만 남는다.","options":[{"text":"다음 곡을 기다린다.","response":"다니엘은 어색하게 손을 포갰다.","effects":{"resolve":1}},{"text":"잠시 물을 마신다.","response":"차가운 물 한 모금에 긴장이 조금 가셨다.","effects":{"reputation":1}}]}],"corridor":[{"speaker":"경비병","text":"경비병이 방문객에게 조용히 걸어 달라는 안내를 하고 있다.","options":[{"text":"규칙을 확인한다.","response":"“네 말은 잘 들었어, 다니엘.” 다니엘은 곧장 걸음을 늦췄다.","effects":{"resolve":1}},{"text":"안내를 돕는다.","response":"그는 뒤따르던 손님에게도 조용히 주의를 전했다.","effects":{"reputation":1}}]},{"speaker":"시종","text":"시종이 쏟아진 꽃잎을 빗자루로 모으고 있다.","options":[{"text":"꽃잎을 주워 준다.","response":"손끝에 옅은 꽃향기가 남았다.","effects":{"resolve":1}},{"text":"바닥이 미끄럽지 않은지 묻는다.","response":"시종은 이미 정리 중이라며 고개를 숙였다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"긴 회랑 끝에서 작은 발소리가 울렸다가 사라진다.","options":[{"text":"발소리를 따라가 본다.","response":"돌아보니 늦게 퇴근하는 시종이었다.","effects":{"resolve":1}},{"text":"그대로 걷는다.","response":"다니엘은 괜한 기대를 접었다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"낯선 귀족이 창문 너머 세 달의 위치를 묻는다.","options":[{"text":"창가로 안내한다.","response":"“저쪽에서 더 잘 보일 겁니다.”","effects":{"resolve":1}},{"text":"모른다고 솔직히 말한다.","response":"“……천문에는 밝지 않습니다.”","effects":{"reputation":1}}]},{"speaker":"시종","text":"시종이 떨어진 단추 하나를 발견해 주인을 찾고 있다.","options":[{"text":"단추를 살핀다.","response":"다니엘은 자기 소매를 확인한 뒤 고개를 저었다.","effects":{"resolve":1}},{"text":"분실물함을 안내한다.","response":"시종은 단추를 안전하게 보관했다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"벽에 걸린 오래된 전쟁화 앞에서 다니엘이 잠시 걸음을 멈춘다.","options":[{"text":"그림을 살핀다.","response":"가문이 얻은 명예와 자신이 짊어진 기대가 겹쳐 보였다.","effects":{"resolve":1}},{"text":"고개를 돌린다.","response":"오늘만큼은 다른 생각을 하고 싶었다.","effects":{"reputation":1}}]}],"terrace":[{"speaker":"시종","text":"테라스의 촛대 하나가 바람에 꺼져 시종이 불을 다시 붙인다.","options":[{"text":"바람을 막아 준다.","response":"불꽃이 안정되자 시종이 안도의 숨을 내쉬었다.","effects":{"resolve":1}},{"text":"다른 촛대도 확인한다.","response":"멀리 놓인 촛불은 아직 밝았다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"한 손님이 밤하늘을 보며 달이 몇 개로 보이는지 농담을 던진다.","options":[{"text":"진지하게 셋이라고 답한다.","response":"손님이 웃자 다니엘은 뒤늦게 농담임을 깨달았다.","effects":{"resolve":1}},{"text":"가볍게 웃는다.","response":"그는 어색하지만 예의 바르게 미소 지었다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"테라스 난간에 이슬이 맺혀 소매 끝이 차가워진다.","options":[{"text":"손을 거둔다.","response":"다니엘은 소매를 털고 자세를 고쳤다.","effects":{"resolve":1}},{"text":"정원을 내려다본다.","response":"멀리 꽃밭 사이로 등불이 보였다.","effects":{"reputation":1}}]},{"speaker":"경비병","text":"경비병이 난간에 너무 기대지 말아 달라고 부탁한다.","options":[{"text":"즉시 물러선다.","response":"“실례했습니다.” 다니엘은 고개를 숙였다.","effects":{"resolve":1}},{"text":"다른 손님에게도 알린다.","response":"경비병은 짧게 감사를 전했다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"손님이 테라스에서 들리는 음악이 유난히 부드럽다고 말한다.","options":[{"text":"귀 기울여 듣는다.","response":"현악기의 음이 바람에 실려 왔다.","effects":{"resolve":1}},{"text":"홀로 돌아갈까 고민한다.","response":"다니엘은 잠시 더 머무르기로 했다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"세 달의 빛이 물 위에서 서로 다른 선을 만든다.","options":[{"text":"빛을 바라본다.","response":"오래도록 기억에 남을 풍경이었다.","effects":{"resolve":1}},{"text":"시계를 확인한다.","response":"시간이 생각보다 빨리 지나고 있었다.","effects":{"reputation":1}}]}],"drawing":[{"speaker":"시종","text":"시종이 식어 버린 차를 새것으로 바꾸어 주겠다고 한다.","options":[{"text":"감사를 전한다.","response":"“신경 써 주셔서 감사합니다.”","effects":{"resolve":1}},{"text":"그대로 두겠다고 한다.","response":"다니엘은 남은 차를 조용히 마셨다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"귀족이 읽다 만 책의 마지막 장을 찾지 못해 난감해한다.","options":[{"text":"책장을 확인한다.","response":"마지막 장은 책갈피 아래에 접혀 있었다.","effects":{"resolve":1}},{"text":"다른 책을 권한다.","response":"귀족은 새 책을 고르러 일어섰다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"벽난로 옆 의자가 잠시 비었다.","options":[{"text":"앉아 숨을 고른다.","response":"다니엘은 잠깐 눈을 감았다.","effects":{"resolve":1}},{"text":"서서 기다린다.","response":"그는 어색하게 두 손을 모았다.","effects":{"reputation":1}}]},{"speaker":"귀족 부인","text":"귀족 부인이 향이 강한 차와 연한 차 중 무엇이 좋은지 묻는다.","options":[{"text":"연한 차를 고른다.","response":"“저는…… 연한 쪽이 좋겠습니다.”","effects":{"resolve":1}},{"text":"상대의 취향을 묻는다.","response":"부인은 자신의 차 이야기를 길게 들려주었다.","effects":{"reputation":1}}]},{"speaker":"시종","text":"시종이 떨어진 찻숟가락을 새것으로 교체하고 있다.","options":[{"text":"옆으로 물러선다.","response":"다니엘은 작업을 방해하지 않도록 자리를 비켰다.","effects":{"resolve":1}},{"text":"괜찮은지 묻는다.","response":"“다친 곳은 없습니다.” 시종이 답했다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"응접실 구석의 작은 체스판이 아직 정리되지 않았다.","options":[{"text":"말을 제자리에 놓는다.","response":"다니엘은 규칙을 더듬으며 말을 가지런히 세웠다.","effects":{"resolve":1}},{"text":"그대로 둔다.","response":"누군가 다시 돌아와 대국을 이어 갈지도 모른다.","effects":{"reputation":1}}]}],"garden":[{"speaker":"정원사","text":"정원사가 물을 준 화분의 이름표를 바꿔 달고 있다.","options":[{"text":"이름을 물어본다.","response":"정원사는 꽃의 이름을 친절히 알려 주었다.","effects":{"resolve":1}},{"text":"방해하지 않는다.","response":"다니엘은 흙이 묻지 않도록 옷자락을 들었다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"바람에 노란 장미 한 송이가 흔들린다.","options":[{"text":"꽃을 살핀다.","response":"다니엘은 코트리먼 영지의 장미화원을 떠올렸다.","effects":{"resolve":1}},{"text":"걸음을 옮긴다.","response":"향기가 한동안 뒤를 따라왔다.","effects":{"reputation":1}}]},{"speaker":"시종","text":"시종이 정원 길목에 작은 등불을 걸고 있다.","options":[{"text":"등불을 받쳐 준다.","response":"등불이 곧게 걸리자 시종이 웃었다.","effects":{"resolve":1}},{"text":"다른 길을 이용한다.","response":"다니엘은 작업 중인 길을 피해 돌아갔다.","effects":{"reputation":1}}]},{"speaker":"귀족","text":"손님이 정원 길을 잘못 들어 같은 분수를 두 번 봤다고 한다.","options":[{"text":"지도를 함께 본다.","response":"다니엘은 지도에 표시된 분수를 손가락으로 짚었다.","effects":{"resolve":1}},{"text":"자신도 길을 헤맸다고 말한다.","response":"두 사람은 잠시 민망하게 웃었다.","effects":{"reputation":1}}]},{"speaker":"정원사","text":"정원사가 밤에 피는 꽃을 소개하며 조용히 해 달라고 부탁한다.","options":[{"text":"목소리를 낮춘다.","response":"다니엘은 숨소리까지 조심하며 꽃을 살폈다.","effects":{"resolve":1}},{"text":"조용히 자리를 뜬다.","response":"그는 정원사에게 작게 인사했다.","effects":{"reputation":1}}]},{"speaker":"SYSTEM","text":"정원 벤치 위에 접힌 담요가 놓여 있다.","options":[{"text":"시종에게 알려 준다.","response":"시종이 담요를 정리하러 왔다.","effects":{"resolve":1}},{"text":"그대로 지나친다.","response":"밤공기가 생각보다 서늘했다.","effects":{"reputation":1}}]}]};
function ambientScene(loc){
 const ex=exploration();if(!ex.sceneCounts)ex.sceneCounts={};
 const count=ex.sceneCounts[loc]||0;ex.sceneCounts[loc]=count+1;
 const scenes=[...AMBIENT_SCENES[loc],...EXTRA_AMBIENT_SCENES[loc],...V10_AMBIENT_SCENES[loc],...V13_AMBIENT_SCENES[loc]];
 // Cycle through every scene before repeating; first 4 visits retain v8 encounters.
 const scene=scenes[count%scenes.length];
 if(scene.options){
  NODES.explore_ambient={speaker:scene.speaker,text:scene.text,chapter:'CHAPTER 01',choices:scene.options.map((option,i)=>({text:option.text,next:'explore_ambient_reply',effects:option.effects,ambientReply:option.response}))};
 }else NODES.explore_ambient={...scene,chapter:'CHAPTER 01',next:'explore'};
 state.node='explore_ambient';
}

function socialProgress(){if(!state.social||typeof state.social!=='object')state.social={miguelMeetings:0,alexTension:0};return state.social;}
function markMiguelMeeting(){socialProgress().miguelMeetings++;}
function markAlexMeeting(shared=false){const social=socialProgress();social.alexTension=Math.min(100,social.alexTension+(shared?3:1));}
function clueSearch(){
 const ex=exploration();if(ex.turn>=7){state.node='explore_timeout';render();return;}
 const loc=ex.visited[ex.visited.length-1]||'hall';
 const lines=CLUE_LINES[loc]||CLUE_LINES.hall;
 const line=lines[(ex.clueChecks||0)%lines.length];ex.clueChecks=(ex.clueChecks||0)+1;
 ex.turn++;const entry='DAY '+state.day+' · '+CLOCK_LABELS[Math.min(ex.turn-1,7)]+' · '+line;
 ex.clues.push(entry);state.history.push('explore');
 NODES.explore_clue_v14={speaker:"다니엘 레온하르트",text:line+'\n\n이것이 미겔의 행방을 가리키는지는 확실하지 않다.',chapter:'CHAPTER 01',next:'explore'};
 state.node='explore_clue_v14';render();
}
function specialDayEvent(loc){
 const ex=exploration();if(!Array.isArray(ex.dayEvents))ex.dayEvents=[];
 const event=DAY_SPECIALS.find(e=>e.day===state.day&&e.place===loc&&!ex.dayEvents.includes(e.day));
 if(!event)return false;
 ex.dayEvents.push(event.day);
 NODES.explore_special_v14={speaker:event.speaker,text:event.text,chapter:'CHAPTER 01',choices:event.options.map(([text,response,effects])=>({text,next:'explore_ambient_reply',effects,ambientReply:response}))};
 state.node='explore_special_v14';return true;
}

// v15: three-stage original NPC quest; independent of third-party characters.
const QUEST_SCENES={
 hall:{speaker:'악단 보조',text:'악단 보조가 빈 악보함을 붙잡고 어쩔 줄 몰라 한다. “첫 곡의 악보가 사라졌습니다. 회랑으로 옮기는 중에 떨어뜨린 것 같습니다.”',choices:[{text:'“제가 회랑을 살펴보겠습니다.”',next:'explore_ambient_reply',questStep:1,ambientReply:'다니엘은 지나치게 진지하게 고개를 끄덕였다. 작은 부탁이라도 허투루 넘길 수 없었다.',effects:{resolve:1}},{text:'“다른 분께도 알려 두시는 편이 좋겠습니다.”',next:'explore_ambient_reply',questStep:1,ambientReply:'악단 보조가 고개를 끄덕였다. 다니엘은 회랑을 살펴보기로 했다.',effects:{reputation:1}}]},
 corridor:{speaker:'어린 시종',text:'회랑의 어린 시종이 구겨진 악보를 들고 있다. “이게 연회장에서 온 것일까요? 악보 모서리에 보랏빛 잉크가 묻어 있어요.”',choices:[{text:'악보를 조심히 받아 확인한다.',next:'explore_ambient_reply',questStep:2,ambientReply:'악보 첫 장에 악단의 문장이 있었다. 다니엘은 훼손되지 않게 종이를 폈다.',effects:{resolve:1}},{text:'함께 악단에 돌려주자고 제안한다.',next:'explore_ambient_reply',questStep:2,ambientReply:'“도와주셔서 감사합니다.” 시종은 밝은 표정으로 악보를 건넸다.',effects:{reputation:1}}]},
 drawing:{speaker:'악단 보조',text:'응접실 문가에서 악단 보조가 다니엘을 알아본다. “그 악보를 찾으셨습니까? 연주가 곧 시작됩니다.”',choices:[{text:'찾은 악보를 돌려준다.',next:'explore_ambient_reply',questStep:3,ambientReply:'“덕분에 연주를 이어 갈 수 있겠습니다.” 다니엘은 별일 아니라며 손을 내저었다.',effects:{trust:1,reputation:2}},{text:'종이 상태부터 설명한다.',next:'explore_ambient_reply',questStep:3,ambientReply:'“모서리가 조금 구겨졌습니다. ……죄송합니다.” 보조는 웃으며 괜찮다고 했다.',effects:{resolve:2}}]}
};
function questProgress(){const ex=exploration();if(!ex.questV15||typeof ex.questV15!=='object')ex.questV15={step:0,done:false};return ex.questV15;}
function questEvent(loc){const q=questProgress();const needed=['hall','corridor','drawing'][q.step];if(q.done||loc!==needed)return false;const scene=QUEST_SCENES[loc];NODES.explore_quest_v15={...scene,chapter:'CHAPTER 01'};state.node='explore_quest_v15';return true;}
// Clues are hints, not guarantees: NPC sightings can be outdated.
function inferenceV15(){const ex=exploration();const turn=Math.min(ex.turn,6);const schedule=scheduleFor(NIGHT_SCHEDULES,state.day);const hints=[{place:schedule[Math.min(turn+1,6)],confidence:'예상 동선'},{place:schedule[turn],confidence:'현재 시간대 추정'}];const location=id=>LOCATIONS.find(x=>x.id===id)?.name||id;const lines=hints.map(h=>h.confidence+': '+location(h.place));modal('미겔 동선 추리 · DAY '+state.day,'수집한 소문을 바탕으로 한 추정입니다. 실제 방문 시각에 따라 어긋날 수 있습니다.\n\n'+lines.join('\n')+'\n\n단서 '+(ex.clues||[]).length+'건 · 이동 '+ex.turn+'/7');}
function recordGallery(id){if(!Array.isArray(state.unlockedV15))state.unlockedV15=[];if(!state.unlockedV15.includes(id))state.unlockedV15.push(id);}
function sharedEncounterV15(){recordGallery('alex_miguel');NODES.alex_miguel={speaker:"다니엘 레온하르트",text:'미겔의 곁에 알렉이 서 있었다. 그녀가 낮게 “알렉.” 하고 부르는 소리에 다니엘의 발이 멈췄다.\n형의 약혼자다. 그 사실을 모르고 있던 것도 아닌데, 가슴이 불편했다.\n……그저 인사를 드리면 될 일이다.',chapter:'CHAPTER 01',choices:[{text:'두 사람에게 예를 갖춰 인사한다.',next:'alex_miguel_greet',effects:{reputation:2,trust:1}},{text:'질투를 인정하지 않고 조용히 물러난다.',next:'alex_miguel_leave',effects:{resolve:2}},{text:'“……죄송합니다.” 무심코 사과한다.',next:'alex_miguel_flee',effects:{risk:2,resolve:1}}]};}

// v16: day-persistent branching quests and seeded daily routes (game adaptation).
const V16_QUESTS=[
 {id:'ribbon',title:'잃어버린 보랏빛 리본',steps:[
  {loc:'terrace',speaker:'시종',text:'“장식용 리본 한 꾸러미가 사라졌습니다. 바람에 날린 모양입니다.”'},
  {loc:'garden',speaker:'정원사',text:'“울타리에 걸린 리본이 있더군요. 가져가시겠습니까?”'},
  {loc:'terrace',speaker:'시종',text:'“찾아주셨군요! 정말 감사합니다.”'}]},
 {id:'tea',title:'식어 버린 찻잔',steps:[
  {loc:'drawing',speaker:'시종',text:'“응접실에 올릴 찻잎을 잘못 가져왔습니다. 누군가 회랑의 보관함을 확인해 주시면 좋겠는데요.”'},
  {loc:'corridor',speaker:"다니엘 레온하르트",text:'다니엘은 보관함에서 향이 옅은 찻잎 봉투를 찾았다.'},
  {loc:'drawing',speaker:'시종',text:'“덕분에 손님들께 차를 제때 올렸습니다.”'}]},
 {id:'music',title:'뒤바뀐 악단의 순서표',steps:[
  {loc:'hall',speaker:'악사',text:'“오늘 연주 순서가 뒤바뀌었어요. 응접실에 원본이 있을 텐데……”'},
  {loc:'drawing',speaker:"다니엘 레온하르트",text:'다니엘은 테이블 아래로 미끄러진 순서표를 발견했다.'},
  {loc:'hall',speaker:'악사',text:'“이제야 연주를 시작할 수 있겠군요!”'}]}
];
function v16Data(){
 if(!state.v16||typeof state.v16!=='object')state.v16={quests:{},routeDays:{},memories:[],meetingTier:0};
 const d=state.v16;d.quests ||= {};d.routeDays ||= {};d.memories ||= [];
 return d;
}
function v16Hash(day,slot,salt){let n=(day*1103515245+slot*12347+salt*7919)>>>0;n^=n>>>13;n=Math.imul(n,1274126177)>>>0;return (n^(n>>>16))>>>0;}
function v16Route(day){
 const data=v16Data();
 if(!data.routeDays[day]){
  const base=scheduleFor(NIGHT_SCHEDULES,day), places=LOCATIONS.map(x=>x.id);
  data.routeDays[day]=base.map((loc,slot)=>{
   const roll=v16Hash(day,slot,23)%100;
   return roll<28?places[v16Hash(day,slot,31)%places.length]:loc;
  });
 }
 return data.routeDays[day];
}
// v17: original text-only atmosphere and Daniel's introspection.
const V17_ATMOSPHERE={
 hall:['촛대에 불이 하나둘 붙었다. 음악이 시작되기도 전에, 사람들의 웃음이 높은 천장에 부딪혀 흩어졌다.','밤이 깊어질수록 춤곡은 느려졌다. 다니엘은 지나가는 사람들의 얼굴을 살피다가 황급히 시선을 거두었다.'],
 corridor:['대리석 바닥에 세 달의 빛이 길게 드리웠다. 발소리가 지나치게 크게 울려 다니엘은 걸음을 늦췄다.','회랑 끝 창문에 희미한 보랏빛이 걸려 있었다. 밤이 끝나지 않는다는 말이 문득 실감 났다.'],
 terrace:['테라스의 난간이 차가웠다. 아직 완전히 어두워지지 않은 하늘 아래, 먼 정원이 잠겨 있었다.','연회장의 음악이 문틈으로 새어 나왔다. 다니엘은 차마 돌아서지 못한 채 한참 밤하늘을 보았다.'],
 drawing:['응접실의 차 향은 은은했다. 정돈된 찻잔 사이로 누군가 놓고 간 책갈피가 보였다.','시종이 불을 낮추자 방 안의 금박 장식이 부드럽게 빛났다. 아무도 서두르지 않는 시간이었다.'],
 garden:['장미 잎에 맺힌 이슬이 보랏빛 달빛을 받았다. 다니엘은 꽃을 건드리지 않으려 소매를 거두었다.','정원 깊숙한 곳에서는 흙과 잎의 냄새가 났다. 노란 장미를 보고 그는 코트리먼 영지를 떠올렸다.']
};
const V17_THOUGHTS=[
 '형님의 약혼녀를 또 찾고 있다. 예의를 핑계 삼는 일도 이제 지겹다. ……그런데도 멈출 수가 없다.',
 '어디를 가든 누군가에게 도움이 되어야 한다는 생각부터 들었다. 그래야 이곳에 있어도 괜찮을 것 같았다.',
 '누군가를 기다리는 일과 누군가를 찾아다니는 일은 다를까. 그는 답을 알면서도 모른 척했다.',
 '무례하게 보였을까. 다니엘은 조금 전 자신의 말을 머릿속으로 다시 읽었다. 읽을수록 더 어색해졌다.',
 '미겔은 그를 알아볼까. 옷이 달라져도 발걸음은 기억한다는 말을, 그는 이상하게 오래 떠올렸다.'
];
function v17Data(){
 if(!state.v17||typeof state.v17!=='object')state.v17={questEndings:{},bondSeen:{},thoughtIndex:0};
 state.v17.questEndings ||= {};state.v17.bondSeen ||= {};return state.v17;
}



function v17QuestEnding(id,mode){
 const q=V16_QUESTS.find(x=>x.id===id);if(!q)return;
 const d=v17Data(),kind=mode==='finish_help'?'친절한 약속':'조용한 마무리';d.questEndings[id]=kind;
 const text=mode==='finish_help'?'다니엘은 다음에도 도움이 필요하면 불러 달라고 했다. 시종은 몇 번이나 감사했다. 그는 작은 일에도 이렇게 마음이 놓이는 자신이 조금 우스웠다.':'다니엘은 별일 아니라며 고개를 숙였다. 다른 이들의 칭찬을 오래 받는 일은 여전히 익숙하지 않았다.';
 v16Data().memories.push({id:'v17_quest_'+id,title:q.title+' · '+kind,text,day:state.day,category:'의뢰'});
 NODES.explore_v17_ending={speaker:"다니엘 레온하르트",text,chapter:'CHAPTER 01',next:'explore'};
}
function v16QuestEvent(loc){
 const data=v16Data();
 for(const q of V16_QUESTS){
  const progress=data.quests[q.id]||{step:0,choice:null,done:false};
  if(progress.done)continue;
  const stage=q.steps[progress.step];
  if(stage?.loc!==loc)continue;
  data.quests[q.id]=progress;
  const final=progress.step===2;
  NODES.explore_v16_quest={speaker:stage.speaker,text:stage.text,chapter:'CHAPTER 01',
   choices:final?[
    {text:'조용히 인사하고 돌아선다.',next:'explore',effects:{reputation:2},v16Quest:q.id,v16Mode:'finish',v17Ending:'quiet'},
    {text:'다음에도 도움이 필요하면 말씀해 주십시오.',next:'explore',effects:{trust:1,reputation:1},v16Quest:q.id,v16Mode:'finish',v17Ending:'help'}
   ]:[
    {text:'도움을 드리겠습니다.',next:'explore',effects:{resolve:1},v16Quest:q.id,v16Mode:'advance'},
    {text:'지금은 어려울 것 같습니다.',next:'explore',v16Quest:q.id,v16Mode:'decline'}
   ]};
  state.node='explore_v16_quest';return true;
 }
 return false;
}


function v16QuestBoard(){
 const data=v16Data();
 modal('왕궁 의뢰 수첩',V16_QUESTS.map(q=>{
  const x=data.quests[q.id]||{step:0,done:false};
  return q.title+' · '+(x.done?'완료':x.choice==='decline'?'보류':(x.step+1)+'/3 단계')+'\n'+(x.done?'도움을 마쳤습니다.':'다음 장소: '+(LOCATIONS.find(l=>l.id===q.steps[x.step]?.loc)?.name||'—'));
 }).join('\n\n'));
}


// v18: persistent appointments, time-of-night NPCs, and day-spanning original incidents.
const V18_NPCS={
 hall:[['악단 보조','악단 보조가 낡은 악보철을 정리하고 있다. “아직도 박자를 맞추는 게 어렵습니다.”'],['무도회 안내원','안내원이 손님들의 이름을 다시 확인하고 있다. “마지막 곡까지 자리를 지켜야 해서요.”'],['시종','시종이 비어 있는 잔을 수거한다. 홀에는 조금씩 피로한 웃음이 번진다.']],
 corridor:[['견습 시종','어린 시종이 무거운 쟁반을 붙잡고 서 있다. “아까부터 손이 떨려서……”'],['경비병','경비병이 교대 시간을 확인하며 벽의 촛불을 살핀다.'],['야간 경비병','야간 경비병이 회랑 끝 문을 조용히 잠근다.']],
 terrace:[['화분 담당 시종','화분 담당 시종이 바람에 쓰러진 작은 화분을 일으킨다.'],['손님','손님이 난간에 기대 세 개의 달을 바라본다.'],['야간 시종','야간 시종이 테라스의 담요를 정리하고 있다.']],
 drawing:[['차 담당 시종','시종이 차의 온도를 살피며 새 주전자를 준비한다.'],['귀족 손님','한 손님이 반쯤 읽은 시집을 조심스럽게 덮는다.'],['정리 담당 시종','정리 담당 시종이 손님들이 두고 간 책을 모은다.']],
 garden:[['정원사','정원사가 장미의 잎을 하나씩 살피고 있다.'],['꽃 장식 시종','시종이 연회장으로 옮길 꽃다발을 묶는다.'],['야간 정원사','정원사가 이슬에 젖은 길을 살피며 등불을 옮긴다.']]
};
const V18_SERIAL=[
 {title:'분실된 은색 책갈피',start:'응접실 책상 아래에 은색 책갈피 하나가 떨어져 있었다. 다니엘은 주인을 찾아주는 편이 옳겠다고 생각했다.',middle:'회랑의 시종이 책갈피를 알아보았다. “어제 손님 한 분이 찾고 계셨습니다.”',end:'응접실에 돌아온 다니엘은 책갈피를 분실물 담당 시종에게 건넸다. 주인을 찾을 수 있을 것이다.'},
 {title:'정원에 남겨진 화분',start:'정원 한편에 쓰러진 화분이 있었다. 흙은 쏟아졌지만 꽃은 아직 살아 있었다.',middle:'테라스의 시종이 빈 화분 받침을 찾고 있었다. 다니엘은 정원의 일을 조심스럽게 설명했다.',end:'정원사는 제자리를 찾은 화분을 보며 고개를 숙였다. “덕분에 꽃을 살렸습니다.”'}
];
function v18Data(){
 if(!state.v18||typeof state.v18!=='object')state.v18={promise:null,serial:{},npcSeen:{},emotion:0};
 const d=state.v18;d.serial||={};d.npcSeen||={};d.emotion ||= 0;return d;
}
function v18Remember(id,title,text,category='기타'){
 const memories=v16Data().memories;
 if(!memories.some(m=>m.id===id))memories.push({id,title,text,day:state.day,category});
}
function v18Scene(id,speaker,text,choices){
 NODES.explore_v18_event={speaker,text,chapter:'CHAPTER 01',choices};
 state.node='explore_v18_event';return true;
}
function v18PromiseEncounter(loc,turn){
 const d=v18Data(),promise=d.promise;
 if(!promise||promise.status!=='accepted'||promise.day!==state.day||promise.loc!==loc||promise.turn!==turn)return false;
 promise.status='met';
 const text=(promise.loc==='terrace'?'테라스의 난간 너머로 보랏빛 하늘이 펼쳐져 있었다.':promise.loc==='drawing'?'응접실에는 찻잔을 내려놓는 소리가 잔잔하게 울렸다.':'장미 정원에는 꽃잎을 흔드는 바람이 지나갔다.')+' 미겔은 그의 발소리가 가까워지자 고개를 돌렸다.\n\n“레온하르트 경. 오셨군요.”\n\n다니엘은 인사를 하려다 손끝을 움켜쥐었다. 약속한 것은 분명 자신인데, 그녀가 이곳에 있다는 사실이 믿기지 않았다.';
 v18Remember('promise_'+state.day,'미겔 · 지켜진 약속',text,'관계');
 markMiguelMeeting();
 return v18Scene('promise','미겔 코트리먼',text,[
 {text:'“……기다리게 해 드렸습니까?”',next:'explore',effects:{trust:2,affection:1},v18Emotion:1},
 {text:'“약속을 지키고 싶었습니다.”',next:'explore',effects:{trust:1,affection:2,risk:1},v18Emotion:2},
 {text:'“형님께서도 이곳에 오십니까?”',next:'explore',effects:{resolve:1},v18Emotion:-1}
 ]);
}
function v18OfferPromise(){
 const d=v18Data(),s=socialProgress();
 if(s.miguelMeetings<2||state.day<2||d.promise)return false;
 const tomorrow=state.day+1;
 return v18Scene('offer','미겔 코트리먼',
 '미겔은 조용히 창밖을 보았다. “내일도 이 시간쯤 왕궁에 계십니까?”\n\n다니엘은 대답을 서두르다 입을 다물었다. 아무런 뜻이 없는 물음일 수도 있었다.\n\n“저는 내일 저녁, 테라스에 잠시 들를 예정입니다.”',[
 {text:'“……괜찮으시다면 저도 잠시 들르겠습니다.”',next:'explore',effects:{trust:1},v18Promise:'accept',v18Emotion:1},
 {text:'“형님께 실례가 되지 않을까요?”',next:'explore',effects:{resolve:1},v18Promise:'decline',v18Emotion:-1}
 ]);
}
function v18CheckMissedPromise(){
 const d=v18Data(),p=d.promise;
 if(!p||p.status!=='accepted')return;
 if(state.day>p.day||(state.day===p.day&&exploration().turn>p.turn)){
 p.status='missed';
 v18Remember('promise_missed_'+p.day,'미겔 · 지키지 못한 약속','다니엘은 뒤늦게 테라스 쪽을 바라보았다. 약속한 시간은 이미 지나 있었다.','관계');
 }
}
function v18SerialEvent(loc){
 const d=v18Data();
 for(let i=0;i<V18_SERIAL.length;i++){
  const q=V18_SERIAL[i],prog=d.serial[i]||{stage:0,startDay:0,done:false};
  if(prog.done)continue;
  const places=i===0?['drawing','corridor','drawing']:['garden','terrace','garden'];
  if(places[prog.stage]!==loc)continue;
  if(prog.stage>0&&state.day<=prog.startDay+prog.stage-1)continue;
  d.serial[i]=prog;
  const text=[q.start,q.middle,q.end][prog.stage];
  const final=prog.stage===2;
  return v18Scene('serial','SYSTEM',text,final?[
   {text:'조용히 일을 마무리한다.',next:'explore',effects:{reputation:2},v18Serial:i,v18Mode:'finish'},
   {text:'“다음에도 도움이 필요하면 말씀해 주십시오.”',next:'explore',effects:{resolve:1,reputation:1},v18Serial:i,v18Mode:'finish_help'}
  ]:[
   {text:'일을 맡아 진행한다.',next:'explore',effects:{resolve:1},v18Serial:i,v18Mode:'advance'},
   {text:'지금은 다른 일을 먼저 살핀다.',next:'explore'}
  ]);
 }
 return false;
}
function v18NpcEvent(loc,turn){
 const d=v18Data(),slot=turn<2?0:turn<5?1:2;
 const [speaker,text]=(V18_NPCS[loc]||V18_NPCS.hall)[slot];
 const key=state.day+'_'+loc+'_'+slot;
 if(d.npcSeen[key])return false;
 d.npcSeen[key]=true;
 return v18Scene('npc',speaker,text+'\n\n다니엘은 괜히 서두르지 않으려 발을 멈췄다.',[
  {text:'정중하게 말을 건넨다.',next:'explore',effects:{reputation:1},v18Emotion:1},
  {text:'상대의 일을 방해하지 않고 지나간다.',next:'explore',effects:{resolve:1},v18Emotion:-1}
 ]);
}
function v18FeelingLine(){
 const e=v18Data().emotion;
 if(e>=3)return '……한 번쯤은 제 마음을 인정해도 되는 걸까요. 아니, 그럴 수는 없습니다.';
 if(e<=-2)return '……쓸데없는 생각을 하고 있습니다. 형님께 실례가 될 뿐입니다.';
 return '……저는 그저 인사를 드리려는 것뿐입니다. 다른 뜻은 없습니다.';
}
function v18Board(){const d=v18Data(),p=d.promise;
 const promise=p?('미겔과의 약속: '+({accepted:'예정',met:'완료',missed:'시간을 놓침',declined:'정중히 사양'}[p.status]||p.status)+(p.status==='accepted'?' · DAY '+p.day+' 20:30 · 달빛 테라스':'')):'미겔과의 약속: 아직 없음';
 const lines=V18_SERIAL.map((q,i)=>{const x=d.serial[i]||{stage:0,done:false};return q.title+' · '+(x.done?'완료':x.stage===0?'시작 전':x.stage+'/3 진행')});
 modal('왕궁의 작은 기록',promise+'\n\n'+lines.join('\n')+'\n\n다니엘의 마음: '+v18FeelingLine());
}

// v19: self-contained, backwards-compatible social continuity and rumor system.
const V19_NPC_PROFILES={
 hall:{name:'악단 보조',intro:'악보를 고쳐 쥔 악단 보조가 다니엘을 알아보았다.',warm:'“지난번 말씀 덕분에 악보를 다시 살폈습니다. 오늘은 실수하지 않을 것 같습니다.”'},
 corridor:{name:'견습 시종',intro:'쟁반을 들고 가던 견습 시종이 멈칫했다.',warm:'“경께서 도와주셨던 일, 아직 기억하고 있습니다.”'},
 terrace:{name:'화분 담당 시종',intro:'난간 옆의 화분을 정리하던 시종이 고개를 숙였다.',warm:'“그날 화분을 살펴주신 덕분에 꽃이 무사합니다.”'},
 drawing:{name:'차 담당 시종',intro:'찻잔을 정리하던 시종이 정중하게 인사했다.',warm:'“지난번에 말씀하신 차를 준비해 두었습니다.”'},
 garden:{name:'정원사',intro:'장미 덤불 사이의 정원사가 장갑을 벗었다.',warm:'“지난번에도 이 길을 지나셨지요. 오늘은 꽃이 조금 더 피었습니다.”'}
};
const V19_RUMORS=[
 {id:'roses',loc:'garden',text:'정원사가 낮은 목소리로 말했다. “노란 장미를 찾는 손님이 계셨다더군요.” 누구를 가리키는지는 확인되지 않았다.',reply:'다니엘은 성급히 짐작하지 않기로 했다. 꽃을 찾는 사람이 반드시 미겔일 리는 없었다.'},
 {id:'terrace',loc:'terrace',text:'시종들이 테라스에 손님을 기다리게 했다는 소문을 나눴다. 이름은 누구도 말하지 않았다.',reply:'약속을 떠올린 다니엘은 공연히 손가락을 움켜쥐었다.'},
 {id:'brothers',loc:'corridor',text:'회랑을 지나던 손님 둘이 레온하르트 형제에 관해 수군거렸다. 자세한 내용은 알아들을 수 없었다.',reply:'다니엘은 제 이름이 들린 것만으로도 걸음을 늦췄다.'},
 {id:'music',loc:'hall',text:'악단의 연주 순서가 바뀌었다는 말이 연회장에 퍼졌다. 소문을 전한 사람마다 이유가 달랐다.',reply:'확인하지 않은 말을 전하는 일은 삼가야 한다고 생각했다.'},
 {id:'tea',loc:'drawing',text:'응접실에서 누군가 차를 남기고 급히 떠났다는 소문이 돌았다. 사정은 아무도 알지 못했다.',reply:'다니엘은 누군가의 사정을 함부로 추측하지 않기로 했다.'}
];
function v19Data(){
 if(!state.v19||typeof state.v19!=='object')state.v19={npc:{},rumors:[],promiseAfter:null,feelings:0,seen:{}};
 const d=state.v19;d.npc||={};d.rumors||=[];d.seen||={};if(!Number.isFinite(d.feelings))d.feelings=0;return d;
}
function v19Record(id,title,text,category='기타'){
 v18Remember('v19_'+id,title,text,category);
}
function v19Mood(){
 const d=v19Data(),e=v18Data().emotion,t=socialProgress().alexTension;
 if(t>=7)return '형님의 이름이 들릴 때마다 다니엘은 자신도 모르게 어깨를 움츠렸다. 이 마음을 감춘다는 것과 아무렇지 않게 행동하는 것은 전혀 다른 일이었다.';
 if(e+d.feelings>=4)return '그녀에게 건넬 말을 몇 번이고 고르다가, 다니엘은 문득 자신이 무엇을 기대하는지 깨닫고 얼굴을 붉혔다.';
 if(e+d.feelings<=-3)return '다니엘은 가문의 체면을 먼저 떠올렸다. 그러면서도 자신이 애써 외면하는 것이 무엇인지 알고 있었다.';
 return '다니엘은 자신의 옷깃을 매만졌다. 인사 한마디를 위해 이토록 마음이 쓰이는 것이 이상했다.';
}
function v19PromiseFollowup(loc){
 const p=v18Data().promise,d=v19Data();
 if(!p||!['met','missed'].includes(p.status)||state.day<=p.day||d.promiseAfter===p.status)return false;
 if(loc!=='terrace'&&loc!=='drawing')return false;
 const missed=p.status==='missed';d.promiseAfter=p.status;
 const text=missed?
 '테라스에서 미겔과 마주친 다니엘은 걸음을 멈췄다. 약속한 시간을 지키지 못한 일이 마음에 걸렸다.\n\n“그날은 뵙지 못했습니다, 레온하르트 경.”\n\n미겔은 이유를 묻거나 탓하지 않았다. 다니엘은 그 담담한 말에 더 깊이 고개를 숙였다.':
 '응접실 문 앞에서 미겔과 다시 마주쳤다.\n\n“지난번 테라스에서는 무사히 돌아가셨습니까?”\n\n짧은 안부였지만 다니엘은 잠시 말을 잇지 못했다. 그녀가 약속을 기억하고 있었다.';
 v19Record('promise_'+p.status+'_'+p.day,missed?'지키지 못한 약속 · 재회':'지킨 약속 · 그 후',text,'관계');
 return v18Scene('v19promise','미겔 코트리먼',text,missed?[
  {text:'“죄송합니다. 기다리시게 했습니다.”',next:'explore',effects:{trust:2,resolve:1},v19Feeling:-1},
  {text:'“변명처럼 들리겠지만, 사정이 있었습니다.”',next:'explore',effects:{trust:1},v19Feeling:1},
  {text:'“다시 인사드릴 기회를 주시겠습니까?”',next:'explore',effects:{affection:1,risk:1},v19Feeling:2}
 ]:[
  {text:'“덕분에 편안한 밤이었습니다.”',next:'explore',effects:{trust:2,affection:1},v19Feeling:2},
  {text:'“……형님께도 안부를 전하겠습니다.”',next:'explore',effects:{resolve:1},v19Feeling:-1}
 ]);
}
function v19NpcEncounter(loc){
 const d=v19Data(),profile=V19_NPC_PROFILES[loc];if(!profile)return false;
 const x=d.npc[loc]||{meetings:0,rapport:0};
 if(x.meetings>=4)return false;
 // One repeat NPC interaction per place and day; persists across saves.
 const key=state.day+'_'+loc;
 if(d.seen['npc_'+key])return false;
 d.seen['npc_'+key]=true;x.meetings++;d.npc[loc]=x;
 const text=profile.intro+'\n\n'+(x.rapport>=2?profile.warm:x.meetings>1?'“또 뵙는군요, 경. 오늘 연회는 평안하십니까?”':'“도움이 필요하신 것은 아니시지요?”')+'\n\n'+v19Mood();
 return v18Scene('v19npc',profile.name,text,[
  {text:'상대의 이야기를 끝까지 들어준다.',next:'explore',effects:{reputation:1},v19Npc:loc,v19Rapport:1,v19Feeling:1},
  {text:'바쁜 일을 방해하지 않도록 인사만 한다.',next:'explore',effects:{resolve:1},v19Npc:loc,v19Rapport:0,v19Feeling:-1}
 ]);
}
function v19RumorEncounter(loc){
 const d=v19Data(),item=V19_RUMORS.find(r=>r.loc===loc);if(!item)return false;
 if(d.rumors.some(r=>r.id===item.id&&r.day===state.day))return false;
 d.rumors.push({id:item.id,day:state.day,loc,verified:false});
 const text=item.text+'\n\n'+v19Mood();
 v19Record('rumor_'+item.id+'_'+state.day,'왕궁 소문 · '+LOCATIONS.find(l=>l.id===loc).name,text,'기타');
 return v18Scene('v19rumor','SYSTEM',text,[
  {text:'사실을 확인하기 전까지 마음에만 담아둔다.',next:'explore',effects:{resolve:1},v19Feeling:-1},
  {text:'조심스럽게 사정을 물어본다.',next:'explore',effects:{reputation:1},v19Rumor:item.id,v19Feeling:1}
 ]);
}

// v20: rumor verification, trust-based errands, promise renewal, Alex tension, and emotion diary.
const V20_RUMOR_FACTS={
 roses:{place:'garden',fact:'정원사는 노란 장미를 찾은 손님이 꽃 장식 담당 시종이었다고 설명했다. 미겔의 행방과는 관계가 없었다.',effect:'false'},
 terrace:{place:'terrace',fact:'테라스에서 기다리던 손님은 악단 책임자였다. 약속 상대의 이름을 들은 이는 없었다.',effect:'false'},
 brothers:{place:'corridor',fact:'회랑의 경비병은 레온하르트 형제에 관한 대화가 단순한 출입 순서 확인이었다고 전했다. 그 이상의 사정은 알 수 없었다.',effect:'partial'},
 music:{place:'hall',fact:'악단 보조가 순서표 변경을 확인했다. 한 연주자의 악기가 고장 나 연주 순서를 바꾼 것이었다.',effect:'true'},
 tea:{place:'drawing',fact:'차 담당 시종은 찻잔을 남긴 손님이 다른 행사에 늦어 급히 이동했다고 말했다. 그 손님의 신원은 밝히지 않았다.',effect:'partial'}
};
const V20_ERRANDS={
 hall:{title:'접힌 연주표',ask:'악단 보조가 접힌 연주표를 건넨다. “연주 순서가 맞는지 마지막으로 확인해 주시겠습니까?”',good:'다니엘은 표의 순서를 하나씩 짚어 확인했다. 악단 보조는 안도의 숨을 내쉬었다.'},
 corridor:{title:'길을 잃은 손님',ask:'견습 시종이 손님에게 안내할 회랑의 방향을 물었다. “제가 잘못 안내하면 곤란합니다.”',good:'다니엘은 표지판을 확인한 뒤 차분히 방향을 알려 주었다.'},
 terrace:{title:'흔들리는 화분',ask:'화분 담당 시종이 바람에 흔들리는 받침대를 걱정한다. “잠시만 함께 잡아 주실 수 있습니까?”',good:'다니엘이 받침대를 붙잡는 동안 시종이 고정끈을 묶었다.'},
 drawing:{title:'식어 버린 찻물',ask:'차 담당 시종이 새 찻잔을 옮길 손이 부족하다고 말했다. “잠깐만 도와주실 수 있겠습니까?”',good:'다니엘은 조심스럽게 찻잔을 옮겼다. 시종은 손님들에게 무사히 차를 내었다.'},
 garden:{title:'정원의 길',ask:'정원사가 꽃길을 가로막은 빈 화분을 옮기려 한다. “통행에 방해가 되지 않게 해야겠습니다.”',good:'다니엘은 화분을 안전한 곳으로 옮기는 일을 거들었다.'}
};
function v20Data(){
 if(!state.v20||typeof state.v20!=='object')state.v20={rumorChecks:{},errands:{},promiseRenewals:0,alexScenes:{},diary:[],lastDiaryDay:0,rumorImpact:0};
 const d=state.v20;d.rumorChecks||={};d.errands||={};d.alexScenes||={};d.diary||=[];d.promiseRenewals||=0;d.rumorImpact||=0;return d;
}
function v20Record(id,title,text,category='기타'){v18Remember('v20_'+id,title,text,category);}
function v20VerifyRumor(){
 const d=v20Data(),r=v19Data().rumors.find(x=>x.day===state.day&&!d.rumorChecks[x.id+'_'+x.day])||v19Data().rumors.find(x=>!d.rumorChecks[x.id+'_'+x.day]);
 if(!r){modal('소문 확인','확인할 소문이 없습니다. 왕궁에서 새로운 소문을 들어 보세요.');return;}
 const fact=V20_RUMOR_FACTS[r.id];if(!fact){modal('소문 확인','아직 확인 가능한 정보가 없습니다.');return;}
 if(exploration().turn>=7){modal('소문 확인','오늘은 더 조사할 시간이 없습니다.');return;}
 exploration().turn++;
 d.rumorChecks[r.id+'_'+r.day]={day:state.day,result:fact.effect};r.verified=true;r.result=fact.effect;
 const delta=fact.effect==='true'?2:fact.effect==='false'?-1:0;d.rumorImpact=Math.max(-20,Math.min(20,d.rumorImpact+delta));
 state.stats.resolve=Math.min(100,state.stats.resolve+1);
 const narrative='DAY '+r.day+'에 들은 소문을 조심스럽게 확인했다.\n\n'+fact.fact+'\n\n확인된 사실과 짐작을 구분하기로 했다.';
 v20Record('rumor_'+r.id+'_'+r.day,'소문의 진위 · '+r.id,narrative,'기타');
 modal('소문 확인 · 30분 경과',narrative+'\n\n소문의 파급 '+d.rumorImpact+' · 남은 이동 '+Math.max(0,7-exploration().turn));render();
}
function v20ErrandEvent(loc){
 const d=v20Data(),npc=v19Data().npc[loc],q=V20_ERRANDS[loc];
 if(!q||!npc||npc.rapport<2||d.errands[loc]||exploration().turn>6)return false;
 d.errands[loc]={offeredDay:state.day,status:'offered'};
 return v18Scene('v20errand',V19_NPC_PROFILES[loc].name,q.ask+'\n\n낯익은 얼굴을 알아본 시종은 다니엘의 대답을 기다렸다.',[
  {text:'“제가 도울 수 있다면 기꺼이 돕겠습니다.”',next:'explore',v20Errand:loc,v20ErrandMode:'help',effects:{reputation:2,resolve:1}},
  {text:'“죄송합니다. 지금은 다른 일을 찾고 있습니다.”',next:'explore',v20Errand:loc,v20ErrandMode:'decline',effects:{resolve:1}}
 ]);
}







// v21 — narrative-only continuity, all state additive to the original save.
const V21_LOCATIONS={hall:'대연회장',corridor:'회랑',terrace:'테라스',drawing:'응접실',garden:'장미 정원'};
const V21_FOLLOWUPS={
 hall:'악단 보조는 새로 정리한 순서표를 보여 주었다. “그날 도와주신 덕분에 연주를 무사히 마쳤습니다.” 다니엘은 별일 아니었다고 답했지만, 상대는 정중히 고개를 숙였다.',
 corridor:'견습 시종은 멀리서도 다니엘을 알아보았다. “지난번 안내해 주신 길이 맞았습니다.” 작은 안도감이 두 사람 사이에 남았다.',
 terrace:'화분 담당 시종은 고정된 받침대를 가리켰다. “그 뒤로는 바람이 불어도 괜찮습니다.” 다니엘은 화분이 넘어지지 않은 것을 확인했다.',
 drawing:'차 담당 시종은 차분히 잔을 정리하고 있었다. “덕분에 손님들을 오래 기다리게 하지 않았습니다.” 다니엘은 미소 대신 고개를 숙였다.',
 garden:'정원사는 말끔해진 길을 보여 주었다. “덕분에 손님들이 꽃을 가까이 볼 수 있게 됐습니다.” 다니엘은 노란 장미 앞에서 잠시 발걸음을 늦췄다.'
};
const V21_RUMOR_ECHO={
 roses:'노란 장미를 찾은 사람이 미겔이었다는 추측은 꽃 장식 담당 시종의 방문이었다는 확인 뒤 조금씩 잦아들었다.',
 terrace:'테라스의 비밀스러운 만남이라는 이야기는 악단의 일정 확인이었다는 말로 바뀌었다.',
 brothers:'레온하르트 형제에 관한 이야기는 단순한 출입 순서였다는 설명에도 쉽게 사라지지 않았다. 다니엘은 대꾸를 삼켰다.',
 music:'악단의 순서 변경 이유가 악기 고장이었다는 사실이 전해지자 사람들은 공연 준비의 분주함을 이야기했다.',
 tea:'남겨진 찻잔의 주인은 여전히 알려지지 않았다. 시종은 그 손님이 급히 다른 행사로 갔다고만 설명했다.'
};
function v21Data(){
 if(!state.v21||typeof state.v21!=='object')state.v21={followups:{},echoes:{},promisePlaces:[],moodHistory:[],bondScenes:{}};
 const d=state.v21;d.followups||={};d.echoes||={};d.promisePlaces||=[];d.moodHistory||=[];d.bondScenes||={};return d;
}
function v21Record(id,title,body,category='기타'){v18Remember('v21_'+id,title,body,category);}
function v21NpcFollowup(loc){
 const q=v20Data().errands[loc],d=v21Data(),npc=v19Data().npc[loc];
 if(!q||q.status!=='help'||state.day<=q.offeredDay||d.followups[loc]||!npc)return false;
 d.followups[loc]={day:state.day};npc.rapport=Math.min(10,(npc.rapport||0)+1);
 const body=V21_FOLLOWUPS[loc];v21Record('followup_'+loc,'부탁의 후일담 · '+V21_LOCATIONS[loc],body,'의뢰');
 return v18Scene('v21followup',V19_NPC_PROFILES[loc].name,body,[
  {text:'“도움이 되었다니 다행입니다.”',next:'explore',effects:{reputation:1,trust:1}},
  {text:'“그 뒤로 불편한 일은 없으셨습니까?”',next:'explore',effects:{resolve:1}}
 ]);
}
function v21RumorEcho(loc){
 const d=v21Data(),checks=v20Data().rumorChecks;
 const item=Object.entries(checks).find(([key,val])=>{
  const id=key.split('_')[0];return V20_RUMOR_FACTS[id]&&V20_RUMOR_FACTS[id].place!==loc&&!d.echoes[key]&&state.day>val.day;
 });
 if(!item)return false;
 const [key,val]=item,id=key.split('_')[0];d.echoes[key]={day:state.day,place:loc};
 const body='왕궁의 다른 장소에도 먼저 들었던 소문이 흘러들어 왔다.\n\n'+V21_RUMOR_ECHO[id]+'\n\n다니엘은 자신이 확인한 사실과 다른 사람의 추측이 섞이지 않도록 말을 골랐다.';
 v21Record('echo_'+key,'소문의 여파 · '+V21_LOCATIONS[loc],body,'기타');
 return v18Scene('v21echo','SYSTEM',body,[
  {text:'확인한 사실만 조심스럽게 전한다.',next:'explore',effects:{reputation:1,resolve:1},v21Echo:'careful'},
  {text:'섣불리 말을 보태지 않는다.',next:'explore',effects:{trust:1},v21Echo:'silent'}
 ]);
}
function v21PromiseMenu(){
 const p=v18Data().promise,d=v20Data();
 if(!p||!['met','missed','declined'].includes(p.status)){modal('약속 장소를 고르기','이전에 나누었던 약속이 마무리된 뒤에 다시 제안할 수 있습니다.');return;}
 if(d.promiseRenewals>=2||state.day>=30){modal('약속 장소를 고르기','이번 연회에서 더 청할 수 있는 약속이 없습니다.');return;}
 const wrap=document.createElement('div');const info=document.createElement('p');info.textContent='다니엘은 상대의 편의를 먼저 생각했다. 어느 장소가 무례하지 않을까. 다음 날 같은 시간대에 그곳으로 가야 한다.';wrap.append(info);
 for(const [loc,label] of [['terrace','테라스'],['drawing','응접실'],['garden','장미 정원']]){
  const b=document.createElement('button');b.textContent='✧ 다음 날 · '+label+'에서 인사 청하기';b.onclick=()=>{
   d.promiseRenewals++;v18Data().promise={day:state.day+1,loc,turn:3,status:'accepted'};
   v19Data().promiseAfter=null;v21Data().promisePlaces.push({day:state.day+1,loc});
   const body='다니엘은 '+label+'에서 다시 인사를 드릴 수 있는지 정중히 여쭈었다. 상대의 답을 강요하지 않겠다는 생각으로 목소리를 낮췄다.';
   v21Record('promise_'+state.day+'_'+loc,'다시 청한 약속 · '+label,body,'관계');
   closeModal();modal('약속을 청했습니다','DAY '+(state.day+1)+' · '+label+' · 네 번째 이동 시간대에 방문하세요.\n\n'+body);
  };wrap.append(b);
 }
 modal('미겔과의 약속 장소 선택',wrap);
}





// v22: story extensions. All additions are optional, persisted under state.v22.
const V22_PLACE_SCENES={
 terrace:{title:'달빛 아래의 거리',text:'테라스의 난간에는 달빛이 길게 걸렸다. 미겔은 정중히 고개를 숙였다. “레온하르트 경.”\n\n다니엘은 바람이 그녀의 숄을 스치는 것을 보았다. 가까이 다가가도 될지, 묻는 편이 나을지 한참 망설였다.',ask:'“……바람이 차갑지는 않으십니까?”'},
 drawing:{title:'찻잔 사이의 침묵',text:'응접실에는 식어 가는 차 향이 남았다. 미겔은 맞은편 자리를 가리키되, 다니엘이 먼저 앉을 때까지 기다렸다.\n\n그는 찻잔을 쥐었다 놓았다. 평범한 안부를 묻는 일이 이렇게 어려울 줄은 몰랐다.',ask:'“차는 입에 맞으십니까?”'},
 garden:{title:'장미 사이의 발걸음',text:'장미 정원에는 노란 꽃잎이 드문드문 떨어져 있었다. 미겔은 다니엘의 구두 소리를 듣고 걸음을 멈췄다.\n\n“걸음이 익숙하군요.” 짧은 말이었지만 다니엘은 대답을 고르느라 한 박자 늦었다.',ask:'“꽃을 좋아하십니까?”'}
};
const V22_NPC_SCENES={
 hall:{name:'악단 보조',text:'악단 보조는 다니엘을 알아보고 악보의 가장자리를 접어 보였다. “지난번에 도와주신 덕분에 연주가 무사했습니다. 오늘은 제가 경의 길을 안내해 드릴까요?”'},
 corridor:{name:'견습 시종',text:'견습 시종은 멀리서부터 허리를 숙였다. “이제 복도에서 길을 잃지는 않습니다. 경께서 알려주신 대로 표식을 살폈거든요.”'},
 terrace:{name:'화분 담당 시종',text:'화분 담당 시종은 묶인 끈을 가리켰다. “바람이 다시 불어도 넘어지지 않을 겁니다. 경의 도움이 오래 남았군요.”'},
 drawing:{name:'차 담당 시종',text:'차 담당 시종은 빈 찻잔을 거두며 웃었다. “경께서 거들어 주신 뒤로는 손님들 앞에서 덜 떨립니다.”'},
 garden:{name:'정원사',text:'정원사는 다니엘에게 꽃잎 하나를 내밀었다. “아무것도 아닌 일 같아도, 길을 정리해 두면 누군가는 편히 걸을 수 있지요.”'}
};
function v22Data(){
 if(!state.v22||typeof state.v22!=='object')state.v22={placeMemories:{},npcDeep:{},rumorResponses:{},alexConflict:{},diaryComparisons:[]};
 const d=state.v22;d.placeMemories||={};d.npcDeep||={};d.rumorResponses||={};d.alexConflict||={};d.diaryComparisons||=[];return d;
}
function v22Record(id,title,body,category='기타'){v18Remember('v22_'+id,title,body,category);}
function v22PromiseScene(loc){
 const d=v22Data(),p=v18Data().promise,scene=V22_PLACE_SCENES[loc];
 if(!scene||!p||p.status!=='met'||p.loc!==loc||p.day!==state.day||d.placeMemories[state.day+'_'+loc])return false;
 d.placeMemories[state.day+'_'+loc]=true;
 const text=scene.text+'\n\n형의 약혼녀 앞이라는 사실을 다니엘은 잊지 않았다.';
 v22Record('promise_'+state.day+'_'+loc,'약속의 장소 · '+scene.title,text,'관계');
 return v18Scene('v22promise','미겔 코트리먼',text,[
 {text:scene.ask,next:'explore',effects:{trust:2},v22Choice:'courtesy'},
 {text:'“시간을 내 주셔서 감사합니다.”',next:'explore',effects:{reputation:1,resolve:1},v22Choice:'gratitude'},
 {text:'형님과의 약속을 떠올리고 말을 아낀다.',next:'explore',effects:{resolve:2},v22Choice:'restraint'}]);
}







// v23: optional persistent story extensions, separate from official canon.
const V23_REWARDS={
 hall:{name:'악단 보조',gift:'악단 보조는 공연 순서가 적힌 작은 종이를 건넸다. “덕분에 무사히 연주했습니다. 다음 공연이 시작될 때 이걸 보시면 편할 겁니다.”',token:'연주 순서 메모'},
 corridor:{name:'견습 시종',gift:'견습 시종은 손때 묻은 왕궁 약도를 내밀었다. “제가 다시 그려 본 겁니다. 경께서도 길을 찾으실 때 쓰십시오.”',token:'손그림 약도'},
 terrace:{name:'화분 담당 시종',gift:'화분 담당 시종은 잘 말린 보랏빛 압화를 내밀었다. “장식으로 쓰셔도 좋겠습니다. 무거운 선물은 아닙니다.”',token:'보랏빛 압화'},
 drawing:{name:'차 담당 시종',gift:'차 담당 시종은 향이 은은한 찻잎 한 봉지를 건넸다. “부담 없는 감사의 표시입니다.”',token:'작은 찻잎 봉투'},
 garden:{name:'정원사',gift:'정원사는 조심스럽게 잘라 둔 노란 장미 한 송이를 건넸다. “길을 정돈해 주신 분께 드리고 싶었습니다.”',token:'노란 장미 한 송이'}
};
function v23Data(){
 if(!state.v23||typeof state.v23!=='object')state.v23={miguelArc:{},npcRewards:{},alexAfter:{},emotionChoices:{},recollections:[]};
 const d=state.v23;d.miguelArc||={};d.npcRewards||={};d.alexAfter||={};d.emotionChoices||={};d.recollections||=[];return d;
}
function v23Remember(id,title,text,category='관계'){
 v18Remember('v23_'+id,title,text,category);
 const d=v23Data();if(!d.recollections.some(x=>x.id===id))d.recollections.push({id,title,day:state.day,category});
}



function v23EmotionChoice(){
 const d=v23Data(),s=state.stats,t=socialProgress().alexTension;
 const mood=t>=8?'guilt':s.affection>=10?'hope':v18Data().emotion+v19Data().feelings<=-2?'doubt':'duty';
 const key=state.day+'_'+mood;if(d.emotionChoices[key]){modal('오늘의 마음','이미 오늘의 마음을 돌아보았습니다.');return;}
 const text={guilt:'형님은 내게 늘 형님이었다. 그 사실이 달라진 적은 없다. 그런데 어째서 나는 자꾸만 변명을 찾는 걸까.',hope:'다시 만나고 싶다. 그 바람을 인정하는 것만으로도 가슴이 뛰었다. 그러나 바람과 행동은 구분해야 했다.',doubt:'괜한 말을 하지는 않았을까. 상대의 짧은 침묵까지 내 탓으로 돌리는 버릇은 좀처럼 고쳐지지 않았다.',duty:'맡은 일부터 제대로 하자. 내가 할 수 있는 것을 해내는 것만큼은 포기하고 싶지 않다.'}[mood];
 return v18Scene('v23emotion','다니엘의 독백',text,[{text:'감정을 인정하되 예의를 지킨다.',next:'explore',effects:{resolve:2,trust:1},v23EmotionChoice:key,v23Emotion:'restraint'},{text:'당분간 마음을 가라앉히기로 한다.',next:'explore',effects:{resolve:1},v23EmotionChoice:key,v23Emotion:'distance'},{text:'그저 다음 인사를 기다린다.',next:'explore',effects:{affection:1,risk:1},v23EmotionChoice:key,v23Emotion:'hope'}]);
}



// v24: delayed consequences and narrative continuity. Game-only events; official canon unchanged.
const V24_NPC_FOLLOW={
 hall:['악단 보조','연주 순서표를 기억한 악단 보조가 다니엘에게 다음 연주가 시작되기 전 조용히 자리를 알려 주었다.','그는 자신이 건넨 작은 종이가 실제로 도움이 되었다며 기뻐했다.'],
 corridor:['견습 시종','견습 시종이 손그림 약도에 잘못 그린 계단을 고쳐 놓았다. “경께 드린 지도라서 더 신경 쓰였습니다.”','다니엘은 상대가 자신의 일을 소홀히 여기지 않았음을 알았다.'],
 terrace:['화분 담당 시종','시종은 압화를 넣을 봉투를 건넸다. “바람에 꽃잎이 상하지 않았으면 해서요.”','손바닥만 한 종이 봉투가 그날의 작은 배려를 떠올리게 했다.'],
 drawing:['차 담당 시종','차 담당 시종이 찻잎을 우릴 물의 온도를 알려 주었다. “지난번에 드린 차는 오래 우리면 쓰거든요.”','다니엘은 그가 작은 선물까지 기억한다는 사실에 감사했다.'],
 garden:['정원사','정원사는 다니엘이 받은 장미의 줄기를 물에 담가 두라고 일러 주었다. “오래 두려면 끝을 조금 잘라 주십시오.”','꽃이 시들더라도 그날의 친절은 사라지지 않을 것이다.']
};
function v24Data(){
 if(!state.v24||typeof state.v24!=='object')state.v24={delayed:[],miguelMemory:[],npcFollow:{},alexArc:{},diary:[],lastDay:0,visitedToday:{}};
 const d=state.v24;d.delayed||=[];d.miguelMemory||=[];d.npcFollow||={};d.alexArc||={};d.diary||=[];d.visitedToday||={};return d;
}
function v24Record(id,title,body,category='관계'){
 v18Remember('v24_'+id,title,body,category);
}
function v24Choice(kind,mode){
 const d=v24Data();const day=state.day;
 if(kind==='miguel'){
  d.miguelMemory.push({day,mode});d.delayed.push({type:'miguel',day:day+2,mode,done:false});
  v24Record('miguel_choice_'+day+'_'+d.miguelMemory.length,'그날의 대답',mode==='courtesy'?'다니엘은 형의 약혼녀라는 사실을 잊지 않고 예의를 지켰다.':'다니엘은 자신의 망설임을 숨기지 못했다.');
 }else if(kind==='alex'){
  d.alexArc.last={day,mode};d.delayed.push({type:'alex',day:day+2,mode,done:false});
  socialProgress().alexTension=Math.max(0,Math.min(100,socialProgress().alexTension+(mode==='avoid'?1:-1)));
  v24Record('alex_choice_'+day,'형 앞에서의 태도',mode==='speak'?'다니엘은 형에게 정중하게 자신의 태도를 돌아보겠다고 말했다.':'다니엘은 끝내 시선을 피했다.');
 }
}







// v25: 장기 인연, 비밀 부탁, 형제 관계, 회고 (게임용 각색)
const V25_SECRETS={
 hall:{npc:'악단 보조',title:'낡은 악보의 여백',text:'악단 보조가 남들에게 보이지 않게 악보의 여백을 가리켰다. 다음 연주를 준비하던 누군가가 잘못된 음표를 적어 놓았다고 했다. 그는 누구의 실수인지 밝히기보다 공연을 무사히 끝내고 싶어 했다.',help:'다니엘은 조용히 악보를 대조해 잘못 적힌 부분을 찾았다. 누구의 이름도 거론하지 않았다.'},
 corridor:{npc:'견습 시종',title:'접힌 안내문',text:'견습 시종이 손님에게 전달할 안내문이 뒤섞였다고 털어놓았다. 사소한 실수지만 연회장 안에서는 쉽게 소문이 될 수 있었다.',help:'다니엘은 봉투를 다시 분류하고 견습 시종에게 직접 전달할 기회를 남겨 주었다.'},
 terrace:{npc:'화분 담당 시종',title:'바람에 떨어진 표찰',text:'화분 담당 시종이 화분의 이름표를 잃어버렸다며 작은 목소리로 도움을 청했다. 이름표가 없으면 정원으로 돌려보낼 꽃을 구분하기 어려웠다.',help:'다니엘은 꽃의 모양과 옮겨 온 순서를 대조해 표찰을 찾아 주었다.'},
 drawing:{npc:'차 담당 시종',title:'바뀐 찻잎 상자',text:'차 담당 시종은 손님에게 낼 찻잎 상자가 뒤바뀌었다며 난처해했다. 누구에게 책임을 돌릴 생각은 없다고 했다.',help:'다니엘은 찻잎의 향을 확인하고 상자를 제자리에 놓는 일을 거들었다.'},
 garden:{npc:'정원사',title:'아직 피지 않은 장미',text:'정원사가 온실의 어린 장미를 잠시 살펴봐 달라고 했다. 귀한 꽃이라서가 아니라, 오늘 밤 바람이 너무 차가웠기 때문이다.',help:'다니엘은 창문 틈을 살피고 정원사와 함께 어린 장미를 보호했다.'}
};
function v25Data(){
 if(!state.v25||typeof state.v25!=='object')state.v25={secret:{},bond:{},alex:{suspicion:0,scenes:[],lastResponse:null},dailyLinks:[],retrospections:[],seen:{}};
 const d=state.v25;d.secret||={};d.bond||={};d.alex||={suspicion:0,scenes:[],lastResponse:null};d.alex.scenes||=[];d.dailyLinks||=[];d.retrospections||=[];d.seen||={};return d;
}
function v25Remember(id,title,body,category='관계'){v18Remember('v25_'+id,title,body,category);}
function v25Outcome(choice){
 const d=v25Data();
 if(choice.v25Secret){const x=d.secret[choice.v25Secret];if(x){x.status=choice.v25Mode;x.finishedDay=state.day;const def=V25_SECRETS[choice.v25Secret];v25Remember('secret_'+choice.v25Secret,def.title,choice.v25Mode==='help'?def.help:'다니엘은 사정을 듣고도 정중히 사양했다. 누군가를 함부로 탓하지 않기로 했다.','의뢰');}}
 if(choice.v25Bond){d.bond[choice.v25Bond]={day:state.day,mode:choice.v25Mode};v25Remember('bond_'+state.day+'_'+choice.v25Bond,'미겔과의 거리',choice.v25Mode==='care'?'다니엘은 조심스럽게 마음을 드러내되 상대가 지켜야 할 선을 존중했다.':'다니엘은 형과 미겔의 약혼을 떠올리고 자신의 마음을 삼켰다.');}
 if(choice.v25Alex){d.alex.lastResponse=choice.v25Alex;d.alex.suspicion=Math.max(0,Math.min(12,d.alex.suspicion+(choice.v25Alex==='avoid'?2:choice.v25Alex==='truth'?1:-1)));v25Remember('alex_'+state.day+'_'+d.alex.scenes.length,'형 앞에서 고른 말',choice.v25Alex==='avoid'?'다니엘은 말을 피했다. 형의 침묵이 오래 남았다.':choice.v25Alex==='truth'?'다니엘은 자신의 불안함만큼은 솔직히 인정했다.':'다니엘은 형의 말을 듣고 성급한 해명을 삼갔다.');}
}








// v26: delayed relationship consequences, secret-errand outcomes, sibling trust and chronological memoirs.
// These events are game-only adaptations; none changes the official engagement.
function v26Data(){
 if(!state.v26||typeof state.v26!=='object')state.v26={miguel:{pending:[],resolved:[]},secret:{},alex:{trust:0,history:[],seen:{}},days:[],seen:{}};
 const d=state.v26;d.miguel||={pending:[],resolved:[]};d.miguel.pending||=[];d.miguel.resolved||=[];d.secret||={};d.alex||={trust:0,history:[],seen:{}};d.alex.history||=[];d.alex.seen||={};d.days||=[];d.seen||={};return d;
}

function v26Outcome(choice){
 const d=v26Data();
 if(choice.v25Bond){
  const mode=choice.v25Mode==='care'?'care':'distance';
  const key='tier'+choice.v25Bond;
  if(!d.miguel.pending.some(x=>x.key===key)&&!d.miguel.resolved.includes(key))d.miguel.pending.push({key,mode,day:state.day,due:state.day+1});
 }
 if(choice.v25Secret){
  const loc=choice.v25Secret,mode=choice.v25Mode;
  if(!d.secret[loc])d.secret[loc]={mode,day:state.day,stage:'pending'};
 }
 if(choice.v25Alex){
  const delta=choice.v25Alex==='listen'?2:choice.v25Alex==='truth'?1:-2;
  d.alex.trust=Math.max(-10,Math.min(10,d.alex.trust+delta));
  d.alex.history.push({day:state.day,mode:choice.v25Alex,trust:d.alex.trust});
 }
}








// v27: lasting emotions, NPC consequences, sibling reconciliation, delayed events and character-indexed memoirs.
function v27Data(){
 if(!state.v27||typeof state.v27!=='object')state.v27={miguel:{decisions:[],seen:{}},npc:{},alex:{history:[],seen:{}},delayed:[],completed:[],daily:{}};
 const d=state.v27;d.miguel||={decisions:[],seen:{}};d.miguel.decisions||=[];d.miguel.seen||={};d.npc||={};d.alex||={history:[],seen:{}};d.alex.history||=[];d.alex.seen||={};d.delayed||=[];d.completed||=[];d.daily||={};return d;
}

function v27OnChoice(choice){
 const d=v27Data();
 if(choice.v25Bond){const mode=choice.v25Mode==='care'?'care':'distance';d.miguel.decisions.push({day:state.day,mode,tier:choice.v25Bond});d.delayed.push({id:'miguel_'+state.day+'_'+choice.v25Bond,due:state.day+2,type:'miguel',mode});}
 if(choice.v25Secret){const loc=choice.v25Secret,mode=choice.v25Mode;d.npc[loc]={mode,day:state.day,rapport:mode==='help'?1:-1,seen:false};d.delayed.push({id:'npc_'+loc,due:state.day+2,type:'npc',loc,mode});}
 if(choice.v25Alex){const mode=choice.v25Alex;d.alex.history.push({day:state.day,mode});d.delayed.push({id:'alex_'+state.day+'_'+d.alex.history.length,due:state.day+2,type:'alex',mode});}
 if(choice.v26Alex){d.alex.history.push({day:state.day,mode:choice.v26Alex});}
}






// v28: long-running emotional consequences and searchable memories.
function v28Data(){
 if(!state.v28||typeof state.v28!=='object')state.v28={seen:{},emotion:[],alex:{resolved:0},npc:{},chapters:{},searches:0};
 const d=state.v28;d.seen||={};d.emotion||=[];d.alex||={resolved:0};d.npc||={};d.chapters||={};return d;
}
function v28Remember(id,title,body,category='관계',person='다니엘'){
 const key='v28_'+id;v18Remember(key,title,body,category);
 const m=v16Data().memories.find(x=>x.id===key);if(m)m.person=person;
}
function v28OnChoice(choice){
 const d=v28Data();
 if(choice.v28Feeling){d.emotion.push({day:state.day,mode:choice.v28Feeling});d.emotion=d.emotion.slice(-40);v28Remember('feeling_'+state.day+'_'+d.emotion.length,'다니엘 · 마음의 방향',choice.v28Feeling==='hold'?'다니엘은 마음을 인정하되 행동은 신중히 하기로 했다.':'다니엘은 자신에게도 시간이 필요하다고 생각했다.');}
 if(choice.v28Alex){d.alex.resolved=Math.max(-5,Math.min(5,d.alex.resolved+(choice.v28Alex==='repair'?1:-1)));v26Data().alex.trust=Math.max(-10,Math.min(10,v26Data().alex.trust+(choice.v28Alex==='repair'?2:-1)));v28Remember('alex_'+state.day+'_'+d.alex.resolved,'알렉 · 남겨 둔 말',choice.v28Alex==='repair'?'다니엘은 형에게 거짓 약속 대신 진지하게 대화할 시간을 청했다.':'다니엘은 입을 다물었다. 형제 사이에 다시 침묵이 쌓였다.','관계','알렉');}
 if(choice.v28Npc){d.npc[choice.v28Npc]={day:state.day,mode:choice.v28NpcMode};const npc=v19Data().npc[choice.v28Npc];if(npc)npc.rapport=Math.max(0,Math.min(10,(npc.rapport||0)+(choice.v28NpcMode==='help'?1:-1)));v28Remember('npc_'+choice.v28Npc,'왕궁의 인연 · 작은 부탁',choice.v28NpcMode==='help'?'다니엘은 상대의 사정을 듣고 작은 일을 거들었다.':'다니엘은 지금은 도울 수 없다고 정중히 말했다.','의뢰',V19_NPC_PROFILES[choice.v28Npc].name);}
}

function v28Alex(loc){
 const d=v28Data(),hist=v27Data().alex.history,last=hist[hist.length-1];
 if(!last||state.day<last.day+2||d.seen['alex_'+last.day]||d.alex.resolved>=2&&v26Data().alex.trust>=5)return false;
 d.seen['alex_'+last.day]=true;
 const trust=v26Data().alex.trust;
 const text=trust>=1?'알렉은 다니엘의 말이 끝날 때까지 기다렸다. 침묵은 여전히 어색했으나, 이번에는 먼저 자리를 뜨지 않았다.':'알렉의 시선이 다니엘에게 머물렀다. “네가 무슨 생각을 하는지 모르겠구나.”\n\n다니엘은 변명하려다 고개를 숙였다.';
 v28Remember('alex_'+last.day,'알렉 · 형제의 침묵',text,'관계','알렉');
 return v18Scene('v28_alex','알렉 레온하르트',text,[{text:'“형님, 제대로 말씀드리고 싶습니다.”',next:'explore',effects:{resolve:1},v28Alex:'repair'},{text:'“죄송합니다. 지금은 말씀드리기 어렵습니다.”',next:'explore',effects:{risk:1},v28Alex:'avoid'}]);
}
function v28Npc(loc){
 const d=v28Data(),profile=V19_NPC_PROFILES[loc],npc=v19Data().npc[loc];
 if(!profile||!npc||(npc.rapport||0)<4||d.npc[loc]||d.seen['npc_'+loc])return false;
 d.seen['npc_'+loc]=true;
 const text=profile.name+'이 다니엘을 알아보고 조심스럽게 부탁했다. “경께서 괜찮으시다면 잠시만 도와주실 수 있겠습니까?”\n\n그의 손에는 서류와 작은 소품이 가득했다. 큰 사건은 아니지만 혼자서는 처리하기 어려워 보였다.';
 return v18Scene('v28_npc',profile.name,text,[{text:'“제가 할 수 있는 일이라면 돕겠습니다.”',next:'explore',effects:{reputation:1},v28Npc:loc,v28NpcMode:'help'},{text:'“죄송합니다. 지금은 다른 일이 있어 어렵습니다.”',next:'explore',v28Npc:loc,v28NpcMode:'decline'}]);
}





// v29: choices carry consequences across days; all additions are backward compatible.
function v29Data(){
 const d=state.v29??(state.v29={miguel:[],alex:[],npc:{},chapters:{},seen:{},choices:[]});
 d.miguel||=[];d.alex||=[];d.npc||={};d.chapters||={};d.seen||={};d.choices||=[];return d;
}
function v29Memory(key,title,body,category='관계',person='다니엘'){
 v18Remember('v29_'+key,title,body,category);
 const m=v16Data().memories.find(x=>x.id==='v29_'+key);if(m)m.person=person;
}
function v29OnChoice(c){
 const d=v29Data();
 if(c.v29Miguel){d.miguel.push({day:state.day,mode:c.v29Miguel,done:false});d.choices.push({day:state.day,who:'미겔',mode:c.v29Miguel});}
 if(c.v29Alex){const change=c.v29Alex==='reconcile'?2:-2;v26Data().alex.trust=Math.max(-10,Math.min(10,v26Data().alex.trust+change));d.alex.push({day:state.day,mode:c.v29Alex,done:false});d.choices.push({day:state.day,who:'알렉',mode:c.v29Alex});}
 if(c.v29Npc){const n=v19Data().npc[c.v29Npc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(c.v29NpcMode==='accept'?2:-1)));d.npc[c.v29Npc]={day:state.day,mode:c.v29NpcMode,done:false};d.choices.push({day:state.day,who:V19_NPC_PROFILES[c.v29Npc]?.name||'NPC',mode:c.v29NpcMode});}
}
function v29Miguel(loc){
 if(!['terrace','garden','drawing'].includes(loc))return false;
 const d=v29Data(),pending=d.miguel.find(x=>!x.done&&state.day>=x.day+2);
 if(pending){pending.done=true;const tender=pending.mode==='open';const txt=tender?'미겔은 다니엘이 건넸던 조심스러운 말을 기억하고 있었다. “그날 하신 말씀은 잊지 않았습니다. 다만 저희가 지켜야 할 자리가 있겠지요.”\n\n다니엘은 고개를 숙였다. 그녀가 자신의 마음을 함부로 다루지 않았다는 사실만으로도 가슴이 저렸다.':'“요 며칠은 무척 조용하시더군요.” 미겔이 말했다. 다니엘은 그녀가 자신의 침묵마저 기억한다는 사실에 놀랐다.\n\n“불편하신 일이 있다면 억지로 말씀하지 않으셔도 됩니다.”';v29Memory('miguel_'+pending.day+'_'+d.miguel.indexOf(pending),'미겔 · 이틀 뒤의 대답',txt,'관계','미겔');return v18Scene('v29_miguel','미겔 코트리먼',txt,[{text:'“배려해 주셔서 감사합니다.”',next:'explore',effects:{trust:1}},{text:'“제 마음을 잘 다스리겠습니다.”',next:'explore',effects:{resolve:1}}]);}
 if(socialProgress().miguelMeetings<3||d.seen['miguelOffer_'+state.day])return false;
 d.seen['miguelOffer_'+state.day]=true;
 return v18Scene('v29_miguel','미겔 코트리먼','미겔이 다니엘의 인사를 받았다. 그녀는 눈길보다 먼저 익숙한 발소리를 알아챈 듯했다.\n\n“무슨 말씀을 하시려던 참이었습니까?” 다니엘은 잠시 입술을 달싹였다. 형님의 약혼녀라는 사실을 잊은 적은 없었다.',[{text:'“다시 뵈어 기뻤습니다. 그 말씀만 드리고 싶었습니다.”',next:'explore',effects:{affection:1,risk:1},v29Miguel:'open'},{text:'“아닙니다. 괜한 말씀을 드릴 뻔했습니다.”',next:'explore',effects:{resolve:1},v29Miguel:'restrain'}]);
}
function v29Alex(loc){
 const d=v29Data(),pending=d.alex.find(x=>!x.done&&state.day>=x.day+2);
 if(pending){pending.done=true;const good=pending.mode==='reconcile';const txt=good?'알렉은 동생이 먼저 말을 꺼낼 때까지 기다렸다. 다니엘은 형의 시선을 피하지 않으려 애썼다. 형제 사이의 어색함이 모두 사라진 것은 아니었으나, 적어도 서로의 말을 들을 여지는 남아 있었다.':'알렉과 마주친 순간 다니엘은 지난번 대화를 떠올렸다. 형의 짧은 인사에는 거리가 남아 있었다. 다니엘은 그 침묵이 자신이 미뤄 둔 말에서 비롯되었음을 알았다.';v29Memory('alex_'+pending.day+'_'+d.alex.indexOf(pending),'알렉 · 남겨진 형제의 말',txt,'관계','알렉');return v18Scene('v29_alex','알렉 레온하르트',txt,[{text:'“형님, 제 말을 들어 주시겠습니까?”',next:'explore',effects:{resolve:1}},{text:'“오늘은 인사만 드리겠습니다.”',next:'explore',effects:{trust:1}}]);}
 if(d.seen['alexOffer_'+state.day]||socialProgress().alexTension<3)return false;
 d.seen['alexOffer_'+state.day]=true;
 return v18Scene('v29_alex','알렉 레온하르트','알렉은 다니엘을 불러 세웠다. “네가 요즘 무슨 생각을 하는지 궁금하구나.”\n\n다니엘은 목을 가다듬었다. 형님이 무엇을 알고 계신지 짐작할 수 없었다.',[{text:'“형님께서 걱정하실 만한 행동은 삼가겠습니다.”',next:'explore',effects:{resolve:1},v29Alex:'reconcile'},{text:'“죄송합니다. 지금은 말씀드릴 수 없습니다.”',next:'explore',effects:{risk:1},v29Alex:'withdraw'}]);
}
function v29Npc(loc){
 const d=v29Data(),profile=V19_NPC_PROFILES[loc],npc=v19Data().npc[loc];if(!profile||!npc)return false;
 const prior=d.npc[loc];
 if(prior&&!prior.done&&state.day>=prior.day+1){prior.done=true;const helped=prior.mode==='accept';const txt=helped?profile.name+'은 다니엘을 다시 알아보았다. “지난번에는 정말 감사했습니다. 덕분에 무사히 일을 마쳤습니다.”\n\n작은 감사의 표시로 손수 적은 쪽지를 건넸다.':'다니엘은 '+profile.name+'과 다시 마주쳤다. 상대는 예의를 갖춰 인사했다. 다니엘은 지난번 부탁을 거절했던 일이 마음에 걸렸으나, 무리하게 변명하지 않았다.';v29Memory('npc_'+loc+'_'+prior.day,profile.name+' · 부탁의 결과',txt,'의뢰',profile.name);return v18Scene('v29_npc',profile.name,txt,[{text:helped?'“무사히 끝나서 다행입니다.”':'“지난번에는 도움을 드리지 못해 죄송합니다.”',next:'explore',effects:{reputation:helped?1:0}}]);}
 if(prior||(npc.rapport||0)<5)return false;
 const txt=profile.name+'이 조심스럽게 다가왔다. “전에 도와주셨던 일을 기억하고 있습니다. 이번에도 잠시 손을 빌릴 수 있을까요?”\n\n다니엘은 일정이 빠듯하다는 사실을 떠올렸다. 그렇지만 상대의 표정을 외면하기도 어려웠다.';
 return v18Scene('v29_npc',profile.name,txt,[{text:'“네, 함께 살펴보겠습니다.”',next:'explore',effects:{reputation:1},v29Npc:loc,v29NpcMode:'accept'},{text:'“죄송합니다. 오늘은 여유가 없습니다.”',next:'explore',v29Npc:loc,v29NpcMode:'decline'}]);
}





// v30: deferred relationship decisions and NPC aftercare. All flags are optional in old saves.
function v30Data(){return state.v30??(state.v30={miguel:[],alex:[],npc:{},chapters:{},seen:{},journal:[]});}
function v30Remember(key,title,body,category='관계',person='다니엘'){
 const id='v30_'+key;if(v16Data().memories.some(m=>m.id===id))return;
 v16Data().memories.push({id,title,text:body,category,person,day:state.day});
}
function v30Choice(c){const d=v30Data();
 if(c.v30Miguel){d.miguel.push({day:state.day,mode:c.v30Miguel,done:false});d.journal.push({day:state.day,who:'미겔',mode:c.v30Miguel});}
 if(c.v30Alex){const trust=v26Data().alex;trust.trust=Math.max(-10,Math.min(10,(trust.trust||0)+(c.v30Alex==='repair'?2:-2)));d.alex.push({day:state.day,mode:c.v30Alex,done:false});d.journal.push({day:state.day,who:'알렉',mode:c.v30Alex});}
 if(c.v30Npc){const n=v19Data().npc[c.v30Npc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(c.v30NpcMode==='assist'?1:-1)));d.npc[c.v30Npc]={day:state.day,mode:c.v30NpcMode,done:false};d.journal.push({day:state.day,who:V19_NPC_PROFILES[c.v30Npc]?.name||'시종',mode:c.v30NpcMode});}
 d.journal=d.journal.slice(-100);
}
function v30Miguel(loc){const d=v30Data(),pending=d.miguel.find(x=>!x.done&&state.day>=x.day+2);
 if(pending){pending.done=true;const close=pending.mode==='sincere';const txt=close?'미겔은 지난번 다니엘이 말을 고르던 모습을 기억했다. “그날은 제게도 생각할 시간이 필요했습니다.” 그녀는 조용히 덧붙였다. “하지만 서로의 처지를 잊어서는 안 되겠지요.” 다니엘은 대답 대신 고개를 끄덕였다.':'미겔은 다니엘이 한 걸음 물러섰던 일을 기억했다. “그날의 배려에는 감사드립니다.” 다니엘은 무심코 손끝을 움켜쥐었다. 가까워지지 않는 것이 옳다고 생각하면서도 마음은 쉬이 따라주지 않았다.';
 v30Remember('miguel_'+pending.day+'_'+d.miguel.indexOf(pending),'미겔 · 선택 뒤의 인사',txt,'관계','미겔');return v18Scene('v30_miguel','미겔 코트리먼',txt,[{text:'“말씀을 명심하겠습니다.”',next:'explore',effects:{trust:1}},{text:'“제 처신을 돌아보겠습니다.”',next:'explore',effects:{resolve:1}}]);}
 if(d.seen['miguel_'+state.day])return false;
 if(socialProgress().miguelMeetings<3)return false;
 d.seen['miguel_'+state.day]=true;
 const trust=state.stats.trust||0,aff=state.stats.affection||0;
 const txt=trust>=5&&aff>=5?'익숙한 발걸음 소리에 미겔이 고개를 돌렸다. 다니엘은 자신의 발걸음을 그녀가 알아챘다는 사실에 잠시 말문이 막혔다.':'미겔이 먼저 예를 갖춰 인사했다. 다니엘은 뜻밖의 인사에 당황했으나, 허둥지둥하지 않으려 애썼다.';
 return v18Scene('v30_miguel','미겔 코트리먼',txt+'\n\n다니엘은 어떤 말을 남겨야 할지 고민했다.',[{text:'“오늘도 뵙게 되어 기쁩니다.”',next:'explore',effects:{affection:1,risk:1},v30Miguel:'sincere'},{text:'“바쁘실 텐데 붙잡아 죄송합니다.”',next:'explore',effects:{resolve:1},v30Miguel:'distance'}]);
}
function v30Alex(loc){const d=v30Data(),pending=d.alex.find(x=>!x.done&&state.day>=x.day+2);
 if(pending){pending.done=true;const good=pending.mode==='repair',txt=good?'알렉은 동생의 인사를 받아 주었다. 짧은 대화였지만 다니엘은 형이 자신의 말을 끝까지 들어 주었다는 사실을 오래 생각했다.':'알렉과 다니엘 사이에는 말하지 못한 것이 남아 있었다. 형이 걸음을 멈추자 다니엘은 먼저 시선을 내렸다. 피했던 대화가 사라진 것은 아니었다.';
 v30Remember('alex_'+pending.day+'_'+d.alex.indexOf(pending),'알렉 · 이틀 뒤의 거리',txt,'관계','알렉');return v18Scene('v30_alex','알렉 레온하르트',txt,[{text:'“형님, 제게 조금만 시간을 주십시오.”',next:'explore',effects:{resolve:1}},{text:'“앞으로 더 신중히 행동하겠습니다.”',next:'explore',effects:{trust:1}}]);}
 if(d.seen['alex_'+state.day]||socialProgress().alexTension<4)return false;
 d.seen['alex_'+state.day]=true;const trust=v26Data().alex.trust||0;
 const txt=trust>=0?'알렉은 동생이 입을 열 때까지 기다렸다. 다니엘은 그 기다림이 오히려 무거웠다.':'알렉의 짧은 질문에 다니엘은 쉽게 답하지 못했다. 한 번 멀어진 형제 사이의 거리는 생각보다 길었다.';
 return v18Scene('v30_alex','알렉 레온하르트',txt,[{text:'“형님, 제 행동을 돌아보겠습니다.”',next:'explore',effects:{resolve:1},v30Alex:'repair'},{text:'“지금은 말씀드리기 어렵습니다.”',next:'explore',effects:{risk:1},v30Alex:'avoid'}]);
}
function v30Npc(loc){const d=v30Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n)return false;
 const q=d.npc[loc];if(q&&!q.done&&state.day>q.day){q.done=true;const yes=q.mode==='assist';const txt=yes?p.name+'은 다니엘을 알아보고 감사의 뜻으로 작은 손글씨 쪽지를 내밀었다. “지난번에 도와주신 덕분에 무사히 마쳤습니다.”':'다니엘은 '+p.name+'과 다시 마주쳤다. 지난번 부탁을 사양했지만 상대는 여전히 예를 갖춰 인사했다. 다니엘도 진심으로 안부를 물었다.';
 v30Remember('npc_'+loc+'_'+q.day,p.name+' · 부탁의 다음 날',txt,'의뢰',p.name);return v18Scene('v30_npc',p.name,txt,[{text:yes?'“다행입니다. 수고 많으셨습니다.”':'“오늘은 괜찮으십니까?”',next:'explore',effects:{reputation:yes?1:0}}]);}
 if(d.seen['npc_'+loc+'_'+state.day]||q||n.rapport<5)return false;
 d.seen['npc_'+loc+'_'+state.day]=true;
 return v18Scene('v30_npc',p.name,p.name+'이 조심스럽게 다가왔다. “바쁘신 줄 알지만, 잠깐 도와주실 수 있겠습니까?” 다니엘은 자신을 믿고 부탁하는 사람이 있다는 사실에 잠시 마음이 놓였다.',[{text:'“제가 도울 수 있다면 기꺼이 돕겠습니다.”',next:'explore',effects:{reputation:1},v30Npc:loc,v30NpcMode:'assist'},{text:'“죄송합니다. 지금은 어렵겠습니다.”',next:'explore',v30Npc:loc,v30NpcMode:'decline'}]);
}





// v31: linked chapters, relationship consequences, multi-stage NPC requests and timeline.
function v31Data(){return state.v31??(state.v31={miguel:[],alex:[],npc:{},daily:{},seen:{},choices:[]});}
function v31Record(key,title,body,person='다니엘',category='관계'){
 const id='v31_'+key;if(v16Data().memories.some(m=>m.id===id))return;
 v16Data().memories.push({id,title,text:body,person,category,day:state.day});
}
function v31Choice(c){const d=v31Data();
 if(c.v31Miguel){d.miguel.push({day:state.day,mode:c.v31Miguel,stage:0});d.choices.push({day:state.day,person:'미겔',mode:c.v31Miguel});}
 if(c.v31Alex){const trust=v26Data().alex;trust.trust=Math.max(-10,Math.min(10,(trust.trust||0)+(c.v31Alex==='reconcile'?2:-2)));d.alex.push({day:state.day,mode:c.v31Alex,stage:0});d.choices.push({day:state.day,person:'알렉',mode:c.v31Alex});}
 if(c.v31Npc){const q=d.npc[c.v31Npc];if(q){q.mode=c.v31NpcMode;q.stage=1;q.day=state.day;}d.choices.push({day:state.day,person:V19_NPC_PROFILES[c.v31Npc]?.name||'왕궁 NPC',mode:c.v31NpcMode});}
 d.choices=d.choices.slice(-120);
}
function v31Miguel(loc){const d=v31Data();const q=d.miguel.find(x=>x.stage<2&&state.day>=x.day+(x.stage===0?1:3));
 if(q){const second=q.stage===1;const text=q.mode==='respect'?(second?'미겔은 두 사람이 지킨 거리를 먼저 언급하지 않았다. 그러나 다니엘이 예를 갖추자, 그녀는 그의 이름을 정확히 불렀다. 가까워지지 않는 배려도 기억될 수 있었다.':'미겔은 다니엘의 조심스러운 인사를 받아 주었다. “그날 하신 말씀은 기억합니다. 제 처지를 헤아려 주셔서 감사드립니다.” 다니엘은 짧은 감사에 도리어 얼굴이 달아올랐다.'):(second?'미겔이 잠시 말을 멈췄다. “솔직함은 귀한 일이지만, 그것만으로 모든 일이 가벼워지지는 않겠지요.” 다니엘은 형의 얼굴을 떠올렸다.':'미겔은 다니엘의 지난 고백에 가까운 말을 잊지 않았다. “그날은 대답을 드리지 못했습니다.” 그녀의 어조는 여전히 단정했다. “제게는 이미 지켜야 할 약속이 있습니다.”');
 q.stage++;v31Record('miguel_'+q.day+'_'+q.stage,'미겔 · '+(second?'남아 있는 거리':'다시 들은 대답'),text,'미겔');return v18Scene('v31_miguel','미겔 코트리먼',text,[{text:'“네, 경솔하게 굴지 않겠습니다.”',next:'explore',effects:{trust:1,resolve:1}},{text:'“말씀해 주셔서 감사합니다.”',next:'explore',effects:{affection:1}}]);}
 if(d.seen['miguel_'+state.day]||socialProgress().miguelMeetings<4)return false;d.seen['miguel_'+state.day]=true;
 const text='세 개의 달 아래, 미겔의 보랏빛 옷자락이 가볍게 흔들렸다. 다니엘은 그녀의 얼굴을 바라보다가 곧 시선을 내렸다. 자신이 원하는 것과 옳다고 배운 것 사이에는 이름 붙이기 어려운 거리가 있었다.';
 return v18Scene('v31_miguel','다니엘의 독백',text,[{text:'형님과 그분의 입장을 먼저 헤아린다.',next:'explore',effects:{trust:1,resolve:1},v31Miguel:'respect'},{text:'마음이 흔들리고 있음을 정직하게 인정한다.',next:'explore',effects:{affection:1,risk:1},v31Miguel:'confess'}]);}
function v31Alex(loc){const d=v31Data(),q=d.alex.find(x=>x.stage<2&&state.day>=x.day+(x.stage===0?1:3));
 if(q){const second=q.stage===1,good=q.mode==='reconcile';const text=good?(second?'알렉은 지난번의 사과를 다시 거론하지 않았다. 다니엘은 평범한 형제의 인사가 이토록 안도감을 줄 수 있다는 사실에 놀랐다.':'알렉은 다니엘이 끝까지 말을 마치도록 기다렸다. 다니엘은 형을 향해 고개를 숙였다. 모든 의혹이 풀린 것은 아니지만, 피하지 않기로 한 선택은 남았다.'):(second?'형제 사이의 침묵은 한층 길어졌다. 다니엘은 그 침묵이 자신의 선택에서 시작되었다는 사실을 부정할 수 없었다.':'알렉이 말을 걸자 다니엘은 다시 대답을 피했다. 형은 더 묻지 않았지만, 다니엘은 그 침묵이 관대함인지 실망인지 알 수 없었다.');q.stage++;
 v31Record('alex_'+q.day+'_'+q.stage,'알렉 · '+(second?'그 뒤의 침묵':'다시 마주한 형'),text,'알렉');return v18Scene('v31_alex','알렉 레온하르트',text,[{text:'“형님, 제 말을 들어주셔서 감사합니다.”',next:'explore',effects:{resolve:1}},{text:'“제가 조금 더 신중하겠습니다.”',next:'explore',effects:{trust:1}}]);}
 if(d.seen['alex_'+state.day]||socialProgress().alexTension<5)return false;d.seen['alex_'+state.day]=true;
 const trust=v26Data().alex.trust||0;const text=trust>=0?'알렉은 동생의 안색을 살피고 잠시 걸음을 늦췄다. 다니엘은 형이 건네는 평범한 관심조차 떳떳하게 받기 어려웠다.':'알렉은 무언가 묻고 싶은 듯 다니엘을 바라보았다. 다니엘은 먼저 입을 열어야 한다는 것을 알면서도 목소리가 나오지 않았다.';
 return v18Scene('v31_alex','알렉 레온하르트',text,[{text:'“형님, 지난번에는 제가 경솔했습니다.”',next:'explore',effects:{resolve:1},v31Alex:'reconcile'},{text:'“지금은 말씀드리기 어렵습니다.”',next:'explore',effects:{risk:1},v31Alex:'withdraw'}]);}
function v31Npc(loc){const d=v31Data(),profile=V19_NPC_PROFILES[loc],npc=v19Data().npc[loc];if(!profile||!npc)return false;
 const q=d.npc[loc];if(q&&q.stage===1&&state.day>q.day){q.stage=2;const help=q.mode==='help';const text=help?profile.name+'은 다니엘에게 정성스럽게 접은 감사 편지를 건넸다. 작은 부탁이었지만 누군가의 하루를 바꾸었다는 사실이 그에게는 뜻밖의 위로였다.':profile.name+'은 다니엘에게 예전과 다름없이 인사했다. 부탁을 사양했던 일이 마음에 남아 있던 다니엘은 이번에는 먼저 안부를 물었다.';
 v31Record('npc_'+loc+'_2',profile.name+' · 부탁의 결과',text,profile.name,'의뢰');return v18Scene('v31_npc',profile.name,text,[{text:'“다음에도 도움이 필요하면 말씀하십시오.”',next:'explore',effects:{reputation:help?2:1}}]);}
 if(q&&q.stage===2&&state.day>q.day+2){q.stage=3;const text=profile.name+'은 다니엘을 알아보고 짧게 웃었다. 그날의 선택이 두 사람 사이에 작은 인연으로 남아 있었다.';v31Record('npc_'+loc+'_3',profile.name+' · 인연의 후일담',text,profile.name,'의뢰');return v18Scene('v31_npc',profile.name,text,[{text:'“저도 기억하고 있습니다.”',next:'explore',effects:{trust:1}}]);}
 if(q||npc.rapport<5||d.seen['npc_'+loc+'_'+state.day])return false;d.seen['npc_'+loc+'_'+state.day]=true;d.npc[loc]={day:state.day,stage:0,mode:null};
 const text=profile.name+'이 다니엘을 알아보고 조용히 말을 걸었다. “지난번에 도움을 주신 일이 있어, 이번에도 여쭙고 싶었습니다.” 다니엘은 잠시 자신이 할 수 있는 일을 헤아렸다.';
 return v18Scene('v31_npc',profile.name,text,[{text:'“가능한 만큼 돕겠습니다.”',next:'explore',effects:{reputation:1},v31Npc:loc,v31NpcMode:'help'},{text:'“죄송합니다. 이번에는 어렵겠습니다.”',next:'explore',v31Npc:loc,v31NpcMode:'decline'}]);}






// v33: relationship-stage dialogues, sibling confrontation, palace reputation and linked chronicle.
function v33Data(){const d=state.v33??(state.v33={miguel:{seen:{},feelings:0},alex:{seen:{},choices:[]},npc:{},reputation:0,chains:[],seen:{}});d.miguel??={seen:{},feelings:0};d.miguel.seen??={};d.alex??={seen:{},choices:[]};d.alex.seen??={};d.alex.choices??=[];d.npc??={};d.chains??=[];d.seen??={};return d;}
function v33Record(id,title,body,person='다니엘',category='연속 사건',parent=null){const d=v33Data(),key='v33_'+id;if(d.chains.some(x=>x.id===key))return;d.chains.push({id:key,title,text:body,person,category,day:state.day,parent});d.chains=d.chains.slice(-200);v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=parent;m.day=state.day;}}
function v33Choice(c){const d=v33Data();if(c.v33Miguel){const n=c.v33Miguel==='speak'?2:c.v33Miguel==='courtesy'?1:-1;d.miguel.feelings=Math.max(-12,Math.min(12,d.miguel.feelings+n));const id='miguel_'+state.day+'_'+d.chains.length;v33Record(id,'미겔 · 감정의 흔적',c.v33Miguel==='speak'?'다니엘은 마음을 숨기지 않았으나, 미겔과 형의 약혼을 먼저 떠올렸다.':c.v33Miguel==='courtesy'?'다니엘은 짧은 인사만으로도 서로의 경계를 존중할 수 있다고 생각했다.':'다니엘은 오늘의 마음을 혼자 간직하기로 했다.','미겔');d.seen['mnext_'+state.day]={due:state.day+2,mode:c.v33Miguel,parent:'v33_'+id};}if(c.v33Alex){const a=v32Data().alex;const repair=c.v33Alex==='repair';a.repair=Math.max(0,a.repair+(repair?2:0));a.suspicion=Math.max(0,a.suspicion+(repair?-1:2));const id='alex_'+state.day+'_'+d.alex.choices.length;d.alex.choices.push({day:state.day,mode:c.v33Alex});v33Record(id,'알렉 · 형제의 선택',repair?'다니엘은 변명 대신 자신의 미숙함을 인정했다.':'다니엘은 대답을 미루었다. 침묵이 오해를 키울지도 몰랐다.','알렉');d.seen['anext_'+state.day]={due:state.day+2,mode:c.v33Alex,parent:'v33_'+id};}if(c.v33Npc){const n=d.npc[c.v33Npc];if(n){n.mode=c.v33NpcMode;n.stage=1;n.due=state.day+1;v33Record('npc_'+c.v33Npc+'_'+state.day,n.name+' · 궁의 작은 부탁',n.mode==='help'?'다니엘은 비밀을 지키며 도움을 주기로 했다.':'다니엘은 섣부른 약속을 피하기로 했다.',n.name,'왕궁');}}}
function v33Miguel(loc){const d=v33Data(),m=v32Data().miguel;const next=Object.entries(d.seen).find(([k,v])=>k.startsWith('mnext_')&&!v.done&&state.day>=v.due);if(next){const [key,q]=next;q.done=true;const t=q.mode==='speak'?'미겔은 지난 대화를 기억하고 있었다. “레온하르트 경. 말씀은 들었습니다. 다만 알렉과의 약혼을 잊어서는 안 됩니다.” 다니엘은 그 말에 서툴게 고개를 끄덕였다.':q.mode==='courtesy'?'“지난번의 배려는 감사했습니다.” 미겔은 짧게 말했다. 다니엘은 조심스러운 거리에도 온기가 남을 수 있음을 알았다.':'미겔은 평소와 다름없이 인사했다. 다니엘은 자신의 침묵을 그녀에게 짐으로 지우지 않기로 했다.';v33Record('mfollow_'+key,'미겔 · 다시 돌아온 말',t,'미겔','후속',q.parent);return v18Scene('v33_miguel','미겔 코트리먼',t,[{text:'“……알겠습니다.”',next:'explore',effects:{resolve:1}}]);}const stage=m.phase,key=state.day+'_'+stage;if(d.miguel.seen[key]||m.encounters<6)return false;d.miguel.seen[key]=true;const t=stage==='서로를 의식하는 거리'?'미겔은 다니엘의 발걸음을 알아듣고 고개를 들었다. “레온하르트 경, 무슨 일이십니까?” 다니엘은 준비한 말이 모두 흩어지는 기분이었다.':stage==='조심스러운 단절'?'미겔은 일정한 거리를 두고 인사했다. 다니엘은 그 거리가 자신이 선택한 결과임을 알고 있었다.':'노란 장미 옆에서 미겔이 서류를 정리하고 있었다. 다니엘은 그녀의 시간을 빼앗지 않으려 조심스럽게 말을 골랐다.';return v18Scene('v33_miguel','다니엘의 독백',t,[{text:'예의를 지키며 용건만 전한다.',next:'explore',v33Miguel:'courtesy',effects:{trust:1}},{text:'“……말씀드리고 싶은 것이 있습니다.”',next:'explore',v33Miguel:'speak',effects:{risk:1}},{text:'인사만 남기고 물러선다.',next:'explore',v33Miguel:'quiet',effects:{resolve:1}}]);}
function v33Alex(loc){const d=v33Data(),a=v32Data().alex;const next=Object.entries(d.seen).find(([k,v])=>k.startsWith('anext_')&&!v.done&&state.day>=v.due);if(next){const [key,q]=next;q.done=true;const t=q.mode==='repair'?'알렉은 다니엘의 말을 끝까지 들었다. “당장 모두 이해할 수는 없겠지만, 네가 먼저 말한 건 알겠다.” 다니엘은 고개를 숙였다.':'알렉은 동생의 침묵을 기억하고 있었다. “피한다고 없어질 문제는 아니다.” 다니엘은 더 늦기 전에 답해야 한다고 생각했다.';v33Record('afollow_'+key,'알렉 · 남겨진 대화',t,'알렉','후속',q.parent);return v18Scene('v33_alex','알렉 레온하르트',t,[{text:'“예, 형님.”',next:'explore',effects:{resolve:1}}]);}const stage=a.suspicion>a.repair?'의심':'회복',key=state.day+'_'+stage;if(d.alex.seen[key]||a.suspicion+a.repair<5)return false;d.alex.seen[key]=true;const t=stage==='의심'?'알렉은 한동안 다니엘을 바라보았다. “요즘 네가 내게 숨기는 것이 있느냐?” 다니엘은 형의 약혼녀인 미겔을 떠올리고 시선을 내렸다.':'알렉은 서류를 덮고 동생에게 앉으라고 했다. 두 사람 사이에 남은 거리만큼이나 할 말도 많았다.';return v18Scene('v33_alex','알렉 레온하르트',t,[{text:'“형님, 제 잘못부터 말씀드리겠습니다.”',next:'explore',v33Alex:'repair',effects:{resolve:1}},{text:'“……아직은 말씀드리기 어렵습니다.”',next:'explore',v33Alex:'avoid',effects:{risk:1}}]);}
function v33Npc(loc){const p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n)return false;const d=v33Data(),q=d.npc[loc];if(q&&q.stage===1&&state.day>=q.due){q.stage=2;q.due=state.day+2;const good=q.mode==='help';n.rapport=Math.max(0,(n.rapport||0)+(good?2:-1));d.reputation=Math.max(-20,Math.min(20,d.reputation+(good?2:-1)));const t=good?p.name+'은 다른 사람들 앞에서 다니엘을 믿을 만한 사람이라고 말했다. 작은 호의가 궁의 평판에 조용히 번졌다.':p.name+'은 거절을 받아들였지만, 궁 안에서는 다니엘이 신중한 사람이라는 말과 냉정하다는 말이 함께 돌았다.';v33Record('npcresult_'+loc+'_'+q.day,p.name+' · 평판의 변화',t,p.name,'평판',q.parent);return v18Scene('v33_npc',p.name,t,[{text:'소문에 휘둘리지 않고 인사한다.',next:'explore',effects:{reputation:good?2:0}}]);}if(q&&q.stage===2&&state.day>=q.due){q.stage=3;const t=q.mode==='help'?p.name+'은 다니엘에게 다시 작은 도움을 청하기 전에 먼저 그의 형편을 살폈다. 신뢰는 한 번의 약속보다 오래 남았다.':p.name+'은 다니엘과 예를 갖춰 대화했다. 서먹함은 남았지만 다시 시작할 여지도 있었다.';v33Record('npcecho_'+loc+'_'+q.day,p.name+' · 인연의 여운',t,p.name,'후속');return v18Scene('v33_npc',p.name,t,[{text:'서로의 입장을 존중한다.',next:'explore',effects:{resolve:1}}]);}if(q||n.rapport<7)return false;d.npc[loc]={name:p.name,stage:0,day:state.day};const t=p.name+'은 다니엘에게 궁 안의 작은 비밀을 지켜 달라고 부탁했다. 소문이 퍼지면 다른 이가 곤란해질 수도 있는 일이었다.';return v18Scene('v33_npc',p.name,t,[{text:'“제가 책임질 수 있는 만큼 돕겠습니다.”',next:'explore',v33Npc:loc,v33NpcMode:'help'},{text:'“죄송합니다. 약속드릴 수 없습니다.”',next:'explore',v33Npc:loc,v33NpcMode:'decline'}]);}



// v32: deferred relationship states and detailed chronological records (game-only adaptation).
function v32Data(){const d=state.v32??(state.v32={miguel:{phase:'조심스러운 거리',score:0,encounters:0,pending:[],seen:{}},alex:{suspicion:0,repair:0,pending:[],seen:{}},npc:{},days:{},events:[]});d.miguel??={phase:'조심스러운 거리',score:0,encounters:0,pending:[],seen:{}};d.miguel.pending??=[];d.miguel.seen??={};d.alex??={suspicion:0,repair:0,pending:[],seen:{}};d.alex.pending??=[];d.alex.seen??={};d.npc??={};d.days??={};d.events??=[];return d;}
function v32Record(key,title,body,person='다니엘',category='관계'){const d=v32Data(),id='v32_'+key;if(d.events.some(e=>e.id===id))return;const e={id,title,text:body,person,category,day:state.day};d.events.push(e);d.events=d.events.slice(-250);v18Remember(id,title,body,category);const m=v16Data().memories.find(x=>x.id===id);if(m){m.person=person;m.day=state.day;}}
function v32Choice(c){const d=v32Data();if(c.v32Miguel){const delta=c.v32Miguel==='respect'?1:c.v32Miguel==='honest'?2:-1;d.miguel.score=Math.max(-12,Math.min(12,d.miguel.score+delta));d.miguel.phase=d.miguel.score>=4?'서로를 의식하는 거리':d.miguel.score<=-2?'조심스러운 단절':'조심스러운 거리';d.miguel.pending.push({day:state.day,due:state.day+2,mode:c.v32Miguel,done:false});v32Record('mchoice_'+state.day+'_'+d.miguel.pending.length,'미겔 · 다니엘의 선택','다니엘은 '+(c.v32Miguel==='respect'?'예의를 지키기로':c.v32Miguel==='honest'?'흔들리는 마음을 인정하기로':'한동안 거리를 두기로')+' 했다.','다니엘');}if(c.v32Alex){const good=c.v32Alex==='repair';d.alex.repair=Math.max(0,d.alex.repair+(good?2:-1));d.alex.suspicion=Math.max(0,d.alex.suspicion+(good?-1:2));d.alex.pending.push({day:state.day,due:state.day+2,mode:c.v32Alex,done:false});v32Record('achoice_'+state.day+'_'+d.alex.pending.length,'알렉 · 형제의 갈림길',good?'다니엘은 형에게 먼저 말을 건넸다.':'다니엘은 형의 물음을 피했다.','알렉');}if(c.v32Npc){const q=d.npc[c.v32Npc];if(q){q.mode=c.v32NpcMode;q.stage=1;q.due=state.day+2;v32Record('npcchoice_'+c.v32Npc,'왕궁 · 작은 약속',q.name+'의 부탁에 '+(q.mode==='help'?'응하기로':'응하기 어렵다고')+' 했다.',q.name,'의뢰');}}}
function v32Miguel(loc){const d=v32Data(),m=d.miguel;m.encounters++;const q=m.pending.find(x=>!x.done&&state.day>=x.due);if(q){q.done=true;const t=q.mode==='honest'?'미겔은 다니엘의 지난 고백을 잊지 않은 듯했다. “레온하르트 경. 그날 하신 말씀은 기억하고 있습니다.” 그녀는 시선을 거두었다. “그러나 알렉과의 약혼은 달라지지 않았습니다.” 다니엘은 고개를 숙였다.':q.mode==='respect'?'미겔은 다니엘이 지켜 준 거리를 알아차렸다. “그날의 배려는 감사했습니다.” 짧은 인사였지만 다니엘은 마음이 조금 놓였다.':'미겔은 다니엘에게 필요한 만큼만 인사를 건넸다. 서로가 물러선 거리가 더 뚜렷해졌다.';v32Record('mfollow_'+q.day,'미겔 · 선택의 결과',t,'미겔');return v18Scene('v32_miguel','미겔 코트리먼',t,[{text:'“……말씀, 감사합니다.”',next:'explore',effects:{resolve:1}}]);}if(m.encounters<5||m.seen[state.day])return false;m.seen[state.day]=true;const t=m.phase==='서로를 의식하는 거리'?'미겔은 다니엘의 발소리를 알아듣고 고개를 돌렸다. “레온하르트 경.” 그녀의 목소리는 차분했지만, 다니엘은 그 짧은 부름에도 마음이 흔들렸다.':m.phase==='조심스러운 단절'?'미겔은 먼저 예를 갖췄다. 다니엘은 형의 약혼녀와 마주한 지금, 자신의 침묵이 무례하게 보이지 않기를 바랐다.':'미겔은 노란 장미가 놓인 창가에 서 있었다. 다니엘은 다가갈 이유와 물러설 이유를 동시에 떠올렸다.';return v18Scene('v32_miguel','다니엘의 독백',t,[{text:'예의를 지키며 짧게 안부를 묻는다.',next:'explore',effects:{trust:1},v32Miguel:'respect'},{text:'숨기지 않고 솔직한 마음을 인정한다.',next:'explore',effects:{affection:1,risk:1},v32Miguel:'honest'},{text:'오늘은 인사만 남기고 물러선다.',next:'explore',effects:{resolve:1},v32Miguel:'withdraw'}]);}
function v32Alex(loc){const d=v32Data(),a=d.alex,q=a.pending.find(x=>!x.done&&state.day>=x.due);if(q){q.done=true;const good=q.mode==='repair';const t=good?'알렉은 다니엘의 사과를 조용히 들었다. 형제 사이의 불편함이 한 번에 사라지지는 않았지만, 적어도 서로의 말을 들을 자리는 남았다.':'알렉은 다니엘을 잠시 바라보았다. “네가 무슨 생각을 하는지 모르겠구나.” 다니엘은 그 말을 듣고도 곧바로 답하지 못했다.';v32Record('afollow_'+q.day,'알렉 · '+(good?'남겨 둔 자리':'쌓이는 의심'),t,'알렉');return v18Scene('v32_alex','알렉 레온하르트',t,[{text:good?'“형님, 감사합니다.”':'“……죄송합니다, 형님.”',next:'explore',effects:{resolve:1}}]);}if(a.seen[state.day]||socialProgress().alexTension<5)return false;a.seen[state.day]=true;const t=a.suspicion>a.repair?'알렉의 질문은 짧았지만 다니엘은 그 안에 쌓인 의심을 느꼈다. 형은 아직 미겔과의 약혼을 이어 가고 있었다.':'알렉은 동생에게 잠시 자리를 내주었다. 다니엘은 형의 배려 앞에서 자신이 얼마나 서툴렀는지 떠올렸다.';return v18Scene('v32_alex','알렉 레온하르트',t,[{text:'“형님, 저부터 말씀드리겠습니다.”',next:'explore',effects:{resolve:1},v32Alex:'repair'},{text:'“지금은 말씀드릴 수 없습니다.”',next:'explore',effects:{risk:1},v32Alex:'avoid'}]);}
function v32Npc(loc){const d=v32Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n)return false;const q=d.npc[loc];if(q&&q.stage===1&&state.day>=q.due){q.stage=2;q.due=state.day+2;const good=q.mode==='help';n.rapport=Math.max(0,(n.rapport||0)+(good?2:-1));const t=good?p.name+'은 다니엘에게 조용히 감사를 표했다. 도움받은 일을 잊지 않겠다며 궁의 소소한 소식을 전했다.':p.name+'은 고개를 끄덕였다. 부탁을 거절당한 일은 이해했지만, 두 사람의 대화는 전보다 짧아졌다.';v32Record('npcresult_'+loc,p.name+' · 인연의 변화',t,p.name,'의뢰');return v18Scene('v32_npc',p.name,t,[{text:'정중히 인사한다.',next:'explore',effects:{reputation:good?2:0}}]);}if(q&&q.stage===2&&state.day>=q.due){q.stage=3;const t=q.mode==='help'?p.name+'은 다니엘을 다시 찾아 작은 소식을 전했다. 그날의 부탁은 궁 안에 믿을 만한 인연 하나를 남겼다.':p.name+'과 다니엘은 다시 마주쳤다. 서로를 탓하지 않았지만, 관계를 회복하려면 시간이 필요했다.';v32Record('npcecho_'+loc,p.name+' · 다시 마주친 날',t,p.name,'의뢰');return v18Scene('v32_npc',p.name,t,[{text:'그날의 일을 마음에 새긴다.',next:'explore',effects:{resolve:1}}]);}if(q||n.rapport<6)return false;d.npc[loc]={name:p.name,stage:0,mode:null,due:0};const t=p.name+'은 다니엘에게 작지만 남에게 말하기 어려운 부탁을 꺼냈다. 다니엘은 자신의 약속이 훗날 두 사람의 관계를 바꿀 수도 있다는 생각을 했다.';return v18Scene('v32_npc',p.name,t,[{text:'“제가 할 수 있는 만큼 돕겠습니다.”',next:'explore',v32Npc:loc,v32NpcMode:'help'},{text:'“죄송합니다. 이번에는 어렵겠습니다.”',next:'explore',v32Npc:loc,v32NpcMode:'decline'}]);}





// v34: independent, lazy-initialized state; old saves remain readable.
function v34Data(){
 const d=state.v34??(state.v34={miguel:{warmth:0,restraint:0,meetings:0},alex:{trust:0,doubt:0},npc:{},pending:[],events:[],seen:{},lastDay:0});
 d.miguel??={warmth:0,restraint:0,meetings:0};d.alex??={trust:0,doubt:0};d.npc??={};d.pending??=[];d.events??=[];d.seen??={};return d;
}
function v34Record(id,title,body,person,kind,parent){
 const d=v34Data(),key='v34_'+id;if(d.events.some(e=>e.id===key))return key;
 const event={id:key,day:state.day,title,text:body,person,category:kind,parent:parent||null};
 d.events.push(event);if(d.events.length>300)d.events.shift();
 v18Remember(key,title,body,kind);const mem=v16Data().memories.find(m=>m.id===key);
 if(mem){mem.person=person;mem.parent=parent||null;mem.day=state.day;}return key;
}
function v34Queue(kind,mode,person,parent,delay=2,loc=null){
 const d=v34Data();d.pending.push({id:'v34q_'+kind+'_'+state.day+'_'+d.pending.length,kind,mode,person,parent,loc,due:state.day+delay,done:false});
}
function v34Choice(c){
 const d=v34Data();
 if(c.v34Miguel){const mode=c.v34Miguel;d.miguel.meetings++;d.miguel.warmth=Math.max(-12,Math.min(12,d.miguel.warmth+(mode==='honest'?2:mode==='courtesy'?1:-1)));d.miguel.restraint=Math.max(0,Math.min(15,d.miguel.restraint+(mode==='courtesy'?2:mode==='withdraw'?1:0)));const id=v34Record('m_'+state.day+'_'+d.miguel.meetings,'미겔 · 마음과 예의',mode==='honest'?'다니엘은 솔직한 마음을 인정했지만, 형과 미겔의 약혼을 먼저 떠올렸다.':mode==='courtesy'?'다니엘은 선을 넘지 않으려 조심스럽게 예의를 갖췄다.':'다니엘은 자신이 감당할 수 없는 말을 삼켰다.','미겔','감정',null);v34Queue('miguel',mode,'미겔',id,2);}
 if(c.v34Alex){const mode=c.v34Alex;d.alex.trust=Math.max(-12,Math.min(12,d.alex.trust+(mode==='speak'?2:-1)));d.alex.doubt=Math.max(0,Math.min(15,d.alex.doubt+(mode==='speak'?-1:2)));const id=v34Record('a_'+state.day+'_'+d.events.length,'알렉 · 형제의 거리',mode==='speak'?'다니엘은 불편한 대화를 피하지 않기로 했다.':'다니엘은 대답을 미루었다. 형의 시선이 오래 남았다.','알렉','형제',null);v34Queue('alex',mode,'알렉',id,2);}
 if(c.v34Npc){const q=d.npc[c.v34Npc];if(q){q.mode=c.v34NpcMode;q.stage=1;q.due=state.day+2;const id=v34Record('n_'+c.v34Npc+'_'+state.day,q.name+' · 평판 앞의 선택',q.mode==='help'?'다니엘은 누군가의 체면을 지키며 돕기로 했다.':'다니엘은 지키지 못할 약속을 하지 않았다.',q.name,'왕궁',null);q.parent=id;}}
}
function v34Follow(kind,loc){
 const d=v34Data(),q=d.pending.find(x=>!x.done&&x.kind===kind&&state.day>=x.due&&(x.loc===null||x.loc===loc));if(!q)return false;
 q.done=true;let title,text,speaker;
 if(kind==='miguel'){speaker='미겔 코트리먼';title='미겔 · 며칠 뒤의 인사';text=q.mode==='honest'?'미겔은 다니엘의 말을 잊지 않았다. “레온하르트 경. 그날의 말씀은 기억합니다. 하지만 알렉과의 약혼은 달라지지 않았습니다.” 다니엘은 고개를 숙였다.':'미겔은 다니엘의 걸음소리를 알아차렸다. '+(q.mode==='courtesy'?'“지난번에는 배려해 주셔서 감사했습니다.” 짧은 말에 다니엘의 마음이 흔들렸다.':'그녀는 더 묻지 않았다. 다니엘은 침묵도 하나의 선택임을 깨달았다.');}
 else{speaker='알렉 레온하르트';title='알렉 · 남겨 둔 대답';text=q.mode==='speak'?'알렉은 동생이 먼저 꺼낸 말을 끝까지 들었다. “한 번의 대화로 모든 게 달라지진 않는다. 그래도 네가 피하지 않은 건 알겠다.”':'알렉은 동생을 조용히 불렀다. “다니엘, 지난번 대답은 아직 듣지 못했다.” 다니엘은 고개를 들었다.';}
 v34Record('follow_'+q.id,title,text,kind==='miguel'?'미겔':'알렉','후속',q.parent);
 return v18Scene('v34_follow',speaker,text,[{text:'“……예. 기억하겠습니다.”',next:'explore',effects:{resolve:1}}]);
}
function v34Miguel(loc){
 if(v34Follow('miguel',loc))return true;
 const d=v34Data(),m=v32Data().miguel,phase=m.phase||'조심스러운 거리',key='miguel_'+phase+'_'+Math.floor(state.day/3);
 if((m.encounters||0)<7||d.seen[key])return false;d.seen[key]=true;
 const tone=d.miguel.warmth>=4?'그녀는 다니엘이 다가오는 소리를 알아차리고 먼저 서류를 덮었다.':d.miguel.warmth<=-2?'그녀는 평소처럼 예의를 갖췄지만, 두 사람 사이에는 말을 고르는 시간이 길었다.':'미겔은 노란 장미를 바라보다 다니엘의 발소리에 고개를 돌렸다.';
 return v18Scene('v34_miguel','다니엘의 독백',tone+' 다니엘은 형의 약혼녀에게 어떤 태도가 옳은지 여전히 확신하지 못했다.',[{text:'“코트리먼 영애, 잠시 말씀드려도 되겠습니까?”',next:'explore',v34Miguel:'honest'},{text:'예의를 갖춰 용건만 전한다.',next:'explore',v34Miguel:'courtesy'},{text:'인사만 하고 물러난다.',next:'explore',v34Miguel:'withdraw'}]);
}
function v34Alex(loc){
 if(v34Follow('alex',loc))return true;
 const d=v34Data(),a=v32Data().alex,key='alex_'+Math.floor(state.day/3);
 if(d.seen[key]||(a.repair||0)+(a.suspicion||0)<7)return false;d.seen[key]=true;
 const doubt=(a.suspicion||0)+d.alex.doubt,trust=(a.repair||0)+d.alex.trust;
 const t=doubt>trust?'알렉은 동생을 바라보며 물었다. “요즘 내게 말하지 않는 일이 있느냐?” 다니엘은 형의 약혼을 떠올리고 입술을 다물었다.':'알렉은 다니엘에게 옆자리를 가리켰다. “전보다 말이 많아졌구나. 오늘은 네 생각을 듣고 싶다.”';
 return v18Scene('v34_alex','알렉 레온하르트',t,[{text:'“형님, 제가 먼저 말씀드리겠습니다.”',next:'explore',v34Alex:'speak'},{text:'“……아직 정리되지 않았습니다.”',next:'explore',v34Alex:'avoid'}]);
}
function v34Npc(loc){
 const p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n)return false;
 const d=v34Data(),q=d.npc[loc];
 if(q&&q.stage===1&&state.day>=q.due){q.stage=2;q.due=state.day+2;const good=q.mode==='help';n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(good?1:-1)));d.reputation=(d.reputation||0)+(good?2:-1);const t=good?p.name+'은 다니엘이 지킨 약속을 기억했다. 궁 안에서 그를 신중하고 믿음직한 사람이라 말하는 이들이 늘었다.':p.name+'은 정중하게 인사했다. 부탁은 이루어지지 않았고, 궁 안의 평가는 엇갈렸다.';const id=v34Record('npc_result_'+loc+'_'+q.start,p.name+' · 달라진 소문',t,p.name,'평판',q.parent);q.result=id;return v18Scene('v34_npc',p.name,t,[{text:'차분히 대답한다.',next:'explore'}]);}
 if(q&&q.stage===2&&state.day>=q.due){q.stage=3;const t=q.mode==='help'?p.name+'은 다니엘에게 다른 이들의 작은 고마움을 전했다. 다니엘은 자신이 한 선택의 무게를 다시 생각했다.':p.name+'은 다니엘에게 다시 인사했다. 한 번의 거절로 모든 인연이 끝나는 것은 아니었다.';v34Record('npc_echo_'+loc+'_'+q.start,p.name+' · 남은 인연',t,p.name,'후속',q.result);return v18Scene('v34_npc',p.name,t,[{text:'예의를 갖춰 답한다.',next:'explore'}]);}
 if(q||(n.rapport||0)<8)return false;
 d.npc[loc]={name:p.name,start:state.day,stage:0,mode:null,due:0};
 const t=p.name+'은 다니엘에게 왕궁의 소문 때문에 곤란해진 이를 도울 수 있겠느냐고 조심스럽게 물었다. 사소한 선택이 다른 이의 평판까지 바꿀 수 있었다.';
 return v18Scene('v34_npc',p.name,t,[{text:'“제가 할 수 있는 범위에서 돕겠습니다.”',next:'explore',v34Npc:loc,v34NpcMode:'help'},{text:'“죄송합니다. 약속드리기는 어렵습니다.”',next:'explore',v34Npc:loc,v34NpcMode:'decline'}]);
}





// v35: choice consequences and multi-day stories. All new fields are lazy and optional.
function v35Data(){
 const d=state.v35??(state.v35={miguel:{meetings:0,choices:[]},alex:{conversations:0,choices:[]},npc:{},reputation:0,quests:[],events:[],seen:{}});
 d.miguel??={meetings:0,choices:[]};d.miguel.choices??=[];d.alex??={conversations:0,choices:[]};d.alex.choices??=[];d.npc??={};d.quests??=[];d.events??=[];d.seen??={};return d;
}
function v35Record(id,title,body,person,category,parent){
 const d=v35Data(),key='v35_'+id;if(d.events.some(e=>e.id===key))return key;
 const e={id:key,title,text:body,person,category,parent:parent||null,day:state.day};d.events.push(e);if(d.events.length>250)d.events.shift();
 v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=parent||null;m.day=state.day;}return key;
}
function v35Queue(type,mode,place,parent,delay){const d=v35Data();d.quests.push({id:'q'+state.day+'_'+d.quests.length,type,mode,place,parent,due:state.day+delay,stage:0});}
function v35Choice(c){
 const d=v35Data();
 if(c.v35Miguel){const mode=c.v35Miguel;d.miguel.choices.push({day:state.day,mode});const id=v35Record('mchoice_'+state.day+'_'+d.miguel.choices.length,'미겔 · 마음을 다루는 법',mode==='confess'?'다니엘은 마음을 숨기지 않았지만, 형의 약혼녀에게 답을 요구할 수 없음을 알았다.':mode==='respect'?'다니엘은 미겔의 입장을 먼저 헤아리며 예의를 지켰다.':'다니엘은 더 말하지 않기로 했다. 침묵 역시 책임이 될 수 있었다.','미겔','선택',null);v35Queue('miguel',mode,null,id,2);}
 if(c.v35Alex){const mode=c.v35Alex;d.alex.choices.push({day:state.day,mode});const id=v35Record('achoice_'+state.day+'_'+d.alex.choices.length,'알렉 · 신뢰의 문턱',mode==='repair'?'다니엘은 형에게 먼저 설명하고 끝까지 들으려 했다.':'다니엘은 대답을 피했다. 오해를 바로잡을 기회도 함께 미뤄졌다.','알렉','선택',null);v35Queue('alex',mode,null,id,2);}
 if(c.v35Npc){const q=d.npc[c.v35Npc];if(q&&q.stage===0){q.mode=c.v35NpcMode;q.stage=1;q.due=state.day+1;q.parent=v35Record('nchoice_'+c.v35Npc+'_'+state.day,q.name+' · 평판을 건 부탁',q.mode==='help'?'다니엘은 소문보다 당사자의 사정을 먼저 확인하기로 했다.':'다니엘은 자신이 책임질 수 없는 약속을 거절했다.',q.name,'선택',null);}}
}
function v35Follow(type,loc){
 const d=v35Data(),q=d.quests.find(x=>x.type===type&&x.stage===0&&state.day>=x.due);if(!q)return false;q.stage=1;
 let speaker,title,body;
 if(type==='miguel'){speaker='미겔 코트리먼';title='미겔 · 남겨 둔 대답';body=q.mode==='confess'?'미겔은 다니엘의 걸음걸이를 알아보고 고개를 들었다. “그날의 말씀은 기억합니다. 다만 알렉과의 약혼을 가볍게 여길 수는 없습니다.” 다니엘은 서둘러 대답했다. “……예. 알고 있습니다. 곤란하게 해 드릴 생각은 없었습니다.”':q.mode==='respect'?'미겔은 짧게 고개를 숙였다. “지난번 배려는 감사했습니다. 알렉에게도 같은 예의를 보여 주시겠지요.” 다니엘은 한참 뒤에야 “물론입니다.”라고 답했다.':'미겔은 아무것도 캐묻지 않았다. “레온하르트 경, 그날 이후 괜찮으셨습니까?” 다니엘은 눈을 피하지 않으려 애썼다.';}
 else{speaker='알렉 레온하르트';title='알렉 · 이틀 뒤의 대화';body=q.mode==='repair'?'알렉은 다니엘의 설명을 끝까지 들었다. “네가 내게 먼저 이야기한 건 고맙다. 하지만 신뢰는 말보다 시간이 필요해.” 다니엘은 “……알겠습니다, 형님.” 하고 고개를 숙였다.':'알렉은 한동안 동생을 바라보았다. “다니엘, 네가 피할수록 내가 묻지 않을 수 없다는 건 알겠지.” 다니엘은 자신의 침묵이 형을 더 불안하게 했음을 깨달았다.';}
 const id=v35Record('result_'+q.id,title,body,type==='miguel'?'미겔':'알렉','후속',q.parent);q.result=id;q.stage=2;q.due=state.day+2;
 return v18Scene('v35_follow',speaker,body,[{text:'그 말을 마음에 새긴다.',next:'explore'}]);
}
function v35Echo(type){const d=v35Data(),q=d.quests.find(x=>x.type===type&&x.stage===2&&state.day>=x.due);if(!q)return false;q.stage=3;
 const isM=type==='miguel',text=isM?'며칠 전 미겔이 남긴 말이 다시 떠올랐다. 다니엘은 자신의 감정과 지켜야 할 선이 서로 다르다는 사실을 조금씩 배웠다.':'형과 나눈 말이 쉽게 잊히지 않았다. 다니엘은 다음 대화에서 도망치지 않겠다고, 혹은 더 신중해지겠다고 마음먹었다.';
 v35Record('echo_'+q.id,isM?'미겔 · 오래 남은 인사':'알렉 · 남은 숙제',text,'다니엘','감정',q.result);return v18Scene('v35_echo','다니엘의 독백',text,[{text:'다음 날을 맞이한다.',next:'explore'}]);}
function v35Miguel(loc){if(v35Follow('miguel',loc)||v35Echo('miguel'))return true;const d=v35Data(),m=v34Data().miguel;const key='m_'+Math.floor(state.day/4);if(d.seen[key]||(m.meetings||0)<2)return false;d.seen[key]=true;d.miguel.meetings++;
 const mood=m.warmth>=3&&m.restraint>=2?'미겔은 다니엘의 걸음소리를 듣고 서류를 접었다. 조심스러운 신뢰가 생겼지만, 그녀의 태도는 여전히 단정했다.':m.warmth<=-2?'미겔은 인사를 받아 주었으나 먼저 거리를 좁히지는 않았다.':'노란 장미 곁에서 미겔이 다니엘을 돌아보았다. 그녀는 표정보다 그의 망설이는 발걸음을 먼저 알아차렸다.';
 return v18Scene('v35_miguel','다니엘의 독백',mood+' 다니엘은 형 알렉의 약혼녀 앞에서 자신의 마음을 어떻게 다뤄야 할지 생각했다.',[{text:'“코트리먼 영애, 제 마음을 부정할 수는 없습니다.”',next:'explore',v35Miguel:'confess'},{text:'“영애의 입장을 먼저 생각하겠습니다.”',next:'explore',v35Miguel:'respect'},{text:'고개를 숙이고 조용히 물러난다.',next:'explore',v35Miguel:'withdraw'}]);}
function v35Alex(loc){if(v35Follow('alex',loc)||v35Echo('alex'))return true;const d=v35Data(),a=v34Data().alex,key='a_'+Math.floor(state.day/4);if(d.seen[key]||a.trust+a.doubt<3)return false;d.seen[key]=true;d.alex.conversations++;
 const tension=a.doubt>a.trust?'알렉의 말투에는 여전히 경계가 남아 있었다. “네가 숨기는 일이 있다면 언젠가는 듣게 되겠지.”':'알렉은 동생에게 자리를 내주었다. “너와 제대로 이야기할 시간이 필요하겠구나.”';
 return v18Scene('v35_alex','알렉 레온하르트',tension,[{text:'“형님, 제 이야기를 끝까지 들어 주시겠습니까?”',next:'explore',v35Alex:'repair'},{text:'“……지금은 말씀드리기 어렵습니다.”',next:'explore',v35Alex:'avoid'}]);}
function v35Npc(loc){const p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n)return false;const d=v35Data(),q=d.npc[loc];
 if(q&&q.stage===1&&state.day>=q.due){q.stage=2;q.due=state.day+2;const good=q.mode==='help';n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(good?1:-1)));d.reputation+=good?2:-1;const t=good?p.name+'은 다니엘의 확인 덕분에 억울한 소문이 잦아들었다고 전했다. 왕궁에서는 그가 사람을 함부로 판단하지 않는다는 이야기가 돌았다.':p.name+'은 부탁이 해결되지 않았다고 전했다. 다니엘은 거절에도 책임이 따른다는 사실을 받아들였다.';q.result=v35Record('nresult_'+loc+'_'+q.start,p.name+' · 달라진 평가',t,p.name,'결과',q.parent);return v18Scene('v35_npc',p.name,t,[{text:'“말씀해 주셔서 감사합니다.”',next:'explore'}]);}
 if(q&&q.stage===2&&state.day>=q.due){q.stage=3;const t=q.mode==='help'?p.name+'은 다른 시종이 보낸 짧은 감사의 말을 전했다. 다니엘은 작은 배려가 다른 이의 하루를 바꿀 수 있음을 알았다.':p.name+'은 다니엘에게 평소처럼 인사했다. 부탁은 이루어지지 않았지만, 인연을 다시 쌓을 여지는 남아 있었다.';v35Record('necho_'+loc+'_'+q.start,p.name+' · 소문 뒤의 인연',t,p.name,'후일담',q.result);return v18Scene('v35_npc',p.name,t,[{text:'정중하게 인사를 돌려준다.',next:'explore'}]);}
 if(q||(n.rapport||0)<7)return false;d.npc[loc]={name:p.name,start:state.day,stage:0,mode:null,due:0};const rep=(v34Data().reputation||0)+(v33Data().reputation||0)+d.reputation;const t=rep>=3?p.name+'은 왕궁에서 다니엘의 평판이 나쁘지 않다며, 억울한 소문을 듣는 이의 사정을 확인해 달라고 부탁했다.':p.name+'은 최근 왕궁의 소문이 복잡해졌다고 조심스럽게 털어놓았다. 다니엘이 편견 없이 이야기를 들어 줄 수 있을지 묻는다.';
 return v18Scene('v35_npc',p.name,t,[{text:'“확인해 보겠습니다. 다만 성급히 판단하지 않겠습니다.”',next:'explore',v35Npc:loc,v35NpcMode:'help'},{text:'“죄송합니다. 지금은 책임질 수 없습니다.”',next:'explore',v35Npc:loc,v35NpcMode:'decline'}]);}





// v36: backward-compatible long-running consequences and unified chronicle.
function v36Data(){
 const d=state.v36??(state.v36={miguel:{tone:'조심스러운 거리',choices:0},alex:{tone:'대화의 여지'},npc:{},pending:[],events:[],seen:{}});
 d.miguel??={tone:'조심스러운 거리',choices:0};d.alex??={tone:'대화의 여지'};d.npc??={};d.pending??=[];d.events??=[];d.seen??={};return d;
}
function v36Log(id,title,body,person='다니엘',kind='서사',parent=null){
 const d=v36Data(),key='v36_'+id;if(d.events.some(e=>e.id===key))return key;
 d.events.push({id:key,title,text:body,person,category:kind,parent,day:state.day});
 v18Remember(key,title,body,kind);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=parent;m.day=state.day;}
 return key;
}
function v36Choice(c){
 const d=v36Data();let type='',mode='',person='',title='',body='';
 if(c.v36Miguel){type='miguel';mode=c.v36Miguel;person='미겔';title='미겔 · 조심스러운 약속';body=mode==='respect'?'다니엘은 형의 약혼녀를 향한 마음보다 먼저 그녀의 선택과 의무를 존중하기로 했다.':'다니엘은 마음을 숨기지 않되 답을 재촉하지 않기로 했다.';d.miguel.choices++;d.miguel.tone=mode==='respect'?'존중과 절제':'솔직함과 경계';}
 if(c.v36Alex){type='alex';mode=c.v36Alex;person='알렉';title='알렉 · 형제의 문턱';body=mode==='speak'?'다니엘은 오해를 풀기 위해 자신의 말부터 바로잡았다.':'다니엘은 감정을 정리할 시간을 부탁했다.';d.alex.tone=mode==='speak'?'신뢰 회복의 시도':'미뤄진 대화';}
 if(c.v36Npc){type='npc';mode=c.v36NpcMode;person=V19_NPC_PROFILES[c.v36Npc]?.name||'왕궁 NPC';title=person+' · 소문의 무게';body=mode==='help'?'다니엘은 소문을 옮기지 않고 사실을 확인하기로 했다.':'다니엘은 지금 책임질 수 없는 일을 약속하지 않았다.';d.npc[c.v36Npc]={mode,day:state.day};}
 if(!type)return;const id=v36Log('choice_'+type+'_'+state.day+'_'+d.events.length,title,body,person,'선택');
 d.pending.push({id:'v36q_'+state.day+'_'+d.pending.length,type,mode,loc:c.v36Npc||null,due:state.day+2,stage:0,parent:id});
}
function v36Follow(type,loc){
 const d=v36Data(),q=d.pending.find(x=>x.type===type&&x.stage<2&&state.day>=x.due&&(type!=='npc'||x.loc===loc));if(!q)return false;
 const first=q.stage===0;q.stage++;q.due=state.day+(first?2:0);
 let person='다니엘',body='',title='';
 if(type==='miguel'){
  person='미겔';title=first?'미겔 · 다시 만난 인사':'미겔 · 오래 남은 침묵';
  body=first?(q.mode==='respect'?'미겔은 다니엘의 발소리를 알아보았다. “지난번의 배려는 기억하고 있습니다.” 다니엘은 고개를 숙였다. “……당연히 지켜야 할 예의였습니다.”':'미겔은 잠시 말을 고른 뒤 대답했다. “말씀은 들었습니다. 다만 알렉과의 약혼은 제 책임입니다.” 다니엘은 “……알고 있습니다.” 하고 답했다.'):'그녀가 했던 말을 떠올리며 다니엘은 자신의 감정과 상대의 결정을 구별해야 한다고 생각했다.';
 }else if(type==='alex'){
  person='알렉';title=first?'알렉 · 다음 대화':'알렉 · 형제의 남은 말';
  body=first?(q.mode==='speak'?'알렉은 동생의 말을 끝까지 듣고 한숨을 내쉬었다. “네가 먼저 말한 건 알겠다. 다만 나도 생각할 시간이 필요해.”':'알렉은 다니엘의 침묵을 살폈다. “말하지 않으면 서로의 생각을 알 수 없어.” 다니엘은 시선을 내렸다.'):'다니엘은 형과의 대화가 한 번의 사과나 침묵으로 끝나지 않는다는 사실을 받아들였다.';
 }else{
  const profile=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];person=profile?.name||'왕궁 NPC';title=first?person+' · 부탁의 결과':person+' · 뒤늦은 소식';
  body=first?(q.mode==='help'?person+'은 다니엘이 소문을 함부로 퍼뜨리지 않아 다행이라고 전했다.':person+'은 부탁이 이루어지지 않았지만 솔직한 답을 기억한다고 말했다.'):'왕궁 복도에서 다시 마주친 '+person+'은 이전의 부탁을 떠올리며 조용히 인사했다.';
  if(first&&n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='help'?1:-1)));
 }
 const id=v36Log('follow_'+q.id+'_'+q.stage,title,body,person,first?'결과':'후일담',q.parent);q.parent=id;
 return v18Scene('v36_follow',person,body,[{text:'그 말을 기억한다.',next:'explore'}]);
}
function v36Miguel(loc){if(v36Follow('miguel',loc))return true;const d=v36Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/5);if(d.seen[key]||(m.meetings||0)<3)return false;d.seen[key]=true;
 const tone=m.warmth>=3&&m.restraint>=2?'다니엘은 미겔이 자신의 발소리를 알아보는 순간 놀랐다. 그녀는 여전히 단정하고 신중했다.':m.warmth<0?'미겔은 예의를 갖춰 인사했지만 먼저 가까이 다가오지는 않았다.':'미겔은 노란 장미 곁에서 짧게 인사했다.';
 return v18Scene('v36_miguel','미겔 코트리먼',tone+' “무슨 일이십니까, 레온하르트 경?”',[{text:'“영애의 입장을 존중하겠습니다.”',next:'explore',v36Miguel:'respect'},{text:'“제 마음을 부정할 수는 없지만, 답을 바라지는 않겠습니다.”',next:'explore',v36Miguel:'honest'}]);
}
function v36Alex(loc){if(v36Follow('alex',loc))return true;const d=v36Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/5);if(d.seen[key]||a.trust+a.doubt<4)return false;d.seen[key]=true;
 const text=a.doubt>a.trust?'알렉은 동생을 오래 바라보았다. “서로 숨기는 말이 늘어나는 것 같구나.”':'알렉은 다니엘에게 잠시 앉으라고 말했다. “우리도 제대로 이야기할 때가 됐지.”';
 return v18Scene('v36_alex','알렉 레온하르트',text,[{text:'“형님, 제 말씀을 들어 주십시오.”',next:'explore',v36Alex:'speak'},{text:'“……조금만 시간을 주십시오.”',next:'explore',v36Alex:'wait'}]);
}
function v36Npc(loc){if(v36Follow('npc',loc))return true;const p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc],d=v36Data();if(!p||!n||(n.rapport||0)<6||d.npc[loc])return false;
 const rep=(v33Data().reputation||0)+(v34Data().reputation||0)+(v35Data().reputation||0);const text=rep>=3?p.name+'은 왕궁에서 다니엘을 믿고 일을 맡길 수 있다는 말이 돈다며 조심스레 부탁했다.':p.name+'은 소문 때문에 곤란한 사람이 있다며, 사실을 확인해 줄 수 있겠느냐고 물었다.';
 return v18Scene('v36_npc',p.name,text,[{text:'“확인해 보겠습니다. 경솔하게 말하지 않겠습니다.”',next:'explore',v36Npc:loc,v36NpcMode:'help'},{text:'“죄송합니다. 지금은 약속드릴 수 없습니다.”',next:'explore',v36Npc:loc,v36NpcMode:'decline'}]);
}





// v37: stage-aware reunions, brotherly turning points, court reputation and choice trails.
function v37Data(){
 const d=state.v37??(state.v37={miguel:{stage:'예의와 거리',last:0},alex:{stage:'대화 이전',last:0},reputation:{},pending:[],events:[],seen:{}});
 d.miguel??={stage:'예의와 거리',last:0};d.alex??={stage:'대화 이전',last:0};d.reputation??={};d.pending??=[];d.events??=[];d.seen??={};return d;
}
function v37Record(id,title,body,person,kind,parent){
 const d=v37Data(),key='v37_'+id;if(d.events.some(x=>x.id===key))return key;
 const e={id:key,title,text:body,person,category:kind||'서사',parent:parent||null,day:state.day};d.events.push(e);
 v18Remember(key,title,body,e.category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=state.day;}return key;
}
function v37Schedule(type,mode,loc,parent){const d=v37Data();d.pending.push({id:'q_'+state.day+'_'+d.pending.length,type,mode,loc:loc||null,stage:0,due:state.day+2,parent});}
function v37Choice(c){
 const d=v37Data();let type,mode,loc=null,person,title,body;
 if(c.v37Miguel){type='miguel';mode=c.v37Miguel;person='미겔';title='미겔 · 마음의 경계';body=mode==='respect'?'다니엘은 미겔의 의무와 결정을 먼저 존중하기로 했다.':'다니엘은 감정을 부정하지 않으면서도 그녀에게 아무런 답을 요구하지 않았다.';d.miguel.stage=mode==='respect'?'절제된 존중':'조심스러운 고백';d.miguel.last=state.day;}
 else if(c.v37Alex){type='alex';mode=c.v37Alex;person='알렉';title='알렉 · 형제의 선택';body=mode==='repair'?'다니엘은 두려움을 누르고 형에게 오해를 풀 기회를 청했다.':'다니엘은 더 상처 주는 말을 피하려고 대화를 미뤘다.';d.alex.stage=mode==='repair'?'회복을 위한 대화':'깊어진 침묵';d.alex.last=state.day;const a=v34Data().alex;a.trust=Math.max(0,(a.trust||0)+(mode==='repair'?2:0));a.doubt=Math.max(0,(a.doubt||0)+(mode==='avoid'?2:-1));}
 else if(c.v37Npc){type='npc';mode=c.v37NpcMode;loc=c.v37Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 NPC';title=person+' · 소문의 방향';body=mode==='clarify'?'다니엘은 사실을 확인하고 당사자의 사정을 먼저 듣기로 했다.':'다니엘은 섣부른 개입을 삼가겠다고 정중히 설명했다.';}
 else return;
 const id=v37Record('choice_'+type+'_'+state.day+'_'+d.events.length,title,body,person,'선택',null);v37Schedule(type,mode,loc,id);
}
function v37Follow(type,loc){
 const d=v37Data(),q=d.pending.find(x=>x.type===type&&x.stage<3&&state.day>=x.due&&(type!=='npc'||x.loc===loc));if(!q)return false;
 const stage=++q.stage;q.due=state.day+2;let person='',title='',body='';
 if(type==='miguel'){
  person='미겔';title=['','미겔 · 기억한 인사','미겔 · 지켜야 할 선','미겔 · 오래 남는 선택'][stage];
  body=stage===1?(q.mode==='respect'?'미겔은 발걸음 소리만으로 다니엘을 알아보았다. “그날의 배려는 기억하고 있습니다.” 다니엘은 시선을 내렸다. “……제가 해야 할 일이었습니다.”':'“그날 하신 말씀은 잊지 않았습니다.” 미겔은 조용히 말했다. “하지만 알렉과의 약혼은 변함없습니다.” 다니엘은 잠시 숨을 고르고 고개를 끄덕였다.'):stage===2?'다니엘은 미겔을 향한 감정과 그녀가 지켜야 하는 약속을 혼동하지 않기로 했다.':'다니엘은 짧은 인사가 오랜 시간 마음에 남는다는 것을 알았다. 다만 그것을 상대에게 짐으로 지울 생각은 없었다.';
 }else if(type==='alex'){
  person='알렉';title=['','알렉 · 다시 열린 대화','알렉 · 남겨진 의심','알렉 · 형제의 다음 날'][stage];
  body=stage===1?(q.mode==='repair'?'알렉은 동생의 말을 끊지 않았다. “네 말은 들었다. 나도 쉽게 답할 수 있는 일은 아니구나.”':'알렉은 다니엘에게 짧게 물었다. “계속 피할 셈이냐?” 다니엘은 고개를 숙였다. “……죄송합니다, 형님.”'):stage===2?(q.mode==='repair'?'서로를 완전히 이해한 것은 아니지만, 두 사람 사이에 다시 말을 건넬 자리가 생겼다.':'말하지 않은 일들이 쌓일수록 형과 동생의 거리는 멀어졌다. 다니엘은 그 사실을 외면할 수 없었다.'):'형제의 관계는 한 번의 대화로 결론나지 않았다. 다니엘은 다음에야말로 자신의 말을 분명히 하리라 다짐했다.';
 }else{
  person=V19_NPC_PROFILES[loc]?.name||'왕궁 NPC';title=person+' · '+(['','돌아온 소식','왕궁에 퍼진 평가','소문의 결말'][stage]);
  body=stage===1?(q.mode==='clarify'?person+'은 사실을 확인해 준 다니엘에게 감사 인사를 건넸다.':person+'은 다니엘이 경솔한 약속을 하지 않았다는 점을 이해한다고 말했다.'):stage===2?(q.mode==='clarify'?'왕궁에서는 다니엘이 소문을 옮기기보다 사실을 살핀다는 이야기가 돌았다.':'왕궁에서는 다니엘이 신중하지만 선뜻 나서지 않는다는 평이 엇갈렸다.'):'다니엘은 누군가의 평가가 진실을 전부 말해 주지는 않는다는 사실을 배웠다.';
  if(stage===2){const n=v19Data().npc[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='clarify'?1:-1)));d.reputation[loc]=(d.reputation[loc]||0)+(q.mode==='clarify'?2:-1);}
 }
 const id=v37Record('follow_'+q.id+'_'+stage,title,body,person,stage===3?'결말':'후속',q.parent);q.parent=id;
 return v18Scene('v37_follow',person,body,[{text:'그날의 일을 마음에 새긴다.',next:'explore'}]);
}
function v37Miguel(loc){if(v37Follow('miguel',loc))return true;const d=v37Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/6);if(d.seen[key]||(m.meetings||0)<3)return false;d.seen[key]=true;
 const warm=m.warmth||0,rest=m.restraint||0;const opening=warm>=3&&rest>=2?'미겔은 다니엘의 발소리를 알아보고 먼저 고개를 돌렸다. “오늘은 걸음이 조금 빠르시군요.”':warm>=3?'미겔은 잠시 망설이다가 정중히 인사했다. 두 사람 사이에 말로 설명하기 어려운 조심스러움이 남았다.':rest>=3?'미겔은 정해진 거리를 지킨 채 인사를 건넸다. 그 태도는 냉담함보다 신중함에 가까웠다.':'노란 장미 곁에서 미겔과 마주쳤다. 다니엘은 형의 약혼녀라는 사실을 먼저 떠올렸다.';
 return v18Scene('v37_miguel','미겔 코트리먼',opening,[{text:'“영애의 뜻을 먼저 존중하겠습니다.”',next:'explore',v37Miguel:'respect'},{text:'“……제 마음을 감추지는 않겠습니다. 다만 답을 바라지는 않습니다.”',next:'explore',v37Miguel:'honest'}]);
}
function v37Alex(loc){if(v37Follow('alex',loc))return true;const d=v37Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/6);if(d.seen[key]||(a.trust||0)+(a.doubt||0)<4)return false;d.seen[key]=true;
 const opening=(a.doubt||0)>(a.trust||0)?'알렉은 동생의 발걸음을 듣고도 한동안 돌아보지 않았다. “우리 사이에 아직 할 말이 남아 있겠지.”':'알렉은 다니엘에게 자리를 권했다. “지난번에는 제대로 듣지 못했구나.”';
 return v18Scene('v37_alex','알렉 레온하르트',opening,[{text:'“형님, 제 말을 다시 들어 주시겠습니까?”',next:'explore',v37Alex:'repair'},{text:'“……지금은 조금 어렵습니다.”',next:'explore',v37Alex:'avoid'}]);
}
function v37Npc(loc){if(v37Follow('npc',loc))return true;const d=v37Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n||(n.rapport||0)<5)return false;const key='npc_'+loc+'_'+Math.floor(state.day/7);if(d.seen[key])return false;d.seen[key]=true;
 const rep=(v33Data().reputation||0)+(v34Data().reputation||0)+(v35Data().reputation||0)+(d.reputation[loc]||0);
 const body=rep>=3?p.name+'은 다니엘에게 “경께서 소문을 함부로 옮기지 않으신다는 말을 들었습니다.” 하고 조심스럽게 사실 확인을 부탁했다.':rep<=-2?p.name+'은 “왕궁에서는 경에 관한 말도 엇갈립니다.” 하며 다니엘의 의견을 물었다.':p.name+'은 복도에서 작은 소문 하나를 전하며 사실을 확인해 줄 수 있겠느냐고 물었다.';
 return v18Scene('v37_npc',p.name,body,[{text:'“확인해 보겠습니다. 함부로 말하지 않겠습니다.”',next:'explore',v37Npc:loc,v37NpcMode:'clarify'},{text:'“죄송합니다. 지금은 나서기 어렵습니다.”',next:'explore',v37Npc:loc,v37NpcMode:'decline'}]);
}





// v38 — long-range consequences, court echoes and navigable choice history.
function v38Data(){
 const d=state.v38??(state.v38={miguel:{tone:'조심스러운 거리',count:0},alex:{tone:'대화를 기다림',count:0},court:{},pending:[],events:[],seen:{}});
 d.miguel??={tone:'조심스러운 거리',count:0};d.alex??={tone:'대화를 기다림',count:0};d.court??={};d.pending??=[];d.events??=[];d.seen??={};return d;
}
function v38Record(id,title,body,person,category,parent){
 const d=v38Data(),key='v38_'+id;if(d.events.some(e=>e.id===key))return key;
 const e={id:key,title,text:body,person,category,day:state.day,parent:parent||null};d.events.push(e);
 v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=state.day;}return key;
}
function v38Choice(c){
 const d=v38Data();let type,mode,loc=null,title,body,person;
 if(c.v38Miguel){type='miguel';mode=c.v38Miguel;person='미겔';d.miguel.count++;d.miguel.tone=mode==='boundary'?'절제된 신뢰':'고백하지 않은 진심';title='미겔 · 다시 정한 거리';body=mode==='boundary'?'다니엘은 미겔의 약혼과 책임을 먼저 생각했다. 마음을 전하는 것과 답을 요구하는 것은 다른 일이었다.':'다니엘은 자신의 감정을 부정하지 않았지만 미겔에게 결정을 재촉하지 않기로 했다.';}
 else if(c.v38Alex){type='alex';mode=c.v38Alex;person='알렉';d.alex.count++;d.alex.tone=mode==='listen'?'회복을 위한 경청':'서로 다른 침묵';title='알렉 · 형제의 갈림길';body=mode==='listen'?'다니엘은 형의 말을 끝까지 듣겠다고 약속했다.':'다니엘은 당장의 변명을 삼켰다. 그 침묵이 오해를 키울 수 있다는 것도 알았다.';}
 else if(c.v38Npc){type='npc';mode=c.v38NpcMode;loc=c.v38Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · 평판의 메아리';body=mode==='verify'?'다니엘은 소문의 진위를 먼저 확인하고 당사자를 보호하기로 했다.':'다니엘은 섣부른 약속을 피하고 상황을 지켜보기로 했다.';}
 else return;
 const id=v38Record('choice_'+type+'_'+state.day+'_'+d.events.length,title,body,person,'선택',null);
 d.pending.push({id:'q'+state.day+'_'+d.pending.length,type,mode,loc,stage:0,due:state.day+2,parent:id});
}
function v38Follow(type,loc){
 const d=v38Data(),q=d.pending.find(x=>x.type===type&&x.stage<3&&state.day>=x.due&&(type!=='npc'||x.loc===loc));if(!q)return false;
 const stage=++q.stage;q.due=state.day+2;let person,title,body;
 if(type==='miguel'){
 person='미겔';title=['','미겔 · 돌아온 인사','미겔 · 지켜진 약속','미겔 · 재회의 끝자락'][stage];
 body=stage===1?(q.mode==='boundary'?'미겔은 다니엘의 걸음걸이를 알아보았다. “그날 하신 말씀은 기억합니다.” 다니엘은 조심스럽게 고개를 숙였다.':'“말씀을 가볍게 여기지는 않았습니다.” 미겔은 차분하게 말했다. 다니엘은 그녀의 입장을 먼저 헤아렸다.'):stage===2?'미겔은 알렉과의 약혼을 가볍게 여기지 않았다. 다니엘 또한 그 사실을 알기에 불필요한 기대를 말로 옮기지 않았다.':'시간이 흘러도 두 사람 사이의 예의는 남았다. 다니엘은 자신의 감정을 책임지는 법을 조금씩 배웠다.';
 }else if(type==='alex'){
 person='알렉';title=['','알렉 · 다시 들은 말','알렉 · 남은 의심','알렉 · 형제의 결론'][stage];
 body=stage===1?(q.mode==='listen'?'알렉은 다니엘의 말을 끝까지 들었다. “나 역시 네 생각을 듣고 싶었다.”':'알렉은 잠시 동생을 바라보았다. “피한다고 모든 일이 끝나지는 않는다.”'):stage===2?(q.mode==='listen'?'형제 사이에 쌓인 오해가 한 번에 풀리지는 않았지만, 서로의 말을 듣기 시작했다.':'말하지 않은 사정이 쌓이며 두 사람의 거리는 조금 더 벌어졌다.'):(q.mode==='listen'?'다니엘은 형에게 정중히 인사했다. 아직 서툴러도 관계를 바로잡으려는 의지는 남아 있었다.':'다니엘은 언젠가 형에게 설명해야 할 일이 남았음을 인정했다.');
 if(stage===3){const a=v34Data().alex;a.trust=Math.max(0,(a.trust||0)+(q.mode==='listen'?2:0));a.doubt=Math.max(0,(a.doubt||0)+(q.mode==='listen'?-1:2));}
 }else{
 person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+(['','확인된 이야기','바뀐 시선','소문의 끝'][stage]);
 body=stage===1?(q.mode==='verify'?person+'은 다니엘이 사실을 확인해 준 데 감사했다.':person+'은 다니엘의 조심스러운 태도를 이해하려 애썼다.'):stage===2?(q.mode==='verify'?'왕궁에서는 다니엘이 사람의 사정을 함부로 말하지 않는다는 평가가 돌았다.':'왕궁에서는 다니엘의 침묵을 두고 서로 다른 해석이 오갔다.'):(q.mode==='verify'?'다니엘은 한 사람의 신뢰가 다른 사람의 태도까지 바꿀 수 있음을 깨달았다.':'다니엘은 오해를 바로잡을 기회를 다음으로 미루지 않기로 했다.');
 if(stage===2){d.court[loc]=(d.court[loc]||0)+(q.mode==='verify'?2:-1);const n=v19Data().npc[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='verify'?1:-1)));}
 }
 const id=v38Record('follow_'+q.id+'_'+stage,title,body,person,stage===3?'결말':'후속',q.parent);q.parent=id;
 return v18Scene('v38_follow',person,body,[{text:'지나온 선택을 기억한다.',next:'explore'}]);
}
function v38Miguel(loc){if(v38Follow('miguel',loc))return true;const d=v38Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/7);if(d.seen[key]||(m.meetings||0)<3)return false;d.seen[key]=true;
 const warm=m.warmth||0,rest=m.restraint||0;const opening=warm>=4&&rest>=3?'미겔은 발소리만 듣고 다니엘을 알아보았다. “지난번보다 걸음이 차분하시군요.”':warm>=4?'미겔은 한동안 말없이 다니엘을 바라보았다. “무슨 말씀을 하시려는지는 알겠습니다.”':rest>=3?'미겔은 단정히 인사했다. 두 사람 사이에는 말하지 않아도 지켜지는 선이 있었다.':'미겔은 서류를 접고 다니엘에게 용건을 물었다. 그는 잠시 망설였다.';
 return v18Scene('v38_miguel','미겔 코트리먼',opening,[{text:'“영애의 뜻과 약혼을 존중하겠습니다.”',next:'explore',v38Miguel:'boundary'},{text:'“……제 마음은 제가 책임지겠습니다.”',next:'explore',v38Miguel:'truth'}]);
}
function v38Alex(loc){if(v38Follow('alex',loc))return true;const d=v38Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/7);if(d.seen[key]||(a.trust||0)+(a.doubt||0)<4)return false;d.seen[key]=true;
 const body=(a.doubt||0)>(a.trust||0)?'알렉은 동생을 마주하고도 한동안 침묵했다. “우리 사이에 풀지 못한 일이 있지.”':'알렉은 다니엘에게 자리를 권했다. “오늘은 네 말을 듣겠다.”';
 return v18Scene('v38_alex','알렉 레온하르트',body,[{text:'“형님, 먼저 말씀해 주십시오. 듣겠습니다.”',next:'explore',v38Alex:'listen'},{text:'“……생각을 정리할 시간이 필요합니다.”',next:'explore',v38Alex:'silence'}]);
}
function v38Npc(loc){if(v38Follow('npc',loc))return true;const d=v38Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc];if(!p||!n||(n.rapport||0)<5)return false;const key='npc_'+loc+'_'+Math.floor(state.day/8);if(d.seen[key])return false;d.seen[key]=true;
 const rep=(v37Data().reputation[loc]||0)+(d.court[loc]||0);const body=rep>=3?p.name+'은 “경이라면 믿고 말씀드릴 수 있겠습니다.”라며 또 다른 궁중 소문을 전했다.':rep<=-2?p.name+'은 조심스레 물었다. “경에 관한 이야기도 엇갈리는데, 사실을 확인해 주시겠습니까?”':p.name+'은 복도에서 들은 소문 하나를 다니엘에게 조심스럽게 털어놓았다.';
 return v18Scene('v38_npc',p.name,body,[{text:'“먼저 사실을 확인하겠습니다.”',next:'explore',v38Npc:loc,v38NpcMode:'verify'},{text:'“섣불리 나서지는 않겠습니다.”',next:'explore',v38Npc:loc,v38NpcMode:'wait'}]);
}





// v39: aftermath arcs; lazily initialized for pre-v39 saves.
function v39Data(){
 const d=state.v39??(state.v39={miguel:{respect:0,candor:0,meetings:0},alex:{repair:0,friction:0},court:{},pending:[],events:[],seen:{}});
 d.miguel??={respect:0,candor:0,meetings:0};d.alex??={repair:0,friction:0};d.court??={};d.pending??=[];d.events??=[];d.seen??={};return d;
}
function v39Record(id,title,body,person,category,parent){
 const d=v39Data(),key='v39_'+id;if(d.events.some(e=>e.id===key))return key;
 const e={id:key,title,text:body,person,category,day:state.day,parent:parent||null};d.events.push(e);
 v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=e.day;}return key;
}
function v39Choice(c){
 const d=v39Data();let type,mode,loc=null,person,title,body;
 if(c.v39Miguel){type='miguel';mode=c.v39Miguel;person='미겔';d.miguel.meetings++;d.miguel.respect+=mode==='respect'?2:1;d.miguel.candor+=mode==='honest'?2:0;title='미겔 · 책임지는 마음';body=mode==='respect'?'다니엘은 미겔의 뜻을 먼저 묻고, 그녀의 약혼을 존중했다.':'다니엘은 마음을 숨기지 않았으나, 미겔에게 답을 요구하지 않았다.';}
 else if(c.v39Alex){type='alex';mode=c.v39Alex;person='알렉';d.alex.repair+=mode==='talk'?2:0;d.alex.friction+=mode==='avoid'?2:0;title='알렉 · 선택한 대화';body=mode==='talk'?'다니엘은 형의 말을 끊지 않고 자신이 오해한 부분을 인정했다.':'다니엘은 또다시 설명을 미루었다. 미뤄 둔 말은 사라지지 않았다.';}
 else if(c.v39Npc){type='npc';mode=c.v39NpcMode;loc=c.v39Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';d.court[loc]=(d.court[loc]||0)+(mode==='protect'?2:-1);title=person+' · 소문의 다음 주인';body=mode==='protect'?'다니엘은 당사자의 이름을 밝히지 않고 사실을 확인했다.':'다니엘은 섣부른 개입을 피했다. 침묵이 다른 소문을 낳을 가능성도 남았다.';}
 else return;
 const parent=v39Record('choice_'+type+'_'+state.day+'_'+d.events.length,title,body,person,'선택',null);
 d.pending.push({id:'arc_'+state.day+'_'+d.pending.length,type,mode,loc,stage:0,due:state.day+2,parent});
}
function v39Follow(type,loc){
 const d=v39Data(),q=d.pending.find(x=>x.type===type&&x.stage<3&&state.day>=x.due&&(type!=='npc'||x.loc===loc));if(!q)return false;
 q.stage++;const step=q.stage;q.due=state.day+2;let person,title,body;
 if(type==='miguel'){
 person='미겔';title=['','미겔 · 다시 마주한 거리','미겔 · 달라진 인사','미겔 · 남겨 둔 답'][step];
 body=step===1?(q.mode==='respect'?'미겔은 다니엘의 발소리를 알아차렸다. “그때 지켜 주신 선을 기억합니다.”':'미겔은 잠시 서류를 내려놓았다. “하신 말씀을 잊지는 않았습니다.”'):step===2?'다니엘은 감정을 앞세우지 않고 미겔의 생각을 들었다. 그녀의 선택은 여전히 그녀의 것이었다.':'미겔은 약혼에 관한 책임을 분명히 했다. 다니엘은 그 답을 존중하면서도 자신의 마음을 성급히 지우지 않았다.';
 }else if(type==='alex'){
 person='알렉';title=['','알렉 · 대화의 대가','알렉 · 남은 오해','알렉 · 형제의 다음 날'][step];
 body=step===1?(q.mode==='talk'?'알렉은 동생의 말을 끝까지 들었다. “네가 먼저 말해 준 건 다행이구나.”':'알렉은 다니엘에게 눈길을 주었다. “침묵도 때로는 대답이 된다.”'):step===2?(q.mode==='talk'?'형제는 서로 다른 생각을 인정했다. 오래된 서운함이 한 번에 사라지지는 않았다.':'다니엘은 형과 눈을 마주치기 어려웠다. 설명을 미룬 이유가 점점 복잡해졌다.'):(q.mode==='talk'?'다니엘은 형에게 먼저 인사했다. 화해는 단번에 완성되지 않아도 시작될 수 있었다.':'다니엘은 다음 대화에서 더는 피하지 않겠다고 다짐했다.');
 if(step===3){const a=v34Data().alex;a.trust=Math.max(0,(a.trust||0)+(q.mode==='talk'?2:0));a.doubt=Math.max(0,(a.doubt||0)+(q.mode==='talk'?-1:2));}
 }else{
 person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+(['','퍼진 소문','달라진 시선','인연의 결말'][step]);
 body=step===1?(q.mode==='protect'?'소문에 휘말린 사람이 다니엘에게 조용히 감사의 뜻을 전했다.':'다니엘이 나서지 않은 사이, 소문은 서로 다른 모습으로 전해졌다.'):step===2?(q.mode==='protect'?'다른 궁인도 다니엘에게 조심스럽게 도움을 청하기 시작했다.':'몇몇 궁인은 다니엘에게 말을 아꼈다. 그는 섣불리 단정하지 않기로 했다.'):(q.mode==='protect'?'다니엘은 신뢰가 하루아침에 만들어지지 않는다는 것을 깨달았다.':'다니엘은 신뢰를 회복할 기회가 남아 있음을 기억했다.');
 if(step===2){const n=v19Data().npc[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='protect'?1:-1)));v37Data().reputation[loc]=(v37Data().reputation[loc]||0)+(q.mode==='protect'?1:-1);}
 }
 const id=v39Record('follow_'+q.id+'_'+step,title,body,person,step===3?'결말':'후속',q.parent);q.parent=id;
 return v18Scene('v39_follow',person,body,[{text:'그날의 선택을 마음에 새긴다.',next:'explore'}]);
}
function v39Miguel(loc){if(v39Follow('miguel',loc))return true;
 const d=v39Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/9);
 if(d.seen[key]||(m.meetings||0)<4||!v38Data().events.some(e=>e.person==='미겔'&&e.category==='결말'))return false;
 d.seen[key]=true;const tone=(m.restraint||0)>=(m.warmth||0)?'미겔은 단정하게 고개를 끄덕였다. “이전에 말씀하신 약속은 기억합니다.”':'미겔은 다니엘의 발걸음을 알아보았다. “서두르지 않으셨군요.”';
 return v18Scene('v39_miguel','미겔 코트리먼',tone+'\n\n다니엘은 미겔과 알렉의 약혼을 떠올렸다. 그녀의 결정을 대신할 수는 없었다.',[{text:'“영애의 뜻을 존중하겠습니다.”',next:'explore',v39Miguel:'respect'},{text:'“……제 마음은 제가 책임지겠습니다.”',next:'explore',v39Miguel:'honest'}]);
}
function v39Alex(loc){if(v39Follow('alex',loc))return true;
 const d=v39Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/9);if(d.seen[key]||!v38Data().events.some(e=>e.person==='알렉'&&e.category==='결말'))return false;d.seen[key]=true;
 const line=(a.doubt||0)>(a.trust||0)?'알렉은 동생의 눈을 피하지 않았다. “계속 미뤄 둘 생각이냐?”':'알렉은 조용히 자리를 권했다. “이제 네 생각을 들을 수 있겠니?”';
 return v18Scene('v39_alex','알렉 레온하르트',line,[{text:'“형님, 이번에는 끝까지 말씀드리겠습니다.”',next:'explore',v39Alex:'talk'},{text:'“……조금만 시간을 주십시오.”',next:'explore',v39Alex:'avoid'}]);
}
function v39Npc(loc){if(v39Follow('npc',loc))return true;
 const d=v39Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc],key='npc_'+loc+'_'+Math.floor(state.day/10);
 if(!p||!n||d.seen[key]||!v38Data().events.some(e=>e.person===p.name&&e.category==='결말'))return false;d.seen[key]=true;
 const rep=(v37Data().reputation[loc]||0)+(v38Data().court[loc]||0)+(d.court[loc]||0);
 const line=rep>=3?p.name+'은 다니엘에게 고개를 숙였다. “이전 일을 기억하는 사람이 많습니다.”':rep<0?p.name+'은 주위를 살피며 말했다. “궁 안에서는 작은 말도 크게 번집니다.”':p.name+'은 다니엘에게 조용히 새로운 소문을 전했다.';
 return v18Scene('v39_npc',p.name,line,[{text:'“당사자를 보호하며 확인하겠습니다.”',next:'explore',v39Npc:loc,v39NpcMode:'protect'},{text:'“이번에는 관망하겠습니다.”',next:'explore',v39Npc:loc,v39NpcMode:'wait'}]);
}





// v40: milestone-driven consequences. Existing save data is extended lazily.
function v40Data(){
 const d=state.v40??(state.v40={milestones:{},pending:[],events:[],seen:{},court:{},backup:null});
 d.milestones??={};d.pending??=[];d.events??=[];d.seen??={};d.court??={};return d;
}
function v40Record(id,title,body,person,category,parent){
 const d=v40Data(),key='v40_'+id;if(d.events.some(e=>e.id===key))return key;
 const e={id:key,title,text:body,person,category,day:state.day,parent:parent||null};d.events.push(e);
 v18Remember(key,title,body,category);const m=(v16Data().memories||[]).find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=e.day;}return key;
}
function v40Choice(c){
 const d=v40Data();let type,mode,loc=null,person,title,body;
 if(c.v40Miguel){type='miguel';mode=c.v40Miguel;person='미겔';d.milestones.miguel=(d.milestones.miguel||0)+1;title='미겔 · 선택한 거리';body=mode==='respect'?'다니엘은 미겔의 뜻과 알렉과의 약혼을 존중하며 자신의 마음을 다스렸다.':'다니엘은 조심스럽게 자신의 마음을 인정하되 미겔에게 대답을 요구하지 않았다.';}
 else if(c.v40Alex){type='alex';mode=c.v40Alex;person='알렉';d.milestones.alex=(d.milestones.alex||0)+1;title='알렉 · 형제의 갈림길';body=mode==='repair'?'다니엘은 형에게 자신이 피했던 대화를 먼저 청했다.':'다니엘은 형의 질문에 답을 미루었다. 오해는 아직 풀리지 않았다.';const a=v34Data().alex;a.trust=Math.max(0,(a.trust||0)+(mode==='repair'?2:0));a.doubt=Math.max(0,(a.doubt||0)+(mode==='repair'?-1:2));}
 else if(c.v40Npc){type='npc';mode=c.v40NpcMode;loc=c.v40Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · 이어지는 평판';body=mode==='help'?'다니엘은 사람들의 소문보다 당사자의 사정을 먼저 확인했다.':'다니엘은 경솔한 개입을 피했지만, 침묵을 다르게 해석하는 사람도 있었다.';d.court[loc]=(d.court[loc]||0)+(mode==='help'?2:-1);}
 else return;
 const parent=v40Record('choice_'+type+'_'+state.day+'_'+d.events.length,title,body,person,'선택');
 d.pending.push({id:'v40arc_'+state.day+'_'+d.pending.length,type,mode,loc,stage:0,due:state.day+2,parent});
}
function v40Follow(type,loc){
 const d=v40Data(),q=d.pending.find(x=>x.type===type&&x.stage<3&&state.day>=x.due&&(type!=='npc'||x.loc===loc));if(!q)return false;
 q.stage++;const stage=q.stage;q.due=state.day+2;let person,title,body;
 if(type==='miguel'){person='미겔';title=['','미겔 · 되돌아온 인사','미겔 · 지켜 낸 약속','미겔 · 다음 계절의 거리'][stage];body=stage===1?(q.mode==='respect'?'“다니엘 경. 그날의 배려를 기억하고 있습니다.” 미겔은 짧게 인사했다.':'“그 말씀을 가볍게 듣지 않았습니다.” 미겔은 담담히 말했다.'):(stage===2?'다니엘은 서두르지 않고 미겔의 결정을 기다렸다. 알렉과의 약혼은 여전히 변함없었다.':q.mode==='respect'?'서로의 경계를 지킨 인사가 두 사람 사이에 조용한 신뢰로 남았다.':'고백이 곧 약속은 아니었다. 다니엘은 답을 재촉하지 않는 법을 배웠다.');}
 else if(type==='alex'){person='알렉';title=['','알렉 · 다시 시작한 대화','알렉 · 오해의 무게','알렉 · 형제의 다음 자리'][stage];body=stage===1?(q.mode==='repair'?'알렉은 동생에게 자리를 내주었다. “네 얘기를 듣겠다.”':'알렉은 침묵을 오래 바라보았다. “말하지 않으면 나도 알 수 없다.”'):(stage===2?q.mode==='repair'?'다니엘은 어설프게나마 사과했고, 형은 쉽게 대답하지 않았다.':'말하지 못한 사정이 쌓이자 두 사람의 인사는 더 짧아졌다.':q.mode==='repair'?'서로를 완전히 이해하지 못해도 대화를 이어갈 여지는 남았다.':'형제는 같은 공간에 서 있어도 서로에게 한 걸음 더 멀어졌다.');}
 else {person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+['','소문의 여파','다른 궁인의 반응','평판의 귀결'][stage];body=stage===1?(q.mode==='help'?'궁인 한 사람이 다니엘에게 감사를 전했다.':'소문은 다니엘이 아무 말도 하지 않았다는 사실까지 퍼뜨렸다.'):(stage===2?q.mode==='help'?'다른 궁인이 도움을 청하며 다니엘의 판단을 믿어 보겠다고 했다.':'궁인들은 다니엘 앞에서 말을 아꼈다.':q.mode==='help'?'당사자를 지키려던 선택이 작은 신뢰의 연결망을 만들었다.':'침묵이 남긴 오해는 쉽게 사라지지 않았다.');if(stage===2){const n=v19Data().npc[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='help'?1:-1)));}}
 const id=v40Record('follow_'+q.id+'_'+stage,title,body,person,stage===3?'결말':'후속',q.parent);q.parent=id;
 return v18Scene('v40_follow',person,body,[{text:'이후의 일을 기억한다.',next:'explore'}]);
}
function v40Miguel(loc){if(v40Follow('miguel',loc))return true;
 const d=v40Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/11);
 if(d.seen[key]||(m.meetings||0)<5||!v39Data().events.some(e=>e.person==='미겔'&&e.category==='결말'))return false;
 d.seen[key]=true;const calm=(m.restraint||0)>=(m.warmth||0);
 return v18Scene('v40_miguel','미겔 코트리먼',(calm?'미겔은 다니엘의 조심스러운 인사를 받아 주었다. “지난번처럼 서두르지 않으시는군요.”':'미겔은 다니엘을 바라보았다. “그날 하신 말씀을 기억합니다.”')+'\n\n다니엘은 그녀가 알렉의 약혼자임을 잊지 않았다.',[{text:'“영애의 결정을 존중하겠습니다.”',next:'explore',v40Miguel:'respect'},{text:'“……제 마음만큼은 부정하지 않겠습니다.”',next:'explore',v40Miguel:'honest'}]);
}
function v40Alex(loc){if(v40Follow('alex',loc))return true;
 const d=v40Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/11);if(d.seen[key]||!v39Data().events.some(e=>e.person==='알렉'&&e.category==='결말'))return false;d.seen[key]=true;
 return v18Scene('v40_alex','알렉 레온하르트',(a.doubt||0)>(a.trust||0)?'알렉은 다니엘을 불러 세웠다. “또 피할 생각이냐?”':'알렉은 먼저 말을 건넸다. “네가 하고 싶은 말이 남아 있겠지.”',[{text:'“형님, 제 말을 들어 주십시오.”',next:'explore',v40Alex:'repair'},{text:'“……지금은 답하기 어렵습니다.”',next:'explore',v40Alex:'avoid'}]);
}
function v40Npc(loc){if(v40Follow('npc',loc))return true;
 const d=v40Data(),p=V19_NPC_PROFILES[loc],n=v19Data().npc[loc],key='npc_'+loc+'_'+Math.floor(state.day/12);
 if(!p||!n||d.seen[key]||!v39Data().events.some(e=>e.person===p.name&&e.category==='결말'))return false;d.seen[key]=true;
 const rep=(v37Data().reputation[loc]||0)+(v38Data().court[loc]||0)+(v39Data().court[loc]||0)+(d.court[loc]||0);
 return v18Scene('v40_npc',p.name,rep>=4?'“다니엘 경이라면 믿을 수 있겠지요.” 왕궁 사람들의 시선이 조금 누그러졌다.':rep<0?'“궁 안에서는 말을 아끼셔야 합니다.” 경계하는 눈길이 스쳤다.':'“최근 들리는 소문을 확인해 주시겠습니까?” 조심스러운 부탁이었다.',[{text:'“당사자의 사정을 먼저 듣겠습니다.”',next:'explore',v40Npc:loc,v40NpcMode:'help'},{text:'“섣불리 개입하지 않겠습니다.”',next:'explore',v40Npc:loc,v40NpcMode:'wait'}]);
}





// v41: follow-up arcs and validated recovery snapshots; preserves the v1 save key.
function v41Data(){
 const d=state.v41??(state.v41={choices:[],arcs:[],events:[],rumors:{},seen:{},milestones:{}});
 d.choices??=[];d.arcs??=[];d.events??=[];d.rumors??={};d.seen??={};d.milestones??={};return d;
}
function v41Log(id,title,body,person,category,parent){
 const d=v41Data(),key='v41_'+id;if(d.events.some(e=>e.id===key))return key;
 const e={id:key,day:state.day,title,text:body,person,category,parent:parent||null};d.events.push(e);
 v18Remember(key,title,body,category);
 const m=(v16Data().memories||[]).find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=e.day;}
 return key;
}
function v41Choose(c){
 const d=v41Data();let kind,mode,loc=null,person,title,body;
 if(c.v41Miguel){kind='miguel';mode=c.v41Miguel;person='미겔';title='미겔 · 조심스러운 진심';body=mode==='boundary'?'다니엘은 미겔과 알렉의 약혼을 존중하며 더는 대답을 바라지 않기로 했다.':'다니엘은 감정을 인정하되 그 감정이 미겔에게 짐이 되어서는 안 된다고 말했다.';const m=v34Data().miguel;m.restraint=Math.max(0,(m.restraint||0)+(mode==='boundary'?2:1));m.warmth=Math.max(-12,Math.min(20,(m.warmth||0)+(mode==='honest'?1:0)));}
 else if(c.v41Alex){kind='alex';mode=c.v41Alex;person='알렉';title='알렉 · 말하지 못한 사정';body=mode==='speak'?'다니엘은 형에게 자신의 미숙함을 인정하고 대화를 청했다.':'다니엘은 당장 진실을 말할 용기가 없어 다시 시간을 청했다.';const a=v34Data().alex;a.trust=Math.max(-12,Math.min(20,(a.trust||0)+(mode==='speak'?2:-1)));a.doubt=Math.max(0,Math.min(20,(a.doubt||0)+(mode==='speak'?-1:2)));}
 else if(c.v41Npc){kind='npc';mode=c.v41NpcMode;loc=c.v41Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · 소문의 출처';body=mode==='verify'?'다니엘은 떠도는 말을 퍼뜨리기 전에 당사자의 설명을 들었다.':'다니엘은 확인되지 않은 이야기를 더는 옮기지 않기로 했다.';d.rumors[loc]=(d.rumors[loc]||0)+(mode==='verify'?2:-1);}
 else return;
 const id=v41Log('choice_'+kind+'_'+state.day+'_'+d.choices.length,title,body,person,'선택');
 d.choices.push({id,kind,mode,loc,day:state.day});
 d.arcs.push({id:'v41arc_'+d.arcs.length+'_'+state.day,kind,mode,loc,stage:0,due:state.day+2,parent:id});
}
function v41Follow(kind,loc){
 const d=v41Data(),q=d.arcs.find(x=>x.kind===kind&&x.stage<3&&state.day>=x.due&&(kind!=='npc'||x.loc===loc));if(!q)return false;
 q.stage++;q.due=state.day+2;const stage=q.stage;
 let person,title,body;
 if(kind==='miguel'){
 person='미겔';title=['','미겔 · 말의 무게','미겔 · 다시 만난 복도','미겔 · 서로의 경계'][stage];
 body=stage===1?(q.mode==='boundary'?'“그날의 말씀은 기억합니다.” 미겔은 다니엘의 조심스러운 배려를 인정했다.':'“다니엘 경의 말씀을 가볍게 여기지는 않았습니다.” 미겔은 더 이상의 답을 약속하지 않았다.'):
 stage===2?'미겔은 알렉과의 약혼을 변함없이 지켰다. 다니엘은 그 사실을 알면서도 지난 대화가 마음에 남았다.':
 q.mode==='boundary'?'두 사람은 넘지 않기로 한 선을 지켰다. 그 선택은 짧지만 진실한 신뢰로 남았다.':'다니엘은 자신의 마음을 인정하면서도 미겔에게 결정을 요구하지 않는 법을 배웠다.';
 }else if(kind==='alex'){
 person='알렉';title=['','알렉 · 어긋난 인사','알렉 · 형의 질문','알렉 · 남겨 둔 자리'][stage];
 body=stage===1?(q.mode==='speak'?'알렉은 동생의 말을 끊지 않았다. “끝까지 말해 봐라.”':'알렉은 잠시 입을 다물었다. “네가 말하지 않는다면 기다릴 수밖에 없겠군.”'):
 stage===2?(q.mode==='speak'?'다니엘은 솔직하게 사과했지만 형제 사이의 모든 오해가 단번에 풀리지는 않았다.':'말하지 못한 사정이 쌓이면서 알렉은 동생을 더 주의 깊게 살폈다.'):
 q.mode==='speak'?'알렉은 동생에게 다음 대화의 자리를 남겨 두었다. 화해는 서서히 시작되었다.':'형제의 거리는 좁혀지지 않았다. 다니엘은 언젠가 대답해야 한다는 것을 알았다.';
 }else{
 person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+['','퍼져 나간 말','또 다른 궁인의 반응','소문이 남긴 자리'][stage];
 body=stage===1?(q.mode==='verify'?'다니엘이 직접 확인한 사정이 조용히 전해졌다.':'누구도 소문을 확언하지 못했지만 침묵에도 저마다 뜻을 붙였다.'):
 stage===2?(q.mode==='verify'?'다른 궁인이 다니엘을 찾아와 소문의 당사자가 안도했다고 전했다.':'다른 궁인은 다니엘 앞에서 말을 고르기 시작했다.'):
 q.mode==='verify'?'확인한 말만 전하려는 태도가 작은 신뢰를 남겼다.':'확인되지 않은 말을 멈춘 덕분에 소문은 더 커지지 않았지만 오해는 남았다.';
 if(stage===2){const n=v19Data().npc?.[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(q.mode==='verify'?1:0)));}
 }
 const id=v41Log('follow_'+q.id+'_'+stage,title,body,person,stage===3?'결말':'후속',q.parent);q.parent=id;
 if(stage===3)d.milestones[kind]=(d.milestones[kind]||0)+1;
 return v18Scene('v41_follow',person,body,[{text:'그날의 일을 기억한다.',next:'explore'}]);
}
function v41Miguel(loc){if(v41Follow('miguel',loc))return true;
 const d=v41Data(),m=v34Data().miguel,key='m_'+Math.floor(state.day/13);
 if(d.seen[key]||!v40Data().events.some(e=>e.person==='미겔'&&e.category==='결말')||(m.meetings||0)<5)return false;
 d.seen[key]=true;const restrained=(m.restraint||0)>=(m.warmth||0);
 const t=restrained?'미겔은 복도에서 다니엘을 알아보았다. “지난번에는 말을 아끼셨지요. 그 배려는 기억합니다.”':'미겔은 잠시 발걸음을 멈췄다. “경께서 그날 하신 말씀을 기억합니다.”';
 return v18Scene('v41_miguel','미겔 코트리먼',t+'\n\n다니엘은 그녀가 여전히 알렉의 약혼자라는 사실을 잊지 않았다.',[{text:'“영애의 뜻을 존중하겠습니다.”',next:'explore',v41Miguel:'boundary'},{text:'“……제 감정은 제가 감당하겠습니다.”',next:'explore',v41Miguel:'honest'}]);
}
function v41Alex(loc){if(v41Follow('alex',loc))return true;
 const d=v41Data(),a=v34Data().alex,key='a_'+Math.floor(state.day/13);
 if(d.seen[key]||!v40Data().events.some(e=>e.person==='알렉'&&e.category==='결말'))return false;
 d.seen[key]=true;const t=(a.doubt||0)>(a.trust||0)?'알렉은 다니엘의 앞을 막아섰다. “이번에도 아무 말 하지 않을 셈이냐?”':'알렉은 동생에게 자리를 권했다. “네 이야기를 듣겠다.”';
 return v18Scene('v41_alex','알렉 레온하르트',t,[{text:'“형님, 제 말을 들어 주십시오.”',next:'explore',v41Alex:'speak'},{text:'“……조금만 시간을 주십시오.”',next:'explore',v41Alex:'delay'}]);
}
function v41Npc(loc){if(v41Follow('npc',loc))return true;
 const d=v41Data(),p=V19_NPC_PROFILES[loc],key='n_'+loc+'_'+Math.floor(state.day/13);
 if(!p||d.seen[key]||!v40Data().events.some(e=>e.person===p.name&&e.category==='결말'))return false;
 d.seen[key]=true;
 const old=(v37Data().reputation?.[loc]||0)+(v38Data().court?.[loc]||0)+(v39Data().court?.[loc]||0)+(v40Data().court?.[loc]||0)+(d.rumors[loc]||0);
 const t=old>=5?'“경께서 말씀하신 일은 믿을 만하다고들 합니다.”':old<0?'“최근 궁 안의 소문이 심상치 않습니다. 조심하셔야 합니다.”':'“다니엘 경, 최근 떠도는 이야기를 들어 보셨습니까?”';
 return v18Scene('v41_npc',p.name,t,[{text:'“당사자의 말을 직접 듣겠습니다.”',next:'explore',v41Npc:loc,v41NpcMode:'verify'},{text:'“확인되지 않은 말은 옮기지 않겠습니다.”',next:'explore',v41Npc:loc,v41NpcMode:'quiet'}]);
}

const V41_BACKUP_KEY='delharsha_purple_night_v1_backup_v41';
function v41ValidSave(raw){try{const d=JSON.parse(raw);return !!(d&&typeof d==='object'&&typeof d.node==='string'&&Number.isFinite(d.day)&&d.day>=1&&d.stats&&typeof d.stats==='object'&&d.exploration&&typeof d.exploration==='object'&&Array.isArray(d.history));}catch{return false;}}
function v41SafeBackup(){try{const raw=localStorage.getItem(SAVE_KEY);if(!raw||!v41ValidSave(raw))return false;localStorage.setItem(V41_BACKUP_KEY,raw);return true;}catch{return false;}}
function v41Recovery(){const wrap=document.createElement('div');const p=document.createElement('p');p.className='hint';p.textContent='현재 저장본을 보호하기 위해 저장 직전의 정상 데이터가 별도 백업됩니다. 복구는 기존 저장 데이터를 교체하므로 확인 후 실행하세요.';wrap.append(p);
 const current=localStorage.getItem(SAVE_KEY),backup=localStorage.getItem(V41_BACKUP_KEY);const info=document.createElement('p');info.textContent='현재 저장본: '+(v41ValidSave(current)?'형식 정상':'없음 또는 손상')+' / 복구용 백업: '+(v41ValidSave(backup)?'형식 정상':'없음 또는 손상');wrap.append(info);
 const make=document.createElement('button');make.textContent='현재 저장본 백업하기';make.onclick=()=>{if(!v41SafeBackup()){modal('백업 실패','정상적인 저장본이 없어 백업할 수 없습니다.');return;}modal('백업 완료','현재 저장본을 별도 복구 슬롯에 보관했습니다.');};wrap.append(make);
 const restore=document.createElement('button');restore.textContent='백업에서 복구하기';restore.disabled=!v41ValidSave(backup);restore.onclick=()=>{if(!confirm('현재 저장본을 백업 데이터로 교체하시겠습니까?'))return;try{const raw=localStorage.getItem(V41_BACKUP_KEY);if(!v41ValidSave(raw))throw Error('invalid');localStorage.setItem(SAVE_KEY,raw);modal('복구 완료','백업 저장본으로 교체했습니다. 불러오기 버튼을 눌러 진행하세요.');}catch{modal('복구 실패','백업 데이터가 유효하지 않거나 저장소를 사용할 수 없습니다.');}};wrap.append(restore);modal('v41 · 저장 복구',wrap);
}




// v42: save-compatible long-form outcomes, rumor network, and recovery verification.
function v42Data(){const d=state.v42??(state.v42={seen:{},arcs:[],events:[],ties:{},rumors:{},checkpoints:[]});d.seen??={};d.arcs??=[];d.events??=[];d.ties??={};d.rumors??={};d.checkpoints??=[];return d;}
function v42Log(id,title,body,person,category,parent){const d=v42Data(),key='v42_'+id;if(d.events.some(e=>e.id===key))return key;const e={id:key,day:state.day,title,text:body,person,category,parent:parent||null};d.events.push(e);v18Remember(key,title,body,category);const m=(v16Data().memories||[]).find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;}return key;}
function v42Choice(c){let kind,mode,loc,person;if(c.v42Miguel){kind='miguel';mode=c.v42Miguel;person='미겔';}else if(c.v42Alex){kind='alex';mode=c.v42Alex;person='알렉';}else if(c.v42Npc){kind='npc';mode=c.v42NpcMode;loc=c.v42Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;
 const d=v42Data(),title=person+' · 다시 선택한 태도',body=kind==='miguel'?(mode==='respect'?'다니엘은 미겔의 약혼과 선택을 존중하며 자신의 감정을 다스리기로 했다.':'다니엘은 답을 강요하지 않으면서도 자신의 마음을 부정하지 않았다.'):kind==='alex'?(mode==='repair'?'다니엘은 형에게 숨겼던 두려움을 조심스럽게 고백했다.':'다니엘은 형과의 대화를 또다시 미뤘다.'):(mode==='clarify'?'다니엘은 소문이 닿은 두 사람의 말을 각각 확인했다.':'다니엘은 확인되지 않은 말을 더는 옮기지 않기로 했다.');
 const id=v42Log('choice_'+kind+'_'+state.day+'_'+d.arcs.length,title,body,person,'선택');d.arcs.push({id:'v42arc_'+d.arcs.length+'_'+state.day,kind,mode,loc,stage:0,due:state.day+2,parent:id});
 if(kind==='miguel'){d.ties.miguel=(d.ties.miguel||0)+(mode==='respect'?1:0);}
 if(kind==='alex'){d.ties.alex=(d.ties.alex||0)+(mode==='repair'?2:-1);}
 if(kind==='npc'){d.rumors[loc]=(d.rumors[loc]||0)+(mode==='clarify'?2:-1);const n=v19Data().npc?.[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(mode==='clarify'?1:0)));}
}
function v42Follow(kind,loc){const d=v42Data(),q=d.arcs.find(x=>x.kind===kind&&x.stage<3&&x.due<=state.day&&(kind!=='npc'||x.loc===loc));if(!q)return false;q.stage++;q.due=state.day+2;const stage=q.stage;let person,title,body;
 if(kind==='miguel'){person='미겔';title=['','미겔 · 기억하는 말','미겔 · 보랏빛 회랑','미겔 · 지켜 낸 거리'][stage];body=stage===1?'미겔은 다니엘의 걸음걸이를 알아보고 고개를 돌렸다. “지난번 말씀은 잊지 않았습니다.”':stage===2?(q.mode==='respect'?'미겔은 경계를 존중한 태도에 짧게 감사를 표했다. 다니엘은 답을 바라지 않았다.':'미겔은 그 마음을 이해한다고 말했으나, 자신의 약혼과 책임을 분명히 했다.'):(q.mode==='respect'?'서로의 책임을 지키며 나눈 인사가 신뢰로 남았다.':'다니엘은 거절도 승낙도 강요하지 않은 채 감정을 스스로 감당하기로 했다.');}
 else if(kind==='alex'){person='알렉';title=['','알렉 · 돌아온 질문','알렉 · 형제의 식탁','알렉 · 남은 대화'][stage];body=stage===1?(q.mode==='repair'?'알렉은 동생의 말을 듣기 위해 자리를 비워 두었다.':'알렉은 다니엘의 침묵을 알아차리고 더 묻지 않았다.'):stage===2?(q.mode==='repair'?'두 사람은 오해를 하나씩 풀어 갔으나 아직 서먹했다.':'미뤄 둔 대답이 다시 두 사람 사이에 놓였다.'):(q.mode==='repair'?'형제는 다음에도 대화할 수 있다는 작은 확신을 얻었다.':'다니엘은 피한 질문이 사라진 것이 아님을 알았다.');}
 else {person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+['','소문의 다음 행선지','서로 다른 증언','전해진 말의 결말'][stage];body=stage===1?'다른 궁인이 같은 소문을 전했다. 다니엘은 처음 들은 말과 달라진 부분을 알아차렸다.':stage===2?(q.mode==='clarify'?'서로 다른 증언을 대조한 덕에 잘못 알려진 부분이 바로잡혔다.':'확인되지 않은 말이 더 퍼지지는 않았으나 이미 생긴 오해는 남았다.'):(q.mode==='clarify'?'왕궁 사람들은 다니엘이 당사자의 말을 확인한 일을 기억했다.':'다니엘은 침묵만으로 해결되지 않는 오해도 있다는 사실을 배웠다.');if(stage===2){const other=Object.keys(V19_NPC_PROFILES).find(k=>k!==loc);if(other)d.rumors[other]=(d.rumors[other]||0)+(q.mode==='clarify'?1:-1);}}
 const id=v42Log('follow_'+q.id+'_'+stage,title,body,person,stage===3?'결말':'후속',q.parent);q.parent=id;return v18Scene('v42_follow',person,body,[{text:'이후의 일을 기억한다.',next:'explore'}]);}
function v42Miguel(loc){if(v42Follow('miguel',loc))return true;const d=v42Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/15);if(d.seen[key]||(m.meetings||0)<5||!v41Data().events.some(x=>x.person==='미겔'&&x.category==='결말'))return false;d.seen[key]=true;const warm=(m.warmth||0),rest=(m.restraint||0);const intro=rest>=warm?'“다니엘 경. 지난번에는 제 처지를 헤아려 주셨지요.” 미겔이 조용히 말했다.':'“그날의 말씀을 가볍게 여기지는 않았습니다.” 미겔은 잠시 시선을 내렸다.';return v18Scene('v42_miguel','미겔 코트리먼',intro+'\n\n다니엘은 그녀와 알렉의 약혼이 여전히 유효함을 알고 있었다.',[{text:'“영애의 뜻을 먼저 생각하겠습니다.”',next:'explore',v42Miguel:'respect'},{text:'“……제 마음은 제가 책임지겠습니다.”',next:'explore',v42Miguel:'honest'}]);}
function v42Alex(loc){if(v42Follow('alex',loc))return true;const d=v42Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/15);if(d.seen[key]||!v41Data().events.some(x=>x.person==='알렉'&&x.category==='결말'))return false;d.seen[key]=true;const intro=(a.doubt||0)>(a.trust||0)?'“이번에도 피하려는 것이냐?” 알렉은 동생에게 물었다.':'“네 말을 들을 시간이 있다.” 알렉은 의자를 가리켰다.';return v18Scene('v42_alex','알렉 레온하르트',intro,[{text:'“형님, 이제 말씀드리겠습니다.”',next:'explore',v42Alex:'repair'},{text:'“……아직 준비되지 않았습니다.”',next:'explore',v42Alex:'delay'}]);}
function v42Npc(loc){if(v42Follow('npc',loc))return true;const d=v42Data(),p=V19_NPC_PROFILES[loc],key='npc_'+loc+'_'+Math.floor(state.day/15);if(!p||d.seen[key]||!v41Data().events.some(x=>x.person===p.name&&x.category==='결말'))return false;d.seen[key]=true;const score=(d.rumors[loc]||0)+(v41Data().rumors[loc]||0);const intro=score>0?'“경께서는 소문의 근거부터 확인하신다고 들었습니다.”':score<0?'“궁 안의 말이 어디서 시작됐는지 알 수가 없군요.”':'“한 가지 소문이 여러 사람을 거쳐 다른 이야기가 됐습니다.”';return v18Scene('v42_npc',p.name,intro,[{text:'“관련된 분들의 말을 확인하겠습니다.”',next:'explore',v42Npc:loc,v42NpcMode:'clarify'},{text:'“확인 전에는 말을 옮기지 않겠습니다.”',next:'explore',v42Npc:loc,v42NpcMode:'quiet'}]);}






// v43: 별도 상태만 추가하며 이전 버전 저장 구조를 변경하지 않습니다.
function v43Data(){const d=state.v43??(state.v43={seen:{},arcs:[],events:[],rumorWeb:{},audit:[]});d.seen??={};d.arcs??=[];d.events??=[];d.rumorWeb??={};d.audit??=[];return d;}
function v43Log(key,title,body,person,category,parent){const d=v43Data(),id='v43_'+key;if(d.events.some(e=>e.id===id))return id;d.events.push({id,day:state.day,title,text:body,person,category,parent:parent||null});v18Remember(id,title,body,category);const m=(v16Data().memories||[]).find(x=>x.id===id);if(m){m.person=person;m.parent=parent||null;}return id;}
function v43Choice(c){let kind,mode,loc,person;if(c.v43Miguel){kind='miguel';mode=c.v43Miguel;person='미겔';}else if(c.v43Alex){kind='alex';mode=c.v43Alex;person='알렉';}else if(c.v43Npc){kind='npc';mode=c.v43NpcMode;loc=c.v43Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;
 const d=v43Data(),parent=v43Log('choice_'+state.day+'_'+d.arcs.length,person+' · 선택의 무게',kind==='miguel'?(mode==='restraint'?'다니엘은 미겔의 약혼을 존중하며 서두르지 않기로 했다.':'다니엘은 답을 요구하지 않고 자신의 혼란을 솔직히 인정했다.'):kind==='alex'?(mode==='repair'?'다니엘은 형의 말을 끝까지 듣겠다고 약속했다.':'다니엘은 상처를 키울까 두려워 한동안 대화를 피했다.'):(mode==='verify'?'다니엘은 소문의 출처를 직접 확인하겠다고 했다.':'다니엘은 검증되지 않은 이야기를 전하지 않기로 했다.'),person,'선택');
 d.arcs.push({id:'arc_'+state.day+'_'+d.arcs.length,kind,mode,loc,stage:0,due:state.day+2,parent});
 if(kind==='npc'){const places=Object.keys(V19_NPC_PROFILES).filter(x=>x!==loc);for(const other of places.slice(0,2)){d.rumorWeb[other]=(d.rumorWeb[other]||0)+(mode==='verify'?1:-1);}const n=v19Data().npc?.[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(mode==='verify'?1:0)));}
}
function v43Follow(kind,loc){const d=v43Data(),q=d.arcs.find(a=>a.kind===kind&&a.stage<4&&a.due<=state.day&&(kind!=='npc'||a.loc===loc));if(!q)return false;q.stage++;q.due=state.day+2;let person,body,title;
 if(kind==='miguel'){person='미겔';title=['','노란 장미의 인사','지키기로 한 거리','세 개의 달 아래','다시 만날 날'][q.stage];body=[null,'미겔은 다니엘의 옷자락과 걸음걸이를 알아보았다. “레온하르트 경. 지난번의 말씀을 기억합니다.”',q.mode==='restraint'?'“서로의 처지를 지키는 일도 용기가 필요하지요.” 미겔은 담담하게 말했다.':'“솔직함은 가볍게 다룰 일이 아닙니다.” 미겔은 대답을 재촉하지 않았다.','다니엘은 자신의 마음이 상대의 선택을 대신할 수 없다는 사실을 되새겼다.','그들은 짧게 인사했다. 결론을 강요하지 않았기에 다음 만남의 여지가 남았다.'][q.stage];}
 else if(kind==='alex'){person='알렉';title=['','형제의 서신','미뤄 둔 식탁','말하지 못한 이유','형제의 다음 날'][q.stage];body=[null,'알렉은 다니엘에게 먼저 말을 꺼낼 기회를 주었다.',q.mode==='repair'?'“끝까지 듣겠습니다, 형님.” 다니엘은 떨리는 목소리로 말했다.':'다니엘이 침묵하자 알렉도 말을 삼켰다. 그 사이의 거리는 아직 좁혀지지 않았다.',q.mode==='repair'?'두 사람은 서로의 의도를 단정하지 않기로 했다.':'서로의 의심이 쌓이는 동안 대화의 문턱도 높아졌다.',q.mode==='repair'?'화해가 모든 문제를 해결하지는 않았지만 다시 대화할 길은 열렸다.':'다니엘은 갈등을 끝내지 못한 채 다음 대화를 준비했다.'][q.stage];const a=v34Data().alex;if(q.stage===4){a.trust=(a.trust||0)+(q.mode==='repair'?1:0);a.doubt=Math.max(0,(a.doubt||0)+(q.mode==='repair'?-1:1));}}
 else {person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';title=person+' · '+['','달라진 소문','다른 궁인의 증언','왕궁의 반응','소문의 뒤끝'][q.stage];body=[null,'소문은 다른 궁인에게도 전해졌지만 그 내용은 조금씩 달랐다.',q.mode==='verify'?'다니엘은 확인한 사실과 추측을 분리해 전했다.':'다니엘은 불확실한 이야기를 더 퍼뜨리지 않았다.','누군가는 다니엘의 신중함을 기억했고, 누군가는 그 침묵을 오해했다.','다니엘은 소문을 완전히 없앨 수는 없지만 자신의 태도는 선택할 수 있음을 알았다.'][q.stage];}
 const id=v43Log('follow_'+q.id+'_'+q.stage,title,body,person,q.stage===4?'결말':'후속',q.parent);q.parent=id;return v18Scene('v43_follow',person,body,[{text:'이날의 일을 기억한다.',next:'explore'}]);}
function v43Miguel(loc){if(v43Follow('miguel',loc))return true;const d=v43Data(),m=v34Data().miguel,key='miguel_'+Math.floor(state.day/18);if(d.seen[key]||(m.meetings||0)<6||!v42Data().events.some(e=>e.person==='미겔'&&e.category==='결말'))return false;d.seen[key]=true;const intro=(m.restraint||0)>=(m.warmth||0)?'“서두르지 않으시는군요.” 미겔은 다니엘의 조심스러운 태도를 알아보았다.':'“레온하르트 경. 마음을 숨기는 일이 늘 옳지는 않겠지요.” 미겔은 짧게 말했다.';return v18Scene('v43_miguel','미겔',intro+'\n\n다니엘은 미겔과 알렉의 약혼을 알고 있다. 이 대화가 그녀에게 답을 강요하는 일이 되어서는 안 된다.',[{text:'약혼과 결정을 존중하며 거리를 지킨다.',v43Miguel:'restraint',next:'explore'},{text:'답을 요구하지 않고 감정만 인정한다.',v43Miguel:'honesty',next:'explore'}]);}
function v43Alex(loc){if(v43Follow('alex',loc))return true;const d=v43Data(),a=v34Data().alex,key='alex_'+Math.floor(state.day/18);if(d.seen[key]||!v42Data().events.some(e=>e.person==='알렉'&&e.category==='결말'))return false;d.seen[key]=true;const intro=(a.doubt||0)>(a.trust||0)?'알렉은 다니엘을 바라보다가 조용히 물었다. “이번에도 내 말을 피할 생각이니?”':'알렉은 빈 의자를 가리켰다. “앉아라. 이번에는 끝까지 들어 보마.”';return v18Scene('v43_alex','알렉',intro,[{text:'형의 말을 끝까지 듣는다.',v43Alex:'repair',next:'explore'},{text:'지금은 대답을 미룬다.',v43Alex:'avoid',next:'explore'}]);}
function v43Npc(loc){if(v43Follow('npc',loc))return true;const d=v43Data(),p=V19_NPC_PROFILES[loc],key='npc_'+loc+'_'+Math.floor(state.day/18);if(!p||d.seen[key]||!v42Data().events.some(e=>e.person===p.name&&e.category==='결말'))return false;d.seen[key]=true;const score=d.rumorWeb[loc]||0;return v18Scene('v43_npc',p.name,(score>0?'“경께서 지난번 이야기를 확인하셨다면서요.”':'“지난번 소문이 다시 돌고 있습니다.”')+' 궁인은 복도 건너편을 살피며 목소리를 낮췄다.',[{text:'출처를 확인하고 사실만 전한다.',v43Npc:loc,v43NpcMode:'verify',next:'explore'},{text:'확인되지 않은 소문은 전달하지 않는다.',v43Npc:loc,v43NpcMode:'silence',next:'explore'}]);}





// v44: completed-arc continuations, relationship consequences and recovery diagnostics.
function v44Data(){const d=state.v44??(state.v44={seen:{},arcs:[],events:[],relations:{miguel:0,alex:0,npc:{}},rumors:{}});d.seen??={};d.arcs??=[];d.events??=[];d.relations??={miguel:0,alex:0,npc:{}};d.relations.npc??={};d.rumors??={};return d;}
function v44Record(id,title,body,person,category,parent){const d=v44Data(),key='v44_'+id;if(d.events.some(x=>x.id===key))return key;d.events.push({id:key,day:state.day,title,text:body,person,category,parent:parent||null});v18Remember(key,title,body,category);const m=(v16Data().memories||[]).find(x=>x.id===key);if(m){m.person=person;m.parent=parent||null;}return key;}
function v44Choice(c){let kind,mode,loc,person;if(c.v44Miguel){kind='miguel';mode=c.v44Miguel;person='미겔';}else if(c.v44Alex){kind='alex';mode=c.v44Alex;person='알렉';}else if(c.v44Npc){kind='npc';mode=c.v44NpcMode;loc=c.v44Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;const d=v44Data();const parent=v44Record('choice_'+state.day+'_'+d.arcs.length,person+' · 이후의 선택',kind==='miguel'?(mode==='respect'?'다니엘은 약혼을 존중하며 자신의 감정을 스스로 다스리기로 했다.':'다니엘은 답을 재촉하지 않되 자신의 마음을 부정하지 않기로 했다.'):kind==='alex'?(mode==='listen'?'다니엘은 형의 말을 끝까지 듣고 오해를 확인하기로 했다.':'다니엘은 형과의 대화를 또 미루었다.'):(mode==='check'?'다니엘은 소문을 직접 확인해 사실과 추측을 구분했다.':'다니엘은 확인되지 않은 소문의 전달을 멈췄다.'),person,'선택');d.arcs.push({id:'arc_'+state.day+'_'+d.arcs.length,kind,mode,loc,stage:0,due:state.day+2,parent});if(kind==='miguel')d.relations.miguel+=(mode==='respect'?2:1);if(kind==='alex'){d.relations.alex+=(mode==='listen'?2:-2);const a=v34Data().alex;a.trust=Math.max(0,(a.trust||0)+(mode==='listen'?1:0));a.doubt=Math.max(0,(a.doubt||0)+(mode==='listen'?-1:1));}if(kind==='npc'){d.relations.npc[loc]=(d.relations.npc[loc]||0)+(mode==='check'?2:1);for(const other of Object.keys(V19_NPC_PROFILES).filter(x=>x!==loc)){d.rumors[other]=(d.rumors[other]||0)+(mode==='check'?1:-1);}const n=v19Data().npc?.[loc];if(n)n.rapport=Math.max(0,Math.min(10,(n.rapport||0)+(mode==='check'?1:0)));}}
function v44Follow(kind,loc){const d=v44Data(),a=d.arcs.find(x=>x.kind===kind&&x.stage<3&&x.due<=state.day&&(kind!=='npc'||x.loc===loc));if(!a)return false;a.stage++;a.due=state.day+2;let person,body;if(kind==='miguel'){person='미겔';body=[null,'미겔은 걸음걸이만으로 다니엘을 알아보았다. “레온하르트 경. 지난번의 약속을 기억합니다.”',a.mode==='respect'?'“서로의 처지를 존중해 주셔서 감사합니다.” 그녀는 짧게 고개를 숙였다.':'“솔직함을 가볍게 여기지 않겠습니다. 다만 제 선택은 제 몫입니다.”', '다니엘은 결론을 요구하지 않고도 자신의 마음을 책임질 수 있음을 깨달았다.'][a.stage];}else if(kind==='alex'){person='알렉';body=[null,'알렉은 다니엘에게 대화할 시간을 내어 주었다.',a.mode==='listen'?'“형님, 제가 잘못 이해한 것이 있다면 듣겠습니다.” 다니엘은 먼저 입을 열었다.':'다니엘이 말을 미루자 알렉은 더 묻지 않았다. 두 사람 사이의 침묵이 길어졌다.',a.mode==='listen'?'모든 오해가 풀리지는 않았지만 형제는 다음 대화를 약속했다.':'해결되지 않은 의심은 남았다. 다니엘은 더 미루기 전에 마주해야 한다고 생각했다.'][a.stage];}else{person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';body=[null,'소문은 다른 궁인에게 전해져 조금 다른 모습으로 돌아왔다.',a.mode==='check'?'확인된 사실이 퍼지자 불필요한 오해가 조금씩 줄었다.':'전달을 멈춘 덕분에 새로운 소문은 줄었지만 남은 오해는 쉽게 사라지지 않았다.','궁인들은 다니엘의 태도를 기억했다. 소문의 끝은 한 사람의 말로 결정되지 않았다.'][a.stage];}const id=v44Record('follow_'+a.id+'_'+a.stage,person+' · '+(a.stage===3?'새로운 매듭':'후속 이야기 '+a.stage),body,person,a.stage===3?'결말':'후속',a.parent);a.parent=id;return v18Scene('v44_follow',person,body,[{text:'이날의 일을 마음에 새긴다.',next:'explore'}]);}
function v44Miguel(loc){if(v44Follow('miguel',loc))return true;const d=v44Data(),finished=v43Data().arcs.filter(a=>a.kind==='miguel'&&a.stage===4);const source=finished.find(a=>!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const m=v34Data().miguel;const body=(m.restraint||0)>=(m.warmth||0)?'미겔은 다니엘이 지켜 온 거리를 알아보았다. “경께서 신중하셨다는 것을 압니다.”':'미겔은 잠시 발걸음을 멈췄다. “레온하르트 경. 그날의 말씀을 잊지 않았습니다.”';return v18Scene('v44_miguel','미겔',body+'\n\n다니엘은 미겔과 알렉의 약혼을 알고 있다. 감정이 상대의 선택을 대신할 수는 없다.',[{text:'그녀의 결정과 약혼을 존중한다.',v44Miguel:'respect',next:'explore'},{text:'답을 바라지 않고 마음을 인정한다.',v44Miguel:'honest',next:'explore'}]);}
function v44Alex(loc){if(v44Follow('alex',loc))return true;const d=v44Data(),finished=v43Data().arcs.filter(a=>a.kind==='alex'&&a.stage===4),source=finished.find(a=>!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const a=v34Data().alex;return v18Scene('v44_alex','알렉',(a.doubt||0)>(a.trust||0)?'“다니엘. 우리가 서로를 의심하는 데 익숙해진 것 같구나.”':'“이번에는 네 말을 들어 보겠다.” 알렉이 빈 의자를 가리켰다.',[{text:'형의 말을 듣고 오해를 확인한다.',v44Alex:'listen',next:'explore'},{text:'아직은 대화를 미룬다.',v44Alex:'avoid',next:'explore'}]);}
function v44Npc(loc){if(v44Follow('npc',loc))return true;const p=V19_NPC_PROFILES[loc];if(!p)return false;const d=v44Data(),finished=v43Data().arcs.filter(a=>a.kind==='npc'&&a.loc===loc&&a.stage===4),source=finished.find(a=>!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const ripple=(d.rumors[loc]||0)+(v43Data().rumorWeb[loc]||0);return v18Scene('v44_npc',p.name,(ripple>0?'“다른 궁인들도 경께서 사실을 확인하셨다고 합니다.”':'“지난번 소문이 아직 남아 있습니다.”')+' 궁인은 복도 끝을 살피며 말을 이었다.',[{text:'직접 확인한 사실만 전한다.',v44Npc:loc,v44NpcMode:'check',next:'explore'},{text:'불확실한 소문을 전하지 않는다.',v44Npc:loc,v44NpcMode:'stop',next:'explore'}]);}






// v45: post-conclusion cross-relationship stories. All new material is game adaptation.
function v45Data(){const d=state.v45??(state.v45={seen:{},arcs:[],events:[],echo:{miguel:0,alex:0,npc:0},network:{}});if(!d.seen||typeof d.seen!=='object'||Array.isArray(d.seen))d.seen={};if(!Array.isArray(d.arcs))d.arcs=[];if(!Array.isArray(d.events))d.events=[];if(!d.echo||typeof d.echo!=='object')d.echo={miguel:0,alex:0,npc:0};if(!d.network||typeof d.network!=='object')d.network={};return d;}
function v45Record(id,title,body,person,category,parent){const d=v45Data(),key='v45_'+id;if(d.events.some(x=>x&&x.id===key))return key;const e={id:key,day:state.day,title,text:body,person,category,parent:parent||null};d.events.push(e);v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=state.day;}return key;}
function v45Choice(c){let kind,mode,loc,person;if(c.v45Miguel){kind='miguel';mode=c.v45Miguel;person='미겔';}else if(c.v45Alex){kind='alex';mode=c.v45Alex;person='알렉';}else if(c.v45Npc){kind='npc';mode=c.v45Mode;loc=c.v45Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;const d=v45Data(),parent=v45Record('decision_'+state.day+'_'+d.arcs.length,person+' · 남겨 둔 말',kind==='miguel'?(mode==='distance'?'다니엘은 미겔의 약혼과 선택을 존중하며 거리를 지켰다.':'다니엘은 자신의 마음을 인정하되 어떤 답도 요구하지 않았다.'):kind==='alex'?(mode==='repair'?'다니엘은 형의 말을 끝까지 듣고 자신의 잘못도 인정했다.':'다니엘은 의심을 숨기지 않고 형에게 확인을 청했다.'):(mode==='verify'?'다니엘은 확인된 사실만 전하기로 했다.':'다니엘은 소문을 옮기지 않고 당사자를 보호하기로 했다.'),person,'선택');d.arcs.push({id:'v45_arc_'+state.day+'_'+d.arcs.length,kind,mode,loc,stage:0,due:state.day+2,parent});d.echo[kind]=(d.echo[kind]||0)+1;if(kind==='miguel'){const m=v34Data().miguel;if(mode==='distance')m.restraint=(m.restraint||0)+1;else m.warmth=(m.warmth||0)+1;}else if(kind==='alex'){const a=v34Data().alex;if(mode==='repair')a.trust=(a.trust||0)+1;else a.doubt=(a.doubt||0)+1;}else{for(const other of Object.keys(V19_NPC_PROFILES)){const change=other===loc?1:(mode==='verify'?1:0);d.network[other]=(d.network[other]||0)+change;}const n=v19Data().npc?.[loc];if(n)n.rapport=Math.min(10,Math.max(0,(n.rapport||0)+1));}}
function v45Follow(kind,loc){const d=v45Data(),a=d.arcs.find(x=>x&&x.kind===kind&&x.stage<4&&x.due<=state.day&&(kind!=='npc'||x.loc===loc));if(!a)return false;a.stage++;a.due=state.day+2;let person,body;if(kind==='miguel'){person='미겔';body=[null,'미겔은 다니엘의 걸음소리를 알아듣고 서류에서 시선을 들었다. “레온하르트 경.”',a.mode==='distance'?'“지켜 주신 예의는 기억하고 있습니다.” 미겔은 더 이상의 약속을 하지 않았다.':'“솔직한 말씀을 가볍게 여기지 않습니다. 그러나 제 처지는 달라지지 않았습니다.”','두 사람은 말보다 긴 침묵 속에서 서로의 경계를 확인했다.','다니엘은 마음을 감추는 일과 타인의 결정을 존중하는 일이 같지 않음을 깨달았다.'][a.stage];}else if(kind==='alex'){person='알렉';body=[null,'알렉은 잠시 다니엘을 바라보다 먼저 자리를 내주었다.',a.mode==='repair'?'“형님. 제 말도 끝까지 들어 주십시오.” 다니엘은 어렵게 입을 열었다.':'“형님, 저는 아직 이해하지 못했습니다.” 다니엘은 물러서지 않았다.',a.mode==='repair'?'두 형제는 서로 다른 기억을 하나씩 맞추어 보았다.':'대답이 모두 주어진 것은 아니었다. 그러나 침묵으로 덮어 둘 수도 없었다.',a.mode==='repair'?'완전한 화해는 아니었지만 다음 대화의 약속이 남았다.':'의심은 여전히 남았지만 다니엘은 자신의 판단을 스스로 책임지기로 했다.'][a.stage];}else{person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';body=[null,'복도 끝에서 시작된 말은 다른 장소에 닿을 때마다 조금씩 달라졌다.',a.mode==='verify'?'다니엘이 확인한 사실을 전하자 궁인들은 추측을 거두기 시작했다.':'다니엘이 말을 옮기지 않자 적어도 새로운 소문 하나는 멈추었다.','다른 궁인들도 다니엘의 태도를 이야기했다. 소문을 믿는 이와 경계하는 이가 나뉘었다.','왕궁의 소문은 완전히 사라지지 않았다. 그러나 다니엘의 선택은 몇 사람의 기억에 남았다.'][a.stage];}const id=v45Record('follow_'+a.id+'_'+a.stage,person+' · '+(a.stage===4?'오래 남은 결과':'후속 장면 '+a.stage),body,person,a.stage===4?'결말':'후속',a.parent);a.parent=id;return v18Scene('v45_follow',person,body,[{text:'그날의 일을 기록한다.',next:'explore'}]);}
function v45Miguel(loc){if(v45Follow('miguel',loc))return true;const d=v45Data(),source=v44Data().arcs.find(a=>a.kind==='miguel'&&a.stage===3&&!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const m=v34Data().miguel,body=(m.restraint||0)>=(m.warmth||0)?'미겔은 잠시 다니엘을 바라보았다. “경께서 거리를 지켜 주셨다는 것을 압니다.”':'미겔은 다니엘의 걸음소리를 알아챘다. “지난번 말씀을 잊지 않았습니다. 그렇지만 제 선택은 제가 하겠습니다.”';return v18Scene('v45_miguel','미겔',body,[{text:'그녀의 약혼과 결정을 존중하며 물러선다.',v45Miguel:'distance',next:'explore'},{text:'대답을 바라지 않고 마음을 인정한다.',v45Miguel:'honest',next:'explore'}]);}
function v45Alex(loc){if(v45Follow('alex',loc))return true;const d=v45Data(),source=v44Data().arcs.find(a=>a.kind==='alex'&&a.stage===3&&!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const a=v34Data().alex,body=(a.trust||0)>=(a.doubt||0)?'“다니엘. 이번에는 서로 말을 끊지 말자.” 알렉은 의자를 가리켰다.':'“다니엘, 아직 내 말을 믿지 못하겠느냐.” 알렉의 물음에 다니엘은 선뜻 대답하지 못했다.';return v18Scene('v45_alex','알렉',body,[{text:'형님의 말씀을 듣고 오해를 풀어 본다.',v45Alex:'repair',next:'explore'},{text:'남은 의심을 직접 확인한다.',v45Alex:'question',next:'explore'}]);}
function v45Npc(loc){if(v45Follow('npc',loc))return true;const d=v45Data(),source=v44Data().arcs.find(a=>a.kind==='npc'&&a.loc===loc&&a.stage===3&&!d.seen['source_'+a.id]);if(!source)return false;d.seen['source_'+source.id]=true;const p=V19_NPC_PROFILES[loc];if(!p)return false;const network=(d.network[loc]||0)+(v44Data().rumors[loc]||0);return v18Scene('v45_npc',p.name,network>0?'“다른 곳에서도 경께서 소문을 바로잡으셨다고 들었습니다.”':'“궁 안의 이야기가 어디까지 사실인지 모르겠습니다.”',[{text:'출처를 확인하고 사실만 전한다.',v45Npc:loc,v45Mode:'verify',next:'explore'},{text:'확인되지 않은 말은 옮기지 않는다.',v45Npc:loc,v45Mode:'protect',next:'explore'}]);}






// v46: independent cross-character threads; additive state, no save migration.
function v46Data(){const d=state.v46??(state.v46={seen:{},arcs:[],events:[],rumors:{},cross:0});if(!d.seen||typeof d.seen!=='object'||Array.isArray(d.seen))d.seen={};if(!Array.isArray(d.arcs))d.arcs=[];if(!Array.isArray(d.events))d.events=[];if(!d.rumors||typeof d.rumors!=='object'||Array.isArray(d.rumors))d.rumors={};return d;}
function v46Record(id,title,body,person,category,parent){const d=v46Data(),key='v46_'+id;if(d.events.some(e=>e&&e.id===key))return key;const e={id:key,day:state.day,title,text:body,person,category,parent:parent||null};d.events.push(e);v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=state.day;}return key;}
function v46Choice(c){let kind,mode,loc,person;if(c.v46Miguel){kind='miguel';mode=c.v46Miguel;person='미겔';}else if(c.v46Alex){kind='alex';mode=c.v46Alex;person='알렉';}else if(c.v46Npc){kind='npc';mode=c.v46Mode;loc=c.v46Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;const d=v46Data(),parent=v46Record('decision_'+state.day+'_'+d.arcs.length,person+' · 엇갈린 선택',kind==='miguel'?(mode==='respect'?'다니엘은 미겔이 정한 경계를 존중하고 자신의 감정을 다스리기로 했다.':'다니엘은 답을 재촉하지 않겠다고 말하며 마음을 숨기지 않았다.'):kind==='alex'?(mode==='listen'?'다니엘은 형의 입장을 끝까지 듣기로 했다.':'다니엘은 오래 남은 의심을 직접 물었다.'):(mode==='verify'?'다니엘은 소문의 출처를 확인했다.':'다니엘은 당사자 없는 자리에서 추측을 전하지 않았다.'),person,'선택');d.arcs.push({id:'v46_arc_'+state.day+'_'+d.arcs.length,kind,mode,loc,stage:0,due:state.day+2,parent});if(kind==='miguel'){const m=v34Data().miguel;if(mode==='respect')m.restraint=(m.restraint||0)+1;else m.warmth=(m.warmth||0)+1;}else if(kind==='alex'){const a=v34Data().alex;if(mode==='listen')a.trust=(a.trust||0)+1;else a.doubt=(a.doubt||0)+1;}else{for(const place of Object.keys(V19_NPC_PROFILES)){d.rumors[place]=(d.rumors[place]||0)+(place===loc?2:1);}const n=v19Data().npc?.[loc];if(n)n.rapport=Math.min(10,Math.max(0,(n.rapport||0)+1));}}
function v46Follow(kind,loc){const d=v46Data(),a=d.arcs.find(x=>x&&x.kind===kind&&x.stage<3&&x.due<=state.day&&(kind!=='npc'||x.loc===loc));if(!a)return false;a.stage++;a.due=state.day+2;let person,body;if(kind==='miguel'){person='미겔';body=[null,'미겔은 발걸음 소리로 다니엘을 알아보았다. “레온하르트 경. 지난번 말씀은 기억하고 있습니다.”',a.mode==='respect'?'“제게 선택할 시간을 남겨 주신 점은 감사드립니다.” 미겔은 서류를 정돈했다.':'“마음을 가볍게 여기지 않습니다. 그렇다고 제 약혼과 책임이 사라지는 것은 아닙니다.”','서로에게 허락되지 않은 약속을 만들지 않은 채, 두 사람은 다시 마주할 수 있는 거리를 배웠다.'][a.stage];}else if(kind==='alex'){person='알렉';body=[null,'알렉은 다니엘을 조용한 회랑으로 불렀다. “네 생각을 들려다오.”',a.mode==='listen'?'형의 말을 끝까지 들은 다니엘은 처음으로 서로의 두려움이 다르다는 것을 알았다.':'다니엘은 대답이 모호한 부분을 다시 물었다. 형제의 말투는 여전히 조심스러웠다.',a.mode==='listen'?'화해는 서둘러 완성되지 않았지만, 형제는 다음 만남을 피하지 않기로 했다.':'남은 의심을 인정한 두 사람은 적어도 거짓된 화해를 약속하지 않았다.'][a.stage];}else{person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';body=[null,'한 궁인의 이야기가 회랑과 정원을 거쳐 다시 돌아왔다. 처음의 말과는 어딘가 달랐다.',a.mode==='verify'?'다니엘이 출처를 따져 묻자 궁인들은 확인하지 못한 대목을 지웠다.':'다니엘이 전언을 멈추자 주변의 몇 사람도 입을 다물었다.','소문은 남았지만, 누군가는 다니엘이 말을 다루는 방식을 기억했다.'][a.stage];}const id=v46Record('follow_'+a.id+'_'+a.stage,person+' · '+(a.stage===3?'서로 다른 결말':'교차 후일담 '+a.stage),body,person,a.stage===3?'결말':'후속',a.parent);a.parent=id;return v18Scene('v46_follow',person,body,[{text:'이날의 기억을 간직한다.',next:'explore'}]);}
function v46Miguel(loc){if(v46Follow('miguel',loc))return true;const d=v46Data(),source=v45Data().arcs.find(a=>a&&a.kind==='miguel'&&a.stage===4&&!d.seen['m_'+a.id]);if(!source)return false;d.seen['m_'+source.id]=true;const m=v34Data().miguel,a=v34Data().alex;const contrast=(a.trust||0)>=(a.doubt||0)?'형과의 대화를 마친 뒤에도 다니엘은 미겔에게 쉽게 다가가지 못했다.':'형에게 남긴 의문이 미겔 앞에서도 마음을 무겁게 했다.';return v18Scene('v46_miguel','미겔',contrast+'\n\n'+((m.restraint||0)>=(m.warmth||0)?'“경의 신중함은 알고 있습니다.”':'“마음을 숨기지 않으셨다는 것도 알고 있습니다.”')+' 미겔은 짧게 답했다.',[{text:'그녀의 선택을 존중하며 거리를 지킨다.',v46Miguel:'respect',next:'explore'},{text:'대답을 바라지 않고 진심을 전한다.',v46Miguel:'honest',next:'explore'}]);}
function v46Alex(loc){if(v46Follow('alex',loc))return true;const d=v46Data(),source=v45Data().arcs.find(a=>a&&a.kind==='alex'&&a.stage===4&&!d.seen['a_'+a.id]);if(!source)return false;d.seen['a_'+source.id]=true;const m=v34Data().miguel,a=v34Data().alex;return v18Scene('v46_alex','알렉',((m.warmth||0)>(m.restraint||0)?'미겔과 마주한 이후 다니엘은 형에게 말을 고르는 일이 더 어려워졌다.':'미겔의 뜻을 존중하려던 다니엘은 형과의 관계도 함부로 단정할 수 없었다.')+'\n\n'+((a.trust||0)>=(a.doubt||0)?'“이번에는 네 이야기를 먼저 듣겠다.”':'“우리가 서로를 믿을 수 있는지부터 이야기해야겠구나.”'),[{text:'형의 말을 끝까지 듣고 대화한다.',v46Alex:'listen',next:'explore'},{text:'남은 의심을 숨기지 않고 묻는다.',v46Alex:'question',next:'explore'}]);}
function v46Npc(loc){if(v46Follow('npc',loc))return true;const d=v46Data(),source=v45Data().arcs.find(a=>a&&a.kind==='npc'&&a.stage===4&&!d.seen['n_'+a.id]);if(!source)return false;d.seen['n_'+source.id]=true;const p=V19_NPC_PROFILES[loc];if(!p)return false;const spread=Object.values(d.rumors).reduce((n,x)=>n+(Number(x)||0),0)+(v45Data().network[loc]||0);return v18Scene('v46_npc',p.name,spread>1?'“다른 회랑에서도 경께서 소문을 조심스럽게 다루셨다고 들었습니다.”':'“한 곳에서 시작된 말이 벌써 여러 곳에 닿았답니다.”',[{text:'이야기의 출처부터 확인한다.',v46Npc:loc,v46Mode:'verify',next:'explore'},{text:'확인되지 않은 말을 전하지 않는다.',v46Npc:loc,v46Mode:'protect',next:'explore'}]);}






// v47: post-conclusion cross-character encounters, branching records and safe backup review.
function v47Data(){const d=state.v47??(state.v47={seen:{},arcs:[],events:[],network:{},decisions:0});if(!d.seen||typeof d.seen!=='object'||Array.isArray(d.seen))d.seen={};if(!Array.isArray(d.arcs))d.arcs=[];if(!Array.isArray(d.events))d.events=[];if(!d.network||typeof d.network!=='object'||Array.isArray(d.network))d.network={};return d;}
function v47Record(id,title,body,person,category,parent){const d=v47Data(),key='v47_'+id;if(d.events.some(x=>x&&x.id===key))return key;const e={id:key,day:state.day,title,text:body,person,category,parent:parent||null};d.events.push(e);v18Remember(key,title,body,category);const m=v16Data().memories.find(x=>x.id===key);if(m){m.person=person;m.parent=e.parent;m.day=state.day;}return key;}
function v47Choice(c){let kind,mode,loc,person;if(c.v47Miguel){kind='miguel';mode=c.v47Miguel;person='미겔';}else if(c.v47Alex){kind='alex';mode=c.v47Alex;person='알렉';}else if(c.v47Npc){kind='npc';mode=c.v47Mode;loc=c.v47Npc;person=V19_NPC_PROFILES[loc]?.name||'왕궁 사람';}else return;const d=v47Data();const text=kind==='miguel'?(mode==='distance'?'다니엘은 미겔의 약혼과 결정을 존중하고 거리를 지켰다.':'다니엘은 답을 요구하지 않고 감정을 정리할 시간을 청했다.'):kind==='alex'?(mode==='reconcile'?'다니엘은 형에게 자신의 잘못을 인정하며 먼저 손을 내밀었다.':'다니엘은 의심을 감추지 않되 형의 설명을 끝까지 듣기로 했다.'):(mode==='source'?'다니엘은 소문의 발원지를 묻고 사실만 기록했다.':'다니엘은 당사자 없는 추측이 퍼지지 않도록 말을 멈췄다.');const parent=v47Record('choice_'+state.day+'_'+d.decisions++,person+' · 선택의 파문',text,person,'선택',c.v47Parent||null);const id='v47_arc_'+state.day+'_'+d.arcs.length;d.arcs.push({id,kind,mode,loc,stage:0,due:state.day+2,parent});if(kind==='miguel'){const m=v34Data().miguel;if(mode==='distance')m.restraint=(m.restraint||0)+1;else m.warmth=(m.warmth||0)+1;}else if(kind==='alex'){const a=v34Data().alex;if(mode==='reconcile')a.trust=(a.trust||0)+2;else a.doubt=(a.doubt||0)+1;}else{for(const place of Object.keys(V19_NPC_PROFILES)){const weight=place===loc?2:1;d.network[place]=(d.network[place]||0)+(mode==='source'?-weight:weight);}}}
function v47Follow(kind,loc){const d=v47Data(),a=d.arcs.find(x=>x&&x.kind===kind&&x.stage<4&&x.due<=state.day&&(kind!=='npc'||x.loc===loc));if(!a)return false;a.stage++;a.due=state.day+2;let person,body;if(kind==='miguel'){person='미겔';body=[null,'미겔은 다니엘의 발소리를 듣고 문서를 덮었다. “레온하르트 경. 지난번 일은 기억하고 있습니다.”',a.mode==='distance'?'“저의 사정을 이해하셨다는 말씀, 감사드립니다.” 미겔은 단정히 고개를 끄덕였다.':'“솔직한 마음을 들었다고 해서 제가 지켜야 할 약속이 달라지지는 않습니다.”', '두 사람은 무도회의 불빛 아래에서 서로의 침묵을 함부로 해석하지 않기로 했다.','다니엘은 대답 대신 예를 갖추었다. 미겔은 잠시 그를 바라본 뒤 자신의 길로 돌아갔다.'][a.stage];}else if(kind==='alex'){person='알렉';body=[null,'알렉은 동생을 조용한 회랑으로 불렀다. “다니엘. 끝내지 못한 이야기가 있지.”',a.mode==='reconcile'?'“네가 먼저 손을 내밀 줄은 몰랐다.” 형은 잠시 시선을 내렸다.':'“의심하는 이유를 묻겠다. 서로의 말을 끝까지 듣자.”','서로의 상처가 하루아침에 지워지지는 않았으나, 형제는 대화를 피하지 않았다.','알렉은 마지막으로 동생의 어깨에 손을 얹었다. 앞으로의 신뢰는 말보다 행동으로 쌓아야 했다.'][a.stage];}else{person=V19_NPC_PROFILES[a.loc]?.name||'왕궁 사람';body=[null,'회랑 끝에서 같은 소문이 다른 목소리로 되돌아왔다.',a.mode==='source'?'출처를 확인하자 확인되지 않은 이야기의 일부가 잦아들었다.':'추측을 전하지 않자 그 자리의 대화가 조용히 끝났다.','정원과 응접실의 사람들은 다니엘의 태도를 각기 다르게 받아들였다.','소문이 완전히 사라지지는 않았으나, 누군가는 사실을 먼저 묻기 시작했다.'][a.stage];}const id=v47Record('follow_'+a.id+'_'+a.stage,person+' · '+(a.stage===4?'새로운 후일담':'이어진 파문 '+a.stage),body,person,a.stage===4?'결말':'후속',a.stage===1?a.parent:'v47_follow_'+a.id+'_'+(a.stage-1));if(a.stage===4){v47Record('echo_'+a.id,'DAY '+state.day+' · 남겨진 선택','이날의 일은 다니엘이 훗날 떠올릴 하나의 기억이 되었다.','다니엘','회상',id);}return v18Scene('v47_follow_'+kind,person,body,[{text:'이 장면을 마음에 새긴다.',next:'explore'}]);}
function v47Miguel(loc){if(v47Follow('miguel',loc))return true;const d=v47Data(),source=v46Data().arcs.find(x=>x&&x.kind==='miguel'&&x.stage>=3&&!d.seen['m_'+x.id]);if(!source)return false;d.seen['m_'+source.id]=true;const m=v34Data().miguel,a=v34Data().alex;const mood=(m.warmth||0)>(m.restraint||0)?'가까워진 마음만큼 지켜야 할 선도 또렷했다.':'서로를 배려하는 거리가 오히려 낯설게 느껴졌다.';const family=(a.trust||0)>=(a.doubt||0)?'형과 나눈 대화가 다니엘의 말끝을 조심스럽게 했다.':'형과의 미해결된 갈등이 마음을 무겁게 했다.';return v18Scene('v47_miguel','미겔',mood+' '+family+'\n\n미겔이 서류를 거두었다. “레온하르트 경. 용건이 있으십니까?”',[{text:'그녀의 약혼과 결정을 존중하며 물러선다.',v47Miguel:'distance',v47Parent:source.parent,next:'explore'},{text:'대답을 요구하지 않고 감정을 정리할 시간을 청한다.',v47Miguel:'honest',v47Parent:source.parent,next:'explore'}]);}
function v47Alex(loc){if(v47Follow('alex',loc))return true;const d=v47Data(),source=v46Data().arcs.find(x=>x&&x.kind==='alex'&&x.stage>=3&&!d.seen['a_'+x.id]);if(!source)return false;d.seen['a_'+source.id]=true;const a=v34Data().alex;const text=(a.trust||0)>=(a.doubt||0)?'알렉은 동생이 다가오자 잠시 기다렸다. “이번에는 네 말을 먼저 듣겠다.”':'알렉은 굳은 표정으로 말했다. “우리 사이에 아직 확인할 말이 남았구나.”';return v18Scene('v47_alex','알렉',text,[{text:'형에게 먼저 화해의 뜻을 전한다.',v47Alex:'reconcile',v47Parent:source.parent,next:'explore'},{text:'의문을 밝히되 형의 설명도 듣는다.',v47Alex:'question',v47Parent:source.parent,next:'explore'}]);}
function v47Npc(loc){if(v47Follow('npc',loc))return true;const d=v47Data(),source=v46Data().arcs.find(x=>x&&x.kind==='npc'&&x.stage>=3&&!d.seen['n_'+x.id]);if(!source)return false;const p=V19_NPC_PROFILES[loc];if(!p)return false;d.seen['n_'+source.id]=true;const pressure=(v46Data().rumors[loc]||0)+(d.network[loc]||0);const text=pressure>2?'“이곳뿐 아니라 정원에서도 같은 이야기를 들었습니다. 무엇을 믿어야 할지 모르겠군요.”':'“이야기가 퍼지기 전에 사실을 먼저 알아보는 편이 낫겠지요.”';return v18Scene('v47_npc',p.name,text,[{text:'누가 처음 말했는지 확인한다.',v47Npc:loc,v47Mode:'source',v47Parent:source.parent,next:'explore'},{text:'당사자가 없는 추측은 옮기지 않는다.',v47Npc:loc,v47Mode:'silence',v47Parent:source.parent,next:'explore'}]);}






// v48: 정식 엔딩과 회차 독립 엔딩 도감. 기존 저장 구조를 변경하지 않는다.
const V48_ENDINGS=[
 {id:'miguel_respect',name:'노란 장미의 약속',group:'미겔',desc:'미겔의 결정을 존중하고 마음을 지키는 결말',need:'미겔과의 재회 및 절제',text:'다니엘은 노란 장미 앞에서 오래 머물지 않았다. 미겔은 서류를 접으며 조용히 고개를 끄덕였다. “다니엘, 네가 지켜 준 거리를 나도 가볍게 여기지는 않는단다.”\n\n그것은 연인의 약속이 아니었다. 하지만 그가 지킨 예의는 보랏빛 밤의 끝까지 남았다.'},
 {id:'miguel_confession',name:'대답 없는 고백',group:'미겔',desc:'답을 강요하지 않고 진심을 전하는 열린 결말',need:'미겔과의 깊은 감정',text:'“……대답하지 않으셔도 됩니다.” 다니엘의 목소리는 떨렸다. 미겔은 한참 뒤 짧게 말했다. “네 마음을 가벼이 여기지는 않아. 하지만 내가 지켜야 할 약속도 있다는 걸 이해해 주겠니?”\n\n두 사람은 서로의 마음을 알게 되었지만, 그날 밤 어떤 관계도 새로 맺지 않았다.'},
 {id:'miguel_separation',name:'장미가 지는 계절',group:'미겔',desc:'미겔을 향한 마음을 정리하고 떠나는 결말',need:'미겔과의 만남과 거리 두기',text:'다니엘은 미겔을 찾아가지 않았다. 대신 전하지 못한 인사를 편지에 적어 봉했다.\n\n보랏빛 밤이 지나고, 그 편지는 끝내 보내지지 않았다. 마음을 접는 일 또한 자신의 선택이었다.'},
 {id:'alex_reconcile',name:'형제의 새벽',group:'알렉',desc:'알렉과 오해를 풀고 관계를 회복하는 결말',need:'알렉과의 신뢰',text:'알렉은 오래 침묵하다 동생에게 자리를 내주었다. “앉아라, 다니엘.”\n\n말끔한 화해는 아니었다. 그러나 다니엘은 처음으로 자신의 말을 끝까지 전했고, 형은 그 말을 끝까지 들었다.'},
 {id:'alex_fracture',name:'닫힌 문 너머',group:'알렉',desc:'형제의 갈등을 해결하지 못한 결말',need:'알렉과의 깊은 의심',text:'“형님, 저는……” 다니엘은 말을 끝맺지 못했다. 알렉은 대답 없이 문을 닫았다.\n\n같은 성을 가진 두 사람 사이에 남은 것은 아직 풀리지 않은 질문이었다.'},
 {id:'court_guardian',name:'왕궁의 작은 등불',group:'왕궁',desc:'소문을 바로잡고 사람들을 보호하는 결말',need:'평판과 왕궁 인연',text:'다니엘은 이름 모를 시종의 증언을 기록하고 거짓 소문을 멈추게 했다. 누군가는 그의 이름을 기억했다.\n\n커다란 훈장도 칭송도 없었지만, 그가 지킨 작은 신뢰가 왕궁의 밤을 밝혔다.'},
 {id:'secret',name:'달빛 아래의 비밀',group:'미겔',desc:'드러내지 않은 마음을 간직하는 열린 결말',need:'깊은 감정과 조심스러운 절제',text:'다니엘과 미겔은 사람들 앞에서 언제나 예의를 지켰다. 두 사람만 아는 말 한마디가 남았지만, 그 말이 연애를 뜻하지는 않았다.\n\n알렉과 미겔의 약혼은 계속되었다. 비밀은 누군가를 속이기 위한 약속이 아니라, 이미 오래전부터 알고도 끝내 입 밖에 내지 못한 감정이었다.'},
 {id:'independent',name:'나만의 보랏빛 밤',group:'독립',desc:'누구의 사랑도 택하지 않고 스스로의 길을 걷는 결말',need:'7일차 이후',text:'세 개의 달이 서서히 자취를 감췄다. 다니엘은 누구의 대답도 기다리지 않고 왕궁을 떠났다.\n\n그에게도 스스로 정할 내일이 있었다. 보랏빛 밤은 끝났지만, 그의 이야기는 끝나지 않았다.'}
];
const V48_GALLERY_KEY='delharsha_purple_night_ending_gallery_v1';
function v48Data(){const d=state.v48??(state.v48={endings:[],last:null});if(!Array.isArray(d.endings))d.endings=[];return d;}
function v48GalleryRead(){try{const v=JSON.parse(localStorage.getItem(V48_GALLERY_KEY)||'[]');return Array.isArray(v)?v.filter(x=>x&&typeof x.id==='string'&&V48_ENDINGS.some(e=>e.id===x.id)).slice(0,100):[];}catch{return [];}}
function v48GalleryWrite(id){try{const old=v48GalleryRead();if(!old.some(x=>x.id===id))old.push({id,day:state.day,at:new Date().toISOString()});localStorage.setItem(V48_GALLERY_KEY,JSON.stringify(old));return true;}catch{return false;}}

// v49: one ending per run; completion persists in the existing save, gallery stays separate.
const V49_EPILOGUES={
 miguel_respect:'다니엘은 노란 장미 한 송이를 화병에 꽂아 두었다. 대답을 받지 못한 마음보다 먼저 지켜야 할 것은 상대의 의사였다.\n\n미겔은 다음 날에도 자신의 일을 계속했다. 두 사람의 거리는 멀어졌지만, 그 사이에는 존중이라는 이름의 길이 남았다.',
 miguel_confession:'“죄송합니다. 부담을 드릴 생각은 없었습니다.”\n\n미겔은 다니엘의 말이 끝나기를 기다렸다. “알겠습니다. 다만 저의 약속은 그대로입니다.”\n\n다니엘은 고개를 숙였다. 대답을 요구하지 않는 고백은 그날로 끝났지만, 자신의 마음을 정직하게 마주한 기억은 남았다.',
 miguel_separation:'다니엘은 편지를 끝내 부치지 않았다. 봄이 오면 장미가 다시 피겠지만, 모든 꽃을 기다릴 필요는 없었다.\n\n그는 자신이 걸어야 할 길을 스스로 정하기로 했다.',
 alex_reconcile:'“형님, 이번에는 끝까지 말씀드리고 싶습니다.”\n\n알렉은 잠시 고개를 돌렸으나 자리를 떠나지 않았다. 형제가 서로의 말을 듣는 데에는 긴 시간이 필요했다. 그럼에도 새벽이 밝을 때 두 사람은 같은 문으로 나왔다.',
 alex_fracture:'닫힌 문 앞에서 다니엘은 한참을 기다렸다. 형을 미워하는 마음과 인정받고 싶은 마음은 쉽게 나뉘지 않았다.\n\n그는 언젠가 다시 대화할 날을 남겨 두되, 오늘의 침묵을 억지로 화해라 부르지 않았다.',
 court_guardian:'왕궁의 소문은 하루아침에 사라지지 않았다. 그러나 한 사람의 증언을 끝까지 듣는 이들이 늘었다.\n\n다니엘은 작은 일을 끝까지 책임지는 사람이 되기로 했다.',
 secret:'세 개의 달 아래에서 다니엘은 아무 말도 덧붙이지 않았다. 미겔 역시 자신의 약속을 바꾸지 않았다.\n\n둘 사이에 남은 것은 연애의 맹세가 아니라, 서로의 선택을 넘어서지 않기로 한 침묵이었다.',
 independent:'왕궁의 문이 열리자 이른 바람이 불어왔다. 다니엘은 누군가의 동생이자 누군가를 사랑했던 사람인 동시에, 자기 삶의 주인이기도 했다.\n\n그는 뒤돌아보지 않고 첫걸음을 내디뎠다.'
};
const V49_META_KEY='delharsha_purple_night_run_meta_v1';
function v49Meta(){try{const d=JSON.parse(localStorage.getItem(V49_META_KEY)||'{}');return d&&typeof d==='object'&&!Array.isArray(d)?{runs:Math.max(1,Math.min(9999,Number(d.runs)||1)),legacy:Number(d.legacy)||0}: {runs:1,legacy:0};}catch{return {runs:1,legacy:0};}}
function v49SetMeta(m){try{localStorage.setItem(V49_META_KEY,JSON.stringify(m));return true;}catch{return false;}}
function v49Data(){const d=state.v49&&typeof state.v49==='object'&&!Array.isArray(state.v49)?state.v49:(state.v49={});if(d.finished&&!V48_ENDINGS.some(e=>e.id===d.finished))d.finished=null;return d;}
function v49Finished(){return !!v49Data().finished;}
function v49Hint(e){const tips={miguel_respect:'미겔과 두 번 이상 만나고, 절제와 배려를 쌓으세요.',miguel_confession:'미겔과 두 번 이상 만나고, 진솔한 감정을 쌓으세요.',miguel_separation:'미겔과 만난 뒤 거리를 두는 선택을 해보세요.',alex_reconcile:'알렉과의 신뢰가 의심보다 낮지 않도록 대화하세요.',alex_fracture:'알렉과의 갈등이 신뢰보다 깊어지는 경로입니다.',court_guardian:'왕궁 평판 55 이상, NPC와의 관계 사건을 진행하세요.',secret:'미겔을 향한 감정과 절제를 모두 충분히 쌓으세요.',independent:'7일차 이후 누구의 선택에도 매이지 않는 길입니다.'};return tips[e.id]||e.need;}
function v48Finish(id){const e=V48_ENDINGS.find(x=>x.id===id);if(!e||v49Finished()||!v48Unlock(e))return;const d=v48Data(),v=v49Data();if(!d.endings.includes(id))d.endings.push(id);d.last=id;v.finished=id;v.day=state.day;v.epilogue=V49_EPILOGUES[id];v.completedAt=new Date().toISOString();v.v50Scene=V50_SCENES[id];const rec='v50_ending_'+id+'_run_'+v49Meta().runs;v18Remember(rec,'정식 엔딩 · '+e.name,v50EndingText(id),'엔딩');const memory=v16Data().memories.find(x=>x.id===rec);if(memory){memory.person=e.group;memory.day=state.day;}const saved=v48GalleryWrite(id),detail=v50StoreDetail(id);try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));}catch{modal('저장 오류','현재 회차를 저장하지 못했습니다. 저장 공간을 확인하세요.');return;}v49FinalScreen();document.dispatchEvent(new CustomEvent('delharsha:ending',{detail:{id}}));if(!saved||!detail)modal('도감 저장 안내','현재 회차는 종료되었지만 별도 도감 또는 상세 기록을 저장하지 못했습니다.');}
function v49FinalScreen(){const d=v49Data(),e=V48_ENDINGS.find(x=>x.id===d.finished);if(!e)return;const wrap=document.createElement('div'),p=document.createElement('p');p.style.whiteSpace='pre-wrap';p.textContent=v50EndingText(e.id);wrap.append(p);const note=document.createElement('p');note.className='hint';note.textContent='DAY '+(d.day||state.day)+' · '+v49Meta().runs+'회차 종료';wrap.append(note);for(const [label,action] of [['엔딩 도감 보기',v48Gallery],['다음 회차 준비',v48NewGameConfirm]]){const b=document.createElement('button');b.textContent=label;b.onclick=action;wrap.append(b);}modal('✦ ENDING · '+e.name,wrap);}
function v48EndingMenu(){if(v49Finished()){v49FinalScreen();return;}const wrap=document.createElement('div'),p=document.createElement('p');p.className='hint';p.textContent='한 회차에 한 엔딩만 확정할 수 있습니다. 7일차부터 조건에 맞는 결말을 선택하세요.';wrap.append(p);for(const e of V48_ENDINGS){const ok=v48Unlock(e),b=document.createElement('button');b.textContent=(ok?'✧ ':'🔒 ')+e.name+' · '+e.group;b.disabled=!ok;b.onclick=()=>v48EndingConfirm(e);wrap.append(b);const hint=document.createElement('p');hint.className='hint';hint.textContent=(ok?'해금 완료 · ':'해금 힌트 · ')+v49Hint(e)+'\n'+v50Progress(e);wrap.append(hint);}modal('정식 엔딩 선택',wrap);}
function v48EndingConfirm(e){const wrap=document.createElement('div'),p=document.createElement('p'),yes=document.createElement('button'),back=document.createElement('button');p.textContent=e.desc+'\n\n이 엔딩을 확정하고 도감에 기록하시겠습니까? 확정하면 이 회차의 탐색은 종료되며 다른 엔딩을 선택할 수 없습니다.';yes.textContent='이 엔딩 확정하기';yes.onclick=()=>v48Finish(e.id);back.textContent='엔딩 목록으로';back.onclick=v48EndingMenu;wrap.append(p,yes,back);modal(e.name,wrap);}
function v48Gallery(){const wrap=document.createElement('div'),items=v48GalleryRead(),details=v50Details(),n=new Set(items.map(x=>x.id)).size,head=document.createElement('p');head.textContent='수집 '+n+' / 8 ('+Math.round(n/8*100)+'%) · '+v49Meta().runs+'회차 · 도감은 회차 저장과 별도로 보존';wrap.append(head);for(const e of V48_ENDINGS){const found=items.find(x=>x.id===e.id),history=details.filter(x=>x.id===e.id),b=document.createElement('button');b.textContent=(found?'✦ ':'🔒 ')+(found?e.name:'???')+' · '+e.group+(history.length?' · 기록 '+history.length+'회':'');b.onclick=()=>found?modal('✦ '+e.name,v50EndingText(e.id)+'\n\n[수집 기록]\n'+(history.length?history.map(x=>x.run+'회차 · DAY '+x.day).join('\n'):'이전 버전 수집 기록')):modal('해금 힌트',v49Hint(e)+'\n'+v50Progress(e));wrap.append(b);}const check=document.createElement('button');check.textContent='저장 데이터 진단';check.onclick=v50SaveCheck;const ng=document.createElement('button');ng.textContent='새 회차 시작 (도감 유지)';ng.onclick=v48NewGameConfirm;wrap.append(ng);modal('엔딩 도감',wrap);}
function v48NewGameConfirm(){const wrap=document.createElement('div'),p=document.createElement('p'),yes=document.createElement('button'),no=document.createElement('button');p.textContent='현재 회차의 진행 데이터가 초기화됩니다. 엔딩 도감·상세 기록·회차 횟수는 유지됩니다. 복구할 진행은 미리 백업하세요.';yes.textContent='다음 회차 시작';yes.onclick=()=>{const previous=state,m=v49Meta(),next={...m,runs:m.runs+1,legacy:m.legacy+Number(!!v49Finished())};const newState=fresh();try{localStorage.setItem(SAVE_KEY,JSON.stringify(newState));if(!v49SetMeta(next)){localStorage.setItem(SAVE_KEY,JSON.stringify(previous));throw Error('회차 기록 저장 실패');}state=newState;}catch(e){modal('저장 공간 오류','새 회차를 저장하지 못했습니다. '+e.message);return;}closeModal();show('game');render();};no.textContent='취소';no.onclick=v48Gallery;wrap.append(p,yes,no);modal('새 회차 시작 확인',wrap);}


function v49RenderCompleted(){const d=v49Data(),e=V48_ENDINGS.find(x=>x.id===d.finished);$('speaker').textContent='보랏빛 밤 · 완결';$('line').textContent=e?v50EndingText(e.id):'이 회차는 종료되었습니다.';$('day').textContent='DAY '+state.day;$('chapter').textContent='ENDING';$('choices').replaceChildren();$('nextBtn').classList.add('hidden');for(const [label,action] of [['✦ 엔딩 도감',v48Gallery],['다음 회차 시작',v48NewGameConfirm]]){const b=document.createElement('button');b.textContent=label;b.onclick=action;$('choices').append(b);}}

// v50: ending presentation, persistent gallery detail, and legacy-friendly eligibility.
const V50_SCENES={
 miguel_respect:['노란 장미','그녀의 선택을 존중한다는 것은 자신의 마음을 부정하는 일이 아니었다. 다니엘은 꽃을 내려놓고 한 걸음 물러섰다.','서로의 약속을 침범하지 않는 거리가 남았다.'],
 miguel_confession:['끝맺은 문장','“제 마음은 제 몫입니다. 부담을 드려 죄송합니다.” 미겔은 잠시 시선을 낮추었다. “네 말은 잘 들었어, 다니엘.”','대답은 약속이 아니었다. 다니엘은 그 차이를 기억했다.'],
 miguel_separation:['부치지 않은 편지','접힌 편지 위로 달빛이 스쳤다. 다니엘은 마지막 문장을 지우고 창을 닫았다.','떠나는 일에도 상대를 존중하는 용기가 필요했다.'],
 secret:['세 개의 달','사람들의 시선이 닿지 않는 복도에서 둘은 잠시 멈췄다. 누구도 선을 넘지 않았다.','말하지 않은 마음은 관계의 약속이 되지 않았다.'],
 alex_reconcile:['빈 의자','“형님, 잠시 말씀드려도 되겠습니까?” 알렉은 빈 의자를 가리켰다.','화해는 한 번의 사과가 아니라 다시 듣는 일에서 시작되었다.'],
 alex_fracture:['닫힌 문','다니엘은 문고리에 손을 얹었다가 거두었다. 오늘은 답을 얻을 수 없었다.','닫힌 문은 영원한 판결이 아니었다.'],
 court_guardian:['작은 등불','소문보다 늦게 도착한 증언이 있었다. 다니엘은 끝까지 그 말을 받아 적었다.','왕궁의 신뢰는 이름 없는 사람을 지키는 일에서 자랐다.'],
 independent:['첫걸음','세 개의 달이 비추는 길에서 다니엘은 누구의 답도 기다리지 않았다.','그의 다음 계절은 스스로 써 내려갈 이야기였다.']
};
const V50_GALLERY_DETAIL_KEY='delharsha_purple_night_ending_details_v1';
function v50Details(){try{const x=JSON.parse(localStorage.getItem(V50_GALLERY_DETAIL_KEY)||'[]');return Array.isArray(x)?x.filter(y=>y&&V48_ENDINGS.some(e=>e.id===y.id)).slice(-100):[];}catch{return [];}}
function v50StoreDetail(id){try{const old=v50Details();old.push({id,run:v49Meta().runs,day:state.day,at:new Date().toISOString(),reputation:Number(state.stats?.reputation)||0});localStorage.setItem(V50_GALLERY_DETAIL_KEY,JSON.stringify(old.slice(-100)));return true;}catch{return false;}}

function v50EndingText(id){const e=V48_ENDINGS.find(x=>x.id===id),scene=V50_SCENES[id];if(!e)return '';return '✦ '+e.name+'\n\n'+scene[0]+'\n\n'+scene[1]+'\n\n'+e.text+'\n\n— 에필로그 —\n'+V49_EPILOGUES[id]+'\n\n— 마지막 문장 —\n'+scene[2];}
function v48Unlock(e){if(!e||Number(state.day||1)<7)return false;const m=v34Data().miguel,a=v34Data().alex,d=v47Data(),arcs=Array.isArray(d.arcs)?d.arcs:[],completed=k=>arcs.some(x=>x&&x.kind===k&&Number(x.stage)>=3),met=Number(state.social?.miguelMeetings)||0,w=Number(m.warmth)||0,r=Number(m.restraint)||0,t=Number(a.trust)||0,q=Number(a.doubt)||0,tension=Number(state.social?.alexTension)||0;switch(e.id){case 'miguel_respect':return met>=2&&(r>=1||completed('miguel'));case 'miguel_confession':return met>=2&&w>=2;case 'miguel_separation':return met>=2&&r>=2;case 'secret':return met>=3&&w>=3&&r>=3;case 'alex_reconcile':return t>=q&&(tension>0||completed('alex')||t>=2);case 'alex_fracture':return q>t&&(tension>0||completed('alex')||q>=2);case 'court_guardian':return (Number(state.stats?.reputation)||0)>=55&&(completed('npc')||(Number(state.v47?.decisions)||0)>=2);case 'independent':return true;default:return false;}}
function v50Progress(e){const m=v34Data().miguel,a=v34Data().alex;const met=Number(state.social?.miguelMeetings)||0;const w=Number(m.warmth)||0,r=Number(m.restraint)||0,t=Number(a.trust)||0,q=Number(a.doubt)||0;const data={miguel_respect:'미겔 만남 '+met+'/2 · 절제 '+r+'/1',miguel_confession:'미겔 만남 '+met+'/2 · 감정 '+w+'/2',miguel_separation:'미겔 만남 '+met+'/2 · 절제 '+r+'/2',secret:'미겔 만남 '+met+'/3 · 감정 '+w+'/3 · 절제 '+r+'/3',alex_reconcile:'형제 신뢰 '+t+' · 의심 '+q,alex_fracture:'형제 의심 '+q+' · 신뢰 '+t,court_guardian:'왕궁 평판 '+(Number(state.stats?.reputation)||0)+'/55',independent:'7일차부터 선택 가능'};return data[e.id]||'';}
function v50SaveCheck(){const checks=[];for(const [key,label] of [[SAVE_KEY,'현재 진행'],[V48_GALLERY_KEY,'엔딩 도감'],[V49_META_KEY,'회차 계승'],[V50_GALLERY_DETAIL_KEY,'엔딩 상세 기록']]){try{const raw=localStorage.getItem(key);if(raw===null){checks.push(label+': 아직 저장 없음');continue;}const parsed=JSON.parse(raw);checks.push(label+': '+(parsed&&typeof parsed==='object'?'정상 JSON':'형식 확인 필요'));}catch(e){checks.push(label+': 읽기 오류 ('+e.message+')');}}const v=v49Data();checks.push('현재 회차 종료 상태: '+(v.finished||'진행 중'));modal('v50 저장 진단 · 읽기 전용',checks.join('\n'));}


// v51 · AU 미겔의 화법: 공석의 격식과 단둘이 있을 때의 온화한 연상 말투.
// 새 사건은 게임용 각색이며, 알렉과 미겔의 약혼 및 사교계 평판을 변경하지 않는다.
function v51Data(){const d=state.v51&&typeof state.v51==='object'&&!Array.isArray(state.v51)?state.v51:(state.v51={});if(!d.seen||typeof d.seen!=='object'||Array.isArray(d.seen))d.seen={};if(!Array.isArray(d.events))d.events=[];if(!Array.isArray(d.pending))d.pending=[];return d;}
function v51Remember(id,title,body,parent){const d=v51Data(),key='v51_'+id;if(d.events.some(e=>e&&e.id===key))return key;const e={id:key,title,text:body,person:'미겔',category:'관계',day:state.day,parent:parent||null};d.events.push(e);v18Remember(key,title,body,'관계');const m=v16Data().memories.find(x=>x&&x.id===key);if(m){m.person='미겔';m.parent=e.parent;m.day=e.day;}return key;}
function v51Choice(c){if(!c.v51Miguel)return;const d=v51Data(),mode=c.v51Miguel,privateTalk=c.v51Private===true;
 const text=mode==='listen'?'다니엘은 그녀의 말을 재촉하지 않고 끝까지 들었다. 미겔은 자신을 배려한 침묵을 알아차렸다.':mode==='truth'?'다니엘은 조심스럽게 진심을 전했다. 미겔은 그 마음을 희롱하지 않고, 자신의 약속을 분명히 했다.':'다니엘은 격식을 지켜 인사했다. 미겔 역시 사교계의 시선 앞에서 흔들림 없는 예를 갖추었다.';
 const parent=v51Remember('choice_'+state.day+'_'+d.events.length,'미겔 · '+(privateTalk?'정원에서 나눈 말':'연회장의 인사'),text,null);
 if(privateTalk){const m=v34Data().miguel;if(mode==='listen')m.restraint=(Number(m.restraint)||0)+1;if(mode==='truth')m.warmth=(Number(m.warmth)||0)+1;d.pending.push({id:parent,mode,due:state.day+2,stage:0});}
}
function v51Miguel(loc){const d=v51Data(),isPrivate=loc==='garden';
 const pending=d.pending.find(x=>x&&x.stage<2&&state.day>=x.due);
 if(pending&&isPrivate){pending.stage++;pending.due=state.day+2;const text=pending.stage===1?
 '인적이 드문 정원 길에서 미겔은 걸음을 늦추었다. “다니엘, 지난번 네가 해 준 말을 생각했단다. 고맙구나. 하지만 고마움과 약속은 별개의 일이야.” 그녀는 노란 장미의 잎을 가만히 살폈다. “그러니 네 마음도 소홀히 여기지 말렴.”':
 '미겔은 다니엘을 조용히 불렀다. “이리 오렴. 이쪽은 바람이 덜 차가워.” 그녀는 웃음을 머금었지만, 손을 내밀거나 약속을 바꾸지는 않았다. “세상에는 서둘러 결론짓지 않아도 되는 마음이 있단다. 너도 언젠가는 알게 될 거야.”';
 v51Remember('follow_'+pending.id+'_'+pending.stage,'미겔 · '+(pending.stage===2?'정원의 여운':'다시 만난 날'),text,pending.stage===1?pending.id:'v51_follow_'+pending.id+'_1');
 return v18Scene('v51_miguel_follow','미겔',text,[{text:'그녀의 말을 마음에 새긴다.',next:'explore'}]);}
 const key=(isPrivate?'private_':'public_')+Math.floor(state.day/5);if(d.seen[key]||Number(state.social?.miguelMeetings||0)<2)return false;d.seen[key]=true;
 if(isPrivate){const text='노란 장미가 늘어선 정원 깊숙한 길에는 다른 사람의 발소리가 없었다. 미겔은 다니엘의 옷깃에 묻은 꽃잎을 눈여겨보았다.\n\n“이리 오렴, 다니엘. 꽃잎 하나가 붙었구나.”\n\n그녀는 섣불리 손을 뻗지 않고 다니엘이 스스로 떼어 낼 시간을 주었다. “사교계에선 작은 친절조차 뜻밖의 의미를 얻곤 하지. 그래서 말 한마디도 허투루 건네지 않는 거란다.”\n\n미겔은 부드럽게 미소 지었다. “너라면 내 말의 무게를 알아주겠니?”';
 return v18Scene('v51_miguel_private','미겔',text,[{text:'“말씀을 끝까지 듣겠습니다.”',v51Miguel:'listen',v51Private:true,next:'explore'},{text:'“제 마음을 가볍게 여기지 않겠습니다.”',v51Miguel:'truth',v51Private:true,next:'explore'}]);}
 const text='연회장에는 귀족들의 시선과 조용한 대화가 오갔다. 미겔은 누구에게나 흠잡을 데 없는 예를 갖추었다. 그녀의 명성에는 흔한 염문 하나 따라붙지 않았다.\n\n“레온하르트 경. 오늘 연회가 경께도 유익한 자리가 되기를 바랍니다.”\n\n그녀는 필요한 만큼만 미소 지었다. 사적인 친밀함을 암시하는 말도, 불필요한 여지도 남기지 않았다.';
 return v18Scene('v51_miguel_public','미겔',text,[{text:'공식적인 예를 갖추어 인사한다.',v51Miguel:'formal',v51Private:false,next:'explore'}]);
}



// v52 · 대사 감사 및 공사 구분: 확실히 사적인 정원/테라스에서만 사적 호칭을 쓴다.
const V52_AUDIT={privateScenes:['found_honest','found_polite','miguel_conversation','miguel_truth','miguel_alex'],publicScenes:['wine_handoff','wine_question','alex_miguel','v51_miguel_public'],policy:'공적 존댓말 / 확실한 사석의 품위 있는 반말 / 애매한 장소는 존댓말 유지'};
function v52Data(){const d=state.v52&&typeof state.v52==='object'&&!Array.isArray(state.v52)?state.v52:(state.v52={});if(!d.seen||typeof d.seen!=='object'||Array.isArray(d.seen))d.seen={};if(!Array.isArray(d.events))d.events=[];if(!Array.isArray(d.pending))d.pending=[];return d;}
function v52Record(id,title,body,parent){const d=v52Data(),key='v52_'+id;if(d.events.some(e=>e.id===key))return key;d.events.push({id:key,title,text:body,person:'미겔',category:'관계',day:state.day,parent:parent||null});v18Remember(key,title,body,'관계');const m=v16Data().memories.find(e=>e&&e.id===key);if(m){m.person='미겔';m.parent=parent||null;m.day=state.day;}return key;}
function v52Choice(c){if(!c.v52Miguel)return;const d=v52Data(),mode=c.v52Miguel;const body=mode==='wait'?'다니엘은 미겔의 사정을 존중하고, 대답을 재촉하지 않겠다고 말했다.':'다니엘은 자신의 마음을 숨기지 않되, 그녀의 선택을 침범하지 않겠다고 말했다.';const id=v52Record('choice_'+state.day+'_'+d.events.length,'미겔 · 조용한 약속',body,null);d.pending.push({id,mode,stage:0,due:state.day+2});const m=v34Data().miguel;if(mode==='wait')m.restraint=(Number(m.restraint)||0)+1;else m.warmth=(Number(m.warmth)||0)+1;}
function v52Miguel(loc){if(loc!=='garden'&&loc!=='terrace')return false;const d=v52Data(),p=d.pending.find(x=>x&&x.stage<2&&state.day>=x.due);if(p){p.stage++;p.due=state.day+2;const text=p.stage===1?'세 개의 달이 비추는 길목에서 미겔은 다니엘을 알아보고 걸음을 멈췄다.\n\n“이리 오렴, 다니엘. 네가 전해 준 말은 잊지 않았어. 성급히 답을 내리지 않는 것도 때로는 성의가 필요한 일이란다.”\n\n다니엘은 그녀가 알렉과의 약혼을 가볍게 여기지 않는다는 사실을 알고 있었다. 그래서 그 말이 더욱 조심스럽게 들렸다.':'정원에서 미겔은 노란 장미의 가지를 살폈다.\n\n“네가 스스로의 마음을 정직하게 돌보았으면 좋겠구나. 내게 무엇을 증명하려 애쓰지는 말렴.”\n\n그녀는 미소 지었다. 그 미소에는 미숙한 사람을 내려다보는 기색도, 헛된 약속도 없었다.';const parent=p.stage===1?p.id:'v52_follow_'+p.id+'_1';v52Record('follow_'+p.id+'_'+p.stage,p.stage===2?'미겔 · 장미의 여운':'미겔 · 달 아래의 재회',text,parent);return v18Scene('v52_miguel_follow','미겔',text,[{text:'그녀의 뜻을 존중한다.',next:'explore'}]);}
 const key=loc+'_'+Math.floor(state.day/6);if(d.seen[key]||Number(state.social?.miguelMeetings||0)<2)return false;d.seen[key]=true;
 const intro=loc==='garden'?'정원 깊숙한 곳에는 다른 손님의 기척이 없었다. 미겔은 옷자락을 정리하고 다니엘을 향해 돌아섰다.':'테라스의 문이 닫히자 연회장의 소음이 멀어졌다. 그곳에 다른 사람이 없는 것을 확인한 미겔의 말투가 한결 부드러워졌다.';
 const text=intro+'\n\n“이리 오렴, 다니엘. 너무 멀리 서 있으면 목소리를 높여야 하잖니.”\n\n미겔은 조용히 웃었다. “사람들이 무엇을 보고 싶어 하는지 아는 것과, 그 기대에 응하는 건 별개의 문제란다. 사교계에선 그 차이를 분별할 줄 알아야 하지.”\n\n다니엘이 말을 잇지 못하자 그녀는 조금 기다렸다. “네 생각은 어떠니? 천천히 들려주렴.”';
 return v18Scene('v52_miguel_private','미겔',text,[{text:'“서두르지 않고 기다리겠습니다.”',v52Miguel:'wait',next:'explore'},{text:'“제 마음을 책임지겠습니다.”',v52Miguel:'honest',next:'explore'}]);}



// v54 — confirmed Leonhardt family positions; additional court scenes are game adaptations.
function v54Data(){const d=state.v54&&typeof state.v54==='object'&&!Array.isArray(state.v54)?state.v54:(state.v54={});if(!d.seen||typeof d.seen!=='object')d.seen={};return d;}

function v54FamilyScene(loc){if(state.day<2||!['hall','drawing','terrace','garden'].includes(loc))return false;const d=v54Data();const key='family_once';if(d.seen[key])return false;d.seen[key]=true;
const publicPlace=loc==='hall'||loc==='drawing';const body=publicPlace?
'왕궁의 회의가 끝나자 알렉스 레온하르트는 잔을 내려놓았다. 차남이라는 위치를 핑계로 책임을 피할 생각은 없어 보였다.\n\n“가문의 명예란 지켜 달라고 부탁한다고 지켜지는 게 아니지. 그렇다고 매번 칼부터 뽑을 필요도 없고.”\n\n그는 가볍게 웃으며 다니엘에게 의자를 권했다. “우리 막내는 어떻게 생각하나? 아직 결론을 서두를 때는 아니니, 네 의견부터 듣지.”\n\n미겔은 정중하게 고개를 숙였다. “알렉스 경의 말씀에 일리가 있습니다. 레온하르트 경께서도 의견을 주시겠습니까?”':
'테라스에서 다니엘은 형 알렉스와 미겔이 나란히 서 있는 모습을 보았다. 두 사람 사이에는 오래 익숙해진 이들만의 편안한 간격이 있었다.\n\n알렉스가 미소 지었다. “미겔, 오늘은 우리 막내가 유난히 생각이 많아 보이는군.”\n\n미겔은 차분히 답한 뒤 다니엘과 단둘이 남자 부드럽게 말했다. “이리 오렴, 다니엘. 네가 무슨 생각을 하는지 천천히 들려주겠니?”\n\n그녀에게 알렉스와의 약혼은 불행한 속박이 아니었다. 그 사실이 오히려 다니엘의 마음을 복잡하게 했다.';
const id='v54_family_'+key;v18Remember(id,'레온하르트 삼형제와 약혼의 무게',body,'관계');return v18Scene(id,publicPlace?'알렉스':'미겔',body,[{text:'“가문에 도움이 될 길을 찾겠습니다.”',next:'explore'},{text:'“제 생각을 차분히 말씀드리겠습니다.”',next:'explore'}]);}
// v53 — palace factions and court etiquette (game-only adaptations; not official canon).
const V53_PLACES={hall:'대연회장',corridor:'회랑',terrace:'테라스',drawing:'응접실',garden:'정원'};

// v55 — 확정 인물 관계를 존중하는 궁중 정치/로맨스 연속 사건 (게임용 각색)
function v55Data(){const d=state.v55&&typeof state.v55==='object'&&!Array.isArray(state.v55)?state.v55:(state.v55={});if(!d.seen||typeof d.seen!=='object')d.seen={};if(!Array.isArray(d.arcs))d.arcs=[];if(!Array.isArray(d.events))d.events=[];if(!d.bonds||typeof d.bonds!=='object')d.bonds={family:0,conscience:0,discretion:0};return d;}
function v55Record(id,title,body,person,parent){const d=v55Data(),key='v55_'+id;if(d.events.some(e=>e.id===key))return key;d.events.push({id:key,title,text:body,person,category:'v55 궁중·관계',day:state.day,parent:parent||null});v18Remember(key,title,body,'v55 궁중·관계');return key;}
function v55Choice(c){if(!c.v55Mode)return;const d=v55Data(),mode=c.v55Mode,arc=c.v55Arc;const delta={protect:{family:2,conscience:0,discretion:1},investigate:{family:1,conscience:2,discretion:0},confess:{family:-1,conscience:2,discretion:0},restrain:{family:1,conscience:1,discretion:2},listen:{family:1,conscience:1,discretion:1},observe:{family:0,conscience:1,discretion:2}}[mode]||{};for(const [k,v] of Object.entries(delta))d.bonds[k]=Math.max(-10,Math.min(20,(d.bonds[k]||0)+v));const bodies={protect:'다니엘은 가문의 명예를 지키면서도 사실을 감추지 않을 절차를 택했다.',investigate:'다니엘은 공훈 명부와 구휼 장부의 차이를 직접 대조하기로 했다.',confess:'다니엘은 자신의 감정을 인정하되 미겔에게 답을 요구하지 않기로 했다.',restrain:'다니엘은 형과 미겔의 약혼을 존중하며 사적인 경계를 지켰다.',listen:'다니엘은 알렉스의 말에서 농담과 경고를 구별해 들었다.',observe:'다니엘은 성급히 판단하지 않고 가문 간 서신의 맥락을 살폈다.'};const parent=v55Record('decision_'+state.day+'_'+d.arcs.length,'다니엘의 선택 · '+arc,bodies[mode]||'다니엘은 자신의 선택을 돌아보았다.','다니엘');d.arcs.push({id:'v55arc_'+state.day+'_'+d.arcs.length,arc,mode,stage:0,due:state.day+1,parent});}
function v55Follow(arc){const d=v55Data(),a=d.arcs.find(x=>x.arc===arc&&x.stage<3&&x.due<=state.day);if(!a)return false;a.stage++;a.due=state.day+1;const scripts={alex:['알렉스는 궁정 회의가 끝난 뒤에도 미소를 거두지 않았다. “가문의 이름은 서류 한 장으로 지켜지는 게 아니지. 그렇다고 서류 한 장을 우습게 보아서도 곤란하고.”','그는 동생에게 후원 명부를 다시 보여 주었다. 농담을 섞는 목소리와 달리, 사실관계를 확인하는 태도는 빈틈없었다.','알렉스는 마지막 서류에 서명했다. 가문의 명예를 지키는 일은 누군가를 희생양으로 만드는 것과 다르다는 결론이었다.'],miguel:['미겔은 알렉스가 보낸 서신을 읽고 조용히 접었다. 두 사람의 약혼은 서로의 생활과 의무를 존중하는 안정적인 약속이었다.','다니엘은 연회 초반 미겔과 알렉스가 익숙한 거리에서 자연스럽게 대화를 나누던 모습을 떠올렸다. 그 친밀함은 형식적인 인사만으로 설명되지 않았다.','미겔은 다니엘에게 결정을 재촉하지 않았다. 다니엘 또한 자신이 품은 마음과 타인의 약속을 구별해야 한다는 것을 알았다.'],court:['서기관은 구휼 장부의 이중 기재를 확인했다. 어느 가문도 공개적인 망신을 원하지 않았지만 책임은 분명히 남아 있었다.','알렉스가 미리 조율해 둔 절차에 따라 왕실 실무자와 후작가 대리인이 기록을 대조했다. 그가 자리를 비워도 가문이 맡은 일은 이어졌다.','명부는 정정되었고 구휼 물자는 예정대로 움직였다. 완전한 승자는 없었지만, 다니엘은 정치가 사람들의 삶에 닿는 방식을 배웠다.']};const body=scripts[arc][a.stage-1],parent=a.parent;a.parent=v55Record(a.id+'_'+a.stage,'v55 · '+({alex:'차남의 협상',miguel:'안락한 약혼의 무게',court:'구휼 장부의 진실'}[arc])+' '+a.stage,body,arc==='alex'?'알렉스':arc==='miguel'?'미겔':'왕궁 서기관',parent);return v18Scene('v55_follow_'+arc,'궁중 기록',body,[{text:'그날의 일을 기억한다.',next:'explore'}]);}
function v55Alex(loc){if(v55Follow('alex'))return true;if(state.day<2||!['hall','drawing','terrace','garden'].includes(loc))return false;const d=v55Data(),key='alex_'+Math.floor(state.day/9);if(d.seen[key])return false;d.seen[key]=true;return v18Scene('v55_alex','알렉스 레온하르트','왕실의 구휼 예산을 둘러싼 귀족들의 의견이 팽팽했다. 알렉스는 레온하르트가의 차남답게 자신의 역할을 알고 있었다. 가문이 부담할 책임을 외면하지 않았다.\n\n“다니엘, 네가 셋째라 해서 세상의 셈법까지 모를 필요는 없지.” 형은 느긋하게 웃었다. “상대가 웃고 있다고 해서 양보할 생각이라는 뜻은 아니거든.”\n\n그는 곧장 후원 명부의 오류를 짚었다. 말투는 능글맞았지만, 가문의 명예를 지키는 태도는 진지했다.',[{text:'“형님, 장부부터 확인해 보겠습니다.”',v55Arc:'alex',v55Mode:'investigate',next:'explore'},{text:'“가문에 불이익이 없도록 절차를 지키겠습니다.”',v55Arc:'alex',v55Mode:'protect',next:'explore'}]);}
function v55Miguel(loc){if(v55Follow('miguel'))return true;if(state.day<2||!['garden','terrace','hall','drawing'].includes(loc))return false;const d=v55Data(),key='miguel_'+Math.floor(state.day/9);if(d.seen[key])return false;d.seen[key]=true;const alone=loc==='garden'||loc==='terrace';const text=alone?'정원에는 다니엘과 미겔뿐이었다. 그녀는 알렉스가 보내온 편지를 봉투에 넣었다. 둘의 약혼은 정치적 합의인 동시에, 서로의 사적인 영역을 이미 익숙하게 공유해 온 관계였다.\n\n“이리 오렴, 다니엘. 마음이 복잡한 모양이구나.”\n\n미겔은 성급한 위로나 장난스러운 도발 대신 잠시 침묵을 내주었다. “무엇이든 서둘러 이름 붙일 필요는 없단다. 다만 누군가의 약속을 가볍게 여겨서는 안 되겠지.”':'다른 귀족들이 오가는 응접실에서 미겔은 단정히 예를 갖추었다. 알렉스와는 익숙한 눈인사를 나누었으나, 사적인 친밀함을 공적인 언사에 섞지 않았다.\n\n“레온하르트 경, 후작가에서 전달한 서신은 정식 절차에 따라 검토해 주시기 바랍니다.”\n\n다니엘은 그녀가 공과 사의 경계를 얼마나 자연스럽게 지키는지 새삼 깨달았다.';return v18Scene('v55_miguel','미겔 코트리먼',text,[{text:'약혼과 가문의 약속을 존중하며 물러선다.',v55Arc:'miguel',v55Mode:'restrain',next:'explore'},{text:'자신의 혼란을 인정하되 답을 요구하지 않는다.',v55Arc:'miguel',v55Mode:'confess',next:'explore'}]);}
function v55Court(loc){if(v55Follow('court'))return true;if(state.day<2||!['corridor','hall','drawing'].includes(loc))return false;const d=v55Data(),key='court_'+Math.floor(state.day/8);if(d.seen[key])return false;d.seen[key]=true;return v18Scene('v55_court','왕궁 서기관','구휼 명부에 코트리먼 후작가와 레온하르트 백작가의 후원 내역이 나란히 적혀 있었다. 누군가는 이중 기재를 정치적 공격의 구실로 삼으려 했다.\n\n알렉스는 웃는 낯으로 서기관의 발언을 끊었다. “확인도 끝나지 않은 혐의를 연회장의 화제로 삼으시려는 건 아니겠지요?”\n\n그는 가문에 불필요한 흠집이 생기지 않도록 협상의 순서를 바꾸었다.',[{text:'기록의 출처와 실무 책임을 조사한다.',v55Arc:'court',v55Mode:'investigate',next:'explore'},{text:'양 가문의 입장을 듣고 공개 발언을 유보한다.',v55Arc:'court',v55Mode:'observe',next:'explore'}]);}


function v53Data(){const d=state.v53&&typeof state.v53==='object'&&!Array.isArray(state.v53)?state.v53:(state.v53={});if(!d.factions||typeof d.factions!=='object')d.factions={imperial:0,nobility:0,relief:0};if(!d.seen||typeof d.seen!=='object')d.seen={};if(!Array.isArray(d.pending))d.pending=[];if(!Array.isArray(d.events))d.events=[];if(!d.flags||typeof d.flags!=='object')d.flags={};return d;}
function v53Record(id,title,body,person,parent){const d=v53Data(),key='v53_'+id;if(d.events.some(e=>e.id===key))return key;d.events.push({id:key,title,text:body,person,category:'궁중 정치',day:state.day,parent:parent||null});v18Remember(key,title,body,'궁중 정치');const m=v16Data().memories.find(e=>e.id===key);if(m){m.person=person;m.parent=parent||null;}return key;}
function v53Choice(c){if(!c.v53Decision)return;const d=v53Data(),mode=c.v53Decision,arc=c.v53Arc,delta={imperial:0,nobility:0,relief:0};if(mode==='verify'){delta.imperial=1;delta.relief=1;}if(mode==='discreet'){delta.nobility=1;delta.imperial=1;}if(mode==='protect'){delta.relief=2;delta.nobility=-1;}if(mode==='confront'){delta.imperial=-1;delta.nobility=-1;}if(mode==='mediate'){delta.imperial=1;delta.nobility=1;}if(mode==='defer'){delta.nobility=1;}for(const [k,v] of Object.entries(delta))d.factions[k]=Math.max(-9,Math.min(9,(Number(d.factions[k])||0)+v));const title={miguel:'코트리먼 가문의 서신',alex:'레온하르트 가문의 입장',npc:'왕궁 구휼 명부'}[arc]||'궁중의 선택';const body='다니엘은 '+({verify:'장부의 출처를 확인하고, 추측을 사실처럼 말하지 않기로 했다.',discreet:'공식 절차를 존중하며 사적인 정보를 공석에 드러내지 않았다.',protect:'구휼 대상자의 신원을 보호하기로 했다.',confront:'책임을 분명히 묻되 무리한 단정의 위험을 감수했다.',mediate:'상충하는 이해관계 사이에서 조정안을 제안했다.',defer:'가문의 판단을 기다리며 즉각적인 선언을 유보했다.'}[mode]||'신중히 대응했다.');const root=v53Record(arc+'_'+state.day+'_'+mode,title+' · 선택',body,arc==='miguel'?'미겔':arc==='alex'?'알렉':'왕궁 인물');d.pending.push({id:root,arc,mode,stage:0,due:state.day+2});}







// v68: additive story sequences. Existing dialogue, choices and endings remain untouched.
const V68_STORIES = {
  "rose": {
    "location": "garden",
    "day": 2,
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "정원 안쪽으로 들어서자 연회장의 음악이 물소리에 묻혔다. 밤이슬을 머금은 노란 장미들이 석등 아래 고개를 숙이고 있었다. 나는 꽃잎에 손을 뻗다가 멈추었다. 남의 집 정원에서 꽃 한 송이조차 허락 없이 만져서는 안 된다는, 어릴 적 배운 예절이 문득 떠올랐다.",
        "thought": "괜히 이곳까지 찾아왔다는 말을 듣는다면, 무엇이라고 대답해야 할까."
      },
      {
        "speaker": "미겔 코트리먼",
        "text": "“장미를 좋아하니, 다니엘?”\n미겔은 나를 놀라게 하지 않으려는 듯 한 걸음 떨어진 곳에서 말을 건넸다. 밝은 빛 아래에서라면 그저 평범했을 질문이, 세 달이 비추는 정원에서는 이상하리만치 오래 귓가에 남았다.",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“예. 다만 꽃의 이름을 잘 알지는 못합니다.”\n나는 솔직하게 대답했다. 미겔은 웃음을 터뜨리는 대신, 가장 가까운 장미의 줄기를 가리켰다. “그렇구나. 이름을 외우지 않아도 괜찮단다. 아름답다고 느끼는 데 꼭 지식이 필요한 건 아니니까.”",
        "thought": "그녀는 어째서 이렇게 사소한 말에도 사람을 안심시키는 걸까."
      },
      {
        "speaker": "SYSTEM",
        "text": "두 사람은 잠시 같은 꽃을 바라보았다. 미겔은 먼저 걸음을 옮기며 정원사가 새벽마다 꽃잎을 살핀다는 이야기를 들려주었다. 나는 그녀의 보폭에 맞춰 천천히 걸었다. 그 짧은 산책에 어떤 약속도, 숨겨진 의미도 없었다. 그 사실을 알면서도 나는 이 밤의 향기를 오래 기억할 것 같았다.",
        "thought": "이 정도의 시간을 기쁘게 여기는 것조차 실례가 되지는 않겠지."
      }
    ]
  },
  "alex": {
    "location": "drawing",
    "day": 3,
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "응접실의 문이 반쯤 열려 있었다. 안에서는 봉인된 서신을 정리하는 소리와 낮은 대화가 들렸다. 알렉스는 탁자 위에 놓인 문서를 훑으며 시종에게 전달 순서를 설명하고 있었다. 누가 보아도 한가로운 연회객의 모습은 아니었다.",
        "thought": "형님은 이런 자리에서도 해야 할 일을 정확히 알고 계신다."
      },
      {
        "speaker": "알렉스 레온하르트",
        "text": "“다니엘, 들어와. 문 앞에서 그렇게 서 있으면 내가 무슨 큰 비밀이라도 꾸미는 줄 알겠어.”\n알렉스는 익숙한 미소로 나를 불렀다. 내가 머뭇거리자 그는 서신을 가지런히 모아 옆으로 치웠다. “오늘은 집안의 명예가 걸린 자리지. 그러니 사소한 말 하나도 가볍게 넘길 수가 없네.”",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“형님께서 늘 이런 일을 맡으시는군요.”\n알렉스는 고개를 기울였다. “맡는 게 아니라, 할 수 있으니까 하는 거야. 너도 언젠가 네가 잘할 수 있는 일을 찾겠지.” 그는 내 옷깃이 조금 비뚤어진 것을 보고 손끝으로 바로잡아 주었다. 그 행동은 오래전부터 변함이 없었다.",
        "thought": "형님 앞에서는 아직도 어릴 때의 내가 되는 것 같다."
      },
      {
        "speaker": "SYSTEM",
        "text": "복도에서 발소리가 들리자 알렉스는 문서를 접어 품에 넣었다. “가족끼리 하는 말이니 기억해 둬. 왕궁에서는 친절한 인사와 확실한 약속을 구별해야 해.” 나는 고개를 끄덕였다. 형의 조언은 명령보다 조용했지만, 그만큼 오래 마음에 남았다.",
        "thought": "형님이 지키려는 것이 무엇인지, 나도 언젠가 제대로 이해할 수 있을까."
      }
    ]
  },
  "court": {
    "location": "corridor",
    "day": 4,
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "회랑의 등불 아래에서 두 관리가 잠시 걸음을 멈췄다. 한 사람의 손에는 제국의 문장이 찍힌 문서가, 다른 사람의 손에는 아직 봉인되지 않은 답신이 들려 있었다. 그들은 나를 발견하자 자연스럽게 목소리를 낮췄다.",
        "thought": "우연히 들은 말을 기억하는 것과, 일부러 엿듣는 것은 분명 다르다."
      },
      {
        "speaker": "왕궁 서기관",
        "text": "“실례합니다, 레온하르트 경. 왕궁을 방문한 사절단의 동선이 변경되어 안내문을 다시 쓰고 있습니다.”\n서기관은 지나치게 상세한 설명을 피하면서도, 변경된 통로가 손님들의 이동에 영향을 줄 수 있다고 덧붙였다.",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“그렇다면 연회장 쪽에도 알려야 하지 않겠습니까?”\n나는 문서의 내용보다 길을 잃을 손님들을 먼저 떠올렸다. 서기관은 잠시 놀란 얼굴을 했다가 고개를 끄덕였다. “맞는 말씀입니다. 곧 시종장에게 전달하겠습니다.”",
        "thought": "나는 그저 당연한 일을 말했을 뿐인데, 왜 이렇게 긴장되는 걸까."
      },
      {
        "speaker": "SYSTEM",
        "text": "서기관들이 멀어지자 회랑에는 다시 발소리만 남았다. 사절단의 접견은 그날 밤 여러 대화에 등장했지만, 누구도 그 의미를 길게 설명하지 않았다. 나는 내가 알지 못하는 일이 왕궁의 닫힌 문 너머에서 조용히 움직이고 있음을 느꼈다.",
        "thought": "모르는 것을 함부로 단정하지 말자. 그렇다고 아무것도 보지 않은 척할 수는 없다."
      }
    ]
  },
  "promise": {
    "location": "terrace",
    "day": 5,
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "테라스의 난간 위로 세 개의 달빛이 각기 다른 그림자를 드리웠다. 연회장의 환한 소음은 닫힌 문 너머로 멀어졌고, 바람이 옷깃을 스쳤다. 나는 낮에 들었던 말들을 하나씩 되짚었다. 모두가 정중했고, 모두가 무언가를 감추고 있는 듯했다.",
        "thought": "내가 알고 있는 사람들의 모습은, 그들이 보여 준 일부일 뿐일지도 모른다."
      },
      {
        "speaker": "알렉스 레온하르트",
        "text": "“여기 있었구나.”\n알렉스는 손에 든 장갑을 가볍게 접었다. “미겔은 먼저 안으로 들어갔어. 추워지기 전에 너도 돌아와.” 형은 당연하다는 듯 약혼자의 안부를 전했고, 나는 그 자연스러움 앞에서 잠시 대답을 잊었다.",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“예, 형님. 곧 들어가겠습니다.”\n알렉스는 잠깐 나를 바라보더니 어깨를 가볍게 두드렸다. “오늘은 네가 생각이 많아 보이는군. 모든 걸 지금 결정할 필요는 없어.” 그 말은 추궁이 아니라 배려였다.",
        "thought": "형님은 내 마음을 어디까지 알고 계실까. 아니, 짐작조차 못 하실지도 모른다."
      },
      {
        "speaker": "SYSTEM",
        "text": "알렉스가 돌아간 뒤에도 나는 한동안 난간 곁에 남았다. 밤하늘의 세 달은 서로 닿지 않은 채 같은 정원을 비추고 있었다. 나는 내 감정을 이유로 누군가의 대답을 재촉하지 않기로 했다. 아직은 누군가를 해치지 않고, 스스로에게도 거짓말하지 않는 방법을 찾는 일이 먼저였다.",
        "thought": "조급해하지 말자. 내일도 같은 하늘 아래에서 생각할 시간은 있을 테니까."
      }
    ]
  }
};
for(const [key,entry] of Object.entries(V68_STORIES)){
 entry.scenes.forEach((scene,i)=>{NODES["v68_"+key+"_"+i]={...scene,chapter:"CHAPTER 01 · 왕궁의 밤",next:i+1<entry.scenes.length?"v68_"+key+"_"+(i+1):"explore"};});
}


const V69_STORIES = {
  "route": {
    "location": "corridor",
    "day": 5,
    "requires": "court",
    "title": "뒤바뀐 통행 허가",
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "왕궁의 회랑에는 새벽부터 문서가 오갔다. 어제까지 방문 사절단이 지나기로 했던 서쪽 회랑에는 왕실의 인장이 찍힌 새 안내문이 걸려 있었다. 변경 사유는 짧았다. ‘접견 준비를 위한 임시 조정.’ 그러나 서기관이 움켜쥔 두 번째 종이에는 인장도, 서명도 없었다.",
        "thought": "같은 일을 두 번 적을 필요가 있을까. 누군가 먼저 움직였다는 뜻일까."
      },
      {
        "speaker": "왕궁 서기관",
        "text": "“레온하르트 경, 소란을 피우려는 것은 아닙니다.” 서기관은 주변을 살핀 뒤 목소리를 낮추었다. “정식 지시는 동선을 바꾸라는 것이었습니다. 그런데 그보다 먼저 도착한 비공식 안내에는 경비 인원을 줄이라는 문구가 있었지요. 저희는 그 문서를 시행하지 않았습니다.”",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "나는 문서의 글씨체를 보았다. 누구의 필체인지 알아낼 만큼 익숙하지는 않았지만, 사절단이 지나갈 길을 비워 두라는 지시가 단순한 편의 문제만은 아닐 수 있다는 생각이 들었다. “그 안내문은 보관해 두셨습니까? 누구의 책임인지 알기 전에는 버리시면 안 됩니다.”",
        "thought": "나는 궁정의 일을 모른다. 그렇다고 아무도 다치지 않으리라 믿고 지나칠 수는 없다."
      },
      {
        "speaker": "SYSTEM",
        "text": "서기관은 작은 봉투를 두 손으로 감쌌다. 나는 봉투를 직접 받지 않았다. 그 문서는 담당 부서의 기록으로 남아야 했다. 나는 시종장에게 보고할 순서를 함께 정하고 회랑을 떠났다. 세 개의 달이 떠오르기 전까지, 서명 없는 지시는 여전히 아무의 것도 아니었다.",
        "thought": "누군가를 의심하기보다, 확인할 수 있는 사실부터 붙잡자."
      }
    ]
  },
  "alex": {
    "location": "drawing",
    "day": 6,
    "requires": "route",
    "title": "차남의 협상",
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "응접실 탁자에는 방문 사절단 명부와 왕궁 출입 기록이 나란히 놓여 있었다. 알렉스는 어느 쪽도 펼쳐 보이지 않은 채 차를 한 모금 마셨다. 그의 태연함은 무관심이 아니라, 상대가 먼저 조급해지도록 기다리는 사람의 여유에 가까웠다.",
        "thought": "형님은 이미 이 문제를 알고 계셨구나."
      },
      {
        "speaker": "알렉스 레온하르트",
        "text": "“들어와, 다니엘. 얼굴이 꼭 내가 네 몫의 디저트까지 먹어 버린 것 같군.” 알렉스는 웃으며 맞은편 의자를 가리켰다. “걱정 마. 명부는 손대지 않았어. 그건 담당자의 일이니까. 다만 서로 다른 부서가 서로의 이름을 빌려 지시하는 일은 막아야지.”",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“서명 없는 안내문이 있었습니다.” 내가 설명을 마치자 알렉스는 즉시 누군가를 범인으로 지목하지 않았다. 대신 사절단의 공식 접견 시간을 묻고, 통행 허가를 발급한 부서와 경비를 배치한 부서의 기록을 따로 확인하자고 했다.",
        "thought": "나는 정답을 들으러 왔는데, 형님은 질문을 더 많이 주신다."
      },
      {
        "speaker": "알렉스 레온하르트",
        "text": "“우리 가문의 이름을 걸고 누군가를 몰아세우는 건 쉽지. 하지만 틀리면 되돌리기 어려워.” 알렉스는 부드럽게 웃었다. “네가 그 문서를 직접 가져오지 않은 건 잘한 일이야. 공식 기록이 사라지면 진실보다 소문이 빨리 자라거든.”",
        "thought": ""
      },
      {
        "speaker": "SYSTEM",
        "text": "형은 내 어깨에 손을 얹고 문 앞까지 배웅했다. 그는 자신이 맡을 일과 내가 더는 짊어지지 않아도 될 일을 명확히 나누었다. 나는 형의 친근한 농담 뒤에 가문과 사람을 함께 지키려는 책임이 있음을 새삼 느꼈다.",
        "thought": "형님이 나를 믿어 주셨다. 그러니 나도 섣불리 굴지 말자."
      }
    ]
  },
  "miguel": {
    "location": "garden",
    "day": 7,
    "requires": "alex",
    "title": "장미 사이의 침묵",
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "정원에는 저녁 이슬이 내려앉았다. 왕궁의 보랏빛 장미와 달리 코트리먼 후작가의 정원은 노란 장미로 유명했다. 나는 그 차이를 떠올리며 산책로를 걸었다. 꽃잎 위의 물방울이 달빛을 받아 작은 유리 조각처럼 빛났다.",
        "thought": "코트리먼은 이런 풍경을 어떻게 바라보실까."
      },
      {
        "speaker": "미겔 코트리먼",
        "text": "“다니엘, 이리 오렴.” 미겔은 손에 들고 있던 작은 책을 덮었다. “방문 사절들 때문에 궁 안이 분주하다고 들었단다. 너까지 너무 많은 걱정을 떠안은 건 아니니?” 그녀의 목소리는 부드러웠고, 대답을 재촉하지 않았다.",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "“저는 그저 우연히 문서에 관한 이야기를 들었을 뿐입니다.” 내가 조심스럽게 말하자 미겔은 고개를 끄덕였다. 그녀는 더 캐묻지 않았다. 대신 공식적인 일이면 담당자에게 맡기는 편이 좋겠다고, 그리고 알렉스 역시 필요한 절차를 잘 알고 있을 거라고 덧붙였다.",
        "thought": "형님의 이름이 자연스럽게 나오는 게 당연한데, 왜 나는 잠깐 말을 잃는 걸까."
      },
      {
        "speaker": "미겔 코트리먼",
        "text": "“알렉은 늘 그런 일을 잘 처리하지. 지나치게 무거운 표정을 짓지 않으면서도 필요한 말을 놓치지 않거든.” 그녀는 약혼자의 이야기를 편안하게 했다. “너도 네가 본 것과 짐작한 것을 구별하려 애썼구나. 그건 쉬운 일이 아니란다.”",
        "thought": ""
      },
      {
        "speaker": "SYSTEM",
        "text": "미겔은 내게 정원 끝의 밝은 길을 알려 주었다. 가까이 다가서라고 했지만, 그 말은 어떤 약속도 아니었다. 나는 그녀의 친절을 있는 그대로 받아들이려 애썼다. 마음은 그보다 느리게 따라왔지만, 적어도 그녀가 지키는 관계를 가볍게 여기지는 않기로 했다.",
        "thought": "따뜻하게 대해 주시는 것만으로도 충분해야 한다. 지금은 그게 옳다."
      }
    ]
  },
  "council": {
    "location": "hall",
    "day": 8,
    "requires": "miguel",
    "title": "접견 전야의 결정",
    "scenes": [
      {
        "speaker": "SYSTEM",
        "text": "연회장에는 평소보다 일찍 촛불이 켜졌다. 방문 사절단의 공식 접견을 앞두고 왕궁은 경비 배치와 안내 절차를 다시 점검했다. 누구도 서명 없는 문서를 공개적으로 언급하지 않았지만, 서쪽 회랑의 출입 기록은 전날보다 두 배나 꼼꼼하게 작성되고 있었다.",
        "thought": "침묵이 꼭 은폐를 뜻하는 건 아니겠지. 확인할 시간이 필요할 수도 있다."
      },
      {
        "speaker": "알렉스 레온하르트",
        "text": "“공식 안내는 예정대로 나갈 거야.” 알렉스가 낮은 목소리로 말했다. “담당 부서가 서로의 기록을 대조했고, 사절단에도 같은 내용을 전달했지. 다만 그 비공식 문서가 어디서 시작됐는지는 아직 모른다.” 나는 모른다는 사실을 감추지 않았다.",
        "thought": ""
      },
      {
        "speaker": "미겔 코트리먼",
        "text": "미겔은 다른 귀족들이 지켜보는 자리에서 예를 갖추어 말했다. “레온하르트 경, 코트리먼 후작가 역시 사절단의 안전한 접견을 바랍니다. 필요한 협조는 정식 절차를 통해 제공하겠습니다.” 그녀의 말은 절제되어 있었고, 사적인 친밀함은 조금도 드러나지 않았다.",
        "thought": ""
      },
      {
        "speaker": "다니엘 레온하르트",
        "text": "나는 두 사람을 바라보았다. 형과 미겔은 서로의 말을 굳이 보충하지 않아도 뜻을 알아듣는 듯했다. 나는 내가 두 사람 사이에 끼어들 자리가 아니라, 맡은 책임을 성실히 지킬 자리에 서 있다는 것을 깨달았다. “저도 안내가 필요한 손님이 없는지 살펴보겠습니다.”",
        "thought": "내 마음이 어떤 모양이든, 해야 할 일까지 달라지는 것은 아니다."
      },
      {
        "speaker": "SYSTEM",
        "text": "접견은 예정된 시각에 시작되었다. 서명 없는 안내문의 발신자는 끝내 밝혀지지 않았다. 하지만 공식 기록은 보존되었고, 그날의 경비는 어느 한 사람의 추측에 기대지 않았다. 나는 사건이 완전히 끝나지 않았다는 것을 알면서도, 오늘 지킬 수 있는 질서는 지켜졌다고 생각했다.",
        "thought": "진실을 서둘러 완성하지 말자. 다음 단서가 나타나면 그때 다시 생각하면 된다."
      }
    ]
  }
};
for(const [key,entry] of Object.entries(V69_STORIES)){
 entry.scenes.forEach((scene,i)=>{NODES['v69_'+key+'_'+i]={...scene,chapter:'CHAPTER 01 · 방문 사절단',next:i+1<entry.scenes.length?'v69_'+key+'_'+(i+1):'explore'};});
}


const v68OriginalRender=render;
render=function(){
 v68OriginalRender();
 const node=NODES[state.node];
 const line=document.getElementById("line");
 if(!node||!line||!node.thought||state.node==="explore")return;
 // v67RenderNarrative already displays thought at opacity .7.
};
function moveTo(loc){return story155Move(loc);}



// v56: player-facing navigation. Original actions remain registered by v56CollectExplore.
let v56Entries=[];
let v56View={section:'main',page:0};

function v56Go(section,page){v56View={section,page:page||0};if(state.node==='explore')render();}
function v56Item(label,action,desc){const b=document.createElement('button');b.textContent=label;b.onclick=action;if(desc)b.title=desc;$('choices').append(b);return b;}


// v57: progression-aware discovery, with legacy actions retained in the archive.





// v58: UI-only discovery metadata; stored in its own namespace for old-save compatibility.







function renderExplore(){return story155Explore();}

// v82: expose scene context to the separate audio controller without changing save data.
function v82SceneMusic(node){
 document.dispatchEvent(new CustomEvent('delharsha:scene',{detail:{id:state.node,chapter:node?.chapter||'',speaker:node?.speaker||'',text:(node?.text||'').slice(0,220),explore:!!node?.explore}}));
}

// v111 — independent royal letter scene; state.node remains cinematic_moons until normal Next.
const v111Letter={phase:-1,token:0,timer:null,timers:[],locked:false,globalTap:null};
function v111LetterClear(){
 if(v111Letter.globalTap){document.removeEventListener('pointerup',v111Letter.globalTap,true);document.removeEventListener('click',v111Letter.globalTap,true);v111Letter.globalTap=null;}
 v111Letter.token++;clearTimeout(v111Letter.timer);v111Letter.timer=null;
 (v111Letter.timers||[]).forEach(clearTimeout);v111Letter.timers=[];
 const old=document.getElementById('v111LetterOverlay');if(old)old.remove();
 document.body.classList.remove('v111-letter-active','v111-letter-thought');
}
function v111LetterRenderGate(){
 if(state.node!=='cinematic_moons'){v111LetterClear();v111Letter.phase=-1;return;}
 if(v111Letter.phase<0){v111Letter.phase=0;v111LetterMount();}
 else if(!document.getElementById('v111LetterOverlay'))v111LetterMount();
}
function v111LetterAdvanceGate(){
 if(state.node!=='cinematic_moons')return false;
 if(v111Letter.phase<4)return true;
 v111LetterClear();v111Letter.phase=-1;return false;
}
function v111LetterMount(){
 v111LetterClear();
 const token=v111Letter.token;
 v111Letter.locked=false;
 const root=document.createElement('section');
 root.id='v111LetterOverlay';root.className='v111-letter-overlay';
 root.setAttribute('aria-label','아셀 왕실 초대장');
 root.innerHTML=`<div class="v111-letter-vignette"></div><div class="v111-letter-desk"></div>
 <div class="v111-letter-envelope" aria-hidden="true"><div class="v111-letter-flap"></div><div class="v111-letter-monogram">ASEL · ROYAL COURT</div><div class="v111-letter-wax"><img src="assets/ui/asel-wax.png" alt=""></div></div>
 <article class="v111-letter-paper" aria-label="아셀 왕국 왕실 초청 서한"><div class="v111-letter-ornament"><img src="assets/ui/asel-crest.png" alt="아셀 왕실 문장"></div><div class="v111-letter-label">THE ROYAL COURT OF ASEL</div><div class="v111-letter-rule"></div><div class="v149-letter-scroll" tabindex="0" role="region" aria-label="초청 서한 전문"></div><button type="button" class="v149-letter-finish">서한을 접는다</button></article>
 <div class="v111-letter-narration" aria-live="polite"></div>`;
 const letter=root.querySelector('.v149-letter-scroll');for(const [i,text] of NODES.invitation.text.split('\n\n').entries()){const part=document.createElement(i===0?'h2':'p');part.textContent=text;part.style.whiteSpace='pre-line';letter.append(part);}
 const screen=document.getElementById('game')||document.querySelector('main')||document.body;
 screen.append(root);document.body.classList.add('v111-letter-active');
 const narration=root.querySelector('.v111-letter-narration');
 const valid=()=>token===v111Letter.token&&state.node==='cinematic_moons'&&root.isConnected;
 const schedule=(ms,fn)=>{const id=setTimeout(()=>{if(valid())fn();},ms);v111Letter.timers.push(id);};
 const phase=(n,message)=>{if(!valid())return;v111Letter.phase=n;root.dataset.phase=String(n);narration.textContent=message;};
 phase(0,'');
 schedule(850,()=>phase(1,'아셀 왕국에서 편지가 도착했다.'));
 schedule(1900,()=>phase(2,'보랏빛 봉랍 아래, 일곱 날의 초대가 기다리고 있었다.'));
 schedule(3600,()=>phase(3,''));
 schedule(7600,()=>{phase(4,'');});
 const finish=root.querySelector('.v149-letter-finish');
 finish.addEventListener('pointerup',e=>e.stopPropagation());
 finish.addEventListener('click',e=>{
  e.preventDefault();e.stopPropagation();
  if(!valid()||v111Letter.locked||v111Letter.phase<3)return;
  const next=NODES[state.node]?.next;if(!next)return;
  v111Letter.locked=true;state.history.push(state.node);state.node=next;
  v111LetterClear();v111Letter.phase=-1;render();
 });
}

function renderStage(node){
 const area=$('stagePortraits'),cap=$('stageCaption');
 if(!area||!cap)return;
 area.replaceChildren();
 if(state.node!=='cinematic_moons')area.classList.remove('v110-letter-stage');
 const id=state.node;
 cap.textContent=id==='explore'?'왕궁 · 행방을 찾아서':
 /miguel|found_|explore_found|explore_finish|wine_/.test(id)||node.speaker==='미겔 코트리먼'
 ?'노란 장미와 보랏빛 밤':
 /daniel|ball_/.test(id)||node.speaker==='다니엘 레온하르트'
 ?'레온하르트 백작가 · 막내아들':'세 개의 달이 떠오르는 밤';
}

// v67: optional, explicitly authored Daniel inner monologue. 70% opacity applies only to thoughts.
function v67RenderNarrative(node){
 const target=$('line');target.replaceChildren();
 const prose=document.createElement('span');prose.className='v67-prose';prose.textContent=node.text||'';target.append(prose);
 if(node.thought){const thought=document.createElement('span');thought.className='v67-inner-thought';thought.textContent='('+node.thought+')';target.append(thought);}
}

function render(){const storyDay=NODES[state.node]?.day;if(Number.isInteger(storyDay)&&storyDay>0)state.day=storyDay;v111LetterRenderGate();if(v49Finished()){v49RenderCompleted();return;}const node=NODES[state.node]||NODES.intro;v82SceneMusic(node);renderStage(node);$('speaker').textContent=node.speaker;v67RenderNarrative(node);$('day').textContent='DAY '+state.day;$('chapter').textContent=node.chapter||'PROLOGUE';$('choices').replaceChildren();$('nextBtn').classList.toggle('hidden',!!node.choices);if(node.explore){renderExplore();return;}(node.choices||[]).forEach(choice=>{const b=document.createElement('button');b.textContent='✧ '+choice.text;b.onclick=()=>{if(choice.action==='home'){show('home');return;}if(choice.action==='restartExplore'){resetNight();state.node='explore';render();return;}if(choice.action==='nextDay'){nextDay();return;}if(choice.reset)state=fresh();else{state.history.push(state.node);for(const [k,v] of Object.entries(choice.effects||{}))if(k in state.stats)state.stats[k]=Math.max(0,Math.min(100,state.stats[k]+v));}if(choice.v16Quest){if(choice.v17Ending)v17QuestEnding(choice.v16Quest,choice.v17Ending==='help'?'finish_help':'finish_quiet');const q=v16Data().quests[choice.v16Quest];if(q){if(choice.v16Mode==='advance'){q.step=Math.min(2,q.step+1);q.choice='accept';}else if(choice.v16Mode==='decline'){q.choice='decline';}else if(choice.v16Mode==='finish'){q.done=true;v16Data().memories.push({id:'quest_'+choice.v16Quest,title:V16_QUESTS.find(x=>x.id===choice.v16Quest)?.title||'왕궁 사건',text:'왕궁의 작은 의뢰를 해결했다.',day:state.day});}}}if(choice.v38Miguel||choice.v38Alex||choice.v38Npc)v38Choice(choice);v39Choice(choice);v40Choice(choice);v41Choose(choice);v42Choice(choice);v43Choice(choice);v44Choice(choice);v45Choice(choice);v46Choice(choice);v47Choice(choice);v51Choice(choice);v52Choice(choice);v53Choice(choice);v55Choice(choice);if(choice.v37Miguel||choice.v37Alex||choice.v37Npc)v37Choice(choice);if(choice.v36Miguel||choice.v36Alex||choice.v36Npc)v36Choice(choice);if(choice.v35Miguel||choice.v35Alex||choice.v35Npc)v35Choice(choice);if(choice.v34Miguel||choice.v34Alex||choice.v34Npc)v34Choice(choice);if(choice.v33Miguel||choice.v33Alex||choice.v33Npc)v33Choice(choice);if(choice.v32Miguel||choice.v32Alex||choice.v32Npc)v32Choice(choice);if(choice.v31Miguel||choice.v31Alex||choice.v31Npc)v31Choice(choice);if(choice.v30Miguel||choice.v30Alex||choice.v30Npc)v30Choice(choice);if(choice.v28Feeling||choice.v28Alex||choice.v28Npc)v28OnChoice(choice);if(choice.v29Miguel||choice.v29Alex||choice.v29Npc)v29OnChoice(choice);if(choice.v25Secret||choice.v25Bond||choice.v25Alex){v25Outcome(choice);v26Outcome(choice);v27OnChoice(choice);}if(choice.v26Secret){const q=v26Data().secret[choice.v26Secret];if(q)q.response=choice.v26Mode;}if(choice.v27Alex){v26Data().alex.trust=Math.max(-10,Math.min(10,v26Data().alex.trust+(choice.v27Alex==='repair'?2:-1)));}if(choice.v26Alex){v26Data().alex.trust=Math.max(-10,Math.min(10,v26Data().alex.trust+(choice.v26Alex==='apologize'?1:0)));}if(choice.v24Choice)v24Choice(choice.v24Choice,choice.v24Mode);if(choice.v23EmotionChoice){const d=v23Data();d.emotionChoices[choice.v23EmotionChoice]={day:state.day,mode:choice.v23Emotion};v23Remember('emotion_'+choice.v23EmotionChoice,'다니엘의 선택 · DAY '+state.day,NODES.explore_v18_event?.text||'다니엘은 자신의 마음을 돌아보았다.');}if(choice.v23Alex){v23Data().lastAlexChoice=choice.v23Alex;}if(choice.v22Rumor){const d=v22Data();d.rumorResponses[choice.v22Rumor]={day:state.day,mode:choice.v22RumorMode};const change=choice.v22RumorMode==='correct'?-2:choice.v22RumorMode==='protect'?-1:0;v20Data().rumorImpact=Math.max(-20,Math.min(20,v20Data().rumorImpact+change));v22Record('rumor_'+choice.v22Rumor,'소문에 대한 다니엘의 대응',NODES.explore_v18_event?.text||'소문을 조심스럽게 다루었다.','기타');}if(choice.v22Npc){v22Data().npcDeep[choice.v22Npc].choice=choice.v22NpcMode;const npc=v19Data().npc[choice.v22Npc];if(npc&&choice.v22NpcMode==='warm')npc.rapport=Math.min(10,(npc.rapport||0)+1);}if(choice.v22Alex){v22Data().lastAlexResponse=choice.v22Alex;if(choice.v22Alex==='hesitate')socialProgress().alexTension=Math.min(100,socialProgress().alexTension+1);}if(choice.v22Choice){v22Data().lastPromiseResponse=choice.v22Choice;}if(choice.v21Echo){v21Data().lastEchoChoice=choice.v21Echo;}if(choice.v20Errand){const q=v20Data().errands[choice.v20Errand];if(q){q.status=choice.v20ErrandMode;const def=V20_ERRANDS[choice.v20Errand];v20Record('errand_'+choice.v20Errand,def.title,choice.v20ErrandMode==='help'?def.good:'다니엘은 정중히 사양하고 자신의 일을 계속했다.','의뢰');if(choice.v20ErrandMode==='help'){const npc=v19Data().npc[choice.v20Errand];if(npc)npc.rapport=Math.min(10,npc.rapport+1);}}}if(choice.v20Renew){v20Data().promiseRenewals++;v18Data().promise={day:state.day+1,loc:'terrace',turn:3,status:'accepted'};v19Data().promiseAfter=null;v20Record('renew_'+state.day,'다시 청한 약속','다니엘은 다음 날 테라스에서 인사할 기회를 다시 청했다.','관계');}if(choice.v20Alex){const d=v20Data();d.lastAlexChoice=choice.v20Alex;if(choice.v20Alex==='confess')socialProgress().alexTension=Math.min(100,socialProgress().alexTension+1);v20Record('alex_'+state.day+'_'+exploration().turn,'형 앞에서의 대답',NODES.explore_v18_event?.text||'형과의 짧은 대화를 떠올렸다.','관계');}if(choice.v18Emotion)v18Data().emotion=Math.max(-10,Math.min(10,v18Data().emotion+choice.v18Emotion));if(choice.v19Feeling)v19Data().feelings=Math.max(-10,Math.min(10,v19Data().feelings+choice.v19Feeling));if(choice.v19Npc){const npc=v19Data().npc[choice.v19Npc];if(npc){npc.rapport=Math.min(10,(npc.rapport||0)+(choice.v19Rapport||0));if(npc.rapport===2)v19Record('npc_'+choice.v19Npc,'왕궁의 인연 · '+V19_NPC_PROFILES[choice.v19Npc].name,V19_NPC_PROFILES[choice.v19Npc].warm,'관계');}}if(choice.v19Rumor){const r=v19Data().rumors.find(x=>x.id===choice.v19Rumor&&x.day===state.day);if(r)r.verified=true;}if(choice.v18Promise){v18Data().promise=choice.v18Promise==='accept'?{day:state.day+1,loc:'terrace',turn:3,status:'accepted'}:{day:state.day+1,status:'declined'};}if(choice.v18Serial!==undefined){const x=v18Data().serial[choice.v18Serial];if(x){if(choice.v18Mode==='advance'){if(x.stage===0)x.startDay=state.day;x.stage=Math.min(2,x.stage+1);}else if(choice.v18Mode.startsWith('finish')){x.done=true;const q=V18_SERIAL[choice.v18Serial];v18Remember('v18_serial_'+choice.v18Serial,q.title+' · 해결',q.end,'의뢰');}}}if(choice.questStep){const q=questProgress();q.step=Math.max(q.step,choice.questStep);if(q.step>=3){q.done=true;recordGallery('quest_done_v15');}}if(choice.ambientReply){NODES.explore_ambient_reply={speaker:"다니엘 레온하르트",text:choice.ambientReply,chapter:'CHAPTER 01',next:'explore'};}state.node=choice.v17Ending?'explore_v17_ending':choice.next;render();};$('choices').append(b);});}
function fresh(){return{node:'cinematic_moons',day:1,social:{miguelMeetings:0,alexTension:0},stats:{affection:0,trust:0,resolve:0,reputation:50,risk:0},history:[],exploration:{turn:0,clues:[],visited:[],found:false,sceneCounts:{}}};}
function save(){try{v41SafeBackup();localStorage.setItem(SAVE_KEY,JSON.stringify({...state,story155Snapshot:state.node==='story155_meeting'?NODES[state.node]:null,ambientSnapshot:['explore_ambient','explore_ambient_reply','explore_special_v14','explore_repeat_v14','explore_clue_v14','explore_quest_v15','explore_v16_quest','explore_v16_bond','explore_v16_alex','explore_v17_bond','explore_v17_thought','explore_v17_ending','explore_v18_event'].includes(state.node)?{scene:NODES.explore_ambient,reply:NODES.explore_ambient_reply,special:NODES.explore_special_v14,repeat:NODES.explore_repeat_v14,clue:NODES.explore_clue_v14,quest:NODES.explore_quest_v15,v16quest:NODES.explore_v16_quest,v16bond:NODES.explore_v16_bond,v16alex:NODES.explore_v16_alex,v17bond:NODES.explore_v17_bond,v17thought:NODES.explore_v17_thought,v17ending:NODES.explore_v17_ending,v18event:NODES.explore_v18_event}:null}));modal('저장 완료','현재 진행 상황을 이 브라우저에 저장했습니다.');}catch{modal('저장 실패','브라우저 저장 공간을 사용할 수 없습니다.');}}
function load(){try{const raw=localStorage.getItem(SAVE_KEY);if(!raw){modal('불러오기','저장된 진행 상황이 없습니다.');return;}const data=JSON.parse(raw);if(!data||(!['explore_ambient','explore_ambient_reply','explore_special_v14','explore_repeat_v14','explore_clue_v14','explore_quest_v15','explore_v16_quest','explore_v16_bond','explore_v16_alex','explore_v17_bond','explore_v17_thought','explore_v17_ending','explore_v18_event'].includes(data.node)&&!NODES[data.node])||!data.stats||typeof data.stats!=='object'||Array.isArray(data.stats)||!Array.isArray(data.history)||!Number.isInteger(data.day)||data.day<1)throw Error('invalid');if(['explore_ambient','explore_ambient_reply','explore_special_v14','explore_repeat_v14','explore_clue_v14','explore_quest_v15','explore_v16_quest','explore_v16_bond','explore_v16_alex','explore_v17_bond','explore_v17_thought','explore_v17_ending','explore_v18_event'].includes(data.node)){const snap=data.ambientSnapshot||{};if(data.node==='explore_ambient'&&!snap.scene)throw Error('missing ambient');if(snap.scene)NODES.explore_ambient=snap.scene;if(snap.reply)NODES.explore_ambient_reply=snap.reply;if(snap.special)NODES.explore_special_v14=snap.special;if(snap.repeat)NODES.explore_repeat_v14=snap.repeat;if(snap.clue)NODES.explore_clue_v14=snap.clue;if(snap.quest)NODES.explore_quest_v15=snap.quest;if(snap.v16quest)NODES.explore_v16_quest=snap.v16quest;if(snap.v16bond)NODES.explore_v16_bond=snap.v16bond;if(snap.v16alex)NODES.explore_v16_alex=snap.v16alex;if(snap.v17bond)NODES.explore_v17_bond=snap.v17bond;if(snap.v17thought)NODES.explore_v17_thought=snap.v17thought;if(snap.v17ending)NODES.explore_v17_ending=snap.v17ending;if(snap.v18event)NODES.explore_v18_event=snap.v18event;if(!NODES[data.node])throw Error('missing event');}if(data.node==='story155_meeting'&&data.story155Snapshot&&typeof data.story155Snapshot.text==='string'){NODES.story155_meeting={...data.story155Snapshot,next:'explore'};}state={...fresh(),...data,social:{miguelMeetings:0,alexTension:0,...(data.social||{})},stats:{...fresh().stats,...data.stats},exploration:{...fresh().exploration,...(data.exploration||{})}};show('game');render();closeModal();}catch{modal('불러오기 실패','저장 데이터가 올바르지 않습니다.');}}
function modal(title,content){$('modalTitle').textContent=title;$('modalContent').replaceChildren();if(typeof content==='string'){$('modalContent').textContent=content;}else $('modalContent').append(content);$('modal').classList.remove('hidden');}
function closeModal(){$('modal').classList.add('hidden');}
function status(){const wrap=document.createElement('div');const labels={affection:'미겔 호감도',trust:'미겔 신뢰도',resolve:'다니엘의 결심',reputation:'가문 평판',risk:'발각 위험'};for(const [k,label] of Object.entries(labels)){const r=document.createElement('div');r.className='stat';const a=document.createElement('span'),b=document.createElement('strong');a.textContent=label;b.textContent=state.stats[k]+' / 100';r.append(a,b);wrap.append(r);}const p=document.createElement('p');p.className='hint';p.textContent='선택에 따라 관계와 평판이 달라집니다.';wrap.append(p);const s=socialProgress();const extra=document.createElement('p');extra.className='hint';extra.textContent='미겔 누적 조우 '+s.miguelMeetings+'회 · 알렉 관계 긴장도 '+s.alexTension+' / 100';wrap.append(extra);const v19=document.createElement('p');v19.className='hint';v19.textContent='왕궁에서 들은 소문 '+v19Data().rumors.length+'건 · 다니엘의 감정 변화 '+v19Data().feelings;wrap.append(v19);modal('관계 상태',wrap);}
function journal(){const wrap=document.createElement('div');const p=document.createElement('p');p.className='hint';p.textContent='지금까지 지나온 장면 ('+state.history.length+'개)';wrap.append(p);const entries=[...state.history.slice(-20),state.node];entries.forEach((id,i)=>{const n=NODES[id];if(!n)return;const el=document.createElement('div');el.className='journal-entry';const head=document.createElement('strong');head.textContent=(i+1)+'. '+n.speaker;const body=document.createElement('p');body.textContent=n.text;el.append(head,body);wrap.append(el)});modal('이야기 기록',wrap);}
function characters(){
 const wrap=document.createElement('div');
 const entries=[{"name": "다니엘 레온하르트", "summary": "25세 · 189cm · 레온하르트 백작가의 막내아들", "details": ["옅은 금발과 단정한 옷차림의 청년. 성실하고 고지식하며, 타인의 평가를 마음에 오래 담아 둔다.", "알렉스의 동생. 형님의 약혼녀인 코트리먼을 삼 년 동안 사랑하며 그 마음을 숨겨 왔다."]}, {"name": "미겔 코트리먼", "summary": "32세 · 153cm · 코트리먼 후작가의 외동딸", "details": ["풍요로운 영지와 노란 장미 화원으로 이름난 코트리먼가의 영애. 우아한 태도와 실용적인 판단을 함께 지녔다.", "알렉스 레온하르트의 약혼녀. 공식 석상에서는 격식을 갖추며, 사적인 자리에서는 한층 편안한 모습을 보인다.", "얼굴보다 옷차림과 체격, 걸음걸이로 사람을 구별하곤 한다."]}, {"name": "알렉스 레온하르트", "summary": "레온하르트 백작가의 차남 · 미겔의 약혼자", "details": ["귀족 사회의 처세에 능하며 여유로운 태도를 지녔다. 가문의 명예와 이익을 중시한다.", "다니엘의 형. 미겔에게는 알렉이라는 이름으로 불린다."]}];
 for(const entry of entries){const card=document.createElement('div');card.className='journal-entry';const h=document.createElement('strong');h.textContent=entry.name;card.append(h);for(const text of [entry.summary,...entry.details]){const p=document.createElement('p');p.textContent=text;card.append(p);}wrap.append(card);}modal('인물 도감',wrap);
}
function gallery(){
 const wrap=document.createElement('div');
 const intro=document.createElement('p');intro.className='hint';intro.textContent='해금된 회상을 선택하면 상세 내용을 볼 수 있습니다.';wrap.append(intro);
 const filter=document.createElement('select');for(const category of ['전체','의뢰','관계','기타']){const opt=document.createElement('option');opt.value=category;opt.textContent='회상 분류 · '+category;filter.append(opt)}wrap.append(filter);const memoryWrap=document.createElement('div');wrap.append(memoryWrap);filter.onchange=()=>{for(const b of memoryWrap.querySelectorAll('button'))b.hidden=filter.value!=='전체'&&b.dataset.category!==filter.value};
 const entries=[['왕실 초대장','intro'],['세 개의 달','ball_arrival'],['연회장에서의 조우','ball_miguel'],['장미 온실에서의 만남','explore_found'],['쏟아진 와인','wine_accident'],['형과 약혼녀','alex_miguel'],['사라진 악보 해결','quest_done_v15']];
 entries.forEach(([label,id])=>{
  const unlocked=state.history.includes(id)||state.node===id||(state.unlockedV15||[]).includes(id);
  const b=document.createElement('button');b.textContent=(unlocked?'✦ ':'🔒 ')+label;
  b.disabled=!unlocked;b.onclick=()=>modal('회상 · '+label,(NODES[id]?.text||'왕궁에서 있었던 일을 떠올립니다.')+'\n\n다시 돌아가려면 회상 갤러리를 열어주세요.');wrap.append(b);
 });
 for(const memory of (v16Data().memories||[])){
  const b=document.createElement('button');b.textContent='✦ DAY '+memory.day+' · '+memory.title;
  b.dataset.category=memory.category|| (memory.id?.startsWith('quest_')?'의뢰':memory.id?.startsWith('bond_')?'관계':'기타');b.onclick=()=>modal('회상 · '+memory.title,memory.text);memoryWrap.append(b);
 }
 modal('회상 갤러리',wrap);
}
function settings(){const wrap=document.createElement('div');const p=document.createElement('p');p.className='hint';p.textContent='DELHARSA : 보라색의 밤\n게임은 브라우저의 로컬 저장소에 진행 상황을 보관합니다.';wrap.append(p);const btn=document.createElement('button');btn.textContent='저장 데이터 초기화';btn.dataset.royalDanger='true';btn.onclick=()=>{if(confirm('저장 데이터를 삭제할까요?')){localStorage.removeItem(SAVE_KEY);modal('초기화 완료','저장 데이터가 삭제되었습니다.');}};wrap.append(btn);modal('설정',wrap);}
// v11: 게임 내 설정 자료실 — Markdown 원본을 그대로 열람하고 개별 파일로 이동할 수 있습니다.
$('newBtn').onclick=()=>{if(v80Transitioning)return;state=fresh();show('game');render();};$('continueBtn').onclick=()=>{if(!v80Transitioning)load();};$('loadHomeBtn').onclick=()=>{if(!v80Transitioning)load();};$('loadBtn').onclick=load;$('saveBtn').onclick=save;$('statusBtn').onclick=status;$('journalBtn').onclick=journal;$('charactersBtn').onclick=characters;$('charactersHomeBtn').onclick=characters;$('galleryBtn').onclick=gallery;$('settingsBtn').onclick=settings;$('titleBtn').onclick=()=>show('home');$('nextBtn').onclick=()=>{if(v111LetterAdvanceGate())return;const next=NODES[state.node]?.next;if(next){state.history.push(state.node);state.node=next;render();}};$('closeModal').onclick=closeModal;$('modal').onclick=e=>{if(e.target===$('modal'))closeModal();};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});




// v59: presentation-only navigation; existing nodes, choices, saves and endings stay intact.
(function(){
 const move=document.getElementById('moveBtn'),settingsButton=document.getElementById('gameSettingsBtn');
 move.addEventListener('click',()=>{if(state.node==='explore'){v56Go('places',0);}else{modal('이동 안내','현재 대화를 마친 뒤 장소를 선택할 수 있습니다.');}});
 settingsButton.addEventListener('click',()=>{
  const wrap=document.createElement('div');wrap.className='modal-actions';
  [['저장',save],['불러오기',load],['인물 도감',characters],['회상·엔딩 도감',gallery],['세부 설정',settings],['타이틀로',()=>{closeModal();show('home');}]].forEach(([name,fn])=>{const b=document.createElement('button');b.textContent=name;b.onclick=()=>{closeModal();fn();};wrap.append(b);});
  modal('설정',wrap);
 });
 const journalButton=document.getElementById('journalBtn');
 journalButton.onclick=()=>{
  const wrap=document.createElement('div');wrap.className='modal-actions';
  [['이야기 기록',journal],['인물 도감',characters],['회상·엔딩 도감',gallery]].forEach(([name,fn])=>{const b=document.createElement('button');b.textContent=name;b.onclick=()=>{closeModal();fn();};wrap.append(b);});
  modal('기록',wrap);
 };
 let page=0,updating=false;
 const choices=document.getElementById('choices'),pager=document.getElementById('choicePager');
 function paginate(reset){if(updating)return;updating=true;
  if(reset)page=0;
  const buttons=Array.from(choices.children).filter(e=>e.tagName==='BUTTON');
  const pages=Math.max(1,Math.ceil(buttons.length/3));page=Math.max(0,Math.min(page,pages-1));
  buttons.forEach((b,i)=>{b.hidden=!(i>=page*3&&i<(page+1)*3);});
  pager.replaceChildren();pager.classList.toggle('hidden',pages===1);
  if(pages>1){
   const prev=document.createElement('button');prev.textContent='‹ 이전';prev.disabled=page===0;prev.onclick=()=>{page--;paginate(false);};pager.append(prev);
   const label=document.createElement('span');label.textContent=(page+1)+' / '+pages;pager.append(label);
   const next=document.createElement('button');next.textContent='다음 ›';next.disabled=page===pages-1;next.onclick=()=>{page++;paginate(false);};pager.append(next);
  }
  updating=false;
 }
 const observer=new MutationObserver(mutations=>{if(mutations.some(m=>m.type==='childList'))paginate(true);});
 observer.observe(choices,{childList:true});paginate(true);
 // v61: bundled backgrounds, mapped by actual location and scene context.
 const bg=document.getElementById('stage');
 const originalStage=renderStage;
 const BG_FILES=new Set(['terrace','rose_garden','grand_hall','leonhardt_manor','ballroom_balcony','royal_bedroom','library','lion_study','council','ballroom','greenhouse','corridor','tea_salon','palace','garden','manor']);
 function sceneBackground(node){
  const id=String(state.node||'');
  const loc=String((state.exploration&&state.exploration.location)||'');
  const desc=String(node.chapter||'')+' '+String(node.text||'').slice(0,180);
  const all=id+' '+desc;
  // v62: named destinations from the newly supplied background pack.
  if(/아셀.*빈민가|asel_slums/.test(all))return 'asel_slums';
  if(/아셀.*골목|asel_alley/.test(all))return 'asel_alley';
  if(/아셀.*분수|asel_fountain/.test(all))return 'asel_fountain_night';
  if(/코트리먼.*호수|호숫가|cotriman_lakeside/.test(all))return 'cotriman_lakeside_night';
  if(/코트리먼.*정자|정원 정자|cotriman_gazebo/.test(all))return 'cotriman_gazebo_night';
  if(/코트리먼.*장미|코트리먼가.*화원|cotriman_roses/.test(all))return 'cotriman_roses';
  if(/대성당|cathedral/.test(all))return 'imperial_cathedral';
  if(/왕실 묘역|묘역|cemetery/.test(all))return 'imperial_cemetery';
  if(/수도.*정문|황도.*관문|capital_gate/.test(all))return 'capital_gate';
  if(/수도.*외곽|교외 길|capital_outskirts/.test(all))return 'capital_outskirts';
  if(/수도.*전경|황도.*전경|capital_night/.test(all))return 'capital_night';
  if(/귀족.*거주|noble_district/.test(all))return 'noble_district';
  if(/평민.*상업|상업 거리|market_street/.test(all))return 'market_street';
  if(/수도.*광장|중심 광장|capital_square/.test(all))return 'capital_square';
  if(/침실|bedroom|bedchamber/.test(all))return 'royal_bedroom';
  if(/사자 문장|lion_study/.test(all))return 'lion_study';
  if(/티살롱|차를 마시|tea_salon/.test(all))return 'tea_salon';
  if(/발코니|balcony/.test(all))return 'ballroom_balcony';
  if(/온실|greenhouse/.test(all))return 'greenhouse';
  if(/도서관|서재|서고|library|study/.test(all))return 'library';
  if(/의회|회의|council|협상/.test(all))return 'council';
  if(/백작가|레온하르트 저택|manor/.test(all))return 'leonhardt_manor';
  if(/테라스|terrace/.test(all))return 'terrace';
  if(/회랑|복도|corridor/.test(all))return 'corridor';
  if(/정원|장미|garden/.test(all))return 'rose_garden';
  if(/연회|무도회|ballroom|ball_/.test(all))return 'ballroom';
  if(id==='explore'||/explore/.test(id)){
   if(loc==='garden')return 'rose_garden';
   if(loc==='terrace')return 'terrace';
   if(loc==='corridor')return 'corridor';
   if(loc==='drawing')return 'tea_salon';
   if(loc==='hall')return 'grand_hall';
  }
  return 'grand_hall';
 }
 renderStage=function(node){
  originalStage(node);
  const name=sceneBackground(node);
  bg.style.backgroundImage='linear-gradient(180deg,#140d1d12,#130d1a08 55%,#140b1b66),url("assets/backgrounds/'+name+'.webp")';
  bg.dataset.background=name;
 };

})();

// v60: small-screen accessibility and viewport stability; no save schema changes.
(function(){
 const dialog=document.querySelector('#game .dialogue');
 const choices=document.getElementById('choices');
 const stage=document.getElementById('stage');
 const modalRoot=document.getElementById('modal');
 if(!dialog||!choices||!stage||!modalRoot)return;
 // Maintain a stable scroll position when a new choice page or dialogue is rendered.
 const observer=new MutationObserver(()=>{dialog.scrollTop=0;});
 observer.observe(choices,{childList:true});
 // Keep modal focus inside the dialog while open; Escape closes it.
 document.addEventListener('keydown',e=>{
  if(modalRoot.classList.contains('hidden'))return;
  if(e.key==='Escape'){e.preventDefault();document.getElementById('closeModal').click();return;}
  if(e.key!=='Tab')return;
  const focusable=[...modalRoot.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]')].filter(x=>x.getClientRects().length);
  if(!focusable.length)return;
  if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable.at(-1).focus();}
  else if(!e.shiftKey&&document.activeElement===focusable.at(-1)){e.preventDefault();focusable[0].focus();}
 });
})();


// v87: dialogue pagination and character-by-character reveal. No save-schema changes.
(function(){
 const line=document.getElementById('line'),next=document.getElementById('nextBtn'),choices=document.getElementById('choices');
 if(!line||!next||!choices)return;
 let pages=[],page=0,timer=null,letters=[],position=0,typing=false,token=0,lastTap=0;
 const original=v67RenderNarrative;
 const segmenter=typeof Intl!=='undefined'&&Intl.Segmenter?new Intl.Segmenter('ko',{granularity:'grapheme'}):null;
 const graphemes=s=>segmenter?Array.from(segmenter.segment(s),v=>v.segment):Array.from(s);
 function splitText(s,thought,speaker=null){
  return readingPages160(s,thought,speaker);
 }

 function stop(){if(timer!==null){clearTimeout(timer);timer=null;}typing=false;token++;}
 function syncNavigation(){
  const hasMore=page<pages.length-1;
  next.classList.toggle('hidden',!hasMore&&!!(NODES[state.node]||{}).choices);
  next.textContent=hasMore?'다음 문단 ›':'다음 ›';
  // Choices become visible only after the last paragraph finishes.
  choices.classList.toggle('v87-waiting',hasMore||typing);
  const indicator=document.getElementById('v87PageCount');
  if(indicator)indicator.textContent=pages.length>1?(page+1)+' / '+pages.length:'';
  window.DELHARSA_READING={node:state.node,token,page,ready:!typing,more:hasMore,text:pages[page]?.text||'',canAdvance:hasMore||!!NODES[state.node]?.next};
  window.dispatchEvent(new CustomEvent('delharsa-reading',{detail:window.DELHARSA_READING}));
 }
 function finish(){if(!typing)return;stop();line.textContent='';const span=document.createElement('span');span.className=pages[page].thought?'v67-inner-thought':'v67-prose';span.textContent=pages[page].text;line.append(span);syncNavigation();}
 function showPage(){
  stop();line.replaceChildren();line.scrollTop=0;position=0;
  const item=pages[page];if(typeof nameplate159==='function')nameplate159(item?.speaker);if(!item){syncNavigation();return;}
  const span=document.createElement('span');span.className=item.thought?'v67-inner-thought':'v67-prose';line.append(span);
  if(item.thought){span.textContent=item.text;syncNavigation();return;}
  letters=graphemes(item.text);typing=true;const current=token;
  syncNavigation();
  function tick(){if(current!==token)return;
   const amount=window.DELHARSA_PREFS?.speed===0?letters.length:1;span.textContent+=letters.slice(position,position+amount).join('');position+=amount;
   if(position>=letters.length){typing=false;timer=null;syncNavigation();return;}
   timer=setTimeout(tick,window.DELHARSA_PREFS?.speed??40);
  }
  timer=setTimeout(tick,170);
 }
 v67RenderNarrative=function(node){
  pages=typeof dialogueSegments159==='function'?dialogueSegments159(node,state.node).flatMap(part=>splitText(part.text,part.thought,part.speaker)):[...splitText(node.text,false),...splitText(node.thought? '('+String(node.thought).replace(/^\(|\)$/g,'')+')':'',true)];
  if(!pages.length)pages=[{text:'',thought:false}];
  page=0;showPage();
 };
 // Capture prevents the legacy next handler from advancing the story prematurely.
 next.addEventListener('click',function(e){
  if(typing||page<pages.length-1){e.preventDefault();e.stopImmediatePropagation();
   if(typing)finish();else{page++;showPage();}
  }
 },true);
 // A quick double tap reveals the entire current paragraph; single tap also reveals while typing.
 const dialog=line.closest('.dialogue')||line;
 dialog.addEventListener('click',e=>{
  if(e.target.closest('button,a,input,select,textarea'))return;
  const now=Date.now();const double=now-lastTap<360;lastTap=now;
  if(typing)finish();else if(double&&page<pages.length-1){page++;showPage();}
 });
 // Prevent choice activation while text is still being revealed.
 // v146: Choices must remain clickable when rendered. The old capture listener
 // cancelled the user's selection if the narrative typewriter was still active.
 // Finish the current text visually without swallowing the choice click.
 choices.addEventListener('click',e=>{
  if(!e.target.closest('button'))return;
  if(typing)finish();
 },true);
 const indicator=document.createElement('span');indicator.id='v87PageCount';indicator.setAttribute('aria-label','문단 진행도');
 next.parentElement?.insertBefore(indicator,next);
 // New node rendering may insert choice buttons after the narrative; keep them hidden until appropriate.
 const observer=new MutationObserver(()=>syncNavigation());observer.observe(choices,{childList:true});
 window.addEventListener('pagehide',stop);
})();


// v88 — KARMA: explicit consequence choices, persistent state and additional endings.
// All preexisting story IDs, saves and endings are preserved.
const V88_ENDINGS=[
 {id:'blood_vow',title:'피로 물든 맹세',kind:'BAD',text:"나는 미겔을 잃는 두려움을 사랑이라고 불렀다. 내가 돌이킬 수 없는 선택을 내린 밤, 장미 화원에는 더 이상 두 사람의 미래가 남지 않았다.\n\n미겔은 마지막까지 나를 똑바로 바라보았다.\n\n“이것이 네가 바라던 영원이니, 다니엘?”",thought:'영원히 내 곁에 있을 거라고 믿었는데.'},
 {id:'three_moons',title:'세 번째 달이 지는 밤',kind:'TRAGIC',text:"도망칠 길이 끊어진 탑 위, 미겔과 나는 서로의 손을 놓지 않았다. 세 개의 달은 여전히 하늘에 떠 있었다.\n\n다음 날, 사람들은 두 사람의 행방을 찾지 못했다. 남은 것은 창가에 놓인 노란 장미 한 송이뿐이었다.",thought:'다음 생에는 평범한 밤을 함께 걷고 싶었다.'},
 {id:'brother_funeral',title:'형제의 장례식',kind:'BAD',text:"알렉스는 끝까지 가문과 약혼자를 지키려 했다. 나는 그 앞에서 칼을 거두지 않았다.\n\n장례식 날, 남색과 금색의 깃발이 내려왔다. 나는 형이 없는 집에서 처음으로 내 죄를 똑바로 보았다.",thought:'형님이 없으면 모든 게 해결될 줄 알았어.'},
 {id:'lie_of_love',title:'사랑하지 않았다는 거짓말',kind:'BITTER',text:"미겔은 나를 사랑한 적 없다고 말했다.\n\n그녀는 정중하게 미소 지었고, 나는 그 말을 믿은 채 살아갔다. 그날 그녀가 끝내 말하지 않은 것이 무엇인지 알지 못한 채.",thought:'차라리 진실을 몰랐으면 좋겠다고 생각했다.'},
 {id:'survivors_penalty',title:'살아남은 자의 벌',kind:'TRAGIC',text:"알렉스는 나를 지키려다 돌아오지 못했다.\n\n그가 마지막으로 남긴 말은 원망이 아니라 걱정이었다. 나는 그 다정함을 용서받지 못할 벌처럼 품었다.",thought:'차라리 나를 미워하지, 형님.'},
 {id:'heavy_crown',title:'왕관보다 무거운 것',kind:'BAD',text:"나는 권력을 손에 넣었다. 왕궁의 문은 나를 위해 열렸지만, 함께 들어설 사람은 없었다.\n\n내가 바라던 모든 것을 얻은 밤, 세 개의 달만이 텅 빈 왕좌를 비추었다.",thought:'모든 걸 가졌는데, 왜 아무도 없는 거지?'},
 {id:'unsent_letter',title:'보내지 못한 편지',kind:'BITTER',text:"세 사람은 모두 살아남았다. 그러나 미겔과 알렉스의 약혼에 남은 균열은 회복되지 않았다.\n\n나는 끝내 부치지 못한 편지를 서랍 깊숙이 넣었다.",thought:'살아남는 것만으로는 충분하지 않았다.'},
 {id:'world_without_you',title:'당신이 없는 세계',kind:'SECRET',text:"비극을 막을 마지막 선택은 두 사람의 인연을 지우는 일이었다.\n\n미겔은 노란 장미 사이에서 웃고 있었다. 나를 알아보지 못한 채로.\n\n나는 아무 말 없이 돌아섰다.",thought:'당신이 행복하다면, 나를 기억하지 않아도 괜찮아.'}
];
const V88_KARMA_KEY='delharsha_v88_karma_gallery';
function v88Default(){return{obsession:0,guilt:0,madness:0,truth:0,miguel:0,alex:0,flags:{},log:[]};}
function v88Karma(){if(!state.karma||typeof state.karma!=='object')state.karma=v88Default();const k=state.karma;for(const [name,val] of Object.entries(v88Default()))if(k[name]===undefined)k[name]=val;return k;}
function v88Change(delta,label){const k=v88Karma();for(const [name,v] of Object.entries(delta)){if(typeof k[name]==='number')k[name]=Math.max(0,Math.min(100,k[name]+v));}k.log.push({day:state.day,label,delta});if(k.log.length>120)k.log.shift();}
function v88Unlocked(){try{const d=JSON.parse(localStorage.getItem(V88_KARMA_KEY)||'[]');return Array.isArray(d)?d:[];}catch{return[];}}
function v88Record(id){const old=v88Unlocked();if(!old.includes(id)){old.push(id);try{localStorage.setItem(V88_KARMA_KEY,JSON.stringify(old));}catch{}}}
function v88Can(id){const k=v88Karma();const f=k.flags||{};switch(id){
 case 'blood_vow':return k.obsession>=65&&k.madness>=70&&f.ignoredMiguel;
 case 'three_moons':return k.miguel>=50&&k.guilt>=45&&f.sharedFate;
 case 'brother_funeral':return k.madness>=65&&k.alex>=40&&f.defiedAlex;
 case 'lie_of_love':return k.miguel>=45&&k.truth>=45;
 case 'survivors_penalty':return k.alex>=50&&k.guilt>=45;
 case 'heavy_crown':return k.obsession>=50&&k.madness>=45;
 case 'unsent_letter':return k.guilt>=35&&k.miguel>=30&&k.alex>=30;
 case 'world_without_you':return k.truth>=75&&k.guilt>=65&&k.madness<60;
 }return false;}
function v88AddNode(id){const e=V88_ENDINGS.find(x=>x.id===id);if(!e)return;
 NODES['v88_ending_'+id]={speaker:'ENDING · '+e.kind,chapter:'KARMA · '+e.title,text:e.text,thought:e.thought,choices:[{text:'엔딩 도감 확인',v88Gallery:true,next:'v88_crossroads'},{text:'운명의 갈림길로 돌아가기',next:'v88_crossroads'},{text:'타이틀로 돌아가기',action:'home'}]};
}
V88_ENDINGS.forEach(e=>v88AddNode(e.id));
NODES.v88_crossroads={speaker:'KARMA · 운명의 갈림길',chapter:'KARMA',text:"어떤 선택은 지나간 뒤에도 사라지지 않는다.\n\n세 개의 달 아래, 나는 내 선택이 남긴 흔적을 마주한다.",choices:[]};
function v88Crossroads(){const k=v88Karma();const choices=[];
 const paths=[
 ['미겔의 뜻을 무시하고 붙잡는다',{obsession:24,madness:22,guilt:6},'ignoredMiguel'],
 ['미겔의 결정을 존중한다',{truth:14,guilt:8,miguel:15},null],
 ['미겔과 어떤 운명도 함께하겠다고 맹세한다',{miguel:24,guilt:16,obsession:8},'sharedFate'],
 ['알렉스의 경고를 거스른다',{madness:21,alex:15,obsession:10},'defiedAlex'],
 ['알렉스에게 사과하고 형제의 의무를 돌아본다',{alex:23,guilt:16,truth:10},null],
 ['왕궁의 비밀을 조사한다',{truth:26,guilt:7},null],
 ['자신의 잘못을 인정하고 속죄한다',{guilt:24,truth:12,madness:-10},null],
 ['권력을 위해 타인을 희생한다',{madness:22,obsession:20,guilt:-5},null]
 ];
 paths.forEach(([text,effects,flag],i)=>choices.push({text,effects,v88Action:i,v88Flag:flag,next:'v88_crossroads'}));
 for(const e of V88_ENDINGS){if(v88Can(e.id))choices.push({text:'✦ '+e.kind+' · '+e.title,v88Ending:e.id,next:'v88_ending_'+e.id});}
 choices.push({text:'엔딩 도감 보기',v88Gallery:true,next:'v88_crossroads'});
 choices.push({text:'원래 이야기로 돌아가기',v88Return:true,next:'explore'});
 NODES.v88_crossroads.choices=choices;
}
const v88OriginalRender=render;
render=function(){if(state.node==='v88_crossroads')v88Crossroads();if(state.node&&state.node.startsWith('v88_ending_'))v88Record(state.node.slice('v88_ending_'.length));v88OriginalRender();};
const v88OriginalFresh=fresh;
fresh=function(){return{...v88OriginalFresh(),karma:v88Default()};};
const v88OriginalSave=save;
save=function(){v88Karma();v88OriginalSave();};
const v88OriginalLoad=load;
load=function(){v88OriginalLoad();v88Karma();};
// Capture only explicit v88 story choices; existing branches remain unchanged.
const v88ChoiceRoot=document.getElementById('choices');
if(v88ChoiceRoot)v88ChoiceRoot.addEventListener('click',function(ev){
 const btn=ev.target.closest('button');if(!btn)return;
 const node=NODES[state.node];if(!node||!node.choices)return;
 const buttons=Array.from(v88ChoiceRoot.querySelectorAll('button'));const i=buttons.indexOf(btn);const choice=node.choices[i];if(!choice)return;
 if(choice.v88Action!==undefined){v88Change(choice.effects||{},choice.text);if(choice.v88Flag)v88Karma().flags[choice.v88Flag]=true;}
 if(choice.v88Gallery){ev.preventDefault();ev.stopImmediatePropagation();v88Gallery();}
 if(choice.v88Return){state.node=state.v88ReturnNode&&NODES[state.v88ReturnNode]?state.v88ReturnNode:'explore';ev.preventDefault();ev.stopImmediatePropagation();render();}
},true);
function v88Open(){if(document.getElementById('game')?.classList.contains('active')===false)return;const current=state.node;if(!current.startsWith('v88_'))state.v88ReturnNode=current;state.node='v88_crossroads';render();}
function v88Gallery(){const unlocked=v88Unlocked();const content=document.createElement('div');content.className='v88-gallery';
 const note=document.createElement('p');note.textContent='추가 엔딩 '+unlocked.length+' / '+V88_ENDINGS.length+' 해금 · 기존 엔딩은 별도로 유지됩니다.';content.append(note);
 V88_ENDINGS.forEach(e=>{const item=document.createElement('div');item.className='v88-gallery-item';const yes=unlocked.includes(e.id);item.textContent=yes?'✦ '+e.kind+' · '+e.title:'◇ 미해금 엔딩';content.append(item);});
 modal('KARMA · 엔딩 도감','');const target=document.getElementById('modalContent');if(target)target.replaceChildren(content);
}
function v88Status(){const k=v88Karma();const wrap=document.createElement('div');wrap.className='v88-stats';
 [['obsession','집착'],['guilt','죄책감'],['madness','광기'],['truth','진실'],['miguel','미겔과의 관계'],['alex','알렉스와의 관계']].forEach(([key,label])=>{const row=document.createElement('div');row.className='v88-stat';const span=document.createElement('span');span.textContent=label+' · '+k[key]+'/100';const meter=document.createElement('progress');meter.max=100;meter.value=k[key];row.append(span,meter);wrap.append(row);});
 const p=document.createElement('p');p.textContent='선택의 결과가 누적됩니다. 특정 선택을 거쳐야 열리는 엔딩도 있습니다.';wrap.append(p);
 modal('KARMA · 업보','');document.getElementById('modalContent')?.replaceChildren(wrap);
}
(function(){const hud=document.querySelector('#game .hud');if(!hud)return;
 const b=document.createElement('button');b.type='button';b.id='v88KarmaBtn';b.textContent='⚖ 업보';b.addEventListener('click',v88Status);hud.append(b);
 const g=document.createElement('button');g.type='button';g.textContent='✦ 엔딩 도감';g.addEventListener('click',v88Gallery);hud.append(g);
 const x=document.createElement('button');x.type='button';x.textContent='☾ 운명의 갈림길';x.addEventListener('click',v88Open);hud.append(x);
})();


// v89: positive resolutions use the same karma state, choice flow and persistent gallery.
const V89_HAPPY=[
 {id:'rose_dawn',title:'장미가 피는 새벽',kind:'HAPPY',text:"나는 미겔의 대답을 재촉하지 않았다. 코트리먼가의 노란 장미 화원에서 두 사람은 오래도록 이야기를 나누었다.\n\n미겔은 자신의 뜻으로 내 손을 잡았다. 멀리서 세 개의 달이 지고, 그들 앞에 새로운 아침이 열렸다.",thought:'서두르지 않아도 돼. 이제는 그녀의 마음을 기다릴 수 있어.'},
 {id:'brothers_promise',title:'형제의 약속',kind:'HAPPY',text:"알렉스는 내 사과를 쉽게 받아들이지 않았다. 대신 내가 달라진 모습을 끝까지 지켜보았다.\n\n봄이 왔을 때, 두 형제는 다시 나란히 레온하르트가의 문을 나섰다. 가문의 명예도, 서로에 대한 믿음도 지켜 낸 채로.",thought:'형님과 다시 웃을 수 있어서 다행이다.'},
 {id:'three_hearts',title:'세 사람의 봄',kind:'TRUE',text:"나는 내 마음을 숨기지 않았지만, 미겔과 알렉스가 서로에게 약속한 미래를 존중했다.\n\n상처가 없었던 것은 아니다. 그러나 세 사람은 진실을 외면하지 않았고, 저마다의 자리에서 서로의 행복을 빌어 줄 수 있게 되었다.",thought:'사랑이 반드시 빼앗는 일은 아니라는 걸 이제 알았다.'},
 {id:'free_sky',title:'나의 이름으로',kind:'HAPPY',text:"나는 누군가의 인정이나 사랑을 얻기 위해 나를 잃지 않기로 했다.\n\n나는 왕궁을 나와 내가 선택한 길을 걸었다. 세 개의 달 아래서도, 새벽의 햇살 아래서도, 내 앞날은 이제 나 자신의 것이었다.",thought:'오늘은 누구의 동생도 아닌, 다니엘로서 시작하자.'},
 {id:'violet_vow',title:'보랏빛 밤의 맹세',kind:'SECRET HAPPY',text:"왕궁의 비밀을 밝혀 낸 뒤, 나는 내가 저지른 잘못을 인정하고 책임을 졌다.\n\n나를 용서할지 결정하는 것은 다른 사람들의 몫이었다. 긴 시간이 흐른 뒤, 미겔과 알렉스는 다시 내게 미소 지었다. 세 개의 달이 떠 있는 밤, 모두는 각자의 선택으로 같은 정원에 모였다.",thought:'이 행복은 빼앗은 것이 아니라 함께 지켜 낸 것이다.'}
];
V89_HAPPY.forEach(e=>{V88_ENDINGS.push(e);v88AddNode(e.id);});
const v89OldCan=v88Can;
v88Can=function(id){const k=v88Karma(),f=k.flags||{};switch(id){
 case 'rose_dawn':return k.miguel>=65&&k.truth>=35&&k.madness<=35&&f.respectedMiguel;
 case 'brothers_promise':return k.alex>=65&&k.guilt>=25&&k.madness<=35&&f.apologizedAlex;
 case 'three_hearts':return k.miguel>=55&&k.alex>=55&&k.truth>=65&&k.madness<=30&&f.respectedMiguel&&f.apologizedAlex;
 case 'free_sky':return k.truth>=55&&k.madness<=25&&f.choseFreedom;
 case 'violet_vow':return k.truth>=80&&k.guilt>=65&&k.miguel>=60&&k.alex>=60&&k.madness<=25&&f.respectedMiguel&&f.apologizedAlex;
 default:return v89OldCan(id);
}};
const v89OldCrossroads=v88Crossroads;
v88Crossroads=function(){v89OldCrossroads();const node=NODES.v88_crossroads;const at=node.choices.findIndex(c=>c.v88Ending!==undefined);const options=[
 {text:'미겔의 의사를 존중하며 기다린다',effects:{miguel:20,truth:12,madness:-12,obsession:-8},v88Action:89,v88Flag:'respectedMiguel',next:'v88_crossroads'},
 {text:'알렉스에게 진심으로 사과하고 행동으로 증명한다',effects:{alex:22,guilt:12,truth:8,madness:-10},v88Action:90,v88Flag:'apologizedAlex',next:'v88_crossroads'},
 {text:'타인의 삶을 존중하며 자신의 길을 선택한다',effects:{truth:18,madness:-12,obsession:-10},v88Action:91,v88Flag:'choseFreedom',next:'v88_crossroads'}
 ];node.choices.splice(at<0?node.choices.length-2:at,0,...options);
};


// v90 — THE SCALES OF FATE. Independent irreversible virtue / wrongdoing ledgers.
// Disclosure is unlocked only on the NEW playthrough after an ending has been reached.
const V90_META_KEY='delharsha_v90_scales_meta';
function v90Meta(){try{const m=JSON.parse(localStorage.getItem(V90_META_KEY)||'{}');return {completed:Number(m.completed)||0,events:Array.isArray(m.events)?m.events:[],runs:Array.isArray(m.runs)?m.runs:[],coins:Number.isFinite(m.coins)?m.coins:100};}catch{return {completed:0,events:[],runs:[],coins:100};}}
function v90Store(m){try{localStorage.setItem(V90_META_KEY,JSON.stringify(m));}catch(e){console.warn('V90 ledger could not be persisted',e);}}
function v90Data(){if(!state.scales||typeof state.scales!=='object')state.scales={virtue:0,karma:0,events:[],daily:{},coins:100,completed:false,revealed:false,runId:'run-'+Date.now()};const d=state.scales;d.events=Array.isArray(d.events)?d.events:[];d.daily=d.daily||{};return d;}
function v90Add(kind,amount,label){if(!['virtue','karma'].includes(kind)||amount<=0)return;const d=v90Data(),m=v90Meta(),event={kind,amount,day:state.day||1,label,runId:d.runId||'legacy',at:new Date().toISOString()};d[kind]+=amount;d.events.push(event);m.events.push(event);v90Store(m);if(d.revealed){v90Flash((kind==='virtue'?'선행':'업보')+' +'+amount);}else{v90Flash('어딘가에서 저울이 미세하게 움직였다.');}}
function v90Flash(message){let n=document.getElementById('v90Flash');if(!n){n=document.createElement('div');n.id='v90Flash';n.setAttribute('role','status');document.body.append(n);}n.textContent=message;n.classList.add('v90-visible');clearTimeout(v90Flash.t);v90Flash.t=setTimeout(()=>n.classList.remove('v90-visible'),2500);}
function v90Complete(id){const d=v90Data();if(d.completed)return;d.completed=true;const m=v90Meta();m.completed+=1;m.runs.push({id,karma:d.karma,virtue:d.virtue,events:d.events.length,at:new Date().toISOString()});v90Store(m);if(!d.revealed)v90Flash('첫 번째 운명이 기록되었습니다. 다음 회차에서 저울의 진실이 드러납니다.');}
const v90FreshOriginal=fresh;
fresh=function(){const s=v90FreshOriginal();s.scales={virtue:0,karma:0,events:[],daily:{},coins:100,completed:false,revealed:v90Meta().completed>0,runId:'run-'+Date.now()};return s;};
const v90RenderOriginal=render;
render=function(){const id=state.node||'';if(id.startsWith('v88_ending_'))v90Complete(id.slice('v88_ending_'.length));if(!v90Data().revealed&&id==='v88_crossroads'){NODES.v88_crossroads.speaker='운명의 갈림길';NODES.v88_crossroads.chapter='???';}v90RenderOriginal();v90UpdateButtons();};
const v90FinishOriginal=v48Finish;
v48Finish=function(id){const was=v49Finished();v90FinishOriginal(id);if(!was&&v49Finished())v90Complete(id);};
// v88 event choices still apply their existing relationship/psychology effects.
// v90 records their moral consequences independently and never offsets them.
const v90Choices=document.getElementById('choices');
if(v90Choices)v90Choices.addEventListener('click',function(ev){const btn=ev.target.closest('button');if(!btn)return;const node=NODES[state.node];if(!node?.choices)return;const index=Array.from(v90Choices.querySelectorAll('button')).indexOf(btn);const c=node.choices[index];if(!c||c.v88Action===undefined)return;const bad=['ignoredMiguel','defiedAlex'].includes(c.v88Flag)||/희생|무시|거스른다|권력을 위해/.test(c.text);const good=['respectedMiguel','apologizedAlex','choseFreedom'].includes(c.v88Flag)||/존중|사과|속죄|진실|비밀을 조사/.test(c.text);if(bad)v90Add('karma',c.v88Flag==='ignoredMiguel'?8:5,c.text);else if(good)v90Add('virtue',4,c.text);},true);
function v90UpdateButtons(){const b=document.getElementById('v88KarmaBtn');if(b)b.textContent=v90Data().revealed?'⚖ 운명의 저울':'⚖ ???';}
// Keep the first-playthrough status opaque, including all numeric morality values.
v88Status=function(){v90Scales();};
function v90Scales(){const d=v90Data(),m=v90Meta(),wrap=document.createElement('div');wrap.className='v90-scales';const heading=document.createElement('h3');heading.textContent=d.revealed?'운명의 저울':'???';wrap.append(heading);const balance=document.createElement('div');balance.className='v90-balance';balance.textContent='⚖';wrap.append(balance);
 const msg=document.createElement('p');msg.textContent=d.revealed?'선행과 업보는 서로를 지우지 않습니다. 두 기록은 각각 영원히 남습니다.':'어떤 선택은 지나간 뒤에도 사라지지 않는다. 아직 저울의 의미를 알 수 없다.';wrap.append(msg);
 if(d.revealed){const values=document.createElement('div');values.className='v90-values';for(const [label,value] of [['업보 · KARMA',d.karma],['선행 · VIRTUE',d.virtue]]){const el=document.createElement('div');el.textContent=label+' · '+value;values.append(el);}wrap.append(values);const past=document.createElement('p');past.textContent='이전 회차: '+m.runs.length+'회 기록 · 영구 기록 '+m.events.length+'건';wrap.append(past);const list=document.createElement('div');list.className='v90-ledger';m.events.slice(-24).reverse().forEach(e=>{const row=document.createElement('div');row.textContent=(e.kind==='karma'?'업보':'선행')+' +'+e.amount+' · '+e.label+' (DAY '+e.day+')';list.append(row);});wrap.append(list);}
 modal(d.revealed?'운명의 저울':'???','');document.getElementById('modalContent')?.replaceChildren(wrap);
}
function v90Activity(){const d=v90Data();const wrap=document.createElement('div');wrap.className='v90-activities';const p=document.createElement('p');p.textContent='성당과 구호 활동은 선택에 따라 기록됩니다. 하루에 할 수 있는 활동은 제한됩니다.';wrap.append(p);
 const activities=[{id:'prayer',name:'성당에서 기도한다',amount:1,cost:0,desc:'자신의 행동을 돌아보고 조용히 기도한다.'},{id:'donation',name:'구호 기금을 기부한다 (20G)',amount:4,cost:20,desc:'도움이 필요한 이들을 위해 금화를 기부한다.'},{id:'help',name:'곤경에 처한 사람을 돕는다',amount:5,cost:0,desc:'보상을 바라지 않고 시간을 들여 타인을 돕는다.'}];
 for(const a of activities){const b=document.createElement('button');b.type='button';b.textContent=a.name;b.disabled=!!d.daily[(state.day||1)+'_'+a.id]||d.coins<a.cost;b.onclick=()=>{if(b.disabled)return;d.daily[(state.day||1)+'_'+a.id]=true;d.coins-=a.cost;v90Add('virtue',a.amount,a.name);v90Activity();};wrap.append(b);const desc=document.createElement('small');desc.textContent=a.desc;wrap.append(desc);}
 const funds=document.createElement('p');funds.textContent='이번 회차 소지금: '+d.coins+'G';wrap.append(funds);const scale=document.createElement('button');scale.textContent=d.revealed?'⚖ 운명의 저울 보기':'⚖ ???';scale.onclick=v90Scales;wrap.append(scale);modal('성당 · 선행 활동','');document.getElementById('modalContent')?.replaceChildren(wrap);
}
(function(){const hud=document.querySelector('#game .hud');if(!hud)return;const old=document.getElementById('v88KarmaBtn');if(old){const replacement=old.cloneNode(true);old.replaceWith(replacement);replacement.addEventListener('click',v90Scales);}const b=document.createElement('button');b.type='button';b.id='v90VirtueBtn';b.textContent='✧ 성당 · 선행';b.onclick=v90Activity;hud.append(b);v90UpdateButtons();})();


// v91 — Main-story morality integration and consequence-aware endings.
// Never subtract from the independent V90 ledgers. Prior runs remain in V90_META_KEY.
(function(){
 const oldCan=v88Can;
 const moralRules={
  blood_vow:{karma:28,virtueMax:24},three_moons:{karma:14},brother_funeral:{karma:26,virtueMax:24},
  lie_of_love:{karma:6},survivors_penalty:{karma:12},heavy_crown:{karma:23,virtueMax:26},
  unsent_letter:{karma:8},world_without_you:{virtue:15},
  rose_dawn:{virtue:15,karmaMax:22},brothers_promise:{virtue:12,karmaMax:24},
  three_hearts:{virtue:22,karmaMax:20},free_sky:{virtue:12,karmaMax:24},
  violet_vow:{virtue:30,karmaMax:18}
 };
 v88Can=function(id){
  if(!oldCan(id))return false;
  const d=v90Data(),r=moralRules[id];if(!r)return true;
  return (r.karma===undefined||d.karma>=r.karma)&&
   (r.virtue===undefined||d.virtue>=r.virtue)&&
   (r.karmaMax===undefined||d.karma<=r.karmaMax)&&
   (r.virtueMax===undefined||d.virtue<=r.virtueMax);
 };
 const choiceRoot=document.getElementById('choices');
 const scenePositive=/돕|구하|보호|배려|존중|사과|책임|진실|솔직|정직|돌려주|양보|구호|위로|지키|도와|선의|고백/;
 const sceneNegative=/협박|강요|속이|거짓|모함|배신|희생시키|죽이|살해|위협|빼앗|모욕|침묵을 강요|억지|착취|폭력/;
 function classify(choice){
  if(choice.v95Effect||choice.v96Action||String(state.node).startsWith('rose_'))return null;
  const label=String(choice.text||'');
  if(choice.v88Action!==undefined||choice.v88Ending||choice.v88Gallery||choice.v88Return)return null;
  if(choice.action==='home'||choice.reset||choice.action==='restartExplore'||choice.action==='nextDay')return null;
  if(choice.v91Moral==='virtue'||choice.v91Moral==='karma')return choice.v91Moral;
  // Use explicit player decisions rather than all text containing a keyword.
  if(sceneNegative.test(label))return 'karma';
  if(scenePositive.test(label))return 'virtue';
  if(choice.v20ErrandMode==='help'||choice.v22RumorMode==='correct'||choice.v22NpcMode==='warm'||choice.v26Alex==='apologize'||choice.v27Alex==='repair')return 'virtue';
  if(choice.v20ErrandMode==='decline'&&/외면|버리/.test(label))return 'karma';
  return null;
 }
 if(choiceRoot)choiceRoot.addEventListener('click',function(ev){
  if(ev.defaultPrevented)return;
  const btn=ev.target.closest('button');if(!btn||!choiceRoot.contains(btn)||btn.disabled)return;
  const node=NODES[state.node];if(!node||!Array.isArray(node.choices))return;
  const idx=Array.from(choiceRoot.children).filter(x=>x.tagName==='BUTTON').indexOf(btn);
  if(idx<0)return;
  const choice=node.choices[idx];if(!choice)return;
  const kind=classify(choice);if(!kind)return;
  const d=v90Data();d.v91Seen=d.v91Seen||{};
  const id=String(state.node)+'#'+idx+'#'+String(state.day||1);
  if(d.v91Seen[id])return;
  d.v91Seen[id]=true;
  v90Add(kind,kind==='karma'?5:3,'본편 · '+choice.text);
 },true);
 // Refresh the crossroads with the newly restricted ending conditions.
 const oldCrossroads=v88Crossroads;
 v88Crossroads=function(){oldCrossroads();const d=v90Data();
  if(!d.revealed){
   NODES.v88_crossroads.speaker='???';NODES.v88_crossroads.chapter='???';
   NODES.v88_crossroads.choices=NODES.v88_crossroads.choices.map(c=>{
    if(c.v88Ending!==undefined)return {...c,text:'✦ 운명의 결말을 마주한다'};
    if(c.v88Gallery)return {...c,text:'기억의 기록'};
    return c;
   });
  }else{
   NODES.v88_crossroads.speaker='운명의 저울';NODES.v88_crossroads.chapter='KARMA · VIRTUE';
  }
 };
 // On first run, never expose ending categories through the gallery or scene header.
 const oldGallery=v88Gallery;
 v88Gallery=function(){
  if(v90Data().revealed)return oldGallery();
  const wrap=document.createElement('div');wrap.className='v88-gallery';
  const p=document.createElement('p');p.textContent='아직 이름을 알 수 없는 운명의 기록이 남아 있다. 첫 번째 이야기를 마친 뒤 다시 찾아오세요.';wrap.append(p);
  modal('???','');document.getElementById('modalContent')?.replaceChildren(wrap);
 };
 const oldRender=render;
 render=function(){
  const id=String(state.node||'');
  if(id.startsWith('v88_ending_')&&!v90Data().revealed){
   const node=NODES[id];if(node){node.speaker='운명의 결말';node.chapter='???';}
  }
  oldRender();
 };
 // Explain conditions in NG+ without altering the underlying ending records.
 const hud=document.querySelector('#game .hud');
 if(hud){const b=document.createElement('button');b.type='button';b.id='v91DestinyBtn';b.textContent='✦ 운명의 조건';b.addEventListener('click',()=>{
  const d=v90Data();if(!d.revealed){modal('???','아직 저울의 이름을 알 수 없습니다.');return;}
  const wrap=document.createElement('div');wrap.className='v90-scales';
  const note=document.createElement('p');note.textContent='현재 회차 · 업보 '+d.karma+' / 선행 '+d.virtue+' (서로 상쇄되지 않음)';wrap.append(note);
  for(const e of V88_ENDINGS){const r=moralRules[e.id];if(!r)continue;const p=document.createElement('p');
   const parts=[];if(r.karma!==undefined)parts.push('업보 '+r.karma+' 이상');if(r.virtue!==undefined)parts.push('선행 '+r.virtue+' 이상');
   if(r.karmaMax!==undefined)parts.push('업보 '+r.karmaMax+' 이하');if(r.virtueMax!==undefined)parts.push('선행 '+r.virtueMax+' 이하');
   p.textContent=(v88Unlocked().includes(e.id)?e.title:'미해금 결말')+' · '+parts.join(' / ')+' · 인물 관계와 선택 조건 별도';wrap.append(p);
  }
  modal('운명의 조건','');document.getElementById('modalContent')?.replaceChildren(wrap);
 });hud.append(b);}
})();


// V94 — Persistent consequences of the greenhouse choice.
// State is stored in the existing save object, preserving legacy saves.
(function(){
 const defaultRecord=()=>({path:null,response:null,firstDay:null,echoSeen:false,alexSeen:false,miguelSeen:false});
 function record(){if(!state.v94||typeof state.v94!=='object')state.v94=defaultRecord();return state.v94;}
 const choiceRoot=document.getElementById('choices');
 const primary={v93_reason:'reason',v93_instinct:'instinct',v93_crossed_line:'boundary'};
 const secondary={v93_accept:'accept',v93_linger:'linger',v93_crossed_apology:'apology',v93_crossed_silence:'silence'};
 if(choiceRoot)choiceRoot.addEventListener('click',function(event){
  const button=event.target.closest('button');if(!button||!choiceRoot.contains(button)||button.disabled)return;
  const node=NODES[state.node];if(!node||!Array.isArray(node.choices))return;
  const buttons=Array.from(choiceRoot.children).filter(x=>x.tagName==='BUTTON');
  const choice=node.choices[buttons.indexOf(button)];if(!choice)return;
  const r=record();if(primary[choice.next]){r.path=primary[choice.next];r.firstDay=state.day||1;r.response=null;}
  if(secondary[choice.next])r.response=secondary[choice.next];
 },true);
 // Old save games that are already inside a V93 branch are reconstructed safely.
 function infer(){const r=record(),id=String(state.node||'');if(r.path)return r;
  if(id==='v93_reason')r.path='reason';else if(['v93_instinct','v93_instinct_accept','v93_accept','v93_linger'].includes(id))r.path='instinct';
  else if(['v93_crossed_line','v93_crossed_choice','v93_crossed_apology','v93_crossed_silence'].includes(id))r.path='boundary';
  return r;
 }
 const node=(speaker,chapter,text,thought,next,choices)=>({speaker,chapter,text,thought,...(choices?{choices}:{next})});
 NODES.v94_morning=node("다니엘 레온하르트",'CHAPTER 02 · 장미가 진 자리',
 '밤이 지나자 온실의 장미 향은 기억으로만 남았다. 그러나 다니엘이 내린 선택은 아침이 되었다고 희미해지지 않았다.\n\n알렉스가 서재로 다니엘을 불렀다. 평소와 같은 목소리였다. 그 평범함이 오히려 두려웠다.',
 '형님은 아무것도 모르실까. 아니면 이미 알고 계실까.',null,[
 {text:'형님을 찾아가 대화한다.',next:'v94_alex_intro'},
 {text:'먼저 미겔에게 예의를 갖춘 편지를 쓴다.',next:'v94_letter'}]);
 NODES.v94_letter=node('다니엘 레온하르트','CHAPTER 02 · 보내지 않은 문장',
 "책상 위에 편지지를 펼쳤다. 나는 첫 문장을 쓰고, 다시 지웠다. 내가 듣고 싶은 대답을 강요하는 문장이 되어서는 안 됐다.\n\n편지는 한 장뿐이었다. 마음은 길었지만, 상대의 시간을 빼앗지 않도록 짧게 썼다.",
 '편지를 쓰는 일과 보내는 일은 달라. 답장을 요구할 권리는 없어.', 'v94_alex_intro');
 NODES.v94_alex_intro=node('알렉스 레온하르트','CHAPTER 02 · 형의 시선',
 '서재 창문에는 아침빛이 길게 걸려 있었다. 알렉스는 서류를 덮고 다니엘을 맞았다.\n\n“어제는 늦게까지 있었더구나. 무도회는 즐거웠어?”\n\n익숙한 미소였다. 다니엘은 그 미소가 조금도 가볍지 않다는 것을 알았다.',
 '형님은 내게 늘 다정하셨다. 내가 그 다정함을 배신한 건 아닐까.', 'v94_alex_branch');
 NODES.v94_alex_branch=node("다니엘 레온하르트",'CHAPTER 02 · 대답의 무게',
 "알렉스는 내 침묵을 재촉하지 않았다. 내가 말을 고르는 동안, 그저 맞은편 의자를 당겨 주었다.",
 '무슨 말을 해야 하지. 어젯밤의 나는 어떤 사람이었을까.',null,[]);
 NODES.v94_alex_respect=node('알렉스 레온하르트','CHAPTER 02 · 지켜 낸 거리',
 "“네가 스스로 물러설 줄 알았다면 그걸로 충분해.” 알렉스는 내 어깨를 가볍게 두드렸다.\n\n“미겔은 누군가의 소유물이 아니야. 나와 약혼했다는 이유로 네게 무례해도 되는 사람도 아니고. 우리는 모두 각자의 선택을 책임져야 하지.”\n\n나는 형의 말을 오래 기억했다.",
 '형님이 믿어 주시는 만큼, 나도 믿음을 지키고 싶어.', 'v94_miguel_intro');
 NODES.v94_alex_confession=node('알렉스 레온하르트','CHAPTER 02 · 솔직한 고백',
 "“좋아하는 마음을 가졌다는 사실만으로 널 미워할 생각은 없어.” 알렉스는 한참 만에 말했다.\n\n“하지만 그 마음 때문에 미겔이 곤란해진다면 이야기는 달라지겠지. 내 동생이라서가 아니라, 누구든 상대의 대답을 존중해야 하니까.”\n\n나는 대답 대신 고개를 끄덕였다.",
 '내 마음을 들켰어. 하지만 형님이 지키려는 건 체면이 아니라 그분의 뜻이구나.', 'v94_miguel_intro');
 NODES.v94_alex_boundary=node('알렉스 레온하르트','CHAPTER 02 · 형의 경고',
 "알렉스의 미소가 사라졌다. “미겔이 불편해했다는 말을 들었어.”\n\n그는 목소리를 높이지 않았다. “다니엘, 네가 내 동생이라는 사실은 네 행동을 정당화하지 않아. 미겔이 원치 않는 접촉을 했다면, 그건 분명히 잘못된 일이야.”\n\n나는 의자 끝을 움켜쥐었다. 형은 자신의 감정보다 미겔의 안전과 의사를 먼저 물었다.",
 '형님이 화를 내시는 게 당연해. 변명하면 더 비겁해질 뿐이야.', 'v94_boundary_choice');
 NODES.v94_boundary_choice=node('다니엘 레온하르트','CHAPTER 02 · 책임',
 "“저는…….” 나는 말을 멈췄다. 잘못을 인정하는 것과 용서를 요구하는 것은 다른 일이었다.",
 '내가 할 수 있는 건 사실을 인정하고, 다시는 반복하지 않는 것뿐이야.',null,[
 {text:'변명 없이 잘못을 인정하고 거리를 지키겠다고 약속한다.',next:'v94_boundary_account',v91Moral:'virtue'},
 {text:'그 순간만큼은 어쩔 수 없었다고 변명한다.',next:'v94_boundary_excuse',v91Moral:'karma'}]);
 NODES.v94_boundary_account=node('알렉스 레온하르트','CHAPTER 02 · 남는 기록',
 '“말이 아니라 행동으로 보여 줘.” 알렉스는 단호하게 말했다. “미겔에게 용서를 재촉하지 마. 그 사람에게는 네 사과를 받아들이지 않을 자유도 있어.”\n\n다니엘은 고개를 숙였다. 책임을 받아들인다고 해서 어젯밤이 사라지는 것은 아니었다.',
 '잘못은 남아. 그래도 다음 선택까지 잘못할 이유는 없어.', 'v94_miguel_intro');
 NODES.v94_boundary_excuse=node('알렉스 레온하르트','CHAPTER 02 · 닫힌 문',
 "“그만.” 알렉스가 처음으로 말을 끊었다. “네 충동이 그 사람의 거절보다 중요할 수는 없어.”\n\n서재는 조용했다. 나는 형의 눈을 마주하지 못했다. 관계의 균열은 한 번의 사과로 봉합되지 않았다.",
 '나는 지금도 내 마음만 변호하고 있어. 이대로라면 아무것도 달라지지 않겠지.', 'v94_miguel_intro');
 NODES.v94_miguel_intro=node("다니엘 레온하르트",'CHAPTER 02 · 미겔의 대답',
 '며칠 뒤, 코트리먼가의 노란 장미가 장식된 응접실에서 미겔을 다시 만났다. 그녀는 다니엘을 마주 보고 앉았지만, 전날 밤과 같은 거리를 허락하지는 않았다.\n\n“다니엘, 우리 이야기를 조금 해도 되겠니?”\n\n그녀의 목소리는 부드러웠으나 대답은 분명할 것 같았다.',
 '그분의 말을 끝까지 듣자. 내가 원하는 대답이 아니더라도.', 'v94_miguel_branch');
 NODES.v94_miguel_branch=node('미겔 코트리먼','CHAPTER 02 · 선택 이후',
 "미겔은 내 표정을 살핀 뒤 천천히 말을 꺼냈다.",
 '그분의 다정함을 또다시 내 마음대로 해석하지 말자.',null,[]);
 NODES.v94_miguel_respect=node('미겔 코트리먼','CHAPTER 02 · 존중의 온도',
 '“어젯밤 네가 내 뜻을 존중해 줘서 고마웠어.” 미겔이 말했다.\n\n“네 마음을 모르고 한 말은 아니란다. 다만 나는 알렉과의 약속을 소중히 여기고 있어. 그 점은 알아 주렴.”\n\n다니엘은 조금 아팠지만, 그녀가 자신에게 솔직하다는 사실을 알았다.',
 '좋아한다는 이유로 곁에 있어야 하는 건 아니야. 거리를 지키는 것도 내 선택이야.', 'v94_epilogue');
 NODES.v94_miguel_instinct=node('미겔 코트리먼','CHAPTER 02 · 고백의 여운',
 "“네 고백을 가볍게 여기지는 않는단다.” 미겔은 찻잔을 내려놓았다.\n\n“다만 내 친절을 미래의 약속으로 받아들이지는 말아 주렴. 나는 알렉의 약혼녀이며, 그 사실은 달라지지 않았단다.”\n\n나는 처음으로 그녀의 다정함이 반드시 희망을 뜻하지 않는다는 사실을 온전히 받아들였다.",
 '대답은 이미 들었어. 이제 그 답을 어떻게 살아 낼지가 남았지.', 'v94_epilogue');
 NODES.v94_miguel_boundary=node('미겔 코트리먼','CHAPTER 02 · 허락의 경계',
 "“그날 네가 내 손목을 잡았을 때, 나는 두려웠단다.” 미겔은 시선을 피하지 않았다.\n\n“사과를 들었다고 해서 그 일이 사라지지는 않는단다. 당분간은 단둘이 만나는 일을 삼가 주렴.”\n\n나는 그 요구를 받아들였다. 사과를 했다는 이유로 그녀에게 용서를 요구할 수는 없었다.",
 '그분이 정한 거리를 지키자. 그건 최소한의 책임이야.', 'v94_epilogue');
 NODES.v94_epilogue=node("다니엘 레온하르트",'CHAPTER 02 · 선택이 남긴 것',
 '다니엘은 복도를 걸으며 창밖을 보았다. 장미는 여전히 피어 있었고, 누구도 어젯밤을 되돌릴 수 없었다.\n\n앞으로의 삶에는 또 다른 선택이 기다리고 있었다. 선행은 선행대로, 잘못은 잘못대로 남는다. 다니엘은 그 무게를 지고 다음 날로 걸어갔다.',
 '내가 무엇을 느꼈는가보다, 이제 무엇을 할 것인가가 중요해.', 'explore');
 // Insert this chapter after the greenhouse scene without destroying original narrative.
 NODES.v93_afterglow.next='v94_morning';
 function refreshBranches(){const r=infer();
  const alex=r.path==='boundary'?'v94_alex_boundary':r.path==='instinct'?'v94_alex_confession':'v94_alex_respect';
  const miguel=r.path==='boundary'?'v94_miguel_boundary':r.path==='instinct'?'v94_miguel_instinct':'v94_miguel_respect';
  NODES.v94_alex_branch.next=alex;
  NODES.v94_miguel_branch.next=miguel;
  // Text reflects whether Daniel accepted her answer, lingered, apologized, or stayed silent.
  const after={accept:'그녀의 거절을 받아들인 밤이었다.',linger:'그는 그녀의 친절에 오래 머물렀던 밤을 떠올렸다.',apology:'사과했지만 잘못은 남았다.',silence:'사과조차 하지 못한 침묵이 남았다.'};
  NODES.v94_miguel_branch.thought=(after[r.response]||'그 밤의 선택을 다시 떠올렸다.')+' 그분의 뜻을 존중해야 해.';
 }
 const previousRender=render;
 render=function(){if(String(state.node||'').startsWith('v94_'))refreshBranches();previousRender();};
})();


// V95 — CHAPTER 03: The cost of a name. Branches preserve V94 decisions and V90 ledgers.
(function(){
 const mk=(speaker,chapter,text,thought,next,choices)=>({speaker,chapter,text,thought,...(choices?{choices}:{next})});
 const ch='CHAPTER 03 · 이름의 무게';
 const ensure=()=>{if(!state.v95||typeof state.v95!=='object')state.v95={rumor:null,brother:null,miguel:null,petition:null,visited:false};return state.v95;};
 const history=()=>state.v94&&typeof state.v94==='object'?state.v94:{};
 const path=()=>history().path||'reason';
 NODES.v95_invitation=mk("다니엘 레온하르트",ch,
  '왕궁에서 온 봉투에는 레온하르트가의 사자 문장과 왕실의 인장이 나란히 찍혀 있었다.\n\n“왕실 자선 기금의 운영과 코트리먼가의 토지 기부에 관하여, 관계자 전원의 출석을 명한다.”\n\n겉보기에는 자선 사업에 관한 회의였다. 그러나 봉투 안쪽에는 다른 문장이 적혀 있었다.\n\n“귀족 가문 간 약혼을 둘러싼 불미스러운 풍문에 대해서도 사실관계를 확인한다.”\n\n다니엘은 봉투를 접었다. 어젯밤의 선택이 이제 세 사람만의 일이 아니게 되었다.',
  '누군가 우리의 이름을 이용하려 한다. 그렇다고 그분의 선택을 대신할 수는 없어.','v95_brother');
 NODES.v95_brother=mk('알렉스 레온하르트',ch,
  "서재에 들어서자 알렉스는 내게 의자를 내밀었다. 책상에는 왕실에서 보낸 서류가 펼쳐져 있었다.\n\n“가문의 체면보다 먼저 확인할 게 있어.” 형은 평소보다 낮은 목소리로 말했다. “네가 그날 미겔에게 어떤 태도를 보였는지, 그리고 지금 그 일을 어떻게 생각하는지.”\n\n알렉스는 나를 몰아세우지 않았다. 다만 답을 대신 정해 주지도 않았다.",
  '형님은 나를 지키고 싶으실 거야. 하지만 형님도 그분도 나 대신 대답할 수는 없어.','v95_brother_branch');
 NODES.v95_brother_branch=mk("다니엘 레온하르트",ch,"알렉스는 내 대답을 기다렸다. 창밖에서는 왕궁의 종이 세 번 울렸다.",
  '우리가 형제라는 사실은 변하지 않아. 그 믿음을 내가 어떻게 다룰지가 문제야.',null,[]);
 NODES.v95_brother_reason=mk('알렉스 레온하르트',ch,
  '“그날 네가 물러섰다고 들었어.” 알렉스는 잠시 안도한 듯 미소 지었다. “그건 누구에게 보여 주기 위한 행동이 아니었겠지.”\n\n“하지만 왕궁 사람들은 선의를 명예를 위한 거래로 바꾸려 해. 미겔의 뜻을 먼저 듣자. 네가 옳은 일을 했다는 이유로 그분의 선택권을 얻은 건 아니니까.”',
  '형님은 내가 옳았다고 말하면서도, 아무런 대가를 약속하지 않으셔. 그게 옳아.','v95_brother_choice');
 NODES.v95_brother_instinct=mk('알렉스 레온하르트',ch,
  "“네 마음을 들었을 때 솔직히 놀랐어.” 알렉스가 말했다. “그렇지만 네가 내 동생이라는 사실까지 부정하고 싶지는 않아.”\n\n그는 나를 똑바로 보았다. “좋아한다는 감정과 그 감정을 행동으로 옮길 권리는 달라. 미겔이 대답한 말을 기억해. 나는 그 사람과 약속을 지키려 해.”",
  '형님은 내 고백을 알고도 나를 동생으로 대하신다. 그게 얼마나 어려운 일인지 이제 알아.','v95_brother_choice');
 NODES.v95_brother_boundary=mk('알렉스 레온하르트',ch,
  "“미겔이 불편함을 느꼈다는 사실을 잊지 마.” 알렉스의 표정은 단호했다. “그분이 거리를 원한다면 우리 둘 다 그 결정을 존중해야 해.”\n\n“형님은 저를 용서하실 수 있습니까?” 내가 묻자 알렉스는 고개를 저었다. “내가 대신 용서할 일이 아니야. 네가 바꿀 수 있는 건 앞으로의 행동뿐이지.”",
  '형님의 신뢰가 무너졌어도 그분의 의사는 형님의 소유가 아니야.','v95_brother_choice');
 NODES.v95_brother_choice=mk('다니엘 레온하르트',ch,
  "왕궁은 곧 공개적인 답변을 요구할 것이다. 나는 형에게 어떤 태도를 취할지 결정해야 했다.",
  '형님을 지키겠다는 말이 누군가를 침묵시키는 구실이 되어서는 안 돼.',null,[
   {text:'형과 함께 사실을 확인한다.',next:'v95_brother_together',v95Effect:'together'},
   {text:'혼자 해결하겠다고 말한다.',next:'v95_brother_alone',v95Effect:'alone'}]);
 NODES.v95_brother_together=mk('알렉스 레온하르트',ch,
  "“고맙다.” 알렉스는 짧게 답했다. “다만 미겔이 원하지 않는다면 그분을 우리 계획에 끌어들이지는 말자.”\n\n나는 고개를 끄덕였다. 형제가 같은 편에 서는 일은 누군가를 배제할 권리를 얻는 일이 아니었다.",
  '함께한다는 건 서로의 잘못까지 덮어 준다는 뜻이 아니야.','v95_miguel_meeting');
 NODES.v95_brother_alone=mk('알렉스 레온하르트',ch,
  "“혼자 모든 책임을 짊어지겠다는 말은 멋있게 들리지.” 알렉스는 서류를 덮었다. “하지만 다른 사람의 이야기를 네 결심 하나로 끝내지는 마.”\n\n그는 나를 붙잡지 않았다. 나는 그 침묵이 허락도, 단절도 아니라는 것을 알았다.",
  '혼자 나서더라도 그분의 목소리를 빼앗아서는 안 돼.','v95_miguel_meeting');
 NODES.v95_miguel_meeting=mk("다니엘 레온하르트",ch,
  "코트리먼가에서 보낸 답신에는 미겔의 친필이 있었다.\n\n“왕실 자선 사업에 관한 제 입장은 제가 직접 밝히겠습니다. 두 가문 중 어느 쪽도 제 대변인이 되어 주실 필요는 없습니다.”\n\n나는 그 문장을 두 번 읽었다. 미겔은 약혼자의 보호를 기다리는 사람이 아니었다. 그녀는 자신의 이름으로 서명하고, 자신의 땅과 재산을 어떻게 쓸지 결정할 수 있었다.",
  '코트리먼은 자신의 이름으로 결정하고 계셔. 내가 대신할 일이 아니야.','v95_miguel_branch');
 NODES.v95_miguel_branch=mk('미겔 코트리먼',ch,
  "왕궁 회의실 앞에서 미겔이 나를 마주했다. 노란 장미가 수놓인 하얀 장갑을 낀 손에는 서류가 들려 있었다.",
  '이제는 그분의 말을 끝까지 듣자.',null,[]);
 NODES.v95_miguel_reason=mk('미겔 코트리먼',ch,
  '“레온하르트 경, 제 뜻을 존중해 주신 점에 감사드립니다.” 미겔은 차분하게 말했다. “저는 오늘 알렉스 경의 약혼녀이자 코트리먼가의 대표로 참석했습니다.”\n\n“자선 기금에 관한 결정은 제가 내리겠습니다. 협조해 주시려거든 필요한 일을 먼저 확인해 주시겠습니까?”',
  '다정함을 돌려받으려고 돕는 건 도움이라고 할 수 없어.','v95_miguel_choice');
 NODES.v95_miguel_instinct=mk('미겔 코트리먼',ch,
  "“경께서 하신 말씀은 기억하고 있습니다.” 미겔은 나와 눈을 맞췄다. “다만 그날 드린 답도 변하지 않았습니다. 저는 알렉스 경과의 약속을 소중히 여깁니다.”\n\n“오늘의 안건은 그 일과 별개입니다. 공적인 판단에 사적인 기대를 섞지 말아 주시기 바랍니다.”",
  '고백은 끝났지만 선택은 계속돼. 그분의 답을 바꾸려 들지 말자.','v95_miguel_choice');
 NODES.v95_miguel_boundary=mk('미겔 코트리먼',ch,
  "미겔은 나와 일정한 거리를 둔 채 말했다. “오늘은 공적인 안건에 관해서만 말씀드리겠습니다. 그날 일에 대해서는 아직 시간이 필요합니다.”\n\n“이 회의에서 어떤 선택을 하시더라도 제 개인적인 결정을 대신할 수는 없습니다.”",
  '내가 할 수 있는 건 거리를 지키고 그분의 일을 방해하지 않는 것뿐이야.','v95_miguel_choice');
 NODES.v95_miguel_choice=mk("다니엘 레온하르트",ch,
  "왕실 재무관은 미겔의 토지 기부를 레온하르트가의 공적으로 기록하려 했다. 서류의 맨 위에는 미겔의 이름이 빠져 있었다.\n\n나는 눈앞의 문서를 바라보았다. 아무 말도 하지 않으면 회의는 더 쉽게 끝날 것이다.",
  '편리한 침묵과 옳은 침묵은 다르지.',null,[
   {text:'문서의 명의를 바로잡도록 요청한다.',next:'v95_miguel_voice',v95Effect:'voice'},
   {text:'회의 진행에 맡기고 물러난다.',next:'v95_miguel_silence',v95Effect:'silence'}]);
 NODES.v95_miguel_voice=mk('미겔 코트리먼',ch,
  "“제 토지와 제 서명입니다.” 미겔이 먼저 입을 열었다. 나는 그 뒤에 서서 잘못된 문서 표기를 조용히 지적했다.\n\n재무관은 불쾌한 기색을 숨기지 못했지만 서류를 고쳤다. 미겔은 내게 작은 고갯짓만 보냈다. 그것은 약속도 용서도 아니었다.",
  '그분의 말을 대신한 게 아니라, 지워진 이름을 되돌렸어.','v95_court');
 NODES.v95_miguel_silence=mk('미겔 코트리먼',ch,
  "“그 문서는 제 뜻과 다릅니다.” 미겔이 직접 말을 끊었다. 그녀는 서류를 돌려보내고 수정본을 요구했다.\n\n나는 그녀가 내가 없어도 스스로를 지킬 수 있다는 것을 보았다. 동시에 내가 쉬운 길을 골랐다는 사실도 기억했다.",
  '그분은 나 없이도 말할 수 있어. 그래도 내가 침묵한 사실은 남아.','v95_court');
 NODES.v95_court=mk("다니엘 레온하르트",ch,
  '회의가 끝날 무렵 왕실 재무관이 다른 문서를 꺼냈다.\n\n“최근 궁정에서 유포된 소문이 자선 기금의 신뢰를 해치고 있습니다. 레온하르트가가 이를 부인한다면, 코트리먼가의 기부는 예정대로 승인될 것입니다.”\n\n그 말은 제안처럼 들렸지만 사실상 협박이었다. 소문을 잠재우는 대가로 한 사람의 이름을 걸라는 뜻이었다.',
  '이건 진실을 묻는 자리가 아니야. 누군가의 침묵을 사려는 자리야.','v95_rumor_choice');
 NODES.v95_rumor_choice=mk('다니엘 레온하르트',ch,
  "서류에는 하급 시종 한 명이 소문의 출처로 지목되어 있었다. 증거는 없었다. 내가 서명하면 회의는 즉시 끝난다.",
  '이 사람을 희생시키면 편해질 거야. 그 편리함을 선택할 수는 없어.',null,[
   {text:'증거를 요구하고 서명을 거절한다.',next:'v95_rumor_truth',v95Effect:'truth'},
   {text:'문서에 서명해 회의를 끝낸다.',next:'v95_rumor_cover',v95Effect:'cover'},
   {text:'결정을 미루고 자료를 조사한다.',next:'v95_rumor_inquiry',v95Effect:'inquiry'}]);
 NODES.v95_rumor_truth=mk("다니엘 레온하르트",ch,
  "나는 펜을 내려놓았다. “이 사람을 지목한 증거가 없습니다.”\n\n회의실이 술렁였다. 재무관은 불쾌해했지만 알렉스는 내 말을 막지 않았다. 미겔은 별도로 기부 승인 절차의 공정성을 요구했다.\n\n회의는 연기되었다. 아무도 승리하지 못했지만, 적어도 한 사람을 거짓 죄인으로 만들지는 않았다.",
  '진실을 요구하는 일은 생각보다 외로워. 그래도 서명하지 않길 잘했어.','v95_aftermath');
 NODES.v95_rumor_cover=mk("다니엘 레온하르트",ch,
  "내가 서명하자 재무관은 미소 지었다. 회의는 끝났다.\n\n복도에서 알렉스가 서류를 받아 들었다. “이 사람의 인생을 확인해 봤니?”\n\n미겔은 내게 묻지 않았다. 대신 자신의 기부 승인에 이 문서를 사용하지 않겠다고 분명히 밝혔다. 쉬운 결말은 누구에게도 평온을 주지 못했다.",
  '내가 고른 건 평화가 아니라 누군가의 침묵이었어.','v95_aftermath');
 NODES.v95_rumor_inquiry=mk("다니엘 레온하르트",ch,
  "나는 서명 대신 기록 열람을 요청했다. 서기관은 당황했지만 왕실 규정에 따라 접수증을 내주었다.\n\n며칠의 유예가 생겼다. 소문은 사라지지 않았고 기부도 보류되었다. 나는 시간을 번 만큼 사실을 확인해야 했다.",
  '미루는 것도 선택이야. 이제 그 시간에 무엇을 하느냐가 중요해.','v95_aftermath');
 NODES.v95_aftermath=mk("다니엘 레온하르트",ch,
  "왕궁을 나서는 길, 세 사람은 같은 복도를 걸었지만 같은 마음을 품지는 않았다.\n\n알렉스는 형으로서 나를 걱정했고, 미겔은 자신의 이름과 약속을 지키려 했다. 나는 그 사이에서 처음으로 깨달았다.\n\n가문을 지키는 일과 옳은 일을 하는 일은 언제나 같은 길이 아니었다.",
  '오늘의 선택도 남겠지. 다음에 나는 어떤 사람이 될까.','v95_final_branch');
 NODES.v95_final_branch=mk("다니엘 레온하르트",ch,"나는 마지막으로 왕궁의 문을 돌아보았다. 내 선택이 남긴 표정들이 머릿속을 스쳤다.",
  '결말은 아직 오지 않았어. 하지만 무언가는 이미 달라졌어.',null,[]);
 NODES.v95_ending_truth=mk('다니엘 레온하르트',ch,
  "“형님, 조사 기록이 나오면 함께 읽어 주세요.”\n\n알렉스는 내 어깨를 두드렸다. 미겔은 멀리서 두 사람을 바라보다 자신이 준비한 새 서류를 들고 먼저 걸어갔다. 세 사람의 길은 달랐지만, 적어도 누구도 다른 사람의 이름을 대신 쓰지 않았다.",
  '이건 용서도 보상도 아니야. 내가 선택한 다음 걸음일 뿐이야.','explore');
 NODES.v95_ending_cover=mk('다니엘 레온하르트',ch,
  "서명은 철회할 수 있을지 몰라도 이미 번진 소문을 거둘 수는 없었다. 알렉스는 조사에 나섰고, 미겔은 코트리먼가의 이름으로 독자적인 구호 사업을 진행하겠다고 밝혔다.\n\n나는 아무 말도 하지 못했다. 내가 남긴 기록을 외면할 수 없었다.",
  '지나간 선택은 사라지지 않아. 이제 그 책임을 피하지 말아야 해.','explore');
 NODES.v95_ending_inquiry=mk('다니엘 레온하르트',ch,
  "나는 서기관에게 받은 접수증을 접어 품에 넣었다. 알렉스는 가문 기록 보관소를 열어 주겠다고 했고, 미겔은 자신의 기부 사업을 조사와 분리해 진행하겠다고 통보했다.\n\n시간은 벌었다. 그 시간을 어떻게 쓰는지가 다음 이야기의 시작이었다.",
  '모든 답을 오늘 찾을 순 없어. 그렇지만 내일도 같은 질문을 피할 수는 없어.','explore');
 // V94's chapter completion is the only new entry point; existing chapter routes stay intact.
 NODES.v94_epilogue.next='v95_invitation';
 const root=document.getElementById('choices');
 if(root)root.addEventListener('click',function(ev){
  const btn=ev.target.closest('button');if(!btn||!root.contains(btn)||btn.disabled)return;
  const node=NODES[state.node];if(!node||!Array.isArray(node.choices))return;
  const i=Array.from(root.children).filter(e=>e.tagName==='BUTTON').indexOf(btn),c=node.choices[i];if(!c||!c.v95Effect)return;
  const d=ensure(),key=String(state.node)+'#'+i;
  d.seen=d.seen||{};if(d.seen[key])return;d.seen[key]=true;
  const effects={together:['brother','together','virtue',2],alone:['brother','alone',null,0],voice:['miguel','voice','virtue',4],silence:['miguel','silence',null,0],truth:['rumor','truth','virtue',7],cover:['rumor','cover','karma',9],inquiry:['rumor','inquiry','virtue',2]};
  const e=effects[c.v95Effect];if(!e)return;d[e[0]]=e[1];if(e[2])v90Add(e[2],e[3],'왕궁의 선택 · '+c.text);
 },true);
 function route(){const p=path(),d=ensure();
  NODES.v95_brother_branch.next=p==='boundary'?'v95_brother_boundary':p==='instinct'?'v95_brother_instinct':'v95_brother_reason';
  NODES.v95_miguel_branch.next=p==='boundary'?'v95_miguel_boundary':p==='instinct'?'v95_miguel_instinct':'v95_miguel_reason';
  NODES.v95_final_branch.next=d.rumor==='cover'?'v95_ending_cover':d.rumor==='inquiry'?'v95_ending_inquiry':'v95_ending_truth';
  const note={apology:'그날 사과했지만 그녀의 거리는 그대로 남아 있다.',silence:'그날 침묵했던 일이 아직도 마음에 남아 있다.',linger:'거절 이후에도 미련을 놓지 못했던 자신을 기억한다.',accept:'그녀의 대답을 받아들이겠다고 결심했던 밤을 기억한다.'};
  NODES.v95_miguel_branch.thought=(note[history().response]||'온실에서 있었던 일을 기억한다.')+' 그녀의 결정을 존중하자.';
 }
 const prior=render;render=function(){if(String(state.node||'').startsWith('v95_'))route();prior();};
})();


// v96 — The forbidden volume: discoverable only when accumulated wrongdoing is high.
// This event never removes karma or virtue and does not reveal the scales in the first run.
(function(){
 const LIMIT=35;
 function record(){if(!state.v96Library||typeof state.v96Library!=='object')state.v96Library={found:false,read:false,refused:false,used:false};return state.v96Library;}
 function eligible(){return Number(v90Data().karma||0)>=LIMIT;}
 function chapter(){return 'CHAPTER 04 · 금서의 속삭임';}
 function node(speaker,text,thought,next,choices){return {speaker,chapter:chapter(),text,thought,next,choices};}
 NODES.v96_library_entry=node("다니엘 레온하르트","왕궁 서고는 늦은 밤에도 촛불이 꺼지지 않았다. 먼지 낀 장부와 봉인된 서책이 층층이 쌓여 있었다.\n\n나는 왕실 재무관이 감춘 기록을 찾으려 책장을 훑었다. 그때 가장 안쪽의 책 한 권이 손끝에 걸렸다. 책등에는 제목도, 저자도 없었다.",'왜 이 책만 유난히 차갑지?','v96_library_gate');
 NODES.v96_library_gate=node("다니엘 레온하르트","책갈피 아래에는 누군가 긁어 지운 문장이 남아 있었다.\n\n「타인의 뜻을 꺾어 운명을 바꾸려는 자에게, 대가는 반드시 돌아온다.」\n\n내 손바닥에 오래된 문양이 희미하게 떠올랐다.",'책이 나를 부르는 건가. 아니면 내가 이런 걸 찾고 있었던 건가.',null,[
  {text:'책을 펼쳐 금지된 마법의 기록을 읽는다',next:'v96_library_read',v96Action:'read'},
  {text:'봉인을 되돌리고 서고를 떠난다',next:'v96_library_refuse',v96Action:'refuse'}
 ]);
 NODES.v96_library_read=node("다니엘 레온하르트","책은 사람의 마음을 묶는 금지된 의식에 관해 서술하고 있었다. 그러나 완성된 주문은 찢겨 있었고, 남은 글은 대가와 실패한 사례뿐이었다.\n\n나는 한 장의 여백에서 익숙한 가문의 문장을 발견했다. 이것이 누구의 기록인지 알아내기 전에는 함부로 손댈 수 없었다.",'원하는 것을 얻는 방법이 아니라, 무엇을 잃게 되는지 적혀 있어.','v96_library_decision');
 NODES.v96_library_decision=node('다니엘 레온하르트','책을 덮으려는 순간, 촛불이 기울었다. 누군가 문밖에서 발소리를 멈췄다.','이걸 알렉스 형님께 말해야 할까. 미겔에게는 더더욱 숨겨선 안 되겠지.',null,[
  {text:'금서를 봉인하고 형에게 조사 사실을 알린다',next:'v96_library_report',v96Action:'report'},
  {text:'금서의 존재를 숨기고 혼자 보관한다',next:'v96_library_hide',v96Action:'hide'}
 ]);
 NODES.v96_library_refuse=node("다니엘 레온하르트","나는 책을 원래 자리에 돌려놓고 봉인된 끈을 묶었다. 촛불이 다시 똑바로 섰다.\n\n서고를 나서면서도 손끝의 냉기는 가시지 않았다.",'읽지 않았다고 해서 책이 없었던 일이 되는 건 아니야.','explore');
 NODES.v96_library_report=node('알렉스 레온하르트',"“금서라고?”\n\n알렉스는 장난기 없는 얼굴로 내 설명을 들었다. “네가 발견한 걸 숨기지 않은 건 잘한 일이야. 하지만 누군가의 마음을 바꾸는 마법이라면, 그건 누구를 위해서든 써선 안 돼.”\n\n미겔은 기록의 출처를 확인하되 자신의 이름을 허락 없이 끌어들이지 말라고 분명히 했다.",'둘 다 내 말을 들어줬어. 그러니 나도 그들의 뜻을 들어야 해.','explore');
 NODES.v96_library_hide=node("다니엘 레온하르트","나는 낡은 표지를 망토 안에 감추었다. 책의 모서리가 심장 가까이에 닿자 한기가 스몄다.\n\n서고를 나설 때까지 나를 불러 세우는 사람은 없었다. 그러나 책은 여전히 아무것도 약속하지 않았다.",'지금은 말하지 않을 거야. 그게 누구를 위한 침묵인지는 나도 모르겠어.','explore');
 const root=document.getElementById('choices');
 if(root)root.addEventListener('click',function(ev){const b=ev.target.closest('button');if(!b||!root.contains(b))return;const n=NODES[state.node];if(!n||!n.choices)return;const index=Array.from(root.children).filter(x=>x.tagName==='BUTTON').indexOf(b);const c=n.choices[index];if(!c||!c.v96Action)return;const r=record();if(c.v96Action==='read'){r.read=true;r.found=true;}if(c.v96Action==='refuse')r.refused=true;if(c.v96Action==='report'){r.reported=true;v90Add('virtue',3,'금서의 위험을 알리고 봉인함');}if(c.v96Action==='hide'){r.hidden=true;v90Add('karma',6,'금서의 존재를 숨김');}save();},true);
 function visit(){const r=record();if(!eligible()){modal('왕궁 서고','책장마다 오래된 기록이 쌓여 있다. 오늘은 특별한 것이 눈에 띄지 않는다.');return;}if(r.found||r.refused){modal('왕궁 서고','차가운 책이 있던 자리는 조용하다. 이미 마주한 선택은 기록되어 있다.');return;}state.node='v96_library_entry';save();render();}
 const hud=document.querySelector('#game .hud');if(hud&&!document.getElementById('v96LibraryBtn')){const b=document.createElement('button');b.id='v96LibraryBtn';b.type='button';b.textContent='▤ 서고 방문';b.addEventListener('click',visit);hud.append(b);}
 // Connect the chapter-three inquiry route to the library without replacing any existing story nodes.
 if(NODES.v95_ending_inquiry&&Array.isArray(NODES.v95_ending_inquiry.choices)){
  NODES.v95_ending_inquiry.choices.unshift({text:'왕궁 서고에서 조사 기록을 찾는다',next:'v96_library_entry',v96Entry:true});
 }
 const prevRender=render;
 render=function(){if(state.node==='v96_library_entry'&&!eligible()){state.node='explore';}prevRender();};
})();


// v97 — Absolute disposition: two independent, irreversible moral ledgers.
// At 100, Daniel cannot choose acts aligned with the opposite disposition.
// The first playthrough never discloses which side of the scales is responsible.
(function(){
 const MAX=100;
 const originalAdd=v90Add;
 v90Add=function(kind,amount,label){
  if(kind!=='karma'&&kind!=='virtue')return;
  const d=v90Data();
  const before=Math.max(0,Math.min(MAX,Number(d[kind])||0));
  d[kind]=before;
  const increment=Math.min(MAX-before,Math.max(0,Number(amount)||0));
  if(increment>0)originalAdd(kind,increment,label);
 };
 function disposition(){
  const d=v90Data(),v=Number(d.virtue)||0,k=Number(d.karma)||0;
  // Legacy saves with both values at/above 100 cannot retroactively lose records.
  // Whichever reached 100 first takes precedence, as recorded by the event ledger.
  if(v>=MAX&&k>=MAX){
   let a=0,b=0;
   for(const e of (d.events||[])){
    if(e.kind==='virtue'&&a<MAX)a+=Number(e.amount)||0;
    if(e.kind==='karma'&&b<MAX)b+=Number(e.amount)||0;
    if(a>=MAX&&b<MAX)return 'virtue';
    if(b>=MAX&&a<MAX)return 'karma';
   }
   return 'virtue';
  }
  return v>=MAX?'virtue':k>=MAX?'karma':null;
 }
 const harmful=/물통.{0,12}(차|엎|걷어)|발로.{0,12}(차|걷어)|괴롭|모욕|협박|강요|위협|배신|누명|책임을 떠넘|거짓 증언|조작|훔치|빼앗|해치|짓밟|짓궂게|손목을 붙잡|억지로|무시하고 밀어붙|금서의 존재를 숨기|금서를 숨기/;
 const helpful=/돕|구하|구조|기부|기도|치료|보호|사과|존중|진실을 밝|사실 확인|책임을 인정|잘못을 인정|봉인하고 형에게|증거를 요구|서명 거절|명의 바로잡|위로|구호|용서|사실을 알리/;
 function tendency(choice){
  if(!choice||choice.reset||choice.action==='home'||choice.action==='restartExplore'||choice.action==='nextDay')return null;
  if(choice.v97Moral==='karma'||choice.v97Moral==='virtue')return choice.v97Moral;
  if(choice.v91Moral==='karma'||choice.v91Moral==='virtue')return choice.v91Moral;
  const v95={together:'virtue',voice:'virtue',truth:'virtue',cover:'karma',inquiry:'virtue'};
  if(v95[choice.v95Effect])return v95[choice.v95Effect];
  if(choice.v96Action==='hide')return 'karma';
  if(choice.v96Action==='report')return 'virtue';
  if(['ignoredMiguel','sharedFate','defiedAlex'].includes(choice.v88Flag))return 'karma';
  if(['respectedMiguel','apologizedAlex','choseFreedom'].includes(choice.v88Flag))return 'virtue';
  const t=String(choice.text||'');
  if(harmful.test(t))return 'karma';
  if(helpful.test(t))return 'virtue';
  return null;
 }
 function prohibited(choice){const side=disposition(),kind=tendency(choice);return !!side&&!!kind&&side!==kind;}
 function refusal(){
  const d=v90Data(),side=disposition();
  const line=side==='virtue'?'그럴 생각이 들지 않는다.':'그런 행동을 할 마음이 들지 않는다.';
  // Do not expose the hidden nature or numeric threshold on the first run.
  const msg=d.revealed?(side==='virtue'?'선행의 무게가 다니엘의 행동을 붙잡는다. ':'업보의 무게가 다니엘의 행동을 붙잡는다. ')+line:line;
  if(typeof v90Flash==='function')v90Flash(msg);
  else if(typeof modal==='function')modal('선택할 수 없습니다',msg);
 }
 // Capture on document (before #choices and its older v91/v95/v96 handlers),
 // preventing blocked choices from modifying flags, stats, or story navigation.
 document.addEventListener('click',function(event){
  const target=event.target;
  if(!target||!target.closest)return;
  const b=target.closest('button');if(!b)return;
  const root=document.getElementById('choices');
  if(root&&root.contains(b)){
   const n=NODES[state.node];if(!n||!Array.isArray(n.choices))return;
   const idx=Array.from(root.children).filter(el=>el.tagName==='BUTTON').indexOf(b);
   const c=n.choices[idx];
   if(prohibited(c)){
    event.preventDefault();event.stopImmediatePropagation();refusal();
   }
   return;
  }
  // Prevent even zero-cost charitable activity when karma is fully dominant.
  if(disposition()==='karma'&&b.closest('.v90-activities')&&/기도한다|기부한다|사람을 돕는다/.test(b.textContent||'')){
   event.preventDefault();event.stopImmediatePropagation();refusal();
  }
 },true);
 const prevRender=render;
 render=function(){
  prevRender();
  const n=NODES[state.node],root=document.getElementById('choices');
  if(!n||!Array.isArray(n.choices)||!root)return;
  const buttons=Array.from(root.children).filter(el=>el.tagName==='BUTTON');
  for(let i=0;i<buttons.length;i++){
   const b=buttons[i],c=n.choices[i];
   if(prohibited(c)){
    b.classList.add('v97-moral-locked');
    b.setAttribute('aria-label',(c.text||'선택지')+' · 선택할 수 없음');
    b.setAttribute('aria-disabled','true');
    // Deliberately not disabled: clicking reveals Daniel's inner refusal.
   }else{
    b.classList.remove('v97-moral-locked');
    b.removeAttribute('aria-disabled');
   }
  }
 };
 const css=document.createElement('style');
 css.textContent='#choices button.v97-moral-locked{opacity:.55;filter:grayscale(.6);border-style:dashed;cursor:not-allowed}#choices button.v97-moral-locked:focus-visible{outline:2px solid #c4a2db;outline-offset:2px}';
 document.head.appendChild(css);
 // Also stop the two scales from simultaneously maxing out through future gains.
 const cappedAdd=v90Add;
 v90Add=function(kind,amount,label){
  const side=disposition();
  if(side&&side!==kind)return;
  cappedAdd(kind,amount,label);
 };
})();


// v98 — The Doll Bride. Mind control is an irreversible bad-ending choice.
(function(){
 const CH='HIDDEN BAD END · 인형 신부';
 const make=(speaker,text,thought,next,choices)=>({speaker,chapter:CH,text,thought,next,choices});
 function book(){return state.v96Library&&typeof state.v96Library==='object'?state.v96Library:null;}
 function available(){const b=book();return !!(b&&b.read&&b.hidden&&!b.reported&&!b.used);}
 NODES.v98_spell_temptation=make("다니엘 레온하르트",
  '금서의 마지막 장은 이전과 달리 온전했다. 빛바랜 문장은 다른 사람의 마음을 자신의 뜻에 묶는 금지 마법을 기록하고 있었다.\n\n그것은 사랑을 얻는 마법이 아니었다. 사랑할 수 있는 능력 자체를 앗아가는 마법이었다.\n\n다니엘은 미겔이 자신의 뜻을 분명히 밝혔던 순간을 떠올렸다. 그녀는 알렉스의 약혼자였고, 누구의 소유물도 아니었다.',
  '그분이 내게 웃어 준다면… 아니. 웃음마저 내 명령이 된다면 그건 무엇이지?',null,[
   {text:'금서를 봉인한다. 미겔의 마음은 미겔의 것이다.',next:'v98_spell_reject',v98Action:'reject',v97Moral:'virtue'},
   {text:'금지 마법으로 미겔의 마음을 지배한다.',next:'v98_spell_cast',v98Action:'cast',v97Moral:'karma'}
  ]);
 NODES.v98_spell_reject=make('다니엘 레온하르트',
  "나는 책을 닫았다. 손끝에 남은 문양은 천천히 희미해졌다.\n\n“나를 바라보지 않아도 괜찮습니다. 당신이 당신으로 남아 있는 편이 더 중요하니까요.”\n\n미겔에게 이 고백이 닿을 일은 없었다. 하지만 이번만큼은 나 자신이 들었다.",
  '사랑을 빼앗는 순간, 사랑은 사라진다.','explore');
 NODES.v98_spell_cast=make("다니엘 레온하르트",
  '다니엘은 마지막 구절을 읽었다. 검은 문양이 촛불을 타고 번졌다.\n\n미겔은 잠시 눈을 감았다가 다시 떴다. 그녀의 눈에는 공포도 분노도 없었다. 다니엘을 향해 언제나처럼 예의 바른 미소를 지었지만, 그 미소에는 아무런 선택도 담겨 있지 않았다.\n\n“다니엘 님이 바라시는 대로 하겠습니다.”\n\n다니엘은 자신이 듣고 싶었던 말이 얼마나 텅 비어 있는지 깨달았다.',
  '그분이 내 이름을 불렀어. 그런데 왜… 아무도 나를 바라보지 않는 것 같지?', 'v88_ending_doll_bride');
 NODES.v88_ending_doll_bride=make("다니엘 레온하르트",
  '혼례의 종이 세 번 울렸다. 세 개의 달이 떠오른 밤, 미겔은 하얀 베일 아래에서 한 치의 흐트러짐 없이 미소 지었다.\n\n“행복하십니까?” 다니엘이 물었다.\n\n“다니엘 님이 행복하시다면 저도 행복합니다.”\n\n그녀는 한 번도 자신이 원하는 것을 말하지 않았다. 노란 장미를 좋아하던 미겔, 가문의 땅을 지키려던 미겔, 자신의 이름으로 서명하던 미겔은 어디에도 없었다.\n\n알렉스는 혼례에 오지 않았다. 그는 마지막 편지에 단 한 줄을 남겼다. 「네가 사랑한 사람은 네가 지웠다.」\n\n다니엘은 신부의 손을 잡았다. 따뜻했다. 살아 있었다. 하지만 손을 놓아도 그녀는 돌아서지 않았다.\n\n그날부터 다니엘은 원하는 모든 대답을 들었다. 단 한 번도 진심을 듣지 못한 채.',
  '이제 영원히 함께야. 그런데… 왜 이렇게 조용하지?',null,[]);
 // The story is an immediate terminal ending: never route through the generic explore scene.
 const root=document.getElementById('choices');
 if(root)root.addEventListener('click',function(ev){
  const btn=ev.target.closest('button');if(!btn||!root.contains(btn))return;
  const n=NODES[state.node];if(!n||!Array.isArray(n.choices))return;
  const idx=Array.from(root.children).filter(e=>e.tagName==='BUTTON').indexOf(btn);
  const c=n.choices[idx];if(!c||!c.v98Action)return;
  const b=book();if(!b)return;
  if(c.v98Action==='cast'){
   b.used=true;b.usedOnMiguel=true;b.outcome='doll_bride';
   if(typeof v90Add==='function')v90Add('karma',20,'미겔의 자유의지를 금지 마법으로 빼앗음');
  }else{
   b.sealed=true;b.hidden=false;
   if(typeof v90Add==='function')v90Add('virtue',4,'마음 조종 금서를 봉인함');
  }
  save();
 },true);
 const hud=document.querySelector('#game .hud');
 if(hud&&!document.getElementById('v98SpellBtn')){
  const btn=document.createElement('button');btn.id='v98SpellBtn';btn.type='button';btn.textContent='✧ 금서의 마지막 장';
  btn.addEventListener('click',function(){
   if(!available()){modal('금서의 마지막 장','금서를 읽고 은닉한 뒤에만 이 장을 확인할 수 있습니다.');return;}
   state.node='v98_spell_temptation';save();render();
  });hud.append(btn);
 }
 const previousRender=render;
 render=function(){
  const btn=document.getElementById('v98SpellBtn');if(btn)btn.hidden=!available();
  if(state.node==='v88_ending_doll_bride'){
   if(typeof v90Complete==='function')v90Complete('doll_bride');
   if(typeof v88Record==='function')v88Record('doll_bride');
  }
  previousRender();
 };
 const css=document.createElement('style');css.textContent='#v98SpellBtn[hidden]{display:none!important}';document.head.append(css);
})();

// v99 — Extended literary Doll Bride route. Original v98 access checks and save hooks remain intact.
(function(){
const chapter="HIDDEN BAD END · 인형 신부";
if(NODES.v98_spell_temptation){NODES.v98_spell_temptation.text="왕궁의 서고가 잠든 시각, 마지막 촛불은 책상 위에 아주 작은 황금빛 원을 그렸다. 나는 손등에 묻은 먼지를 털지도 못한 채 금서의 마지막 장을 내려다보았다. 책장을 넘길 때마다 들리던 마른 종이의 소리가 이 페이지에서만 멎었다. 마치 종이가 아니라 누군가의 피부를 만지는 듯한 감촉이었다.\n\n나는 이 책을 발견한 날을 기억했다. 그때만 해도 내가 금지된 지식을 읽는 이유를 호기심이라고 불렀다. 미겔이 정중히 거절한 고백을 떠올리며 밤을 새운 것도, 알렉스의 얼굴을 똑바로 바라보지 못한 것도, 그저 시간이 지나면 괜찮아질 일이라고 여겼다. 그러나 마지막 장에는 핑계가 통하지 않았다.";NODES.v98_spell_temptation.thought="나는 그분을 사랑하는 걸까. 아니면 그분이 내 뜻대로 움직이기를 바라는 걸까.";}
NODES["v99_grimoire"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"책의 여백에는 오래된 필체로 짧은 주석이 남아 있었다. 「이 술식은 사랑을 심지 않는다. 저항할 수 있는 자리를 비울 뿐이다.」\n\n나는 그 문장을 세 번 읽었다. 마음을 바꾸는 마법이라면, 미겔이 나를 사랑하게 되는 것이라고 믿을 수도 있었을 것이다. 그러나 금서는 잔인할 만큼 정확했다. 시전자가 얻는 것은 사랑이 아니라 복종. 상대의 기쁨이나 슬픔을 지우는 대신, 그것을 스스로 선택할 권리를 먼저 앗아가는 술식이었다.\n\n그런데도 나는 책을 덮지 못했다. 마음 한구석에서는 이미 답을 알고 있었기 때문이다.",thought:"안 된다는 걸 알아. 그런데 왜 손이 떨어지지 않지?",next:"v99_before_choice",choices:[]};
NODES["v99_before_choice"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"창밖에서는 세 개의 달이 서로 다른 높이로 떠올랐다. 나는 미겔이 코트리먼 영지의 노란 장미를 이야기하던 오후를 떠올렸다. 자신이 직접 돌보는 땅의 이름을 말할 때 그녀의 목소리는 유난히 또렷해졌다. 알렉스와 미래를 의논할 때의 미소도 그러했다. 내가 사랑했던 것은 바로 그런 미겔이었다.\n\n그녀가 자기 의지로 살아가는 사람이라는 사실을 알면서도, 나는 그 의지를 빼앗을 수 있는 주문 앞에 서 있었다. 책은 아무것도 재촉하지 않았다. 마지막 선택만큼은 오롯이 내 것이었다.",thought:"여기서 멈추면 아직 돌아갈 수 있어.",next:"v98_spell_cast",choices:[]};
Object.assign(NODES.v98_spell_cast,{text:"다니엘은 손가락 끝으로 검은 활자를 따라갔다. 낯선 글자들은 읽는 법을 배운 적도 없는데 혀끝에 얹혔다. 글자와 소리가 서로 다른 시대에서 건너온 것처럼, 발음할 때마다 입안에 차가운 쇳맛이 번졌다.\n\n“에르 바엘 시아, 노에르 이사렌. 벨라트 오르, 미라 세르엔. 아샤 르 벤, 이르 나에.”\n\n마지막 음절이 떨어지자 촛불은 꺼지지 않고 검게 변했다. 금서의 표지에는 아주 작은 글씨가 새겨졌다. 「대가: 되돌아오지 않는 응답.」 다니엘은 그 문장을 보았으나, 이해하려 들지 않았다.",thought:"한 번만. 단 한 번만 그분이 나를 선택해 준다면.",next:"v99_spell_price"});
NODES["v99_spell_price"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"금지 마법은 미겔의 몸을 바꾸지 않았다. 그녀는 숨을 쉬고, 온기를 지니고, 노란 장미의 향기를 구분했다. 그러나 내가 그녀의 뜻을 물으면 그녀는 말을 멈췄다. 대답을 기다릴수록, 내가 무엇을 빼앗았는지가 선명해졌다.\n\n온실에서 내가 물었다. “미겔, 오늘은 어디로 가고 싶어?”\n\n“원하시는 곳으로 가겠습니다.”\n\n“네가 원하는 곳을 묻는 거야.”\n\n“……다니엘 님이 원하시는 곳입니다.”\n\n그녀의 말에서 '저는'이 사라진 뒤, 그 빈자리는 다시 채워지지 않았다. 나는 원하는 대답을 들었다. 단 한 번도 그녀의 대답을 듣지 못한 채.",thought:'나는 이름을 얻었다. 그 이름으로 대답하던 사람은 잃었다.',next:"v99_empty_answer",choices:[]};
NODES["v99_empty_answer"]={speaker:"미겔 코트리먼",chapter:chapter,text:"“오늘은 무엇을 하고 싶으십니까?”\n\n미겔은 잠시 눈을 내리깔았다. 무슨 말을 골라야 할지 고민하는 사람의 표정과 흡사했다. 그러나 그녀의 입에서 나온 것은 자신이 원하는 일이 아니었다.\n\n“다니엘 님께서 원하시는 일을 하겠습니다.”\n\n“아니요. 제 뜻 말고, 미겔 님의 뜻을 묻는 겁니다.”\n\n“제 뜻은 다니엘 님을 기쁘게 해 드리는 것입니다.”\n\n그녀는 공손하게 웃었다. 누구에게나 친절했지만 누구 앞에서도 자신을 잃지 않던 여자의 미소였다. 겉모습만은.",thought:"왜 저렇게 웃는 거지. 내가 원한 건 저런 표정이 아니었는데.",next:"v99_rose",choices:[]};
NODES["v99_rose"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"며칠 뒤 나는 온실에 노란 장미를 한 아름 가져왔다. 코트리먼가의 화원을 기억해 낸 작은 배려였다. 미겔은 꽃을 받아 들고 감사하다고 말했다.\n\n“어느 꽃이 가장 마음에 드십니까?”\n“다니엘 님께서 고르신 꽃이요.”\n\n나는 일부러 꽃 한 송이를 바닥에 내려놓았다. 줄기가 꺾여도 그녀는 눈썹 하나 움직이지 않았다. 예전의 미겔이라면 꽃을 함부로 다루지 말라고, 부드럽지만 단호하게 꾸짖었을 것이다.\n\n나는 몸을 굽혀 꽃을 주웠다. 꽃잎 사이에 맺힌 물방울이 손가락으로 떨어졌다. 차가웠다. 마치 내가 되돌릴 수 없는 무언가를 처음으로 만진 것 같았다.",thought:"화를 내 주세요. 한 번만이라도.",next:"v99_alex",choices:[]};
NODES["v99_alex"]={speaker:"알렉스 레온하르트",chapter:chapter,text:"알렉스는 미겔을 보자마자 이상을 알아차렸다. 수많은 연회와 협상 자리에서 사람의 표정을 읽어 온 남자였다. 무엇보다 그는 미겔이 원하지 않는 것을 거절할 때 어떤 눈빛을 하는지 알고 있었다.\n\n“미겔. 코트리먼 영지로 돌아가고 싶습니까?”\n\n그녀는 나를 바라보았다. 허락을 기다리는 듯한 시선이었다.\n\n알렉스의 표정에서 익숙한 여유가 사라졌다.\n\n“다니엘.” 그가 낮게 불렀다. “네가 무슨 짓을 했는지 말해.”\n\n나는 대답하지 못했다. 알렉스는 다시 묻지 않았다. 형님의 굳은 얼굴을 보니, 내 침묵이 이미 대답이 되어 버린 듯했다.",thought:"형은 알아버렸어. 내가 무슨 짓을 했는지.",next:"v99_brother",choices:[]};
NODES["v99_brother"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"알렉스는 내 멱살을 잡지 않았다. 분노보다 먼저 찾아온 것은 이해할 수 없다는 표정이었다. 내가 어릴 적 잘못을 저지르면 형님에게 먼저 달려가 털어놓던 모습을 기억하는 사람의 얼굴이었다.\n\n“네가 좋아했던 건 미겔의 어떤 모습이었지?”\n\n나는 입술을 달싹였다. 영리함, 다정함, 때로는 나를 똑바로 꾸짖던 태도. 그 모든 것을 말할 수 있었다.\n\n“그런데 네 손으로 그걸 없앴어.” 알렉스가 말했다. “내 약혼자를 빼앗은 게 아니야. 한 사람을 그 사람 자신에게서 빼앗은 거지.”\n\n그날 이후 알렉스는 나를 이름으로 부르지 않았다.",thought:"형이 나를 미워해도 돼. 하지만 저 말만은 틀렸다고 하고 싶어.",next:"v99_court",choices:[]};
NODES["v99_court"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"왕궁에는 곧 소문이 돌았다. 코트리먼 영애가 갑자기 레온하르트가의 막내와 혼인하겠다고 나섰다는 이야기였다. 그러나 미겔은 한 번도 스스로 그 뜻을 밝힌 적이 없었다. 귀족들은 이해관계에 따라 그 침묵을 해석했다. 누군가는 로맨스라고 불렀고, 누군가는 두 가문의 거래라고 불렀다.\n\n미겔의 부모는 딸을 데려가려 했다. 나는 그녀에게 누구와 함께 있고 싶은지 물었다. 미겔은 대답하기 전에 내 얼굴을 살폈다. 그리고 내가 듣고 싶어 할 말을 골라 말했다.\n\n나는 그 대답을 왕실에 제출했다. 종이 위에 찍힌 서명은 분명 미겔의 필체였다. 하지만 그 서명이 가리키는 뜻은 그녀의 것이 아니었다.",thought:"이제 모든 사람이 믿을 거야. 우리 둘이 서로를 선택했다고.",next:"v99_wedding",choices:[]};
NODES["v99_wedding"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"혼례는 세 개의 달이 떠오른 밤에 치러졌다. 레온하르트가의 남색과 금빛 장식 사이로 코트리먼가의 흰 리본과 초록 잎이 엮였다. 제단에는 노란 장미가 놓였다. 미겔이 한때 스스로 가꾸고 지키던 꽃들이었다.\n\n알렉스의 자리는 비어 있었다. 형님은 나를 위해 준비했던 축복을 끝내 건네지 않았다. 그의 마지막 말만이 내 귓가에 남았다. “네가 사랑한 건 그 사람이었잖아. 그런데 네 손으로 그 사람을 지웠어.”\n\n하얀 베일 아래 미겔은 아름답게 웃었다. 하객들은 그 미소를 보며 축하를 건넸다. 나는 알고 있었다. 그것은 내가 부탁한 표정이었다.\n\n주례가 신부에게 물었다. “미겔 코트리먼. 그대는 자신의 자유로운 의지로 이 혼인을 받아들이겠습니까?”\n\n침묵이 흘렀다.\n\n그녀는 대답할 수 없는 사람이 아니었다. 다만 무엇을 대답해야 하는지, 내가 알려 주지 않았을 뿐이었다.\n\n“……받아들인다고 말해, 미겔.”\n\n“받아들입니다.”\n\n그 말은 승낙의 형태를 하고 있었다. 그러나 승낙은 아니었다. 내가 나 자신에게 되돌려 들려준 말에 불과했다.\n\n성당의 종이 세 번 울렸다. 하객들은 일어나 박수를 쳤다. 박수 소리 속에서, 나는 우리 맹세가 서로 다른 곳에서 시작되었다는 사실을 홀로 삼켰다.",thought:'모두가 축복하고 있어. 그런데 왜 그녀의 대답은 내 목소리처럼 들리지?',next:"v99_vows",choices:[]};
NODES["v99_vows"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"주례는 서로를 존중하고 기쁠 때나 슬플 때나 함께하겠느냐고 물었다. 나는 대답했다. 미겔도 대답했다. 목소리는 맑고 흔들림이 없었다.\n\n그러나 두 사람의 맹세는 같은 무게가 아니었다. 한 사람은 스스로 선택했고, 다른 한 사람은 선택할 수 없었다. 제단의 촛불은 그 차이를 비추지 않았다.\n\n혼례가 끝난 뒤 나는 신부의 손을 잡았다. 따뜻했다. 맥박도 뛰었다. 나는 그 따뜻함에 매달렸다. 살아 있으니 괜찮다고, 웃고 있으니 행복할 것이라고, 내가 바란 모든 것이 마침내 이루어졌다고.",thought:"행복하다고 말해 주세요. 이번에는 내가 묻기 전에.",next:"v99_after",choices:[]};
NODES["v99_after"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"결혼 후의 나날은 놀라울 만큼 평온했다. 미겔은 내가 좋아하는 차를 내왔고, 내가 돌아오면 문 앞에서 맞이했다. 의견이 부딪히는 일도, 오해로 밤을 지새우는 일도 없었다. 내가 어떤 말을 하든 그녀는 이해한다고 대답했다.\n\n어느 저녁 나는 일부러 말도 안 되는 제안을 했다. 내일이면 코트리먼의 장미 화원을 모두 베어 버리겠다고. 미겔은 잠시 침묵하더니 고개를 숙였다.\n\n“다니엘 님께 필요하시다면 그렇게 하세요.”\n\n그 순간 나는 내가 사랑했던 여자가 더는 이 방에 없다는 것을 알았다. 그녀는 여전히 내 앞에 앉아 있었다. 그 사실이 오히려 더 잔인했다.",thought:"그만해. 제발 나를 말려 줘.",next:"v99_letter",choices:[]};
NODES["v99_letter"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"알렉스에게서 편지가 도착한 것은 겨울의 초입이었다. 봉투에는 레온하르트가의 인장이 찍혀 있었으나, 편지에는 형제 사이의 안부가 없었다.\n\n「네가 사랑한 사람은 네가 지웠다. 네 곁에 남은 것은 그녀의 동의가 아니라 네 명령의 메아리다. 그 사실을 잊지 마라.」\n\n나는 편지를 접어 서랍 깊숙이 넣었다. 태워 버릴 수도 있었지만 그러지 못했다. 글씨를 볼 때마다 형의 목소리가 들리는 것 같았다. 분노보다 더 깊은 실망, 나를 되찾을 수 없다고 깨달은 사람의 목소리였다.",thought:"형님이 틀렸다고 말해 줘. 미겔, 제발.",next:"v99_last_question",choices:[]};
NODES["v99_last_question"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"“미겔. 나를 사랑해?”\n\n“네, 다니엘 님.”\n\n“……그럼 사랑하지 않는다고 말해 봐.”\n\n“사랑하지 않습니다, 다니엘 님.”\n\n그녀의 표정에는 아무 변화도 없었다. 긍정과 부정이 똑같은 무게로 떨어졌다. 둘 중 어느 쪽에도 그녀의 마음은 들어 있지 않았다.\n\n나는 한참 동안 말이 없었다. 내게는 아직 무엇이든 말할 자유가 있었다. 그녀에게는 그 말을 따르는 일만 남아 있었다.\n\n창밖의 세 개의 달은 묵묵히 빛났다. 그 빛 아래에서 나는 마지막으로 명령하지 않는 질문을 해 보려 했다.\n\n“미겔…… 네가 정말 원하는 건 뭐야?”\n\n“무엇을 원하시나요, 다니엘 님?”\n\n그것이 대답이었다.",thought:'내가 질문할 때마다 그녀는 나를 되묻는다. 그녀 자신은 어디에도 없다.',next:"v99_final",choices:[]};
NODES["v99_final"]={speaker:"다니엘 레온하르트",chapter:chapter,text:"그날 밤 나는 서고의 금서를 다시 펼쳤다. 주문을 거꾸로 읽고, 지워진 여백을 맞추고, 책등의 실밥까지 풀었다. 되돌리는 구절은 없었다. 마지막 장에는 처음과 같은 경고가 남아 있었다. '빼앗은 뜻은 돌려줄 수 없다.'\n\n방으로 돌아왔을 때 미겔은 창가에 서 있었다. 내가 원하던 미소를 지으며, 내가 원하던 목소리로 인사했다.\n\n“어서 오세요, 다니엘 님.”\n\n나는 그녀의 손을 잡았다. 손은 따뜻했다. 그러나 내가 놓자 그녀는 다음 명령을 기다리듯 가만히 있었다.\n\n세 개의 달이 차례로 구름 뒤에 가려졌다. 나는 문득 예전의 호칭을 떠올렸다. 코트리먼. 그 이름을 부르면 자신의 뜻을 똑바로 말하던 여자. 이제 나는 '미겔'이라고 부를 수 있었지만, 그 이름의 주인에게서 어떤 대답도 받을 수 없었다.\n\n나는 거절하지 않는 신부를 얻었다. 그리고 거절할 수 있었기에 사랑했던 사람을 영원히 잃었다.\n\n그날부터 나는 원하는 모든 대답을 들었다. 단 한 번도 진심을 듣지 못한 채.",thought:'내가 원한 건 당신이었는데. 내가 남긴 건… 나를 바라보는 인형뿐이야.',next:"v88_ending_doll_bride",choices:[]};
NODES.v98_spell_temptation.choices.forEach(c=>{if(c.v98Action==="cast")c.next="v99_grimoire";});
NODES.v99_before_choice.next="v98_spell_cast";
NODES.v98_spell_cast.next="v99_spell_price";
NODES.v99_final.next="v88_ending_doll_bride";
Object.assign(NODES.v88_ending_doll_bride,{text:"BAD END — 인형 신부\n\n세 개의 달 아래 맺어진 맹세는 완성되었다. 그러나 그날의 신부는 한 번도 스스로 맹세하지 않았다.\n\nTHE END",thought:"사랑을 얻었다고 믿었던 순간, 나는 사랑할 수 있는 사람을 잃었다.",next:null,choices:[]});
})();


// v100 — Doll Bride final cut: the forbidden name, the erasure of first-person speech,
// the brother's witness, and the unanswered wedding vow. Narrative-only overrides;
// v98/v99 route gates, karma bookkeeping and NG+ visibility remain unchanged.
(function(){
 const CH='HIDDEN BAD END · 인형 신부';
 const scene=(speaker,text,thought,next)=>({speaker,chapter:CH,text,thought,next,choices:[]});
 NODES.v98_spell_cast=scene("다니엘 레온하르트",
 "서고의 문을 닫자 궁전의 소음이 멀어졌다. 창문 너머 세 개의 달은 저마다 다른 높이에 걸려 있었다. 하나는 은빛으로, 하나는 옅은 자줏빛으로, 가장 낮은 하나는 붉은 유리 너머를 보는 듯 어두운 빛으로 젖어 있었다. 달의 색이 변한 것은 아니었다. 촛불이 흔들릴 때마다 낡은 창의 색유리가 밤을 그렇게 왜곡하고 있을 뿐이었다.\n\n나는 책의 마지막 장을 펼쳤다. '이 술식은 마음을 얻지 않는다. 마음이 거절할 자리를 없앤다.' 몇 번이고 읽은 경고였다. 나는 이해하지 못한 것이 아니었다. 이해했기 때문에 더 오래 망설였고, 끝내 그 망설임마저 내 불행을 핑계 삼아 버렸다.\n\n문가에 선 코트리먼이 내 손에 들린 책을 알아보았다.\n\n“다니엘, 그 책을 내려놓으세요. 무슨 일을 하려는지 알고 계시잖아요.”\n\n그녀의 말에는 떨림이 없었다. 두려움보다 먼저 상황을 판단하는 사람의 목소리였다. 내가 수없이 사랑했다고 믿었던 바로 그 목소리.\n\n“코트리먼.”\n\n나는 평소처럼 그녀를 불렀다. 서로의 가문과 약속, 그리고 형의 이름까지 그 짧은 호칭 사이에 있었다.\n\n“제게는 안 된다고 말씀하시면서, 형에게는 웃어 주셨죠.”\n\n“제 웃음은 누구에게 허락을 받아야 하는 물건이 아니에요. 그리고 당신의 아픔이 제 선택을 대신할 수도 없어요.”\n\n그녀는 똑바로 나를 바라보았다. 그 말이 옳다는 것을 나는 알고 있었다. 그 사실이 나를 멈추게 하지는 못했다.\n\n책의 글자가 낯선 소리로 풀렸다.\n\n“에르 바엘 시아, 노에르 이사렌.”\n\n촛불의 심지가 한순간 검게 굽었다.\n\n“벨라트 오르, 미라 세르엔.”\n\n코트리먼은 뒤로 물러서면서도 시선을 피하지 않았다. “지금 멈추세요. 아직 당신이 선택할 수 있어요.”\n\n“아샤 르 벤, 이르 나에.”\n\n마지막 음절은 사람의 말이라기보다 문이 잠기는 소리에 가까웠다.\n\n나는 입술을 열었다. 익숙한 성을 부르려다가, 끝내 삼켰다.\n\n“……미겔.”\n\n허락받은 적 없는 이름이 두 사람 사이에 떨어졌다.\n\n“도망치지 마, 미겔.”",
 '그 이름을 부르는 순간부터, 나는 그녀의 대답을 기다리지 않았다.','v100_resistance');
 NODES.v100_resistance=scene('미겔 코트리먼',
 "“그렇게 부르지 마세요.”\n\n그녀가 즉시 대답했다. 나는 그 말에 잠깐 숨을 멈췄다. 아직 그녀는 자기 이름이 어떻게 불리기를 원하는지 말할 수 있었다.\n\n“당신이 저를 어떻게 생각하든, 저는 당신의 것이 아닙니다. 알렉스와의 약속 때문만이 아니에요. 제 삶은 처음부터 제 것이었으니까요.”\n\n그녀는 책상 위의 금서를 덮으려 손을 뻗었다. 그러나 손끝이 표지에 닿기 직전, 움직임이 끊겼다. 마치 자신이 내린 명령이 손가락까지 도착하지 못한 것처럼.\n\n“……손이…….”\n\n미겔은 눈썹을 찌푸렸다. 고개를 숙여 자신의 손을 살폈다가, 다시 나를 보았다.\n\n“이걸…… 멈추세요. 저는…… 이런 걸 원하지…….”\n\n말끝이 사라졌다. 두려움이 사라진 것이 아니었다. 두려움을 표현하기 위해 고르던 단어가 하나씩 그녀의 것이 아니게 되고 있었다.\n\n“저는…….”\n\n그녀가 다시 시작했다.\n\n“저는…….”\n\n나는 처음으로 내가 무엇을 빼앗고 있는지 똑똑히 들었다. 그녀는 문장을 완성하지 못했다. '저는' 뒤에 와야 할 생각이 더 이상 그녀에게 허락되지 않았기 때문이다.",
 '멈추라는 말을 들었다. 나는 끝내 멈추지 않았다.','v100_name');
 NODES.v100_name=scene('다니엘 레온하르트',
 "“미겔. 나를 봐.”\n\n그녀의 시선이 움직였다. 조금 전까지는 나를 바라볼지 말지 스스로 정하던 눈이었다. 이제는 이름이 불린 방향으로 정확히 돌아왔다.\n\n“제 이름을 불러 줘.”\n\n“……다니엘.”\n\n“내 곁에 있을 거지?”\n\n“네. 곁에 있겠습니다.”\n\n그녀는 묻지 않았다. 왜 그래야 하는지, 언제까지여야 하는지. 질문을 잃은 사람이 대답만을 남겼다.\n\n나는 떨리는 손을 뻗었다가 멈췄다. 미겔은 내 손을 피하지 않았다. 그렇다고 먼저 잡지도 않았다. 그녀는 명령이 오기를 기다리고 있었다.\n\n내가 원했던 것은 내 이름을 불러 주는 목소리였다. 하지만 지금 들리는 목소리에는 나를 선택한 사람이 없었다.",
 '미겔. 다시 한 번 나를 꾸짖어 줘. 아니, 그런 말을 할 자리가 아직 남아 있기는 할까.','v99_spell_price');
 
 
 
 
 
 
 
 
})();
