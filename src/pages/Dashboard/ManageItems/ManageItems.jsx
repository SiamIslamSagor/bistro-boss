import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { PiNotePencil, PiNotePencilBold } from "react-icons/pi";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu] = useMenu();

  //   handler
  const handleDeleteItem = item => {
    console.log(item);
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleUpdateItem = item => {
    console.log(item);
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto w-full rounded-t-2xl mt-6">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-white bg-[#D1A054] ">
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th className="py-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu?.map((menuItem, index) => (
                <tr key={menuItem._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={menuItem.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{menuItem.name}</td>
                  <td>{"$" + menuItem.price}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateItem(menuItem)}
                      className="btn btn-xl text-white bg-[#d99c42] btn-square hover:text-[#d99c42] hover:bg-white hover:border hover:border-[#d99c42] duration-300 ease-linear"
                    >
                      <PiNotePencil className="text-2xl" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(menuItem)}
                      className="btn btn-xl text-white bg-red-600 btn-square hover:bg-white hover:border hover:text-red-600 hover:border-red-600 duration-300 ease-linear "
                    >
                      <FaTrashAlt className="text-lg"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
