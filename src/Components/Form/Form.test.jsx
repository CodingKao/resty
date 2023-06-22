import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Form Test', () => {
  test('selects the correct method', () => {
    render(<Form />);
    const get = screen.getByTestId('test-get');
    const post = screen.getByTestId('test-post');

    expect(get).toHaveStyle('background-color: grey');
    expect(post).toHaveStyle('background-color: grey');

    fireEvent.click(post);

    setTimeout(() => {
      expect(post).toHaveStyle('background-color: orange');
    }, 500);
  });

  
});