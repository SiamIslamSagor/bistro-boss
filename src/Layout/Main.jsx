import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div>
      {isAuthPage === true || <NavBar></NavBar>}
      <Outlet></Outlet>
      {isAuthPage === true || <Footer></Footer>}
    </div>
  );
};

export default Main;
