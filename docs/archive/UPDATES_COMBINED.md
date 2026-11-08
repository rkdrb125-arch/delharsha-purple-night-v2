# DELHARSA 과거 업데이트 노트 통합 보관본

원본 v133에 포함된 업데이트 노트 20개를 원문 그대로 이어 붙였습니다. 각 문서의 출처 경로를 표시합니다.


---

## 원본: `docs/archive/updates/KARMA_v88_README.md`

# DELHARSA v88 KARMA

기존 v87 게임과 저장 데이터 키를 유지합니다.

- 게임 메뉴의 `⚖ 업보`: 6개 수치 확인
- `☾ 운명의 갈림길`: 별도 선택형 KARMA 에피소드 진입
- `✦ 엔딩 도감`: 해금한 8종 추가 엔딩 확인
- 업보 수치는 기존 저장하기/불러오기에 포함됩니다. 엔딩 도감은 별도 localStorage 키에 보관됩니다.
- 기존 메인 스토리 엔딩은 변경하지 않았습니다. 신규 비극 엔딩은 별도의 갈림길에서 플레이할 수 있습니다.
- 실사/영상 에셋 추가 없이 기존 화면에서 텍스트형 엔딩을 제공합니다.
- 기존 v87 파일을 기준으로 제작했습니다. 배포 전 새 저장소 상태를 백업하세요.



---

## 원본: `docs/archive/updates/PV_V86_README.md`

# DELHARSA v86 — Cinematic Opening

Base: previously generated v85 GitHub Pages filename-fix ZIP. **Not verified against live v2 repository.**

Features: 77-second original otome-inspired cinematic intro, existing background artwork, Korean/Japanese opening tracks, skip and title transition. Intro begins after a user click to comply with browser audio autoplay policies. Returning within the same browser tab session skips the intro; close and reopen tab to view again. The intro does not modify game.js, bgm.js, opening.js, save schema, or assets.

Deploy: upload extracted contents to v2 repository root, replacing existing files; preserve any v2-specific changes by merging instead of overwriting if v2 has advanced. Ensure old broken filenames do not reappear.

Note: visual novel PV motion is implemented with CSS/JS, not an MP4 file. Images are scenic backdrops; character name cards are typographic, since no isolated character sprites were available in this archive.



---

## 원본: `docs/archive/updates/V101_SPECIAL_README.txt`

v101 특별 에피소드 01 ACT 01~04
타이틀 화면의 특별 에피소드 버튼으로 시작합니다.
기존 본편과 저장 키, 자산 보존.
ACT 05~06은 미구현입니다.



---

## 원본: `docs/archive/updates/V104_CHANGELOG_KO.txt`

DELHARSA v104: 초반 본편 스크립트 1차 정합성 교정
자세한 내용: lore/V104_SCRIPT_AUDIT_KO.md
원본: v103 / 저장 데이터 키와 자산 유지



---

## 원본: `docs/archive/updates/V109_OPENING_NOTES.md`

첫 게임 스토리 노드 cinematic_moons를 아셀 왕국 초대장으로 변경. 7일 연회 및 마지막 날 대무도회 명시. 기존 인트로와 타이틀 후 프롤로그 연결 유지. 저장 키 및 에셋 보존.



---

## 원본: `docs/archive/updates/V110_LETTER_DESIGN_NOTES.md`

v110: 아셀 왕실 초대장 첫 장면 문장 다듬기, 게임 배경에 반응형 왕실 편지 카드, 보라 봉랍, 금박 느낌, 페이드인 추가. 이후 서사/저장 데이터 변경 없음.



---

## 원본: `docs/archive/updates/V111_IMPLEMENTATION_NOTES.md`

v111: Interactive royal letter, click wax, unfold parchment, Daniel inner monologue. Keeps existing story nodes and save key. No new worldbuilding claims.



---

## 원본: `docs/archive/updates/V112_TITLE_NOTES.md`

# v112 — unlockable title artwork
- The original title artwork and logo are retained.
- Transparent silver/gold typographic menu sits over a continuous illustration; no menu card or panel.
- Existing menu handlers are preserved. Gallery and Options are wired to existing functions/buttons.
- Title image choices persist separately from game saves under delharsha_title_art_choice_v1.
- Unlocked images derive from the existing ending gallery key. Place future illustrations at assets/title-endings/<ending-id>.webp; missing art safely falls back to base title.
- No ending art was fabricated or marked as unlocked. Existing endings and all assets remain intact.



---

## 원본: `docs/archive/updates/V113_CURSOR_NOTES.md`

v113: SVG gold/silver decorative wings slide between real title menu buttons; mouse, keyboard, focus and touch integration; existing click actions unchanged.



---

## 원본: `docs/archive/updates/V114_OPENING_FIX.md`

# DELHARSA v114 — Opening continuity hotfix
- The opening cinematic no longer closes when the soundtrack ends before the 77-second visual timeline.
- The cinematic still completes naturally at its planned ending; SKIP and Escape continue to work.
- Visibility pause/resume is guarded against duplicate elapsed-time accumulation.
- Cache-bust cinematic-opening.js in index.html.
- All other existing game and asset files preserved byte-for-byte.



---

## 원본: `docs/archive/updates/V118_CHANGELOG_KO.txt`

v118 오류 수정
- 왕실 초청장 마지막 독백 클릭/탭 시 다음 스토리로 진행
- 오프닝 및 초청장 텍스트 선택/드래그 방지
- 기존 자산 및 저장 데이터 키 보존



---

## 원본: `docs/archive/updates/V121_UI_NOTES.md`

# DELHARSA v121 — Royal UI frame refinement

Base: v120 tap-to-continue ZIP.

The four supplied images were byte-identical to assets already in v120:
- 1000064111 -> assets/ui/ui_interface_frame.png (settings/save modal)
- 1000064112 -> assets/ui/ui_choice_frame.png (choices)
- 1000064113 -> assets/ui/ui_dialogue_frame.png (dialogue)
- 1000064114 -> assets/ui/ui_nameplate.png (speaker nameplate)

This update refines responsive padding, spacing and frame rendering and cache-busts style.css. Story, scripts, music, backgrounds and save keys remain unchanged.



---

## 원본: `docs/archive/updates/V122_INVITATION_FIX.md`

v122: document-level capture for pointerup/click on final invitation narration. No visible next button. Removes listeners on scene exit; prevents double advancement. Cache-busted game.js and CSS.



---

## 원본: `docs/archive/updates/V123_AUTO_INVITATION.md`

v123: 왕실 초청장 무터치 자동 진행. 0~3.6초 편지 개봉, 3.6~7.6초 본문, 7.6~11.9초 독백, 11.9초 다음 스토리. 버튼 제거. 기존 저장 데이터 변경 없음.



---

## 원본: `docs/archive/updates/V125_CURSOR_NOTES.md`

# DELHARSA v125
- Added royal amethyst mouse cursor image (96x96, transparent)
- Added mouse-following glitter and click sparkles; pointer-events disabled, capped at 65 particles
- Desktop fine-pointer only; reduced-motion disables effects; existing game logic unchanged



---

## 원본: `docs/archive/updates/V129_TEXT_CLICK_FIX.md`

DELHARSA v129 — 텍스트 클릭 진행 수정

기준: v128 전체 프로젝트.
- 대사 출력 중 클릭: 현재 문단 전문 즉시 표시
- 다음 클릭: 다음 문단 또는 다음 스토리로 진행
- 기존 v87 대사창 클릭 핸들러와 v126 화면 클릭 핸들러의 중복 실행 방지
- 선택지, 설정, 메뉴, 모달 클릭은 진행 처리하지 않음
- 기존 저장 데이터 및 스토리 변경 없음

검증: JavaScript 구문 검사, ZIP 무결성 검사. 브라우저 실기 테스트는 별도 필요.



---

## 원본: `docs/archive/updates/V87_CHANGELOG.txt`

DELHARSA v87: 문단 분할(최대 약 85자), 40ms/글자 타이핑, 터치/다음 버튼으로 즉시 완성, 문단 완료 후 진행, 독백 분리. v86 전체 파일과 저장키 유지.



---

## 원본: `docs/archive/updates/V89_UPDATE_NOTES.md`

# DELHARSA v89

- 업보 갈림길에 해피/트루/시크릿 해피 엔딩 5종 추가 (기존 8종 비극 엔딩 및 기존 본편 엔딩 보존).
- 긍정적 선택 3종 추가, 업보 조건 및 선택 플래그 기반 해금, 기존 엔딩 도감 연동.
- BGM 패널 기본 숨김. 게임 설정 → 배경음악 세부 설정에서만 열림.
- 장면별 자동 BGM 및 크로스페이드 유지, 사용자의 첫 화면 터치에 맞춘 재생 재시도.
- 모바일 Chrome/Android는 사용자 제스처 전 자동 소리 재생을 차단할 수 있으므로 최초 터치가 필요할 수 있음.
- v88 기반으로 제작. 새 저장소의 배포본과 정확히 동일한지는 별도 확인 필요.



---

## 원본: `docs/archive/updates/V91_UPDATE_NOTES.md`

# DELHARSA v91 — 본편 선행·업보 연동

- v90을 기준으로 제작. 기존 에셋/음악/오프닝/타이핑/저장키 보존.
- 본편 선택지의 도덕적 행동을 선행·업보로 기록. 같은 장면/선택/날짜의 중복 누적 방지.
- 기존 v88 운명의 갈림길 선택과 성당 활동도 유지.
- 13개 추가 엔딩은 기존 인물 관계·플래그 조건에 더해 선행/업보 조건을 적용.
- 첫 엔딩 이후 새 회차부터 운명의 저울 수치 및 엔딩 조건 공개.
- 회차별 누적 수치는 새 회차에서 시작하지만 모든 과거 사건은 별도 메타 저장소에 남음.
- 주의: 기존 엔딩 전체에 대한 자동 테스트가 아닌 JS 구문/ZIP 검사만 수행.
- 일부 본편 선택지는 의미를 문구 기반으로 판정하므로 추후 시나리오별 수동 검수가 권장됨.



---

## 원본: `docs/archive/updates/V92_STORY_NOTES.md`

# DELHARSA v92 — 본편 스토리 보강

- 황궁 소문, 다친 시종, 알렉스와의 대화로 이어지는 신규 15개 장면 추가.
- 3회의 선택 분기와 결과 장면을 기존 CHAPTER 01 흐름에 자연스럽게 연결.
- 다니엘의 심리, 미겔과 알렉스의 약혼, 궁정의 시선, 선행/업보의 복선을 강화.
- 신규 선행/업보 선택은 v91의 명시적 `v91Moral` 판정 사용.
- 첫 회차 저울 비공개/2회차 공개 및 기존 엔딩 분기 유지.
- 기존 게임 저장 키, 음악, 시네마틱, 타이핑, 에셋 파일 보존.
- 신규 장면은 기존 파일의 서술 방식에 맞춘 텍스트 중심이며 신규 이미지/음악은 포함하지 않음.

