/\*

- 개발 중에 발견한 문제점 (일단 skip)

  - develop article 중 동일한 title, url을 가진 데이터가 복수로 넘어오는 경우가 있음
  - api route 에서 호출 시, 데이터가 어떻게 처리되는지 먼저 확인
  - 만약 외부 호출 api에서 그대로 호출하는 거라면, api route에서 동일 title filtering 하는 util 추가하여 처리
  - 일단 임시 방편으로 컴포넌트 key 값에 index 부여하여 에러 방지

- 문제점2
  - news 기사 불러올 시, A1면의 맨 첫번쩨 기사를 불러오지 못함
    - 페이지네이션 설정 관련하여 첫번째 기사를 캐싱한 값을 활용하는 방법이 효율적이지 못하다고 판단됨
      - <div class="topbox_type6">
                                  <div>
                                      <ul>
                                          <li><a href="?mode=LPOD&mid=sec&oid=009&listType=paper&date=20250201&page=1"
                                                  class="on nclicks(cnt_order)">A1~A10면</a></li>
                                          <li><a href="?mode=LPOD&mid=sec&oid=009&listType=paper&date=20250201&page=2"
                                                  class="nclicks(cnt_order)">A11~A20면</a></li>
                                          <li><a href="?mode=LPOD&mid=sec&oid=009&listType=paper&date=20250201&page=3"
                                                  class="nclicks(cnt_order)">A21~A30면</a></li>
                                      </ul>
                                  </div>
                              </div>
      - 위와 같은 방식으로 신문 페이지를 선택할 수 있도록 html을 제공하므로 이를 활용하는 방법 고안

\*/
