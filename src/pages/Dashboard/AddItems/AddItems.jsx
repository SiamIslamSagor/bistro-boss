import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";

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
              {...register("name", { required: true })}
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
                {...register("category", { required: true })}
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
                {...register("price", { required: true })}
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
              {...register("recipe", { required: true })}
              className="textarea focus:outline-none textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs focus:outline-none"
          />
          <br />

          <button
            type="submit"
            className="btn px-10 btn-secondary bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none normal-case text-white text-lg"
          >
            Submit <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
