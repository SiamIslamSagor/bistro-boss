import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg}></Cover>
      <h1>His is menu</h1>
    </div>
  );
};

export default Menu;
