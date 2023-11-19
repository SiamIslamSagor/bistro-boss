import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>

      <div className="bg-[#F3F3F3] font-medium p-12 rounded-lg">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input focus:outline-none input-bordered w-full "
            />
          </div>

          <div className="flex gap-4">
            <div className=" w-full">
              <label className="label">
                <span className="label-text">Category *</span>
              </label>
              <select
                defaultValue={"Select a Category"}
                {...register("category")}
                className="focus:outline-none select select-bordered w-full "
              >
                <option disabled>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
                <option value="offered">Offered</option>
              </select>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price *</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input focus:outline-none input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details *</span>
            </label>
            <textarea
              {...register("recipeDetails")}
              className="textarea focus:outline-none textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <input className="btn btn-secondary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
