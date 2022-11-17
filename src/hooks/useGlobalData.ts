import { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

export const useGlobalData = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalProvider");
  }

  return { ...context };
};
