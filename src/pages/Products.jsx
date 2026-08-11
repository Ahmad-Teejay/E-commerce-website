import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import { h2 } from 'motion/react-client';

function Products() {
    const data = useLoaderData()
    console.log(data);

  return (
    <div>
        <hgroup className='mb-5 text-center'>
        <h1 className='font-bold text-green-700 mb-3'> OUR COLLECTION</h1>
        <h2 className='text-gray-700'>Discover Your Beauty Essentials</h2>
        <p className='text-gray-700'>Carefully selected products for your everyday beauty routine.</p>
        </hgroup>
        <div className='flex flex-wrap justify-center gap-5'>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>All</button>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Skincare</button>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Makeup</button>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Haircut</button>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Fragrance</button>   
        </div>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 p-5">
            {data.products.map((product) => (
              <ProductCard
              key={product.id}
              product={product}
             />
          ))}
        </div>
        </section>
    </div>
  )
}

export default Products

export const productsLoader = async () => {
    const response =  await fetch(`https://dummyjson.com/products`)
    if (!response.ok)   throw new Error("Failed to fetch products");
    return response.json()
}