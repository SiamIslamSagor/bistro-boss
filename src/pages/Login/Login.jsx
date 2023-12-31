import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useContextData from "../../hooks/useContextData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  // context data
  const { emailPassLogin } = useContextData();
  // state
  const [isLoginDisable, setIsLoginDisable] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // handler
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // logging user
    emailPassLogin(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successfully!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleValidateCaptcha = e => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setIsLoginDisable(false);
      // alert("Captcha Matched");
    } else {
      setIsLoginDisable(true);
      // alert("Captcha Does Not Match");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2  lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                <button className="mt-2 btn btn-outline btn-xs">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                {/* TODO: apply disabled for re captcha */}
                <input
                  // disabled={isLoginDisable}
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <div className="text-center mb-10">
              <p>
                <small>
                  New Here? please{" "}
                  <Link className="text-blue-500 underline" to="/signUp">
                    Sign Up
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

export default Login;
