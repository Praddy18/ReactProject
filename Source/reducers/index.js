import { configureStore } from "@reduxjs/toolkit";
import LoginReducer  from "./LoginReducer";
import ProductReducer from "./ProductReducer";
import WhishlistReducer from "./WhishlistSlice";
import CartReducer from "./CartReducer";
import AddressReducer from "./AddressReducer";






export default configureStore({
    reducer: {
        login: LoginReducer,
       product:ProductReducer,
        cart: CartReducer,
       whishlist: WhishlistReducer,
       address :  AddressReducer
        
    },
    
});

