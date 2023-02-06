import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        auth: authSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;