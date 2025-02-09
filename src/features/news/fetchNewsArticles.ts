interface NewsArticleType {
  title: string;
  url: string;
  writing: string;
  date: string;
}

export interface NewsArticleResponse {
  articles: Array<NewsArticleType>;
  nextPage: string;
}

const baseUrl = '/api/news';

export const fetchNewsArticles = async ({
  pageParam,
}: {
  pageParam?: string;
}): Promise<NewsArticleResponse> => {
  const url = pageParam ? `${baseUrl}?page=${pageParam}` : baseUrl;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `[Error] status: ${response.status}, statusText: ${response.statusText}`
    );
  }

  const result = await response.json();
  return result;
};
