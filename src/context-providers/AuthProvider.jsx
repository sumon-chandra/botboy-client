import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  // Registration
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with google account
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Log out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update profile
  const addUserInfo = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  // Got the user changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      addUserInfo();
      setUser(user);
      setLoading(true);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    register,
    login,
    user,
    loading,
    loginWithGoogle,
    logout,
    addUserInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
