import { FaGoogle } from "react-icons/fa";
import useContextData from "../../hooks/useContextData";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  //  context data
  const { loginWithGoogle } = useContextData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  //  handler
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(res => {
        console.log(res);

        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };

        axiosPublic
          .post("/users", userInfo)
          .then(res => {
            console.log(res.data);
            navigate("/");
          })
          .catch(err => {
            console.log(err);
          });

        Swal.fire({
          title: "User Login Successfully!",
          icon: "success",
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="text-center mb-4 w-full">
      <div className="divider px-8">or</div>
      <button onClick={handleGoogleLogin} className="btn ">
        login with google {"  "}
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
