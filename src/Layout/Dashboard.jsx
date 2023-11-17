import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Dashboard = props => {
  return (
    <div className="flex">
      {/* side navigation */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaCalendar></FaCalendar> Add a Review
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/bookings">
              <FaHome></FaHome> My Bookings
            </NavLink>
          </li>
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
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-yellow-50 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
