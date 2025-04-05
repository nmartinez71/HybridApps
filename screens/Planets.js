import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, } from "react-native";
import Box from "../assets/Box";
import styles from "../assets/styles";

export default function Planets() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
      const response = await fetch("https://www.swapi.tech/api/planets")
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const planetData = await response.json();
      setPlanets(planetData.results)
  
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
                  data={planets}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.uid}
                  numColumns={3}
                  contentContainerStyle={styles.list}
                />
        </View>
  );
}
