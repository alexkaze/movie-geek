import { useContext } from 'react';

import SelectContext from './select-context';

const useGetSelectContext = () => {
  const ctx = useContext(SelectContext);
  if (ctx === null) throw Error('select context is null');
  const { selectData, selectState, selectHandlers } = ctx;

  return { selectData, selectState, selectHandlers };
};

export default useGetSelectContext;
