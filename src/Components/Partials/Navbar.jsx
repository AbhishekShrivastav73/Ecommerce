import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const product = useSelector((state) => state.productReducer.list);

  useEffect(() => {
    // Filter products whenever 'search' changes
    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setFilteredProducts(filtered);
  }, [search, product]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setShow(!show);
  };

  return (
    <nav className="w-full">
      <div className="bg-[#4F46E5] text-white py-2 w-full flex gap-2 items-center justify-center">
        <i class="ri-discount-percent-line"></i>
        <p className="text-sm font-semibold">
          Get Upto 70% Off On Your First Order !!{" "}
        </p>
      </div>
      <div className="px-3 py-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tighter">
          ele<span className="text-[#4F46E5] font-extrabold">.</span>mart
        </h1>
        <div className="hidden md:flex md:w-1/3 relative items-center gap-4">
          <input
            onChange={handleChange}
            className="w-full  px-4 py-2 bg-zinc-200 rounded-md text-black"
            type="text"
            placeholder="Search..."
          />

          {show && (
            <div className="lists absolute top-[100%] w-full flex flex-col min-h-fit max-h-64 overflow-auto  gap-4 z-[100] bg-white">
              {filteredProducts.map((data) => (
                <Link
                  className="w-full px-4 py-4 bg-zinc-200 font-medium"
                  to={`/product/${data.id}`}
                >
                  {data.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-5 font-normal">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allproducts"}>All Products</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact Us</NavLink>
          <i class="ri-user-line text-xl"></i>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <i class="ri-menu-3-line  text-2xl font-bold"></i>
        </div>
      </div>
      <div className="flex items-center relative justify-between px-4">
        <input
          onChange={handleChange}
          className="w-full md:hidden md:w-1/2 mt-2   px-4 py-2 bg-zinc-200 rounded-md text-black"
          type="text"
          placeholder="Search..."
        />
        {show && (
          <div className="lists  absolute top-[100%] md:w-1/2 md:mx-auto w-full md:hidden flex flex-col min-h-fit max-h-64 overflow-auto  gap-4 z-[100] bg-white">
            {filteredProducts.map((data) => (
              <Link
                className="w-full px-4 py-4 bg-zinc-200 font-medium"
                to={`/product/${data.id}`}
              >
                {data.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
