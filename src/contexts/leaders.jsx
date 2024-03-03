import { createContext, useState } from "react";

export const LeadersContext = createContext(null);

export const LeadersProvider = ({ children }) => {
  const [leadersList, setLeadersList] = useState(null);

  const getLeaders = leaders => {
    setLeadersList(leaders);
  };

  return (
    <LeadersContext.Provider value={{ leadersList, setLeadersList, getLeaders }}>{children}</LeadersContext.Provider>
  );
};
