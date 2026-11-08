# DELHARSA v134 프로젝트 전수 점검

## 처리한 항목
- `index.html`에서 참조하지만 v133 ZIP에는 없는 `title-menu-v127.css`를 v127 원본에서 복구했습니다.
- `docs/archive/updates/`의 개별 업데이트 노트 20개를 `docs/archive/UPDATES_COMBINED.md`로 원문 합본화하여 개별 파일을 제거했습니다.
- README 및 변경 이력을 갱신했습니다.

## 확인된 실제 중복 파일 (내용 SHA-256 동일)
- `assets/backgrounds/garden.webp` = `assets/backgrounds/rose_garden.webp`
- `assets/backgrounds/grand_hall.webp` = `assets/backgrounds/palace.webp`
- `assets/backgrounds/leonhardt_manor.webp` = `assets/backgrounds/manor.webp`

이 세 쌍은 런타임이 별도 이름으로 접근할 가능성이 있으므로 삭제하지 않았습니다. 파일명 자체가 호환성 인터페이스일 수 있어, 안전한 정리에서는 참조 경로를 깨뜨리지 않는 것이 우선입니다.

## 의도적으로 유지한 항목
- `lore/`의 연대기별 기록: 서로 다른 사건·확정 시점의 근거 문서이며 단순 중복으로 간주하지 않음
- `.git/`: GitHub Desktop의 저장소 연속성을 위해 보존
- 이미지·음원·JS·CSS의 기존 경로와 저장 키

## 검증 범위 및 한계
- ZIP CRC 검사, 경로 중복 검사, 정적 HTML의 로컬 src/href 참조 검사, JavaScript 문법 검사 대상.
- 실제 브라우저 전 분기 플레이 및 GitHub 배포 테스트는 별도로 필요합니다.
