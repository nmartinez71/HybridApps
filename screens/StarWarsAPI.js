import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native"; // Import Platform
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Films from './Films'; 
import Planets from './Planets';
import Spaceships from './Spaceships';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function StarWarsAPI() {
    if (Platform.OS === "ios") {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
          <Tab.Screen name="Films" component={Films} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
          <Drawer.Screen name="Films" component={Films} />
        </Drawer.Navigator>
      );
    }
  }

