import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const oldItem = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { _id, name, recipe, category, price } = oldItem;
  const { register, handleSubmit, reset } = useForm();

  //   handler
  const onSubmit = async data => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the imgbb url.
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      console.log(menuItem);
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount) {
        // popup
        console.log("pop UPP");
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} Updated Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data.data.display_url);
  };
  return (
    <div>
      <SectionTitle
        heading={"Update an item"}
        subHeading={"Refresh Info"}
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
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
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
            Update Menu Item
            <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
