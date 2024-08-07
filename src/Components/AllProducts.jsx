import React, { useState } from "react";
import Navbar from "./Partials/Navbar";
import Card from "./Partials/Card";
import { useSelector } from "react-redux";
import Footer from "./Partials/Footer";

function AllProducts() {
  const { list } = useSelector((state) => state.productReducer);
  return (
    list && (
      <div className="bg-[#F3F4F6] w-full min-h-screen">
        <Navbar />
        <h1 className="mx-4 text-3xl font-bold px-4 py-2 bg-[#4F46E5] text-white w-fit mt-5" >All Products</h1>
        <div className="flex gap-8 flex-wrap my-5 justify-center">
          {list.map((item, idx) => {
            return <Card key={idx} data={item}/>;
          })}
        </div>
        <Footer/>
      </div>
    )
  );
}

export default AllProducts;
