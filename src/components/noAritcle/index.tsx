import { FaRegNewspaper } from 'react-icons/fa6';
import './noArticle.css';

const message = '일치하는 기사가 존재하지 않습니다.';

export const NoArticle = () => {
  return (
    <div className="no-article-container">
      <FaRegNewspaper size={36} className="text-gray-400" />
      <div className="no-article-message">{message}</div>
    </div>
  );
};
