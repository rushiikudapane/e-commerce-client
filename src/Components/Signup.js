import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submitData = async (e) => {
    try {
      const response = await axios.post(
        "https://e-commerce-server-lq0g.onrender.com/register",
        {
          name: name,
          email: email,
          password: password,
          cpassword: cpassword,
        }
      );

      if (response.status === 201) {
        e.preventDefault();
        setEmail("");
        setCpassword("");
        setName("");
        setPassword("");
        console.log("Signup successfull");
        toast.success("Signup SuccessFull!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (response.status === 422) {
        console.log("Please fill all data properly...");
        toast.success("Please fill all data properly...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (response.status === 400) {
        console.log("User already exist please login");
        toast.success("User already exist please login", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (response.status === 422) {
        console.log("Please fill all data properly...");
        toast.success("Please fill all data properly...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (response.status === 401) {
        console.log("Password did not matched");
        toast.success("Password did not matched", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      console.log(response);
    } catch (err) {
      if (err) {
        toast.error("Please enter details properly and try again", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center content-center">
      <div className="container h-screen mx-auto my-auto shadow-lg flex justify-center">
        <div className="w-full h-5/6 rounded-lg shadow-2xl lg:max-w-sm p-2 my-20 flex flex-col justify-center hover:shadow-gray-900">
          <h1 className="mx-auto my-auto">SignUp Form</h1>
          <label className="mx-auto text-lg font-bold">Name</label>
          <input
            className="h-12 mx-3 rounded-full my-3 bg-blue-100 text-lg font-bold"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mx-auto text-lg font-bold">Email</label>
          <input
            className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mx-auto text-lg font-bold">Password</label>
          <input
            className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="mx-auto text-lg font-bold">Confirm Password</label>
          <input
            className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
            type="password"
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button
            type="submit"
            className="my-4 mx-3 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
            onClick={submitData}
          >
            SignUp
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
