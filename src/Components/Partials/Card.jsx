import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link
      to={`/product/${data.id}`}
      className="w-64 relative bg-white flex flex-col gap-2 justify-between  rounded-2xl shadow p-4 shrink-0"
    >
      <div className="w-full h-[18vh] md:h-[28vh] overflow-hidden">
        <img src={data.image} className="h-full mx-auto" alt="" />
      </div>
      <div className="h-42 flex flex-col justify-between gap-2">
        <h1 className="font-medium mt-3">{data.title}</h1>
        <div className="flex items-center justify-between">
          <p>
            <i class="ri-star-s-fill text-orange-400"></i> {data.rating.rate}
          </p>
          <p className="font-semibold">${data.price}</p>
        </div>
        <Link className="w-full rounded-md bg-black text-white text-center py-2 ">
          Add to Cart
        </Link>
      </div>
    </Link>
  );
}

export default Card;
