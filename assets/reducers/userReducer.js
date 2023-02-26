import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getData } from "../utils/saveUser";
 


const initialState={
     user:null
}




const userSlice =createSlice({
    name: "users",
    initialState,
    reducers:{

        addUser:(state,{payload})=>{
            state.user=payload.user
        }

    }

    ,extraReducers:(builder)=>{
        builder.addMatcher(
            api.endpoints.register.matchFulfilled,
          
             (state,{payload})=>{
             
              state.user=payload
            }
        )

    }
    

})


export default userSlice.reducer
export const {addUser}= userSlice.actions