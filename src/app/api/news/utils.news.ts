/** 오늘 날짜를 계산하는 함수 (yyyymmdd 형식으로 반환) */
export const generateCurrnetDate = () => {
  const now = new Date();
  const koreaTime = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  return koreaTime.replace(/\. /g, '').replace(/\./g, ''); // "yyyy. mm. dd." → "yyyymmdd"
};

export const generateResponseData = (
  articles: [],
  page: null | string,
  totalPageNum: null | string
) => {
  // 기사 목록이 존재하지 않을 때 -> 빈 배열 반환
  if (articles.length === 0) {
    return { articles: [] };
  }

  // page 쿼리 스트링이 존재하지 않을 경우, 1페이지 데이터를 받아옴 -> 다음 페이지 2페이지
  if (!page) {
    return { articles, nextPage: 2 };
  }

  // 전체 페에지 수와 비교했을 때, 현재 페이지가 동일하거나 클 경우 nextPage 반환하지 않음
  if (totalPageNum && Number(page) >= Number(totalPageNum)) {
    return { articles };
  }

  // 네이버에서 5페이지 다음에 바로 7페이지로 처리하고 있어서 엣지 케이스 처리 (왜 이렇게 처리하는지 이유는 알 수 없음)
  if (Number(page) === 5) {
    return { articles, nextPage: 7 };
  } else {
    return { articles, nextPage: Number(page) + 1 };
  }
};
