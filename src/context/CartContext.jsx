import { createContext, useContext, useEffect, useReducer, } from "react";
import {cartReducer, initialCartState} from '../cartReducer';

export const CartContext = createContext()

 export const  CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState, (init) => {
       try {
        const saved = localStorage.getItem("state")
        return saved ? JSON.parse(saved) : init;

       }catch{
         return init;
       }
    })
   
     useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
     },[state])

     
         const subTotal = state.items.reduce(
          (total, item) => {
            const price = item?.price || 0;
            const quantity = item?.quantity || 0;
            return total + (price * quantity);
        },
        0
     );
            const shipping = state.items.length === 0 || subTotal >= 75 ? 0 : 5
            const discount = subTotal >= 500 ? subTotal * 0.10 : 0;
            const total = subTotal + shipping - discount;
    return(
        <CartContext.Provider value={{subTotal,shipping,discount,total,state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}


export default   function useCart(){
    return useContext(CartContext)
}