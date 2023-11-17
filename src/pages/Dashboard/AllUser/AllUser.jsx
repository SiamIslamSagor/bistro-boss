import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUser = () => {
  //
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["usersDataWithTanStack"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  //   handler
  const handleDeleteUser = user => {
    console.log();
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      {/*  */}
      <div className="overflow-x-auto w-full rounded-t-2xl mt-6">
        <table className="table">
          <thead>
            <tr className="text-white bg-[#D1A054] ">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="py-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-xl text-white bg-[#D1A054] btn-circle"
                  >
                    <FaUsers className="text-2xl"></FaUsers>
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-xl text-white bg-red-600 btn-circle"
                  >
                    <FaTrashAlt className="text-lg"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
