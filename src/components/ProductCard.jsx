import React from 'react'
import Products from '../pages/Products'
import { ShoppingCart, Search, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useCart from '../context/CartContext';

function ProductCard({product}) {
    
    const {addToCart, message} = useCart()
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 max-w-sm mt-5 mb-5">
        {message && (
          <div className="fixed right-5 top-5 z-50 rounded-lg bg-green-500 px-5 py-3 text-white shadow-lg">
               {message}
           </div>
        )}
        <div>
            <img
             src={product.thumbnail}
             alt="product-image"
             className='w-full h-56 object-cove'
              />
        </div>

        <div className='p-5'>
            <p
            className="text-sm text-gray-500 capitalize mb-1"
            > {product.category}</p>
            <h2
            className="text-lg font-semibold text-gray-800 truncate"
            >{product.title}</h2>
            <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Rating:</span>
            <span className="font-semibold">{product.rating}</span>
            </div>
            <p
            className="text-green-700 font-bold text-xl mt-3"
            >${product.price}</p>
            <NavLink to={`/products/${product.id}`}>
               View Details
            </NavLink>
            <button
            onClick={() => addToCart(product)}
            className='bg-green-700 text-white rounded-md shadow-lg p-3 flex gap-3 mt-5 hover:bg-green-800 cursor-pointer mb-5 transition'>
                add to cart
                <ShoppingCart className="cursor-pointer" size={21} />
            </button>
        </div>
    </div>
  )
}

export default ProductCard