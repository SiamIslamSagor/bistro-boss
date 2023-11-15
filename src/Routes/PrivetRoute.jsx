import PropTypes from "prop-types";
import useContextData from "../hooks/useContextData";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContextData();
  const location = useLocation();

  if (loading) {
    return <h2 className="text-center text-6xl">Loading....</h2>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
