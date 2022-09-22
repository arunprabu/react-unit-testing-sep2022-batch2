// Testing Pattern: AAA (Arrange, Act, Assert)

// Arrange (A)
import { render, screen } from '@testing-library/react'; // importing necessary tools from RTL
import App from './App'; // Taking up the Comp for testing

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

// group of related test specs -- TEST SUITE
describe('AppComponent', () => {
  
  // test spec / test case 
  test('has Welcome text', () => {
    // Act  (Optional)
    render(<App />);  // only after render you can query thru dom element
    const welcomeEl = screen.getByText('Welcome to Unit Testing!'); // return element that has text 'Welcome'

    // Assert (must) | expect is from JEST | 
    // toBeInTheDocument - is a matcher from @testing-library/jest-dom
    expect(welcomeEl).toBeInTheDocument();
  });

  // both 'it' and 'test' are same
  it('should have proper app comp', () => {
    expect(App).toBeTruthy();
  });

  it('has full app rendering/navigating', async () => {
    render(<App />);
    
    // verify page content for default route
    expect(screen.getByText(/Welcome to Unit Testing!/i)).toBeInTheDocument()

    // verify page content for expected route after navigating
    await userEvent.click(screen.getByText(/about/i))
    expect(screen.getByText(/You are looking at About Page/i)).toBeInTheDocument()

    await userEvent.click(screen.getByText(/home/i));
    expect(screen.getByText(/Welcome to Unit Testing!/i)).toBeInTheDocument()
  });

});


