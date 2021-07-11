import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/RootNavigation";
import { RootNavigation } from "./src/navigation/Index";
import Header from "./src/components/layouts/Header/Header";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { HVisibleProvider } from "./src/context/VisibleHeader";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HVisibleProvider>
          <ThemeProvider theme={{ color: "white" }}>
            <NavigationContainer ref={navigationRef}>
              <Header />
              <RootNavigation />
            </NavigationContainer>
          </ThemeProvider>
        </HVisibleProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
