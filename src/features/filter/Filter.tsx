import { ReactNode } from 'react';
import { getFilterValue } from './utilrs.filter';

interface FilterProps {
  Icon?: ReactNode;
  defaultOption: string;
  selectedOption: string[];
}

export const Filter = (props: FilterProps) => {
  const { Icon, defaultOption, selectedOption } = props;

  return (
    <div className="filter-container">
      {Icon}
      <span className="filter-value">
        {getFilterValue(defaultOption, selectedOption)}
      </span>
    </div>
  );
};
