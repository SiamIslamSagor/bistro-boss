import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  return (
    <div>
      {isLoginPage || <NavBar></NavBar>}
      <Outlet></Outlet>
      {isLoginPage || <Footer></Footer>}
    </div>
  );
};

export default Main;
