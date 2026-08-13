import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import { h2 } from 'motion/react-client';
import { Search } from 'lucide-react'

function Products() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  
  const data = useLoaderData()
  // console.log(data);
  // console.log(search);
  // console.log(category);
  
   const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) && 
   ( category === "all" || product.category === category)
  )
  
  return (
    <div>
        <hgroup className='mb-5 text-center'>
        <h1 className='font-bold text-green-700 mb-3'> OUR COLLECTION</h1>
        <h2 className='text-gray-700'>Discover Your Beauty Essentials</h2>
        <p className='text-gray-700'>Carefully selected products for your everyday beauty routine.</p>
        </hgroup>

        <div className="mb-8 flex flex-wrap items-center gap-4">

           <div className="relative w-full max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500"
              size={20}
            />

            <input
              type="search"
              name="search"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-1/2 rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-800 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 "
            />
         </div>
       

            <button 
            onClick={() => setCategory("all")}
            className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>All</button>
            <button 
            
            className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Skincare</button>
            <button className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Makeup</button>
            <button 
            onClick={() => setCategory("beauty")}
            className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Beauty</button>
            <button 
            onClick={() => setCategory("fragrances")}
            className='text-white p-3 bg-green-700 rounded-md shadow-lg hover:bg-green-800 cursor-pointer'>Fragrance</button>   
        </div>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 p-5">
            {filteredProducts.length === 0 ? 
              (
               <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                 <h2 className="text-2xl font-semibold text-gray-800">
                        No products found
                 </h2>

                 <p className="mt-2 text-gray-500">
                        Try searching for something else.
                 </p>
               </div>
            ) : (
              filteredProducts.map((product) => (
              <ProductCard
              key={product.id}
              product={product}
             />
          ))
            ) }
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