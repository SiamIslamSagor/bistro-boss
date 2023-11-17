import Swal from "sweetalert2";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  // user info get by using hook
  const { user } = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();
  const { image, price, recipe, name, _id } = item;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  // handler
  const handleAddToCart = () => {
    if (user && user.email) {
      // manage food info
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      // send food in database
      axiosSecure
        .post("/carts", cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: `${name} added to your cart successfully`,
              showConfirmButton: false,
              timer: 3500,
            });
          }
          // refetch the cart to update the cart item count
          refetch();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "Please Login!",
        text: "You won't be Add item in your cart, Please Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt={name} />
        <p className="absolute bg-[#111827] py-3 px-4 text-white top-5 right-7 font-medium">
          {" "}
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={handleAddToCart}
            className="btn btn-neutral  bg-[#E8E8E8] hover:bg-[#1F2937] text-[#D99904] border-0 border-b-4 border-b-[#D99904]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
