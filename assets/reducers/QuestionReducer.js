import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

 


const initialState={
     questions:[]
}




const questionSlice =createSlice({
    name: "questions",
    initialState,
    reducers:{

       showAnswer:(state,{payload})=>{
        const targetQuestion= state.questions.questions.find(item=>item._id===payload.id)
        targetQuestion.isShown=payload.isShown
       },
       updateQuestionList:(state,{payload})=>{
        const transFormedQuestions= payload.questions.questions.map((item)=>(
            {
                ...item,isShown:false
            }
        ))
        state.questions={count:payload.questions.count,questions:transFormedQuestions}
       }
      

    }

    ,extraReducers:(builder)=>{
        builder.addMatcher(
            api.endpoints.getQuestions.matchFulfilled,
          
             (state,{payload})=>{
              
                const transFormedQuestions= payload.questions.map((item)=>(
                    {
                        ...item,isShown:false
                    }
                ))
              
              state.questions={count:payload.count,questions:transFormedQuestions}
            }
        )

    }
    

})


export default questionSlice.reducer
export const {showAnswer,updateQuestionList}=questionSlice.actions