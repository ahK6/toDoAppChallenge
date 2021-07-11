import React, { useState } from "react";

const HVisibleContext = React.createContext([{}, () => {}]);

const HVisibleProvider = (props) => {
  const [headerVisible, setHeaderVisible] = useState("main");

  return (
    <HVisibleContext.Provider value={[headerVisible, setHeaderVisible]}>
      {props.children}
    </HVisibleContext.Provider>
  );
};

export { HVisibleContext, HVisibleProvider };
