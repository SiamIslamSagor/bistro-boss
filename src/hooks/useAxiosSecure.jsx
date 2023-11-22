import axios from "axios";
import { useNavigate } from "react-router-dom";
import useContextData from "./useContextData";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContextData();
  // request interceptors to add authorization header for every secure call to the api.
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("REQUEST STOPPED BY INTERCEPTORS", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async error => {
      const status = error?.response?.status;
      console.log("STATUS CODE ERROR IN THE INTERCEPTORS==>", status);
      // for 401 or 403 status code logout the user and move the user login page.
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
