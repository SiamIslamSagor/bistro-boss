import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  // state
  const [menu, setMenu] = useState([]);

  // side effect
  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Item"}
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
        {menu.map(item => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
