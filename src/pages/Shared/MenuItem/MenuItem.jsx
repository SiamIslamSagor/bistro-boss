const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-4 max-lg:max-w-2xl">
      <img
        className="w-[118px] h-[104px] rounded-r-[200px]  rounded-b-[200px]"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="text-[#151515] uppercase text-xl font-medium">
          {name} -----------
        </h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
