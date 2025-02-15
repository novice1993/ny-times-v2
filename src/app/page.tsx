'use client';

import { useFilterContext } from '@/provider/FilterProvider';
import { Develop } from '@/features/develop';
import { News } from '@/features/news';

export default function Page() {
  const { selectedType, totlaArticleType } = useFilterContext();

  // 뉴스 기사
  if (selectedType === totlaArticleType[0]) {
    return (
      <div className="home-container">
        <News />
      </div>
    );
  }

  // 개발 블로그
  return (
    <div className="home-container">
      <Develop />
    </div>
  );
}
