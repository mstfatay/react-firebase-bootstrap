import React, { useContext, createContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth} from '../firebase';
import Loading from '../components/Loading';

const AuthContext = createContext();

export function useAuth () {
  return useContext(AuthContext);
}


export function AuthProvider (props){
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    return signOut(auth);
  }

  function resetPassword(email){
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user=>{
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {loading? <Loading />: props.children}
    </AuthContext.Provider>
  );
}
