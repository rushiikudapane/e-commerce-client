import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setCheckLogin, setAppEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://e-commerce-server-lq0g.onrender.com/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        setCheckLogin(true);

        setEmail("");
        setPassword("");
        console.log("login successfull");
        toast.success("Login SuccessFull!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setAppEmail(email);
      }
      if (response.status === 400) {
        console.log("Fill data Properly...");
        toast.error("Fill data Properly...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (response.status === 401) {
        console.log("Invalid Credentials...");
        toast.success("Invalid Credentials...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      if (err) {
        console.log(err);
        toast.error("User not registered please Signup...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center content-center">
      <div className="container h-screen mx-auto my-auto shadow-lg flex justify-center">
        <div className=" w-full h-4/6 rounded-lg shadow-2xl lg:max-w-sm p-2 my-20 flex flex-col justify-center hover:shadow-gray-900">
          <h1 className="mx-auto my-auto">Login Form</h1>
          <label className="mx-auto text-lg font-bold">Email</label>
          <input
            className="h-12 mx-3 rounded-full my-3 bg-blue-100 text-lg font-bold"
            type="text"
            onChange={getEmail}
            value={email}
          />
          <label className="mx-auto text-lg font-bold">Password</label>
          <input
            className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
            type="password"
            onChange={getPassword}
            value={password}
          />
          <button
            type="submit"
            className="my-4 mx-3 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
            onClick={submitData}
          >
            Login
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
