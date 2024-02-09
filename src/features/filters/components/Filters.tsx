import useMatchMedia from '@hooks/useMatchMedia';

import FiltersProvider from '../context/filters-context/FiltersProvider';
import FiltersService from '../services/FiltersService';

import FiltersMedia from './FiltersMedia/FiltersMedia';
import FiltersPanel from './FiltersPanel/FiltersPanel';

const Filters = () => {
  const mediaMatches = useMatchMedia();

  return (
    <FiltersService>
      <FiltersProvider>
        {mediaMatches ? <FiltersMedia /> : <FiltersPanel />}
      </FiltersProvider>
    </FiltersService>
  );
};

export default Filters;
