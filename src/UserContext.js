import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const isActiveBurgerMenu = () => {
    setIsActive(!isActive);
  };

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };
  

  return (
    <UserContext.Provider value={{ isLoggedIn, username, isActive, logIn, logOut, isActiveBurgerMenu }}>
      {children}
    </UserContext.Provider>
  );
};