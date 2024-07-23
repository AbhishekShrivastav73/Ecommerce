import React from "react";
import { Link } from "react-router-dom";

const CategoryCards = ({ products }) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((category, idx) => (
            <Link to={`/?category=${category}`}
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-4"
            >
              <div>
                <h3 className="text-lg  text-[#4F46E5] font-extrabold">
                  {category.toUpperCase()}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
