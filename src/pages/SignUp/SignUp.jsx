import { Link } from "react-router-dom";
import useContextData from "../../hooks/useContextData";
import { useForm } from "react-hook-form";

const SignUp = () => {
  // context data
  const { createUser } = useContextData();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  /*   // handler 
  const handleSignUp = (e) => {

  } */
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              {errors.name && (
                <span className="text-sm text-red-500">Name is required *</span>
              )}
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">
                  Email is required *
                </span>
              )}
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* {errors.password && (
                <span className="text-sm text-red-300">
                  Password is required *
                </span>
              )} */}
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is must required **</p>
              )}
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center mb-10">
            <p>
              <small>
                All ready Registered? please{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
