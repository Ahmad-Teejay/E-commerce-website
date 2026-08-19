export const initialCartState = {items: [] }


export function cartReducer(state, action){
    switch (action.type) {
        case "ADD_TO_CART":{
          
              const existingProduct = state.items.find(
                (item) => item.id === action.payload.id 
              );
              if(existingProduct){
                const updatedProduct = state.items.map(
                    (item) => item.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
                return {...state, items: updatedProduct}
              }
              return {
                ...state,
                items:[...state.items,{...action.payload, quantity: 1} ]
              }
        
            }

        case "REMOVE_FROM_CART":{
            const filteredProduct = state.items.filter(
              (item) => item.id !== action.payload.id
            )
            return {
              ...state,
              items: filteredProduct
            }
        }

        case "INCREASE_QUANTITY":{
            const upadatedProduct = state.items.map((item) => 
              (item.id === action.payload.id)
              ? {...item, quantity: item.quantity + 1}
              : item 
            )
            return {
              ...state,
              items: upadatedProduct
            }
          }
        

        case "DECREASE_QUANTITY":{
            const upadatedProduct = state.items.map((item) =>
              (item.id === action.payload.id && item.quantity > 1)
              ? {...item, quantity: item.quantity - 1}
              : item
                
            )
            return {
              ...state,
               items: upadatedProduct
            
          }
        }

        case "CLEAR_CART":
          return {...state, items:[]}
        

       default:
           return state;
            
          }
       
    
}