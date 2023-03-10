import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

 


const initialState={
     count:0,
     questions:[]
}




const myQuestionSlice =createSlice({
    name: "questions",
    initialState,
    reducers:{


    }

    ,extraReducers:(builder)=>{
        builder.addMatcher(
            api.endpoints.myQuestions.matchFulfilled,
          
             (state,{payload})=>{
                console.log(payload,"from reducers ")
                
              
              state.questions= payload.questions
              state.count=payload.count
            }
        )

    }
    

})


export default myQuestionSlice.reducer
