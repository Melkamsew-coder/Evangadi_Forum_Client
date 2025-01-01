import React, { useRef } from "react";
import axios from "../../Api/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import classes from "./register.module.css";

const Register = ({ switchToSignIn }) => {
  const navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstnameValue = firstnameDom.current.value;
    const lastnameValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("please provide all required informations");
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });
      alert("register successfull, please login");
      
      navigate("/");
    } catch (error) {
      alert("something went wrong");
      console.log(error.response);
    }
  }

  return (
    <>
      <div className={classes["form"]} id={classes["sign-up-form"]}>
        <h2>Join the network</h2>
        <p>
          Already have an account?
          <span className={classes["toggle-link"]} onClick={switchToSignIn}>
            Sign in
          </span>
        </p>
        <form onSubmit={handleSubmit} action="">
          <input
            ref={usernameDom}
            type="text"
            placeholder="User name"
            required
          />
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <input
              style={{ width: "45%" }}
              ref={firstnameDom}
              type="text"
              placeholder="First name"
              required
            />
            <input
              style={{ width: "45%" }}
              ref={lastnameDom}
              type="text"
              placeholder="Last name"
              required
            />
          </div>
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
          <div
            style={{
              display: "block",
              textAlign: "center",
              margin: "10px",
              fontSize: "13px",
            }}
          >
            I agree to the <a href="#">privacy policy</a> and <a href="#">terms of service</a>.
          </div>
          <button type="submit">Agree and Join</button>
        </form>
      </div>
    </>
  );
};

export default Register;
