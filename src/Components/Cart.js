import React from "react";
import { Link } from "react-router-dom";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BiCartAlt } from "react-icons/bi";

const Cart = ({ checkLogin, cartData }) => {
  if (cartData.length === 0 && checkLogin === true) {
    return (
      <div className="w-full h-screen rounded-lg shadow-2xl lg:max-w-sm container mx-auto flex flex-col items-center flex-wrap  justify-center">
        <h1>
          <BiCartAlt className="w-20 h-20 text-gray-700" />
        </h1>
        <h1 className="text-4xl font-bold text-indigo-600">
          Cart Empty, Please Add some products...
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {checkLogin ? (
            <div className="w-full rounded-lg shadow-2xl lg:max-w-sm container mx-auto flex flex-col items-center">
              <div className="flex flex-row flex-wrap justify-evenly p-3">
                {cartData.map((product, key) => {
                  return (
                    <div
                      key={product.id}
                      className="w-full rounded-lg shadow-2xl lg:max-w-sm p-2 mx-2 my-3 hover:shadow-gray-900"
                    >
                      <img
                        className="object-cover w-full h-48"
                        src={product.image}
                        alt="product"
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-semibold text-blue-600">
                          {product.name}
                        </h4>
                        <p className="mb-2 leading-normal">
                          Brand: {product.company}
                        </p>
                        <p className="mb-2 leading-normal">
                          Price: {product.price}
                        </p>
                        <p className="mb-2 leading-normal">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <Link to="/checkout">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full block">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full text-center h-screen rounded-lg shadow-2xl lg:max-w-sm container mx-auto flex flex-col items-center flex-wrap  justify-center">
              <h1>
                <BsFillExclamationTriangleFill className="w-20 h-20 text-gray-700" />
              </h1>
              <h1 className="text-5xl font-bold text-indigo-600">
                Oops!!! Please Login...
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Cart;
