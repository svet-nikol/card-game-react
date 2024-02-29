import { useContext } from "react";
import { TriersContext } from "../contexts/triers";

export const useTriers = () => {
  return useContext(TriersContext);
};
