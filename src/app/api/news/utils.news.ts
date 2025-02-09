import { redisService } from '@/lib/redisService';

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

/** 첫번쨰 페이지와 기사 목록이 일치하는지 체크하는 함수 */
type ArticlesType = Array<{ title: string }>;

export const isLastPage = async ({
  firstPageRedisKey,
  nextPageArticles,
}: {
  firstPageRedisKey: string;
  nextPageArticles: ArticlesType;
}) => {
  const caching = await redisService.get(firstPageRedisKey);
  if (!caching) return;

  const firstPageArticles = await JSON.parse(caching);
  if (firstPageArticles[0].title === nextPageArticles[0].title) {
    return true;
  }

  return false;
};
