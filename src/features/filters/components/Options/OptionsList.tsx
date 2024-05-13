import {
  SelectedOption,
  FilterItems,
} from '@features/filters/types/filters-types';

import styles from './Option.module.scss';

type Props = {
  selectedOption: SelectedOption;
  dataArr: FilterItems;
};

const OptionsList = ({ selectedOption, dataArr }: Props) => {
  return (
    <>
      {dataArr.map(option => {
        return (
          <li
            key={option}
            className={
              option === selectedOption
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-value={option}
            data-active={option === selectedOption ? 'active' : null}
            data-testid="option"
          >
            <span>{option}</span>
          </li>
        );
      })}
    </>
  );
};

export default OptionsList;
