const outsideEvent = (
  btnClass: string,
  btnEl: HTMLDivElement,
  isDisplayed: boolean,
  hideList: () => void
) => {
  if (!isDisplayed) return;

  const closeList = (e: MouseEvent) => {
    const select = (e.target as HTMLElement).closest(`.${btnClass}`);
    if (select !== btnEl) hideList();
  };

  if (isDisplayed) document.addEventListener('click', closeList);

  return () => {
    if (isDisplayed) document.removeEventListener('click', closeList);
  };
};

export default outsideEvent;
