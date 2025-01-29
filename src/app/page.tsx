'use client';

import { Article } from '@/components/article';
import { NoArticle } from '@/components/noAritcle';
import { useEffect } from 'react';

interface DummyType {
  title: string;
  company: string;
  date: string;
  url: string;
}

const dummy: Array<DummyType> = [];

export default function Home() {
  // 테스트
  useEffect(() => {
    const fetchArtcile = async () => {
      const response = await fetch('/api/develop');

      if (response) {
        const result = await response.json();
        console.log(result);
      }
    };

    fetchArtcile();
  }, []);

  /** 기사 데이터가 존재하지 않을 떄 */
  if (dummy.length === 0) {
    return (
      <div className="home-container">
        <NoArticle />
      </div>
    );
  }

  /** 데이터가 존재할 떄 */
  return (
    <div className="home-container">
      <ul className="article-list">
        {dummy.map((info, index) => (
          <Article {...info} key={index} />
        ))}
      </ul>
    </div>
  );
}
