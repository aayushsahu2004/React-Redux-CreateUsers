import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";


export default configureStore({
    reducer:{
        userDets:userSlice,
    }
})