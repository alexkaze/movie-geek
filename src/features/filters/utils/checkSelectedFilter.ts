const checkSelectedFilter = (
  eventTarget: EventTarget,
  filterEl: HTMLDivElement | null
) => {
  const param = ((eventTarget as Element)?.closest('ul') as HTMLElement)
    ?.dataset?.param;

  const optionIsActive = (
    (eventTarget as Element)?.closest('li') as HTMLElement
  )?.dataset?.active;

  if (eventTarget !== filterEl && param && !optionIsActive) return param;
  return false;
};

export default checkSelectedFilter;
