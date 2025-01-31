import iconv from 'iconv-lite';
import { generateCurrnetDate } from './generateCurrentDate';
import { parsingHtml } from './parsingHtml';

const baseUrl =
  'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&oid=009&listType=paper';

export const getNewsArticle = async () => {
  const response = await fetch(`${baseUrl}&date=${generateCurrnetDate()}`);

  if (!response.ok) {
    throw new Error(
      `[Error] status: ${response.status}, statusText: ${response.statusText}`
    );
  }

  const buffer = await response.arrayBuffer();
  const html = iconv.decode(Buffer.from(buffer), 'EUC-KR'); // UTF-8 방식으로 디코딩

  return parsingHtml(html); // 기사 제목, url 만 parsing 해서 반환
};
