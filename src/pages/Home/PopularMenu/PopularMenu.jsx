import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  /* // state
  const [menu, setMenu] = useState([]);

  // side effect
  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === "popular");
        setMenu(popularItems);
      });
  }, []); */

  return (
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Item"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
        {popular.map(item => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4  mt-6 my-10">
          View Full menu{" "}
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
