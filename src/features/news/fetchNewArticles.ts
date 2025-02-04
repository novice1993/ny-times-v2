const baseUrl = '/api/news';

interface NewsArticleType {
  title: string;
  url: string;
}

interface NewsArticleResponse {
  articles: Array<NewsArticleType>;
  nextPage: number;
}

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
