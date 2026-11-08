# DELHARSA : 보라색의 밤 — 프로젝트 안내 (중복 정리 v134)

GitHub Pages용 정적 HTML/CSS/JavaScript 게임. 시작 파일은 `index.html`입니다.

## 빠른 길잡이
- 게임 실행: `index.html` (배포 환경에서는 정적 웹 서버 사용 권장)
- 스토리·로직: `game.js` 및 관련 JS 파일
- 스타일: `style.css`, `console-ui-v126.css`, `choice-ui-v130.css`
- 이미지·음악: `assets/`
- **최신 세계관·인물 정전:** [`lore/DELHARSA_CANON_MASTER.md`](lore/DELHARSA_CANON_MASTER.md)
- 설정 원본·버전별 각색 기록: `lore/`
- 변경 이력: [`docs/CHANGELOG.md`](docs/CHANGELOG.md)
- 과거 버전별 업데이트 노트: [`docs/archive/UPDATES_COMBINED.md`](docs/archive/UPDATES_COMBINED.md)

## 호환성
중복 정리 v134은 실행용 HTML·CSS·JavaScript, 이미지·음악, 저장 키 및 스토리 분기를 수정하지 않습니다. `delharsha_purple_night_v1` 저장 키를 유지합니다.

## 주의
기존 원본 프로필과 게임 각색 사건은 구분합니다. `lore/` 안의 오래된 버전 기록이 현재 확정 설정과 충돌하면 통합 정전 문서를 우선 참조하세요. 브라우저 실제 플레이 회귀 테스트는 별도입니다.

## 원본 보관
기존 루트 업데이트 노트는 `docs/archive/updates/`로 이동해 원문 그대로 보존했습니다. `.git/` 저장소 메타데이터도 원본 그대로 보존했습니다.

## v134 정리 사항
- 누락된 `title-menu-v127.css`를 v127 원본에서 복구했습니다.
- 과거 업데이트 노트 20개를 원문 손실 없이 하나의 문서로 합쳤습니다.
- 같은 내용의 배경 이미지 3쌍은 현재 코드의 경로 호환성을 위해 유지했습니다(중복 현황은 `docs/PROJECT_AUDIT.md`).
- Git 기록 및 게임 저장 키, 스토리 데이터, 에셋 경로는 변경하지 않았습니다.
