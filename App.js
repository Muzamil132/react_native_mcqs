import React from "react";
import { Provider } from "react-redux";
import { store } from "./assets/store";
import NavContainer from "./assets/utils/navigation";
import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavContainer />
      </Provider>
    </GestureHandlerRootView>
  );
}
