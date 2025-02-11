'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { fetchNewsArticles } from './fetchNewsArticles';

import { Article } from '@/components/article';
import { NoArticle } from '@/components/noAritcle';

import { NewsArticleResponse } from './fetchNewsArticles';

export const News = () => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<
      NewsArticleResponse,
      Error,
      InfiniteData<NewsArticleResponse>,
      [string],
      string | undefined
    >({
      queryKey: ['news'],
      queryFn: fetchNewsArticles,
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
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
            <Article
              company={article.writing}
              {...article}
              backgroundColor="bg-slate-50"
            />
          </div>
        ))
      )}

      <div ref={lastElementRef} className="loading-indicator">
        {isFetchingNextPage ? 'Loading more articles...' : ''}
      </div>
    </ul>
  );
};
