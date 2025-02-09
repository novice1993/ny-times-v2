import iconv from 'iconv-lite';
import { redisService } from '@/lib/redisService';
import { parsingHtml } from './parsingHtml';

export const getNewsArticle = async (url: string, page: string | null) => {
  /** 쿼리 스트링 값이 page=2 이상일 때만 첨부하여 호출 */
  const requestUrlWithQueryString =
    !page || page === '1' ? url : `${url}&page=${page}`;

  /** redis에 저장해놓은 데이터가 존재할 경우 */
  const caching = await redisService.get(requestUrlWithQueryString);

  if (caching) {
    return {
      nextPageRedisKey: requestUrlWithQueryString,
      articles: JSON.parse(caching),
    };
  }

  /** caching 데이터가 존재하지 않을 경우 */
  const response = await fetch(requestUrlWithQueryString);

  if (!response.ok) {
    throw new Error(
      `[Error] status: ${response.status}, statusText: ${response.statusText}`
    );
  }

  const buffer = await response.arrayBuffer();
  const html = iconv.decode(Buffer.from(buffer), 'EUC-KR'); // UTF-8 방식으로 디코딩
  const articles = parsingHtml(html); // 기사 제목, 주소, 신문사, 날짜 데이터 parsing

  // redis에 caching 처리 후 반환
  redisService.set(requestUrlWithQueryString, JSON.stringify(articles));
  return { nextPageRedisKey: requestUrlWithQueryString, articles };
};
