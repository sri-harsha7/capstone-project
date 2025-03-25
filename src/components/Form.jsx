import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState({
    name: false,
    userName: false,
    email: false,
    password: false,
    terms: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      name: false,
      userName: false,
      email: false,
      password: false,
      terms: false,
    });
    if (formData.name.trim() === 0) {
      setError((error) => {
        return { ...error, name: true };
      });
      return;
    }
    if (formData.userName.trim() === 0) {
      setError((error) => {
        return { ...error, userName: true };
      });
      return;
    }
    if (formData.email.trim() === 0) {
      setError((error) => {
        return { ...error, email: true };
      });
      return;
    }
    if (formData.password.trim() === 0) {
      setError((error) => {
        return { ...error, password: true };
      });
      return;
    }
    if (!formData.terms) {
      setError((error) => {
        return { ...error, name: true };
      });
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success(" user Created successful");
    console.log(formData);
    navigate("/genre");
  };
  return (
    <div className="login">
      <h1
        style={{
          display: "flex",
          fontSize: "2.5rem",
          fontFamily: "Single Day",
          color: "#72DB73",
          fontWeight: "bolder",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5vw",
        }}
      >
        Super Day
      </h1>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          style={{
            border: error.name ? "1px solid red" : "1px solid #72DB73",
          }}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {error.name && (
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            Please enter your name
          </p>
        )}
        <input
          type="text"
          placeholder="Username"
          value={formData.userName}
          style={{
            border: error.userName ? "1px solid red" : "1px solid #72DB73",
          }}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        {error.userName && (
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            Please enter your username
          </p>
        )}
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          style={{
            border: error.email ? "1px solid red" : "1px solid #72DB73",
          }}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {error.email && (
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            Please enter a Valid email
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          style={{
            border: error.password ? "1px solid red" : "1px solid #72DB73",
          }}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {error.password && (
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            Password is Invalid
          </p>
        )}

        <div
          style={{
            width: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem 0",
          }}
        >
          <div style={{ marginRight: "1rem" }}>
            <input
              type="checkbox"
              id="terms"
              value={formData.terms}
              onClick={(e) =>
                setFormData({ ...formData, terms: e.target.value })
              }
            />
            {error.terms && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Please agree to the terms
              </p>
            )}
          </div>
          <div>
            <label htmlFor="terms">
              I agree to the
              <span style={{ color: "#72DB73" }}> Terms of Service</span> and
              <span style={{ color: "#72DB73" }}> Privacy Policy</span>
            </label>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#72DB73",
            width: "80%",
            padding: "1rem",
            borderRadius: "4rem",
            margin: "2vh 0",
          }}
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div style={{ margin: " 0 5vw ", width: "90%" }} className="termsText">
          <p style={{ marginBottom: "1vh" }}>
            By Clicking on Sign Up. You agree to our SuperApp <br />
            <span style={{ color: "#72DB73" }}>Terms of Service</span>.
          </p>
          <p>
            To Learn More about how SuperApp collects, uses , shares and
            protects your data. Please read our{" "}
            <span style={{ color: "#72DB73" }}> Privacy Policy</span>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
