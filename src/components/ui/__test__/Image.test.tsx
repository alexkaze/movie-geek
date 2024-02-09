import { render, screen } from '@testing-library/react';

import { mockIsIntersecting } from 'react-intersection-observer/test-utils';

import Image from '../Image';

describe('Image Component', () => {
  test('renders', () => {
    render(<Image src="https://test.ru/test-image/" alt="test-image"></Image>);

    const imgContainer = screen.getByTestId('image-container');

    mockIsIntersecting(imgContainer, 0.1);

    const img = screen.getByAltText('test-image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://test.ru/test-image/');
  });
});
