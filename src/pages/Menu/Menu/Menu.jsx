import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} coverTitle={"our menu"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
