import React, { useRef, useReducer } from 'react'
import remindersReducer from '../../reducers/reminder.reducer';

const Reminders = () => {
  //to capture input from form fields in fn comp
  const remindersInput = useRef(null); 
  
  // useReducer() will get a reducer as input and will return an array
  const [ remindersState, remindersDispatch ] = useReducer(remindersReducer);

  console.log(remindersState);

  const handleAddReminders = () => {
    console.log(remindersInput.current.value);

    // hit the api using axios
    // in then method dispatch

    remindersDispatch({type: 'ADD_REMINDER', data: remindersInput.current.value });
  }

  let remindersList = null;
  if(remindersState && remindersState.length > 0){
    remindersList = remindersState.map( (reminders, index) => {
      return(
        <li className="list-group-item" key={index}>
          {reminders.text}  - {reminders.completed? 'DONE': 'NOT DONE'}
          <button type='button' className='btn btn-sm btn-primary'>Edit</button>
          <button type='button' className='btn btn-sm btn-danger'>Delete</button>
        </li>
      );
    })
  }

  return (
    <div className='container'>
      <h2>Reminders | with useRef() and useReducer() Hooks</h2>
      <input type='text' ref={remindersInput}/>
      <button type='button' data-testid='addReminderBtn' className='btn btn-success' 
      onClick={handleAddReminders}>Add Reminders</button>

      <div className='col-md-6 offset-md-3'>
        <ul className="list-group">
          {
            remindersList?
            remindersList 
            :
            <div className='alert alert-warning'>Pls add a reminder</div>
          }
        </ul>
      </div>
    </div>
  )
}

export default Reminders