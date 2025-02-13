import { Option } from './Option';
import './style/filter.css';

export const Filter = () => {
  return (
    <header className="filter-container">
      <Option
        defaultOption="전체 기사"
        selectedOption={['개발 포스트', '신문 기사']}
      />
      <Option defaultOption="전체 날짜" selectedOption={['2025.02.13']} />
    </header>
  );
};
