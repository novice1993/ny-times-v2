'use client';

import Link from 'next/link';
import { Bookmark } from './Bookmark';
import './article.css';

interface ArticleProps {
  title: string;
  company: string;
  date: string;
  url: string;
}

export const Article = (props: ArticleProps) => {
  const { title, company, date, url } = props;

  return (
    <li className="article-container">
      <Link href={url} className="article-title">
        <h6>{title}</h6>
      </Link>
      <div className="article-info">
        <span>{company}</span>
        <span>{date}</span>
      </div>

      <Bookmark />
    </li>
  );
};
