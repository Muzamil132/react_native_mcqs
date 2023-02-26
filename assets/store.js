import { configureStore,combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { api } from './services/api';

export const rootReducer = combineReducers({
    user:userReducer
})

export const store = configureStore({
  reducer: {
     userReducer,
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),

   
  
});
