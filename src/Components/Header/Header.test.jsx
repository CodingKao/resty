import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Test', () => { 
  test('Should contain component with header id', () => { 
    render(<Header/>);
    const header = screen.getByTestId('test-header');
    expect(header).toBeInTheDocument();
   })
});