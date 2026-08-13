import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext({
    cart : []
})

 export const  CartContextProvider = ({children}) => {
     const [cart, setCart] = useState([])
     const [message, setMessage] = useState("")

     useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
     },[cart])

     useEffect(() => {
        const saveCart = localStorage.getItem("cart")
        if(saveCart){
        const parsedCart = JSON.parse(saveCart)
        setCart(parsedCart)
        }
     },[])
     function addToCart(product){
       const existingProduct =  cart.find((p) => {
        return p.product.id === product.id
       })
       if (existingProduct) {
        
           const updatedCart = cart.map((item) => {
             if (item.product.id === product.id) {
                
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {

              return item
            }
        })
        setCart(updatedCart)

       } else {
         const newCart =[...cart, {
            product: product,
            quantity: 1,
         }]

         setCart(newCart)
       }
       setMessage("Product added successfully!")
       
       setTimeout(() => {
        setMessage("")
       }, 2000);
     }

     function increaseQuantity(productId){
        const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
            return {
               ...item,
               quantity: item.quantity + 1
            }
        } else {
            return item
        }
    
    })
      setCart(updatedCart)

     }
    function decreaseQuantity(productId){
        const updatedCart = cart.map((item) => {
            if (item.product.id === productId) {
               
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {

                    return item
                }
            }

             return item
        })
        setCart(updatedCart)
    }
    function removeFromCart(productId){
        const filteredProduct = cart.filter(
            (item) => item.product.id !== productId
        )
        setCart(filteredProduct)
     }
     
     const subTotal = cart.reduce((total, item) => {
       return total + (item.product.price * item.quantity )
     },0)
        
     let shipping;

     if (cart.length === 0 || subTotal >= 75) {
        shipping = 0;
     } else {
        shipping = 5
     }
     
     const discount = subTotal >= 500 ? subTotal * 0.10 : 0;
     const total = subTotal + shipping - discount;
     console.log(total);
     
    return(
        <CartContext.Provider value={{
                                    cart, 
                                    subTotal,
                                    shipping,
                                    discount,
                                    total,
                                    message,
                                    setCart, 
                                    addToCart, 
                                    increaseQuantity, 
                                    decreaseQuantity,
                                    removeFromCart
                                    }}>
            {children}
        </CartContext.Provider>
    )
}


export default    function useCart(){
    return useContext(CartContext)
}