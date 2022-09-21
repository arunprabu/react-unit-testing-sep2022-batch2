import React from 'react'
import {render, screen} from '@testing-library/react'
import Reminders from './Reminders';
import { act } from 'react-dom/test-utils';

describe('RemindersComponent', () => {

  it('lists reminders after clicking add reminder', () => {
    render(<Reminders />);
    
    expect(screen.getByText('Pls add a reminder')).toBeInTheDocument();

    // fireEvent.click(screen.getByTestId('addReminderBtn'));
    // we can have the following alternative including act() instead of the above one 
    const button = document.querySelector('button'); // querying the button element 
    act( () => { 
      // this is old fashioned. Not recommended/needed if you use RTL
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(screen.queryByText('Pls add a reminder')).not.toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  });
});