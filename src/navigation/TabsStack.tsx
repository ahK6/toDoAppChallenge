import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AllTab from "../screens/allTab/AllTab";
import CompletedTab from "../screens/completedTab/CompletedTab";

export type TabStackParamList = {
  All: undefined;
  Completed: undefined;
};

const Tab = createMaterialTopTabNavigator<TabStackParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0.7,
          borderTopColor: "#D3D3D3",
        },
        indicatorStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen name="All" component={AllTab} />
      <Tab.Screen name="Completed" component={CompletedTab} />
    </Tab.Navigator>
  );
};

export default TabStack;
