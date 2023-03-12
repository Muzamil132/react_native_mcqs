import React from "react";
import { Provider } from "react-redux";
import { store } from "./assets/store";
import NavContainer from "./assets/utils/navigation";
import "react-native-gesture-handler";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     
      <InternetConnectionAlert>
      <Provider store={store}>
        <NavContainer />
      </Provider>
      </InternetConnectionAlert>
    </GestureHandlerRootView>
  );
}
