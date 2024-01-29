import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {

  let navigate = useNavigate();


  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/')
    });
  };

  return (
    <div className="loginPage">
      <h1>Sign In With Google to Continue</h1>
      <button className="login-with-google-btn" onClick={SignInWithGoogle}>Sign In</button>
    </div>
  );
};

export default Login;
