// import React, { createContext, useEffect, useState } from "react";

// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { app } from "../Firebase/firebase.config";
// const auth = getAuth(app);
// export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const googleSignIn = () => {
//     return signInWithPopup(auth, googleProvider);
//   };
//   const forgetPass = (email) => {
//     return sendPasswordResetEmail(auth, email);
//   };
//   const updateUser = (updateData) => {
//     return updateProfile(auth.currentUser, updateData);
//   };
//   const logout = () => {
//     return signOut(auth);
//   };
//   useEffect(() => {
//     const unsubscibe = onAuthStateChanged(auth, (curentUser) => {
//       setUser(curentUser);
//       setLoading(false);
//     });
//     return () => {
//       unsubscibe();
//     };
//   }, []);
//   const authData = {
//     user,
//     setUser,
//     createUser,
//     signIn,
//     logout,
//     loading,
//     setLoading,
//     updateUser,
//     googleSignIn,
//     forgetPass,
//   };
//   return (
//     <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;
