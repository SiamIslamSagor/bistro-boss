import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useContextData = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useContextData;
