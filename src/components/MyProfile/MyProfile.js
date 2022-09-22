import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

const MyProfile = () => {
  const auth = useContext(AuthContext);
  //console.log(auth);
  return (
    <div>
      <h2>MyProfile | Testing Context, useContext hook</h2>
      <div>
        {
          auth?.isLoggedIn? 
          <>
            <p>Name: {auth.fullName}</p>
            <p>Username: {auth.username}</p>
            <p>Last Login: {auth.lastLogin}</p>
          </>
          :
          <p>Please login... You are not logged in to access profile information</p>
        }
        
      </div>
    </div>
  )
}

export default MyProfile