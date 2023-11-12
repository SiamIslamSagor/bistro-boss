import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soups = menu.filter(item => item.category === "soup");
  const salads = menu.filter(item => item.category === "salad");
  const pizzas = menu.filter(item => item.category === "pizza");
  const offerers = menu.filter(item => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} coverTitle={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"Today's offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offerers} title={"offered"}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"desserts"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizzas}
        title={"pizzas"}
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salads}
        title={"salads"}
        coverImg={saladImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soups}
        title={"soups"}
        coverImg={soupImg}
      ></MenuCategory>
      <MenuCategory
        items={soups}
        title={"offered"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
