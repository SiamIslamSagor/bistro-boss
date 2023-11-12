const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt={name} />
        <p className="absolute bg-[#111827] py-3 px-4 text-white top-5 right-7 font-medium">
          {" "}
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-neutral  bg-[#E8E8E8] hover:bg-[#1F2937] text-[#D99904] border-0 border-b-4 border-b-[#D99904]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
