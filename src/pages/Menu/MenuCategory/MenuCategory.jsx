import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-10">
      {title && title !== "offered" && (
        <Cover img={coverImg} coverTitle={title}></Cover>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 mt-16">
        {items.map(item => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4  mt-6 my-10">
            ORDER YOUR FAVORITE FOOD{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
