import { Children, useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({children}) => {

  const token = localStorage.getItem("token");
  const loginUser = localStorage.getItem("user");
  
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(loginUser))
    const [isUser, setIsUser] = useState(token ? true : false)
    
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, isUser, setIsUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider