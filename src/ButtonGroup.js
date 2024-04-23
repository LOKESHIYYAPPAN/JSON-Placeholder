import React from 'react'

const ButtonGroup = ({setPath}) => {
  return (
    <nav>
        <button onClick={() => setPath("users")}>USERS</button>
        <button onClick={() => setPath("posts")}>POSTS</button>
        <button onClick={() => setPath("comments")}>COMMANDS</button>
    </nav>
  )
}

export default ButtonGroup