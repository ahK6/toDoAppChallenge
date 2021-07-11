import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RootNavigation } from "./src/navigation/Index";
import Header from "./src/components/layouts/Header/Header";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { HVisibleProvider } from "./src/context/VisibleHeader";
import { PersistGate } from "redux-persist/integration/react";
import { WRootToastApp } from "react-native-smart-tip";
import BottomButton from "./src/components/buttons/BottomButton";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HVisibleProvider>
          <ThemeProvider theme={{ color: "white" }}>
            <WRootToastApp>
              <Header />
              <RootNavigation />
              <BottomButton />
            </WRootToastApp>
          </ThemeProvider>
        </HVisibleProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
