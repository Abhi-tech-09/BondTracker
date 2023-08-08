import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "1001",
    name: "Abhishek",
    email: "abhisharma09@gmail.com",
    role: "ROLE_ADMIN",
  });
  const login = (email, password) => {
    // This is where I will send the data to backend and will get the complete user data
  }
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
