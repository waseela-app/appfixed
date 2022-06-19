import React,{ useState, useEffect } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({children}) {

  const [ activeUser, setActiveUser] = useState({});
  const [ Auth, setAuth ] = useState(null);

  useEffect(() => {
    const storedActiveUser = JSON.parse(localStorage.getItem("activeUser"))
    const storedAuth = JSON.parse(localStorage.getItem("Auth")) 

    storedActiveUser && setActiveUser(storedActiveUser)
    storedAuth && storedAuth ? setAuth(true) : setAuth(false)
  }, []);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser))
    localStorage.setItem("Auth", Auth)
  }, [Auth, activeUser]);

  return (
    <UserContext.Provider value={{activeUser, setActiveUser, Auth, setAuth}}>
      {children}
    </UserContext.Provider>  
  )
}