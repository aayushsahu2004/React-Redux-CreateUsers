import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = JSON.parse(localStorage.getItem('users')) || [];

export const userSlice = createSlice({
    name: "userDets",
    initialState,
    reducers: {
        userDets: (state, action) => {
            const { Username, Useremail, Usercontact, Userid } = action.payload;
            const newState = [...state, { Username, Useremail, Usercontact, Userid }];
            localStorage.setItem('users', JSON.stringify(newState));
            return newState;
        },

        deleteUser: (state, action) => {
            const newState = state.filter(user => user.Userid !== action.payload);
            localStorage.setItem('users', JSON.stringify(newState));
            return newState;
        }
    }
})

export default userSlice.reducer;

export const { userDets, deleteUser } = userSlice.actions;