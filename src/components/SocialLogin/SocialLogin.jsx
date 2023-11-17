import { FaGoogle } from "react-icons/fa";
import useContextData from "../../hooks/useContextData";
import Swal from "sweetalert2";

const SocialLogin = () => {
  //  context data
  const { loginWithGoogle } = useContextData();

  //  handler
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(res => {
        console.log(res);
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
