// Testing Pattern: AAA (Arrange, Act, Assert)

// Arrange (A)
import { render, screen } from '@testing-library/react'; // importing necessary tools from RTL
import App from './App'; // Taking up the Comp for testing

// test spec / test case 
test('has Welcome text', () => {

  // Act  (Optional)
  render(<App />); 
  const welcomeEl = screen.getByText('Welcome!'); // return element that has text 'Welcome'

  // Assert (must) 
  expect(welcomeEl).toBeInTheDocument();
});


