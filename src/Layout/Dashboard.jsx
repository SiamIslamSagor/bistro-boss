import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookmark,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get is admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* side navigation */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar> History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaCalendar></FaCalendar> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaBookmark></FaBookmark> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* SHARED ROUTES */}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <IoMdMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
