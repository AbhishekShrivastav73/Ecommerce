import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Partials/Navbar";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    product && (
      <div className="bg-[#F3F4F6] w-full min-h-screen">
        <Navbar />
        <div className="w-full  min-h-[80vh] p-4 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className=" w-full md:w-[30vw] h-1/2 md:h-[60vh] p-4 rounded-2xl bg-white flex items-center justify-center">
            <img className="h-[90%]" src={product.image} alt="" />
          </div>
          <div className="p-4 flex flex-col gap-3 md:w-1/2 md:gap-2">
            <p className="tracking-tighter text-[#4F46E5]">{product.category}</p>
            <h1 className="font-bold tracking-tight text-lg">{product.title}</h1>
            <p className=" tracking-tight">{product.description}</p>
            <p className="font-bold">Price : ${product.price}</p>
            <button className="w-full border border-[#4F46E5] text-[#4F46E5] transition-all ease-in-out  hover:bg-[#4F46E5] hover:text-white rounded-md font-semibold py-4">Buy Now</button>
            <button className="w-full bg-[#4F46E5] rounded-md font-semibold text-white py-4">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
