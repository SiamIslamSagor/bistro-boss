import useContextData from "./useContextData";

const useAuthInfo = () => {
  const auth = useContextData();
  return auth;
};

export default useAuthInfo;
