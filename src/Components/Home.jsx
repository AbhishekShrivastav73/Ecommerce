import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Reducers/productSlice";
import Navbar from "./Partials/Navbar";
import HeroSection from "./Partials/Hero";
import CategoryCards from "./Partials/CategoryCards";
import Card from "./Partials/Card";
import Features from "./Partials/Features";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.list);
  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  let mens =
    products && products.filter((elem) => elem.category == "men's clothing");
  let women =
    products && products.filter((elem) => elem.category == "women's clothing");
  let jewelery =
    products && products.filter((elem) => elem.category == "jewelery");
  let electronics =
    products && products.filter((elem) => elem.category == "electronics");
  console.log(women);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6]">
      <Navbar />
      <HeroSection />
      <CategoryCards products={distinctCategory} />
      <h1 className="bg-[#4F46E5] px-4 py-2 ml-4 font-bold text-2xl my-4 text-white w-fit">
        Men's Collection
      </h1>
      <div className="w-full p-4 flex overflow-x-auto gap-2">
        {mens.map((product, idx) => (
          <Card data={product} />
        ))}
      </div>
      <Features />
      <h1 className="bg-[#4F46E5] px-4 py-2 ml-4 font-bold text-2xl my-4 text-white w-fit">
        Women's Collection
      </h1>
      <div className="w-full p-4 flex overflow-x-auto gap-2">
        {women.map((product, idx) => (
          <Card data={product} />
        ))}
      </div>
      <h1 className="bg-[#4F46E5] px-4 py-2 ml-4 font-bold text-2xl my-4 text-white w-fit">
      Jewelery's Collection
      </h1>
      <div className="w-full p-4 flex overflow-x-auto gap-2">
        {jewelery.map((product, idx) => (
          <Card data={product} />
        ))}
      </div>
      <h1 className="bg-[#4F46E5] px-4 py-2 ml-4 font-bold text-2xl my-4 text-white w-fit">
      Electronics's Collection
      </h1>
      <div className="w-full p-4 flex overflow-x-auto gap-2">
        {electronics.map((product, idx) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
