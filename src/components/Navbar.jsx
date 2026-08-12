import React, { useState } from 'react'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Search, ArrowRight, Menu, X,} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-full border-b bg-white'>
     <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 ">
    
      <img
        src={logo}
        alt="ShopVerse"
        className="h-30 w-auto object-contain"
      />

    <ul className="hidden md:flex items-center gap-6">
      <NavLink to="/"
      className={({isActive}) =>
        isActive ? "text-green-700" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black">
        Home
      </li>
      </NavLink>

      <NavLink to="products"
      className={({isActive}) =>
        isActive ? "text-orange-500" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black">
        Products
      </li>
      </NavLink>
      
      <NavLink to="about"
      className={({isActive}) =>
        isActive ? "text-orange-500" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black">
        About
      </li>
      </NavLink>

      
       <NavLink to="contact"
      className={({isActive}) =>
        isActive ? "text-orange-500" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black">
        Contact
      </li>
      </NavLink>
      <NavLink to="cart"
      className={({isActive}) =>
        isActive ? "text-orange-500" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black flex gap-3">
        <ShoppingCart className="cursor-pointer" size={21} />
      </li>
      </NavLink>
      <NavLink to="checkout"
      className={({isActive}) =>
        isActive ? "text-orange-500" : "text-gray-700"
    }
      >
        <li className="cursor-pointer text-gray-700 transition hover:text-black flex gap-3">
        Checkout
      </li>
      </NavLink>

    </ul>
    <button
    onClick={() => setIsOpen(!isOpen)}
    className='md:hidden'
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
  {isOpen && (
  <ul className="flex flex-col gap-2 p-4 md:hidden">
    <li>
      <NavLink
       to="/"
       className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
       >
         Home
      </NavLink>
    </li>
    <li>
      <NavLink
      to="products"
      className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
      >
         Products
      </NavLink>
    </li>
    <li>
      <NavLink
       to="about"
       className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
       >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
       to="cart"
       className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
       >
         Cart
      </NavLink>
    </li>
    <li>
      <NavLink
       to="chekout"
       className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
       >
         Checkout
      </NavLink>
    </li>
    <li>
      <NavLink
       to="contact"
       className="block rounded-md p-3 hover:bg-green-700 hover:text-white"
       >
         Contact
      </NavLink>
    </li>
  </ul>
)}
</nav>
  )
}

export default Navbar