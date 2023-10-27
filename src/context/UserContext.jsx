import React, { createContext, useState,useContext } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  
const login= (username,password)=>{
    setUser({username,password, role:"user"})
}

  const logout = () => {
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

export function useUser() {
    return useContext(UserContext);
  }
  