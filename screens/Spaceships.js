import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styles from "../assets/styles";
import Box from "../assets/Box";



export default function Spaceships() {


   const [spaceships, setSpaceships] = useState([]);
  
    useEffect(() => {
      fetchSpaceships();
    }, []);
  
    const fetchSpaceships = async () => {
        const response = await fetch("https://www.swapi.tech/api/starships/")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const spaceshipData = await response.json();
        setSpaceships(spaceshipData.results)
    
    };

   const renderItem = ({ item }) => (
        <View style={styles.grid}>
          <Box>{item.name}</Box>
        </View>
      );



  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <FlatList
        data={spaceships}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
