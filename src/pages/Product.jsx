
import React from 'react'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, ArrowRight } from "lucide-react";

function Product() {
  const data = useLoaderData();
  const navigate = useNavigate()
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <NavLink to={'/products'}>
      <li
      className="text-green-700 hover:underline p-5 mb-5 list-none"
      >
        back
      </li>
      </NavLink>
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">

            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full max-w-md h-96 object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">
                {data.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                {data.title}
              </h1>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-gray-500">
                  Rating:
                </span>

                <span className="font-semibold text-gray-800">
                  {data.rating}
                </span>
              </div>

              <p className="text-3xl font-bold text-green-700 mt-6">
                ${data.price}
              </p>
              <p className="text-gray-600 leading-7 mt-6">
                {data.description}
              </p>

              <button 
              onClick={() => navigate('/cart')}
              className=" gap-3 flex mt-8 w-full md:w-fit bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition curosr-pointer">
                Add to Cart
                <ShoppingCart className="cursor-pointer" size={21} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Product

export const productLoader = async ({params}) => {
  console.log("ID:", params.id);
  
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  if(!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json()
}