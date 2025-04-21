import React, { useState, useEffect } from "react";
import { View, StatusBar, Modal, Text, Button, ScrollView } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";
import useVisibility from "../hooks/useVisibility"; 
import HeaderImage from '../components/HeaderImage';

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState("");

  
  const { visibility, hideItem, resetVisibility } = useVisibility(planets);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const planetData = await response.json();
      setPlanets(planetData.results);
    } catch (error) {
      console.error("Failed to fetch planets:", error);
    }
  };

  const handleSubmit = (text) => {
    setSubmittedText(text);
    setModalVisible(true);
  };

  const handleSwipe = (planetName, uid) => {
    setSelectedPlanet(planetName);
    setModalVisible(true);
    hideItem(uid); 
  };

  const handleModalClose = () => {
    setModalVisible(false);
    resetVisibility(); 
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <HeaderImage/>

      <Input label="Search a planet name" onSubmit={handleSubmit} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {selectedPlanet ? `Planet: ${selectedPlanet}` : `You submitted: ${submittedText}`}
          </Text>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </Modal>

      <ScrollView style={{ width: '100%' }}>
        <View style={styles.grid}>
          {planets.map(item => (
            visibility[item.uid] && ( 
              <Box key={item.uid} onSwipe={() => handleSwipe(item.name, item.uid)}>
                {item.name}
              </Box>
            )
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
