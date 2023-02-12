import {createSlice} from "@reduxjs/toolkit";
import {getProduct} from "../service/Product-service";

const initialState = {
    listProducts: []
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            console.log(action.payload)
            state.listProducts = [...action.payload];
        })
    }
})
export default productsSlice.reducer