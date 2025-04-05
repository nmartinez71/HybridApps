import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styles from "../assets/styles";
import Box from "../assets/Box";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
      const response = await fetch("https://www.swapi.tech/api/films");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const filmData = await response.json();
      setFilms(filmData.result); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.grid}>
      <Box>{item.properties?.title}</Box>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <FlatList
        data={films}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
