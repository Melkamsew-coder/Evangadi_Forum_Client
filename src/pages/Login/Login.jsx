import React, { useRef } from "react";
import axios from "../../Api/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.css";

const Login = ({ switchToSignUp }) => {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (!emailValue || !passwordValue) {
      alert("please provide all required informations");
      return;
    }

    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      alert("login successfull");
      localStorage.setItem("token", data.token);
      navigate("/home");
      // console.log(data);
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <>
          <div className={classes.form} id={classes["sign-in-form"]}>
            <h2>Login to your account</h2>
            <p>
              Don’t have an account ? 
              <span className={classes["toggle-link"]} onClick={switchToSignUp}>
                Create a new account
              </span>
            </p>
            <form onSubmit={handleSubmit} action="">
              <input
                ref={emailDom}
                type="email"
                placeholder="Email address"
                required
              />
              <input
                ref={passwordDom}
                type="password"
                placeholder="Password"
                required
              />
              <Link
                to={"/#"}
                style={{
                  display: "block",
                  textAlign: "right",
                  marginBottom: "10px",
                  textDecoration:"none"
                }}
              >
                Forgot password ?
              </Link>
              <button type="submit">Login</button>
            </form>
          </div>
    </>
  );
};

export default Login;
