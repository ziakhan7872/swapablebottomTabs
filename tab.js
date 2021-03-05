import React from "react";
import { Dimensions } from "react-native";
//import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import screenA from "./screens/screenA";
import screenB from "./screens/screenB";
import screenC from "./screens/screenC";


const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
const tabBarWidth = Width - 5;

//const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="screenA"
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "#000000",

        style: {
          backgroundColor: "#007ac1",
        },

        indicatorStyle: {
          width: Width * 0.15,
          marginLeft: Width * 0.09,
          backgroundColor: "yellow",
          position: "absolute",
          padding: 1,
        },
        tabStyle: {
          justifyContent: "center",
          width: tabBarWidth / 3,
           

        },
        labelStyle: {
          marginTop: 1,

        },
      }}
    >
      <Tab.Screen name="screenA" component={screenA} />
      <Tab.Screen name="screenB" component={screenB} />
      <Tab.Screen name="screenC" component={screenC} />
    </Tab.Navigator>
  );
}
