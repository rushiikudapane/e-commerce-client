import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = ({ setSelectedProduct }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.pujakaitem.com/api/products"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="w-full rounded-lg shadow-2xl lg:max-w-sm container mx-auto flex flex-row flex-wrap justify-evenly p-3">
      {data.map((product, key) => {
        return (
          <div
            className="w-full rounded-lg shadow-2xl lg:max-w-sm p-2 mx-2 my-3 hover:shadow-gray-900"
            key={product.id}
          >
            <img
              className="object-cover w-full h-48"
              src={product.image}
              alt="product"
            />
            <div className="p-4">
              <h4 className="text-3xl font-bold text-blue-600">
                {product.name}
              </h4>
              <p className=" text-xl font-semibold mb-2 leading-normal">
                {product.company}
              </p>
              <p className="text-xl font-bold mb-2 leading-normal">
                Price: ₹{product.price}
              </p>
              <Link to="/details">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => setSelectedProduct(product)}
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
