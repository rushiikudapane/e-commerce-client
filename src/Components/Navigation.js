import React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navigation = ({ checkLogin, setCheckLogin, appEmail }) => {
  return (
    <>
      <div className="bg-gray-700 shadow-lg container mx-auto">
        <div className="sm:flex justify-around">
          <h1 className="text-white text-5xl font-bold p-3">Shopping App</h1>
          <ul className="text-grey-400 sm:self-center text-xl border-t sm:border-none flex flex-row flex-wrap justify-around">
            <li className="sm:inline-block p-3">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full">
                  <AiFillHome className="w-8 h-8" />
                </button>
              </Link>
            </li>
            <li className="sm:inline-block p-3">
              <Link to="/cart">
                <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full">
                  <BiCartAlt className="w-8 h-8" />
                </button>
              </Link>
            </li>
            <li className=" sm:inline-block p-3">
              {checkLogin ? (
                <Link to="/login">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full text-xl font-bold">
                    {appEmail}
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full text-xl font-bold">
                    Login
                  </button>
                </Link>
              )}
            </li>
            {checkLogin ? (
              <li className="sm:inline-block p-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full text-xl font-bold"
                  onClick={() => {
                    setCheckLogin(false);
                    toast.success("Loged Out Successfully", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  }}
                >
                  Logout
                </button>
                <ToastContainer />
              </li>
            ) : (
              <li className="sm:inline-block p-3">
                <Link to="/signup">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full text-xl font-bold">
                    SignUp
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
