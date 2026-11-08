# v148 — 타이틀 UI 통합 정리

- 사용자가 제공한 `assets/ui/ui_choice_frame.png`(2172×724, 3:1)를 PC와 모바일 타이틀 버튼에 직접 적용합니다.
- 과거 타이틀 스타일 파일 5개(`title-menu-v127.css`, `title-layout-v139.css`, `title-choice-frame-v140.css`, `layout-fix-v144.css`, `mobile-title-v147.css`)를 연결 해제하고 제거했습니다.
- 대사창 관련 v144 규칙은 `dialogue-layout.css`로 분리해 보존했습니다.
- 타이틀의 유일한 최신 스타일은 `title-ui.css`입니다. 모바일에서는 원본 프레임 비율을 유지하는 2열 메뉴를 사용합니다.
- 게임 선택지는 기존 `choice-ui-v130.css`를 유지하며, 게임 로직·저장 키는 변경하지 않았습니다.
- 화면 크기가 극단적으로 낮을 때에만 메뉴 영역의 세로 스크롤을 허용합니다.
- 실제 갤럭시/PC 브라우저의 시각·터치 테스트는 별도로 필요합니다.
