import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NewTask from "../screens/task/NewTask";
import Header from "../components/layouts/Header/Header";

const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesList"
        component={NewTask}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Header"
        component={Header}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TaskStack;
