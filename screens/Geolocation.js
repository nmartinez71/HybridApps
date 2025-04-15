import React, { useEffect, useState } from "react";
import { View, Button,  } from "react-native";
import styles from "../assets/styles";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

export default function Geolocation() {
    const [location, setLocation] = useState(null);

    async function getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      const loc = await Location.getCurrentPositionAsync({});
      console.log(loc);
      setLocation(loc); // store it
    }
  
    useEffect(() => {
      getLocation();
    }, []);

  return (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        showsUserLocation
        followUserLocation
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : undefined}>           
             <Marker
             title="Handles Ice Cream"
             description="Best Ice cream!"
             coordinate={{
                latitude: 39.95709856354275, 
                longitude: -86.0145886589022
             }}
              />
        </MapView>

        <Button title="Get Location" onPress={getLocation}/>
    </View>
  );
}