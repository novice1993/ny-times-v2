import { HTMLElement } from 'node-html-parser';
import { redisService } from '@/lib/redisService';

/** 기사 관련 HTML을 parsing 하는 API */
export const parsingArticle = (root: HTMLElement) => {
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
      const title = articleLink.text.trim() || '';
      const url = articleLink.getAttribute('href') || '';

      if (title && url) {
        articles.push({ title, url, writing, date });
      }
    }
  });

  return articles;
};

/** 기사 전체 페이지 수 관련  HTML을 parsing 하는 API */
export const parsingTotalPageNum = async (root: HTMLElement, date: string) => {
  const totalPageNumKey = `${date}_TOTAL_PAGE_NUM`;

  // caching 된 값이 있는지 확인
  const cachedTotalPageNum = await redisService.get(totalPageNumKey);
  if (cachedTotalPageNum) return JSON.parse(cachedTotalPageNum);

  // 없을 경우 parsing
  const pageList = root.querySelector('div.topbox_type6');

  if (!pageList) {
    console.error("❌ 'topbox_type6' 요소를 찾을 수 없습니다.");
    return null;
  }

  // caching 처리 후 전체 페이지 개수 반환
  const totalPageNum = pageList.querySelectorAll('a').length;
  redisService.set(totalPageNumKey, JSON.stringify(totalPageNum));
  return totalPageNum;
};
