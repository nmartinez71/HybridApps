import React, { useState, useEffect } from "react";
import { Platform, Text, View } from "react-native"; // Import Platform
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Films from './Films'; 
import Planets from './Planets';
import Spaceships from './Spaceships';
import Connection from "../components/Connection";
import NetInfo from "@react-native-community/netinfo";

//Shows only Connected bugt when disconnected it appears quickly then it goes away.

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
};


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function StarWarsAPI() {
  const [connected, setConnected] = useState("")

  useEffect(() => {
     function onNetworkChange(connection) {setConnected(connectedMap[connection.type]);} 
     const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {unsubscribe();};
    }, []);

    

    if (Platform.OS === "ios") {
      return (
        <>
        <Connection/>
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
          <Tab.Screen name="Films" component={Films} />
        </Tab.Navigator>
        </>
      );
    } else {
      return (
        <>
        <Connection/>
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
          <Drawer.Screen name="Films" component={Films} />
        </Drawer.Navigator>
        </>
      );
    }
  }

