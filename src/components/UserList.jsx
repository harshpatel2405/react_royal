import React from 'react'

const UserList = (props) => {
  return (
    <div>
      <h4>{props.data}</h4>
      <h6>{props.user.name}</h6>
      <h6>{props.user.singer}</h6>
      <h6>{props.user.movie}</h6>
      </div>
  )
}

export default UserList
