import { createSlice } from "@reduxjs/toolkit";


export const LoginSlice = createSlice({
    name: 'login',
    initialState:{
        username:"",
        password:"",
    },
    reducers:{
        usernameTextFieldValueChanged: (state, action) =>{
            state.username = action.payload
        },
        passwordTextFieldValueChanged: (state, action) =>{
            state.password = action.payload
        },
    }
})

export const {
    username,
    password
}=LoginSlice.actions

export default LoginSlice.reducer ;