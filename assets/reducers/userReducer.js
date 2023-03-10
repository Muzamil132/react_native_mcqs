import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getData, removeUser } from "../utils/saveUser";
 


const initialState={
     user:null
}




const userSlice =createSlice({
    name: "users",
    initialState,
    reducers:{

        addUser:(state,{payload})=>{
            
            state.user=payload.user
        },
        logUserOut:(state)=>{

          removeUser()
          state.user=null

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
export const {addUser,logUserOut}= userSlice.actions