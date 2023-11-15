import useContextData from "./useContextData";

const useUserEmail = () => {
  const { user } = useContextData();
  const userEmail = user?.email;
  return userEmail;
};

export default useUserEmail;
