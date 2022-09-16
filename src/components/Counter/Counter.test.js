import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('CounterComp', () => {
  
  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterValueEl = screen.getByTestId('counterValue');
    expect(counterValueEl.textContent).toBe('0');
  });

  it('has properly working increment and decrement buttons', () => {
    render(<Counter />);

    const counterValueEl = screen.getByTestId('counterValue');
    // finding increment and decrement buttons
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    expect(counterValueEl.textContent).toBe('0');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValueEl.textContent).toBe('2');

    fireEvent.click(decrementBtn);
    expect(counterValueEl.textContent).toBe('1');
    
    fireEvent.click(decrementBtn);
    expect(counterValueEl.textContent).toBe('0');
  });

  it('has counter with max value of 10 upon increment and min value of 0 upon decrement', () => {
    render(<Counter />);

    const counterValueEl = screen.getByTestId('counterValue');
    
    // finding increment and decrement buttons
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    for(let i = 0; i < 10; i++){
      fireEvent.click(incrementBtn);
    }
    fireEvent.click(incrementBtn); // incrementing it 11th time
    expect(counterValueEl.textContent).toBe('10');
    
    for(let i = 0; i < 10; i++){
      fireEvent.click(decrementBtn);
    }
    fireEvent.click(decrementBtn); // decrementing it 11th time
    expect(counterValueEl.textContent).toBe('0');
  });

  


});