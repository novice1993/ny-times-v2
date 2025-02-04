'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { fetchDevelopArticles } from './fetchDevelopArticles';

import { Article } from '@/components/article';
import { NoArticle } from '@/components/noAritcle';

import { DevelopArticleResponse } from './fetchDevelopArticles';

export const Develop = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
    status,
  } = useInfiniteQuery<
    DevelopArticleResponse,
    Error,
    InfiniteData<DevelopArticleResponse>,
    [string],
    string | undefined
  >({
    queryKey: ['develop'],
    queryFn: fetchDevelopArticles,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,
  });

  const lastElementRef = useInfiniteScroll(fetchNextPage, hasNextPage);

  if (!data || data.pages[0].articles.length === 0) {
    return <NoArticle />;
  }

  return (
    <ul className="article-list">
      {data.pages.flatMap((page) =>
        page.articles.map((article, index) => (
          <div key={article.title + article.url + index}>
            <Article {...article} />
          </div>
        ))
      )}

      <div ref={lastElementRef} className="loading-indicator">
        {isFetchingNextPage ? 'Loading more articles...' : ''}
      </div>
    </ul>
  );
};
