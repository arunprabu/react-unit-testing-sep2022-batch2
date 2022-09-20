
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Reminders from './Reminders';

it('shows success message after confirm button is clicked', () => {
  render(<Reminders />);

  fireEvent.click(screen.getByTestId('addReminderBtn'));

  expect(screen.getByRole('listitem')).toBeInTheDocument()
})