import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-5xl font-medium">
        Total Payments: {payments?.length}
      </h2>
      <div className="overflow-x-auto w-full rounded-t-2xl mt-6">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr className="text-white bg-[#D1A054] ">
              <th className="">Email</th>
              <th className="">Transaction Id</th>
              <th className="">Price</th>
              <th className="">Payment Date</th>
              <th className="py-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map(item => (
              <tr key={item._id}>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>$ {item.price}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
