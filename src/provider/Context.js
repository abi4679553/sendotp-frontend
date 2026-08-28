import React, { createContext, useState } from 'react'


export const Dcontext = createContext()
function Context(props) {
    const BeURL = process.env.REACT_APP_BE_URL
    const [currentUser,setCurrentUser] = useState(null)
    const [isAuth,setIsAuth] = useState(false)


    const data = {BeURL ,setCurrentUser,setIsAuth,currentUser,isAuth}
  return (
    <Dcontext.Provider value={data}>
        {props.children}
    </Dcontext.Provider>
  )
}

export default Context

