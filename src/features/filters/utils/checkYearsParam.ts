const checkYearsParam = (
  searchParams: URLSearchParams,
  eventTarget: EventTarget,
  paramYearFrom: string,
  paramYearTo: string
) => {
  const selectedYearFrom = (
    (eventTarget as Element)?.closest('li') as HTMLElement
  )?.dataset?.yearFrom;

  const selectedYearTo = (
    (eventTarget as Element)?.closest('li') as HTMLElement
  )?.dataset?.yearTo;

  if (!selectedYearFrom) searchParams.delete(paramYearFrom);
  if (!selectedYearTo) searchParams.delete(paramYearTo);

  if (selectedYearFrom && selectedYearTo) {
    searchParams.set(paramYearFrom, selectedYearFrom);
    searchParams.set(paramYearTo, selectedYearTo);
  }
};

export default checkYearsParam;
