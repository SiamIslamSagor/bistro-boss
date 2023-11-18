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
  updateProfile,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

//////////////////// context//////////////////

export const AuthContext = createContext(null);

/////////////////// auth /////////////////
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //////////////////// state//////////////////

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingUser, setUpdatingUser] = useState(true);

  //////////////////// functionality//////////////////

  // provider
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // emailPass login
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log In user
  const emailPassLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update user info
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
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
      // jwt code block
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then(res => {
          if (res.data) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
        console.log();
      } else {
        // TODO: remove token (if token stored in the client side: LocalStorage, cookie)
        // do something
        localStorage.removeItem("access-token");
        console.log();
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [updatingUser, axiosPublic]);

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
    updateUserProfile,
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
