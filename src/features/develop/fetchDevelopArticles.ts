interface DevelopArticleType {
  title: string;
  company: string;
  date: number;
  url: string;
}

export interface DevelopArticleResponse {
  articles: Array<DevelopArticleType>;
  cursor: string;
}

const baseUrl = '/api/develop';

export const fetchDevelopArticles = async ({
  pageParam,
}: {
  pageParam?: string;
}): Promise<DevelopArticleResponse> => {
  const url = pageParam ? `${baseUrl}?cursor=${pageParam}` : baseUrl;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `[Error] status: ${response.status}, statusText: ${response.statusText}`
    );
  }

  const result = await response.json();
  return result;
};
