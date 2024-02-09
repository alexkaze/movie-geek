import { FilterYears } from '../../types/filters-types';

import styles from './Option.module.scss';

type Props = {
  selectedOption: string[];
  dataArr: FilterYears;
};

const OptionsListYears = ({ selectedOption, dataArr }: Props) => {
  const selectedOptionValue =
    selectedOption[0] === selectedOption[1]
      ? selectedOption[0] || selectedOption[1]
      : `${selectedOption[0]} - ${selectedOption[1]}`;

  return (
    <>
      {dataArr.map(option => {
        const curOption = Array.isArray(option)
          ? `${option[0]} - ${option[1]}`
          : `${option}`;

        const yearFrom = Array.isArray(option) && option[0];
        const yearTo = Array.isArray(option) && option[1];

        return (
          <li
            key={curOption}
            className={
              curOption === selectedOptionValue
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-year-from={yearFrom || option}
            data-year-to={yearTo || option}
            data-active={curOption === selectedOptionValue ? 'active' : null}
            data-testid="option"
          >
            <span>{curOption}</span>
          </li>
        );
      })}
    </>
  );
};

export default OptionsListYears;
