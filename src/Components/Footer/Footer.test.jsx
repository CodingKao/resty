import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Test', () => { 
  test('Should contain component with footer id', () => { 
    render(<Footer/>);
    const footer = screen.getByTestId('test-footer');
    expect(footer).toBeInTheDocument();
   })
});