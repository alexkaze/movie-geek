import { act, renderHook } from '@testing-library/react';

import useDisplayAnimation from '@hooks/useDisplayAnimation';

describe('useDisplayAnimation hook', () => {
  test('works with default state', () => {
    const { result } = renderHook(useDisplayAnimation);

    expect(result.current.isDisplayed).toBe(false);
    expect(result.current.shouldRender).toBe(false);
  });

  test('updates state correctly', () => {
    const { result } = renderHook(useDisplayAnimation);

    act(() => result.current.displayHandler(true));

    expect(result.current.isDisplayed).toBe(true);
    expect(result.current.shouldRender).toBe(true);
  });
});
