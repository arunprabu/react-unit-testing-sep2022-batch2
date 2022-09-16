import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe('ContactFormComponent', () => {
  
  it('has proper contact form', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Enter Name:');
    const phoneInput = screen.getByLabelText('Enter Phone:');

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(phoneInput).toHaveAttribute('type', 'number');
  });

  it('has the submit button in disabled state when firstname is empty', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Enter Name:');
    fireEvent.change(nameInput, { event: {target: ''}});

    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toHaveAttribute('disabled');
    
  });

});

