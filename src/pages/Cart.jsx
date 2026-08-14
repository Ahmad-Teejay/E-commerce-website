import React from 'react'
import useCart from '../context/CartContext'
import { div } from 'motion/react-client'
import { productsLoader } from './Products'
import { h2 } from 'motion/react-m'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cart,increaseQuantity,decreaseQuantity,removeFromCart,subTotal,shipping,discount,total} = useCart()
 const navigate = useNavigate()
  
  return (
    <section className="min-h-screen bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4">

    {/* Header */}
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Your Shopping Cart
      </h1>
      <p className="text-gray-500 mt-2">
        Review your beauty essentials before checkout.
      </p>
    </div>

    {/* Main content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Cart items */}
      <div className="lg:col-span-2 space-y-5">

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Cart Items
          </h2>

          {/* Product item goes here */}
          
          {cart.length === 0 ? (
           <>
           <h2
           className=' text-gray-700 font-serif'
           >Your cart is empty!</h2>
           <p
           className='text-gray-700 font-serif'
           >Looks like you haven't added anything yet.</p>
           <button
           onClick={() => navigate('/products')}
           className='p-2 text-white bg-green-700 rounded-md shadow-lg cursor-pointer hover:bg-green-800 mt-5 font-bold'
           >Continue Shopping</button>
           </>
          ) : (
            cart.map((item) => (
            <div key={item.product.id}>
              <p>{item.product.category}</p>
              <h2>{item.product.title}</h2>
              <p>{item.product.price}</p>
              <img src={item.product.thumbnail} alt="" width={50} />
              <div className='flex justify-center gap-5'>
              <button 
              className='p-3 text-white rounded-md shadow-lg bg-green-700 cursor-pointer hover:bg-green-800'
              onClick={() => decreaseQuantity(item.product.id)}> - </button>
              <span className='items-center'>{item.quantity}</span>
              <button 
              className='p-3 text-white rounded-md shadow-lg bg-green-700 cursor-pointer hover:bg-green-800'
              onClick={() => increaseQuantity(item.product.id)}> + </button>
              </div>
              <button 
              className='p-3 text-green-700 cursor-pointer mt-3 font-bold'
              onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          ))
          )}
      
        </div>

      </div>

      {/* Order summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>-${discount}</span>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span className="text-green-700">${total}</span>
            </div>

          </div>

          <button 
          onClick={() => navigate('/checkout')}
          className="w-full mt-6 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            Checkout
          </button>

        </div>
      </div>

    </div>
  </div>
</section>
  )

}
export default Cart
       