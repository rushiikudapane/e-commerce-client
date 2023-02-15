import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAdd, IoMdRemove } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ selectedProduct, setCartData, cartData, checkLogin }) => {
  const [quantity, setQuantity] = useState(1);

  var object = {};

  const addToCart = () => {
    if (checkLogin === true) {
      selectedProduct.quantity = quantity;

      setCartData([...cartData, selectedProduct]);
      toast.success("Added to cart", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Please login to add into cart", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  console.log(cartData);
  // console.log(cartData);

  return (
    <div className="h-screen justify-center flex items-center flex-wrap">
      <div className="w-11/12 h-auto rounded-lg p-2 shadow-2xl container mx-auto">
        <div className="flex flex-wrap items-center justify-evenly mx-auto my-auto">
          <div>
            <img
              className="object-cover w-full h-48 my-12"
              src={selectedProduct.image}
              alt="product"
            />
          </div>
          <div className="w-96 h-auto  my-12">
            <div className="text-3xl font-bold">{selectedProduct.company}</div>
            <div className="text-6xl font-bold text-blue-300">
              {selectedProduct.name}
            </div>
            <br />
            <div className="text-3xl font-bold">
              Price: {selectedProduct.price}
            </div>
            <br />
            <div className="text-lg font-bold">
              Category: {selectedProduct.category}
            </div>
            <br />
            <div>{selectedProduct.description}</div>
            <div className="flex justify-around flex-wrap mt-5">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">
                  Back
                </button>
              </Link>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded-full"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <ToastContainer />

              <a
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-full"
              >
                <IoMdRemove />
              </a>
              {quantity}
              <a
                onClick={() => setQuantity(quantity + 1)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-full"
              >
                <IoIosAdd />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
