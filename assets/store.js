import { configureStore,combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { api } from './services/api';
import QuestionReducer from './reducers/QuestionReducer';
import myQuestionReducer from "./reducers/myQuestions"
export const rootReducer = combineReducers({
    user:userReducer
})

export const store = configureStore({
  reducer: {
     userReducer,
     QuestionReducer,
     myQuestionReducer,
    [api.reducerPath]:api.reducer,
   
   
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),

   
  
});
