import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  //
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["usersDataWithTanStack"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  //   handler
  const handleDeleteUser = user => {
    console.log(user._id);
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        // hit delete api in server side by specific id;
        axiosSecure
          .delete(`/users/${user._id}`)
          .then(res => {
            console.log("DELETE THIS: ", user._id);
            refetch();
            if (res?.data?.deletedCount >= 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  const handleMakeAdmin = user => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be give admin role for this specific user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Give Admin Role!",
    }).then(result => {
      if (result.isConfirmed) {
        // hit delete api in server side by specific id;
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then(res => {
            console.log("GIVE ADMIN ROLE:> ", user._id);
            refetch();
            if (res?.data?.modifiedCount >= 0) {
              Swal.fire({
                title: "Admin Created Successfully!",
                text: "Congress! You Have created a new admin.",
                icon: "success",
                timer: 1500,
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
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
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-xl text-white bg-[#D1A054] btn-circle"
                    >
                      <FaUsers className="text-2xl"></FaUsers>
                    </button>
                  )}
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
