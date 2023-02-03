import { createSlice } from "@reduxjs/toolkit";
import { showErrorNotification } from "../util/notifications";

export interface userProducts {
    title: string;
    isAdded: boolean;
}

export interface productsSlice {
    userProducts: userProducts[];
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
            if(state.userProducts.length === 6){
                showErrorNotification('You have reached maximum amount of products!')
                return;
            }

            state.userProducts.push({title: action.payload, isAdded: true});
        },
        addMainProduct: (state, action) => {
            state.mainProduct = action.payload;
        },
        deleteMainProduct: (state) => {
            state.userProducts = state.userProducts.filter((product) => {
                return state.mainProduct !== product.title;
            });

            state.mainProduct = '';
        },
        deleteProduct: (state, action) => {
            if(action.payload === state.mainProduct){
                state.mainProduct = '';
            }

            state.userProducts = state.userProducts.filter((product) => {
                return action.payload !== product.title;
            });
        },
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice;