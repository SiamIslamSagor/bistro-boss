import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../config/firebase.config";

//////////////////// context//////////////////

export const AuthContext = createContext(null);

/////////////////// auth /////////////////
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //////////////////// state//////////////////

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingUser, setUpdatingUser] = true;

  //////////////////// functionality//////////////////

  // provider
  const googleProvider = new GoogleAuthProvider();

  // emailPass login
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log In user
  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out user
  const logOut = () => {
    return signOut(auth);
  };

  ///////////////// auth observer ///////////////

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("USER OBSERVED BY onAuthStateChanged :=>", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [setUpdatingUser]);

  //////////////////// main data//////////////////

  const authInfo = {
    // data
    user,
    loading,
    updatingUser,

    // auth function
    createUser,
    emailPassLogin,
    loginWithGoogle,
    logOut,

    // state function
    setUser,
    setLoading,
    setUpdatingUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
