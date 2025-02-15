import { Filter } from './Filter';
import './style/filter.css';

export const FilterBar = () => {
  return (
    <header className="filter-bar">
      <Filter
        defaultOption="전체 기사"
        selectedOption={['개발 포스트', '신문 기사']}
      />
      <Filter defaultOption="전체 날짜" selectedOption={['2025.02.13']} />
    </header>
  );
};
