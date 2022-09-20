import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI';

const Users = () => {

  const myStyle = {
    backgroundColor: 'lightblue',
    borderBottom: 'solid 1px #000'
  }

  const [userList, setUserList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    fetchAPI('https://jsonplaceholder.typicode.com/users?_limit=4')
      .then( (res) => {
        console.log('*************')
        setUserList(res);
      })
      .catch( (err) => {
        console.log('$$$$$$$$$$$$$$')
        setIsError(true);
      });
  }, []);

  // lists and keys
  let users = null; 
  if(userList && userList.length > 0){
    users = userList.map( (user) => {
      return(
        <div key={user.id} style={myStyle}>
          <p>#{user.id}</p>
          <h3>Name: {user.name}</h3>
          <h3>Phone: {user.phone}</h3>
        </div>
      )
    })
  }
  
  return (
    <div>
      <h2>Users</h2>

      {
        isError? 
        <div>Some error occured! Try again later.</div>
        :
        users
      }
    </div>
  )
}

export default Users