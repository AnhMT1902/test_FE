import {configureStore} from "@reduxjs/toolkit";
import listProducts from "./product-slice";

export const store = configureStore({
    reducer: {
        listProducts: listProducts,
    }
})