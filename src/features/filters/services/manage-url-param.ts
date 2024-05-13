const manageUrlParam = (
  searchParams: URLSearchParams,
  eventTarget: EventTarget,
  param: string,
) => {
  const selectedOption = (
    (eventTarget as Element)?.closest('li') as HTMLElement
  )?.dataset?.value;

  if (!selectedOption) searchParams.delete(param);
  if (selectedOption) searchParams.set(param, selectedOption);
};

export default manageUrlParam;
