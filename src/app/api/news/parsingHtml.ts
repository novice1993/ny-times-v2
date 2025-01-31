import { parse } from 'node-html-parser';

export const parsingHtml = (html: string) => {
  const root = parse(html);

  /** 기시 목록이 담긴 div 탐색 (class = list_body.newsflash_body)*/
  const mainContent = root.querySelector('div.list_body.newsflash_body');

  if (!mainContent) {
    console.error("❌ 'list_body.newsflash_body' 요소를 찾을 수 없음.");
    return [];
  }

  const articles: { title: string; url: string }[] = [];

  /** 해당 div 내부에서 `ul > li > dl > dt > a` 요소만 탐색 */
  mainContent.querySelectorAll('ul li dl dt a').forEach((articleLink) => {
    const title = articleLink.text.trim();
    const url = articleLink.getAttribute('href') || '';

    if (title && url) {
      articles.push({ title, url });
    }
  });

  return articles;
};
