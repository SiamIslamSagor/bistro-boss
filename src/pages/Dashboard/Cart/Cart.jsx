import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  // price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // handler
  const handleDelete = id => {
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
        //
        axiosSecure
          .delete(`/carts/${id}`)
          .then(res => {
            console.log("DELETE THIS: ", id);
            refetch();
            if (res?.data?.deletedCount) {
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
        //
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Total Orders: {cart?.length}</h2>
        <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      {/*
       */}
      <div className="overflow-x-auto w-full rounded-t-2xl mt-6">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr className="text-white bg-[#D1A054] ">
              <th className="">#</th>
              <th className="">Item Image</th>
              <th className="">Item Name</th>
              <th className="">Price</th>
              <th className="py-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squire rounded-md w-16 h-16">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xl text-red-500 btn-circle"
                  >
                    <FaTrashAlt className="text-lg"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
