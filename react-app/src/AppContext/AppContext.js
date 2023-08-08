import React, { createContext, useContext, useState ,useStateCall} from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    role: "",
    bookList:[]
  });
  const login = (email, password) => {
    // This is where I will send the data to backend and will get the complete user data
  }
  
  return <AppContext.Provider value={{ user,setUser }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
