import useContextData from "../../hooks/useContextData";

const SignUp = () => {
  // context data
  const { createUser } = useContextData();
  return (
    <div>
      <h1>This is sign up</h1>
    </div>
  );
};

export default SignUp;
