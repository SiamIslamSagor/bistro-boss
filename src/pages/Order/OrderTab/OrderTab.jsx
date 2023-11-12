import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
      {items.map(item => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
