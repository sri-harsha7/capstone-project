import React from "react";
import login from "../assets/login.png";

import Form from "./Form";

const Login = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="login-poster"
        style={{ width: "50vw", position: "relative" }}
      >
        <img src={login} alt="" />
        <h1
          style={{
            position: "absolute",
            bottom: "30%",
            left: "20%",
            background: "transparent",
            fontSize: "3.5rem",
            fontWeight: "bold",
            fontFamily: "Single Day",
          }}
        >
          Discover New Things on Super App
        </h1>
      </div>
      <div
        className="login-form"
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form></Form>
      </div>
    </div>
  );
};

export default Login;
