import useGetFiltersContext from '@features/filters/context/filters-context/useGetFiltersContext';
import Modal from '@components/ui/Modal';
import RoundedBlock from '@components/ui/RoundedBlock';
import Button from '@components/common/Button';

import FiltersPanel from '../FiltersPanel/FiltersPanel';

import styles from './FiltersMedia.module.scss';

const FiltersMedia = () => {
  const { filtersUI } = useGetFiltersContext();
  const { isDisplayed, shouldRender, modalHandler } = filtersUI;

  return (
    <RoundedBlock data-testid="filters-media" className={styles.filters}>
      <Button
        text="Фильтр"
        className={styles['filters__btn']}
        onClick={() => modalHandler(true)}
      />

      {shouldRender && (
        <Modal
          data-testid="filters-modal"
          isDisplayed={isDisplayed}
          modalHandler={modalHandler}
        >
          <FiltersPanel />
        </Modal>
      )}
    </RoundedBlock>
  );
};

export default FiltersMedia;
