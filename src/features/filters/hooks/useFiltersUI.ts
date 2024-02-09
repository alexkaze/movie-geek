import bodyScroll from '@utils/body-scroll';

import useDisplayAnimation from './useDisplayAnimation';

const useFiltersUI = () => {
  const { isDisplayed, shouldRender, displayHandler, animationEndHandler } =
    useDisplayAnimation();

  const modalHandler = (action: boolean) => bodyScroll(action, displayHandler);

  return { isDisplayed, shouldRender, modalHandler, animationEndHandler };
};

export default useFiltersUI;
