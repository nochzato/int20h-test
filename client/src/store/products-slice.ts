import { createSlice } from "@reduxjs/toolkit";

export interface productsSlice {
    userProducts: string[];
    mainProduct: string;
}

const initialProductsState:productsSlice = {
    userProducts: [],
    mainProduct: ''
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        addProduct: (state, action) => {
            state.userProducts.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.userProducts = state.userProducts.filter((product) => {
                return action.payload !== product;
            });
        },
        addMainProduct: (state, action) => {
            state.mainProduct = action.payload;
        },
        deleteMainProduct: (state) => {
            state.mainProduct = '';
        }
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice;