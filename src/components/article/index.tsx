import { Bookmark } from './Bookmark';
import './article.css';

interface ArticleProps {
  title: string;
  company: string;
  date: string;
}

export const Article = (props: ArticleProps) => {
  const { title, company, date } = props;

  return (
    <li className="article-container">
      <h6>{title}</h6>
      <div className="article-info">
        <span>{company}</span>
        <span>{date}</span>
      </div>

      <Bookmark />
    </li>
  );
};
