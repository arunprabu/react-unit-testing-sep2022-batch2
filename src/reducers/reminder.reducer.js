/* 
  fn that takes in state and an action
  then returns the state
*/

const reminderReducer = ( state = [], action) => {

  switch(action.type){
    case 'ADD_REMINDER':
      return [
        ...state,
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ];

    case 'GET_REMINDERS':
      return state;

    case 'EDIT_REMINDER':
      return state;
    
    case 'DELETE_REMINDER':
      return state;

    default: 
      return state;
  }  

}

export default reminderReducer;