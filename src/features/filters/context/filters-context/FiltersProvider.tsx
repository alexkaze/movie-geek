import useFiltersData from '@features/filters/hooks/useFiltersData';
import useFiltersUI from '@features/filters/hooks/useFiltersUI';
import useFiltersUrl from '@features/filters/hooks/useFiltersUrl';

import FiltersContext from './filters-context';

type Props = {
  children: React.ReactNode;
};

const FiltersProvider = ({ children }: Props) => {
  const filtersData = useFiltersData();
  const filtersUI = useFiltersUI();
  const filtersUrl = useFiltersUrl();

  const context = {
    filtersData,
    filtersUI,
    filtersUrl,
  };

  return (
    <FiltersContext.Provider value={context}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
