
import React from "react"
import { Provider } from 'react-redux'
import { store } from "./assets/store"
import NavContainer from "./assets/utils/navigation"
export default function App() {



  return (
    <Provider  store={store}>
    <NavContainer/>
    </Provider>
  )

}
     

