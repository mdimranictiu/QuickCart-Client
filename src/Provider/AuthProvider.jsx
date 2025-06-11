import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.config.init";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // create user account
  const CreateAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Log In to Account
  const SignInAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut from web

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log("Current User", currentUser);
    setUser(currentUser);
    setLoading(false);
  });

  return () => {
    unSubscribe();
  };
}, []);

  const authInfo = {
    CreateAccount,
    SignInAccount,
    logOut,loading,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
