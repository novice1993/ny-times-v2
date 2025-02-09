/\*

- 개발 중에 발견한 문제점 (일단 skip)

  - develop article 중 동일한 title, url을 가진 데이터가 복수로 넘어오는 경우가 있음
  - api route 에서 호출 시, 데이터가 어떻게 처리되는지 먼저 확인
  - 만약 외부 호출 api에서 그대로 호출하는 거라면, api route에서 동일 title filtering 하는 util 추가하여 처리
  - 일단 임시 방편으로 컴포넌트 key 값에 index 부여하여 에러 방지

\*/
