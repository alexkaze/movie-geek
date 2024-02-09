const bodyScroll = <T extends boolean>(action: T, cb?: (action: T) => void) => {
  const bodyEl = document.querySelector('body') as HTMLBodyElement;
  if (action) bodyEl.classList.add('noscroll');
  if (!action) bodyEl.classList.remove('noscroll');
  cb && cb(action);
};

export default bodyScroll;
