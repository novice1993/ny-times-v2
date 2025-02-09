import { parse } from 'node-html-parser';

export const parsingHtml = (html: string) => {
  const root = parse(html);

  /** 기시 목록이 담긴 div 탐색 (class = list_body.newsflash_body)*/
  const mainContent = root.querySelector('div.list_body.newsflash_body');

  if (!mainContent) {
    console.error("❌ 'list_body.newsflash_body' 요소를 찾을 수 없습니다.");
    return [];
  }

  const articles: {
    title: string; // 기사 제목
    url: string; // 주소
    writing: string; // 신문사
    date: string; // 일자
  }[] = [];

  mainContent.querySelectorAll('ul li dl').forEach((dtElement) => {
    const writing =
      dtElement.querySelector('span.writing')?.textContent.trim() || '';
    const date = dtElement.querySelector('span.date')?.textContent.trim() || '';

    // dt 내부의 a 태그 탐색 후 title, url 추출
    const articleLink = dtElement.querySelector('a');
    if (articleLink) {
      const title = articleLink.text.trim();
      const url = articleLink.getAttribute('href') || '';

      if (title && url) {
        articles.push({ title, url, writing, date });
      }
    }
  });

  /** 일치하는 요소가 없으면 빈 배열 반환 */
  return articles;
};
