import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";

import TabStack from "./TabsStack";
import TaskStack from "./TaskStack";

export type RootStackParamList = {
  Home: undefined;
  Task: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

//FALTA PONER CONDICIONAL PARA QUE SE MUESTREN LAS REDES SOCIALES O EL HOME
export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TabStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Task"
          component={TaskStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
