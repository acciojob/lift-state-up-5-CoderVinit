import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        <h1>Parent Component</h1>
        {isLoggedIn ? (
        <h2>You are logged in.</h2>
      ) : (
        <Child setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  )
}

export default Parent