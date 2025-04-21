import React, { useState, useEffect } from "react";
import { View, StatusBar, Modal, Text, Button, ScrollView } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";
import useVisibility from "../hooks/useVisibility";
import HeaderImage from '../components/HeaderImage';

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpaceship, setSelectedSpaceship] = useState(""); 
  
  const { visibility, hideItem, resetVisibility } = useVisibility(spaceships);

  useEffect(() => {
    fetchSpaceships();
  }, []);

  const fetchSpaceships = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const spaceshipData = await response.json();
      setSpaceships(spaceshipData.results); 
    } catch (error) {
      console.error("Failed to fetch spaceships:", error);
    }
  };

  const handleSubmit = (text) => {
    setSubmittedText(text);
    setModalVisible(true);
  };

  const handleSwipe = (spaceshipName, uid) => {
    setSelectedSpaceship(spaceshipName); 
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


      <Input label="Search a spaceship name" onSubmit={handleSubmit} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {selectedSpaceship ? `Spaceship: ${selectedSpaceship}` : `You submitted: ${submittedText}`}
          </Text>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </Modal>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.grid}>
          {spaceships.map((item) => (
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
