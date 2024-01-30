import { createSlice } from "@reduxjs/toolkit";

const WhishlistSlice = createSlice({
  name: "whishlist",
  initialState: [],
    reducers: {
    addToWhishList: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.title == actions.payload.title
      );
      if (isAvailable) {
      } else {
        state.push({ ...actions.payload,quantity:1});
      }  
    },
    removeFromList: (state, actions) => {
      const newList = state.filter(
        (value) => value.title !== actions.payload.title
      );
      return(state = newList);
    },

    // incementQuantity: (state, actions) => {
    //   const isAvailable = state.find(
    //     (value) => value.title == actions.payload.title
    //   );

    //   if (isAvailable) {
    //    isAvailable.quantity ++;
    //   } else{
    //     console.log("not available");
    //   }
    // },

    // decrementQuantity: (state, actions) => {
    //   const isAvailable = state.find(
    //     (value) => value.title == actions.payload.title
        
    //   );
    //   if (isAvailable.quantity ==1) {
    //     isAvailable.quantity =1;

    //   } else {
    //     isAvailable.quantity--;
    //   }
    // },
    // cleanCart:(state) => {
    //     state.cart = [];
    // }
  },
});




export const {addToWhishList,removeFromList,incementQuantity,decrementQuantity,cleanCart} = WhishlistSlice.actions;
export default WhishlistSlice.reducer;





