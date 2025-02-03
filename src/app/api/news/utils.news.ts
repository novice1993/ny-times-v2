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

/** 쿼리 스트링으로 전달된 page num에 +1을 더해서 문자열로 반환하는 함수 */
export const plusQueryStringPageNum = (currentPageNum: string | null) => {
  if (currentPageNum) {
    const nextPageNum = Number(currentPageNum) + 1;
    return String(nextPageNum);
  }

  // page num 관련 query string이 존재하지 않으면, 현재 페이지를 1로 간주 (다음 페이지 2 반환)
  return String(2);
};

/** 현재 불러온 페이지가 신문의 마지막 페이지인지 판별하는 함수 */
type ArticlesType = Array<{ title: string }>;

export const isLastPage = (
  currentPageArticles: ArticlesType,
  nextPageArticles: ArticlesType
) => {
  if (currentPageArticles[0].title === nextPageArticles[0].title) {
    return true;
  }

  return false;
};
