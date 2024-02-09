import { useRef } from 'react';

import useGetFiltersContext from '@features/filters/context/filters-context/useGetFiltersContext';

import useMatchMedia from '@hooks/useMatchMedia';

import RoundedBlock from '@components/ui/RoundedBlock';
import Button from '@components/common/Button';

import Select from '../Select/Select';

import styles from './FiltersPanel.module.scss';

const FiltersPanel = () => {
  const { filtersData, filtersUI, filtersUrl } = useGetFiltersContext();

  const { filters, canBeReseted } = filtersData;
  const { isDisplayed, animationEndHandler, modalHandler } = filtersUI;
  const {
    selectOption: selectOptionHandler,
    resetFilters: resetFiltersHandler,
  } = filtersUrl;

  const refFilter = useRef<HTMLDivElement>(null);

  const mediaMatches = useMatchMedia();

  return (
    <RoundedBlock
      data-testid="filters-panel"
      refValue={refFilter}
      className={
        isDisplayed ? styles.filters : `${styles.filters} ${styles.close}`
      }
      onClick={e => selectOptionHandler(e, refFilter.current)}
      onAnimationEnd={animationEndHandler}
    >
      {filters.map(select => (
        <Select key={select.param} selectObjData={{ ...select }} />
      ))}

      <Button
        text="Сбросить"
        className={styles['filters__btn']}
        onClick={resetFiltersHandler}
        disabled={!canBeReseted}
      />

      {/* Mobile */}
      {mediaMatches && (
        <Button
          text="Показать"
          className={styles['filters__btn']}
          onClick={() => modalHandler(false)}
        />
      )}
    </RoundedBlock>
  );
};

export default FiltersPanel;
