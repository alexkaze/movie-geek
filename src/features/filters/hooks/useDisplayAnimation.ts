import { useState, useEffect, useCallback } from 'react';

const useDisplayAnimation = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const displayHandler = useCallback(
    (action: boolean) => setIsDisplayed(action),
    []
  );

  const animationEndHandler = useCallback(() => {
    if (!isDisplayed) setShouldRender(false);
  }, [isDisplayed]);

  useEffect(() => {
    if (isDisplayed) setShouldRender(true);
  }, [isDisplayed]);

  return {
    isDisplayed,
    shouldRender,
    displayHandler,
    animationEndHandler,
  };
};

export default useDisplayAnimation;
