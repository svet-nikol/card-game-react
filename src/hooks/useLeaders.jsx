import { useContext } from "react";
import { LeadersContext } from "../contexts/leaders";

export const useLeaders = () => {
  return useContext(LeadersContext);
};
