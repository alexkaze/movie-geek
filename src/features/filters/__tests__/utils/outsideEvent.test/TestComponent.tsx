import { useRef, useState } from 'react';

import outsideEvent from '@features/filters/utils/outsideEvent';

const TestComponent = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const refSelectBtn = useRef<HTMLDivElement>(null);
  const btnClass = 'btn';
  const mockToggleList = jest.fn(() => setIsDisplayed(!isDisplayed));
  const mockHideList = jest.fn(() => setIsDisplayed(false));

  outsideEvent(btnClass, refSelectBtn.current!, isDisplayed, mockHideList);

  return (
    <>
      <div>Outside event</div>
      <div
        ref={refSelectBtn}
        className={isDisplayed ? 'btn active' : 'btn'}
        onClick={mockToggleList}
      >
        Click btn
      </div>
      {isDisplayed && <div>List</div>}
    </>
  );
};

export default TestComponent;
