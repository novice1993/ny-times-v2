import iconv from 'iconv-lite';
import { redisService } from '@/lib/redisService';
import { parsingHtml } from './parsingHtml';

export const getNewsArticle = async (date: string, page: string | null) => {
  const baseUrl = `https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&oid=009&listType=paper&date=${date}`;
  const requestUrl = page ? `${baseUrl}&page=${page}` : baseUrl;

  /** redis에 저장해놓은 데이터가 존재할 경우 */
  const caching = await redisService.get(requestUrl);

  if (caching) {
    const { articles, totalPageNum } = JSON.parse(caching);
    return { articles, totalPageNum };
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
  const { articles, totalPageNum } = await parsingHtml(html, date); // 뉴스 기사 목록, 전체 페이지 수 parsing

  // redis에 caching 처리 후 반환
  redisService.set(requestUrl, JSON.stringify({ articles, totalPageNum }));
  return { articles, totalPageNum };
};
