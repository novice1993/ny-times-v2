import { filterArticleInfo } from './filterArticleInfo';

const url = 'https://techblogposts.com/api/v1/posts';

export const getDevelopArticle = async (cursor: string | null) => {
  const response = await fetch(cursor ? `${url}?cursor=${cursor}` : url);

  if (response.ok) {
    const result = await response.json();

    const articles = filterArticleInfo(result.posts);
    const cursor = result.cursor;

    return { articles, cursor };
  }

  throw new Error(
    `[Error] status :${response.status}, statusText: ${response.statusText}`
  );
};
