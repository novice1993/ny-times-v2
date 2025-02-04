import iconv from 'iconv-lite';
import { generateCurrnetDate } from './utils.news';
import { redisService } from '@/lib/redisService';
import { parsingHtml } from './parsingHtml';

const baseUrl =
  'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&oid=009&listType=paper';

export const getNewsArticle = async (page: string | null) => {
  /** page 관련 query string 이 존재하지 않을 경우 -> 1페이지 호출 */
  const requestUrl = `${baseUrl}&date=${generateCurrnetDate()}&page=${page ?? 1}`;

  /** redis에 저장해놓은 데이터가 존재할 경우 */
  const caching = await redisService.get(requestUrl);

  if (caching) {
    return { redisKey: requestUrl, articles: JSON.parse(caching) };
  }

  /** caching 데이터가 존재하지 않을 경우 */
  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error(
      `[Error] status: ${response.status}, statusText: ${response.statusText}`
    );
  }

  const buffer = await response.arrayBuffer();
  const html = iconv.decode(Buffer.from(buffer), 'EUC-KR'); // UTF-8 방식으로 디코딩
  const articles = parsingHtml(html); // 기사 제목, url 만 parsing

  // redis에 caching 처리 후 반환

  redisService.set(requestUrl, JSON.stringify(articles));
  return { redisKey: requestUrl, articles };
};
