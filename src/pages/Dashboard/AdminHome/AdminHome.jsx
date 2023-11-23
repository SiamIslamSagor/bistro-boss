import useAuthInfo from "../../../hooks/useAuthInfo";

const AdminHome = () => {
  const { user } = useAuthInfo();
  return (
    <div>
      <h2>
        Hi, Welcome <span>{user?.displayName ? user.displayName : "Back"}</span>
      </h2>
    </div>
  );
};

export default AdminHome;
