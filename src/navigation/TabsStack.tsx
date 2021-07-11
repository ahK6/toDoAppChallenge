import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AllTab from "../screens/tabs/allTab/AllTab";
import CompletedTab from "../screens/tabs/completedTab/CompletedTab";
import UncompletedTab from "../screens/tabs/uncompletedTab/UncompletedTab";
import FavoriteTab from "../screens/tabs/favoriteTab/FavoriteTab";

export type TabStackParamList = {
  All: String;
  Completed: String;
  Uncompleted: String;
  Favorite: String;
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
        labelStyle: { textTransform: "none", width: wp(20) },
      }}
    >
      <Tab.Screen name="All" component={AllTab} />
      <Tab.Screen name="Completed" component={CompletedTab} />
      <Tab.Screen name="Uncompleted" component={UncompletedTab} />
      <Tab.Screen name="Favorite" component={FavoriteTab} />
    </Tab.Navigator>
  );
};

export default TabStack;
