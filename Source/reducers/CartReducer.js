import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state,actions) => {
      const isAvailable = state.find(
        (value) => value.title == actions.payload.title
      );
      if (isAvailable) {
        
      } else {
        state.push({ ...actions.payload,quantity:1});
      }  
    },
    
    removeFromCart: (state, actions) => {
      const newList = state.filter(
        (value) => value.title !== actions.payload.title
      );
      return(state = newList);
    },

    incementQuantity: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.title == actions.payload.title
      );

      if (isAvailable) {
       isAvailable.quantity ++;
      } else{
        console.log("not available");
      }
    },

    decrementQuantity: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.title == actions.payload.title
        
      );
      if (isAvailable.quantity ==1) {
        isAvailable.quantity =1;

      } else {
        isAvailable.quantity--;
      }
    },
   
  },
});


export const {addToCart,removeFromCart,incementQuantity,decrementQuantity} = CartSlice.actions;

export default CartSlice.reducer