import React, { useState, useEffect } from "react";

import { getDeviceLanguage } from "./utils";

const UserSettingsContext = React.createContext([{}, () => {}]);

const UserSettingsProvider = ({ children }) => {
  const [state, setState] = useState({ language: "en" });

  useEffect(() => {
    const deviceLanguage = getDeviceLanguage();
    setState(state => ({ ...state, language: deviceLanguage }));
  }, []);

  return (
    <UserSettingsContext.Provider value={[state, setState]}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export { UserSettingsContext, UserSettingsProvider };
