import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Checkout = ({ appEmail, cartData }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  var obj = {};
  obj.products = cartData;
  obj.email = appEmail;
  obj.name = name;
  obj.contact = number;
  obj.address = address;

  const Order = async () => {
    try {
      const response = await axios.post(
        "https://e-commerce-server-lq0g.onrender.com/placeorder",
        obj
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    toast.success("Order successfully placed!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    console.log(obj);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center content-center">
        <div className="container h-screen mx-auto my-auto shadow-lg flex justify-center">
          <div className="w-full h-5/6 rounded-lg shadow-2xl lg:max-w-sm p-2 my-20 flex flex-col justify-center hover:shadow-gray-900">
            <h1 className="mx-auto my-auto">Checkout</h1>
            <label className="mx-auto text-lg font-bold">Name</label>
            <input
              className="h-12 mx-3 rounded-full my-3 bg-blue-100 text-lg font-bold"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mx-auto text-lg font-bold">Contact No.</label>
            <input
              className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <label className="mx-auto text-lg font-bold">Address</label>
            <input
              className="h-12 mx-3 my-3 rounded-full bg-blue-100 text-lg font-bold"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className="my-4 mx-3 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
              onClick={Order}
            >
              Order Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
