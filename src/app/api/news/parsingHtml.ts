import { parse } from 'node-html-parser';
import { parsingArticle, parsingTotalPageNum } from './utils.parsing';

export const parsingHtml = async (html: string, date: string) => {
  const root = parse(html);

  const articles = parsingArticle(root);
  const totalPageNum = await parsingTotalPageNum(root, date);

  return { articles, totalPageNum };
};
