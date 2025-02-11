'use client';

import { Bookmark } from './Bookmark';
import './article.css';

interface ArticleProps {
  title: string;
  company: string;
  date: string;
  url: string;

  backgroundColor?: string;
}

export const Article = (props: ArticleProps) => {
  const { title, company, date, url, backgroundColor } = props;

  return (
    <li className={`article-container ${backgroundColor}`}>
      <a href={url} className="article-title" target="_blank">
        <h6>{title}</h6>
      </a>
      <div className="article-info">
        <span>{company}</span>
        <span>{date}</span>
      </div>

      <Bookmark />
    </li>
  );
};
