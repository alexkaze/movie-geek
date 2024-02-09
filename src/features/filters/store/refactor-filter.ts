import { FilterItems, FetchedFilter } from '../types/filters-types';

const refactorFilter = (filter: FetchedFilter): FilterItems => {
  return filter.reduce<FilterItems>((acc, item) => {
    if ('country' in item) {
      if (!item.country) return acc;
      acc.push({ id: String(acc.length + 1), item: item.country });
    }

    if ('genre' in item) {
      if (!item.genre) return acc;
      acc.push({ id: String(acc.length + 1), item: item.genre });
    }

    return acc;
  }, []);
};

export default refactorFilter;
