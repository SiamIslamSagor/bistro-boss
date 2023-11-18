import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useContextData from "../hooks/useContextData";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const { user, loading } = useContextData();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
