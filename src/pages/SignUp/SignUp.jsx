import { Link, useNavigate } from "react-router-dom";
import useContextData from "../../hooks/useContextData";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  // context data
  const { createUser, updateUserProfile, updatingUser, setUpdatingUser } =
    useContextData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    // creating user
    createUser(data.email, data.password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);

        // updating user info
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log("update profile done");
            reset();
            Swal.fire({
              title: "Account Created Successfully!",
              icon: "success",
            });
            setUpdatingUser(!updatingUser);
            navigate("/");
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*   // handler 
  const handleSignUp = (e) => {

  } */
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                {errors.name && (
                  <span className="text-sm text-red-500">
                    Name is required *
                  </span>
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
                  <span className="label-text">Photo URL</span>
                </label>
                {errors.photoUrl && (
                  <span className="text-sm text-red-500">
                    Photo URL is required *
                  </span>
                )}
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
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
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 characters *
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be 20 characters *
                  </p>
                )}

                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
                    // /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must be at least one lower case one uppercase one
                    spacial character *
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
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
    </>
  );
};

export default SignUp;
