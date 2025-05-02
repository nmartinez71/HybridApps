import React, { useState, useEffect } from "react";
import { View, StatusBar, Modal, Text, Button, ScrollView } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";
import useVisibility from "../hooks/useVisibility";
import HeaderImage from '../components/HeaderImage';

export default function Planets({ navigation }) {
  const [planets, setPlanets] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState("");

  const { visibility, hideItem, resetVisibility } = useVisibility(planets);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const planetData = await response.json();
      setPlanets(planetData.results);
    } catch (error) {
      console.error("Failed to fetch planets:", error);
    }
  };

  const handleSearchInput = (text) => {
    setInputText(text);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(inputText);
    }, 300);
    return () => clearTimeout(timeout);
  }, [inputText]);

  const handleSwipe = (planetName, uid) => {
    setSelectedPlanet(planetName);
    setModalVisible(true);
    hideItem(uid);
    setTimeout(() => {
      setModalVisible(false);
      resetVisibility();
      navigation.navigate("Details", { title: planetName });
    }, 500);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    resetVisibility();
  };

  const filteredPlanets = planets.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <HeaderImage />
      <Input label="Search a planet name" onChangeText={handleSearchInput} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {selectedPlanet ? `Planet: ${selectedPlanet}` : "No planet selected"}
          </Text>
          <Button title="Open Details" onPress={handleModalClose} />
        </View>
      </Modal>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.grid}>
          {filteredPlanets.map((item) =>
            visibility[item.uid] ? (
              <Box key={item.uid} onSwipe={() => handleSwipe(item.name, item.uid)}>
                {item.name}
              </Box>
            ) : null
          )}
        </View>
      </ScrollView>
    </View>
  );
}