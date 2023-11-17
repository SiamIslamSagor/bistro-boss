import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";

const useCart = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthInfo();
  console.log(user);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cartData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
