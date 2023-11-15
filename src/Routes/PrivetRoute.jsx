import PropTypes from "prop-types";
import useContextData from "../hooks/useContextData";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContextData();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
