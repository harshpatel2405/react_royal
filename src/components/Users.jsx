import React from 'react'
import UserList from './UserList';

const Users = (props) => {

    var data = "Inside User File";
    
    const user ={
        name : "Harsh Patel",
        movie : "Breaking Bad",
        singer : "Arijit Singh",
    }

  return (
    <div style={{textAlign:"center" , color:"red"}}>
        <h1>Users Page</h1>
      <h2>{props.title}</h2>
      <UserList data={data} user ={user}></UserList>
    </div>
  )
}

export default Users
