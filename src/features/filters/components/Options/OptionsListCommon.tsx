import { FilterItems } from '../../types/filters-types';

import styles from './Option.module.scss';

type Props = {
  selectedOption: string;
  dataArr: FilterItems;
};

const OptionsListCommon = ({ selectedOption, dataArr }: Props) => {
  return (
    <>
      {dataArr.map(option => {
        return (
          <li
            key={option.item}
            className={
              option.id === selectedOption
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-value={option.id}
            data-active={option.id === selectedOption ? 'active' : null}
            data-testid="option"
          >
            <span>{option.item}</span>
          </li>
        );
      })}
    </>
  );
};

export default OptionsListCommon;
