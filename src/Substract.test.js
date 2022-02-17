import { render, screen, fireEvent } from '@testing-library/react';
import Substract from './Substract';

describe('testing substract', () => {
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Substract setCount={handleClick} count={1} />);
    fireEvent.click(screen.getByText(/SUBSTRACT/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
