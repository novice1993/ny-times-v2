'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { getFilterValue } from './utilrs.filter';

interface FilterProps {
  Icon?: ReactNode;
  defaultOption: string;
  selectedOption: string[];
}

export const Filter = (props: FilterProps) => {
  const { Icon, defaultOption, selectedOption } = props;

  return (
    <Link className="filter-container" href={'/filter'}>
      {Icon}
      <span className="filter-value">
        {getFilterValue(defaultOption, selectedOption)}
      </span>
    </Link>
  );
};
