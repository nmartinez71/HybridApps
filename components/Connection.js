import React, { useState, useEffect } from "react";
import { Appbar } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";

const connectedMap = {
    none: "Disconnected",
    unknown: "Disconnected",
    wifi: "Connected",
    cell: "Connected",
    mobile: "Connected",
  };
  

  export default function Connection() {
    const [connection, setConnection] = useState("")
    
      useEffect(() => {
         function onNetworkChange(connection) {setConnection(connectedMap[connection.type]);} 
         const unsubscribe = NetInfo.addEventListener(onNetworkChange);
        return () => {unsubscribe();};
        }, []);

  return (
    <Appbar.Header>
      <Appbar.Content title={connection} />
    </Appbar.Header>
  );
};

