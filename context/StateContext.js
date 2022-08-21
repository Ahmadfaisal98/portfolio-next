import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <Context.Provider
      value={{ isNavbarActive, setIsNavbarActive, isOpenPopup, setIsOpenPopup }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
