import RoundedBlock from '@components/ui/RoundedBlock';

import { SelectType } from '@features/filters/types/filters-types';
import SelectProvider from '@features/filters/context/select-context/SelectProvider';

import Options from '../Options/Options';

import SelectButton from './SelectButton';

import styles from './Select.module.scss';

const Select = ({ selectObjData }: { selectObjData: SelectType }) => {
  return (
    <SelectProvider selectObjData={selectObjData}>
      <RoundedBlock className={styles.select}>
        <SelectButton />
        <Options />
      </RoundedBlock>
    </SelectProvider>
  );
};

export default Select;
