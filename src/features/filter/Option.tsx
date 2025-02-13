import { ReactNode } from 'react';
import { getOptionValue } from './utils.option';

interface OptionProps {
  Icon?: ReactNode;
  defaultOption: string;
  selectedOption: string[];
}

export const Option = (props: OptionProps) => {
  const { Icon, defaultOption, selectedOption } = props;

  return (
    <div className="option-container">
      {Icon}
      <span className="option-value">
        {getOptionValue(defaultOption, selectedOption)}
      </span>
    </div>
  );
};
