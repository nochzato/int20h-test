import { createSlice } from "@reduxjs/toolkit";
import { showErrorNotification } from "../util/notifications";

export interface Auth {
    isLogin: boolean;
}

const initialAuthState:Auth = {
    isLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;

export const logoutRequest = () => {
    return async (dispatch: any) => {
        try{
            fetch('kjfkj')

        }catch(err){
            if(err instanceof Error){
                showErrorNotification(err.message);
            }else{
                showErrorNotification('Something went wrong');
            }
        }
    }
}