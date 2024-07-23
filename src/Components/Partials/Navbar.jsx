import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
        <div className="hidden md:flex items-center gap-5 font-normal">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/allproducts'}>All Products</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact Us</NavLink>
          <i class="ri-user-line text-xl"></i>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <i class="ri-menu-3-line  text-2xl font-bold"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
