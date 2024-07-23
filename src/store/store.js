import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productSlice";

export const store = configureStore({
    reducer : {
        productReducer : productReducer,
    }
})