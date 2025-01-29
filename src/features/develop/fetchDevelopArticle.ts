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

export const fetchDevelopArticle = async ({
  pageParam,
}: {
  pageParam?: string;
}): Promise<DevelopArticleResponse> => {
  const url = pageParam ? `/api/develop?cursor=${pageParam}` : `/api/develop`;
  const response = await fetch(url);

  if (response.ok) {
    const result = await response.json();
    return result;
  }

  throw new Error(
    `[Error] status: ${response.status}, statusText: ${response.statusText}`
  );
};
