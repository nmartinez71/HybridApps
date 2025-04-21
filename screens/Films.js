import React, { useState, useEffect } from "react";
import { View, StatusBar, Modal, Text, Button, ScrollView } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";
import useVisibility from "../hooks/useVisibility";
import HeaderImage from '../components/HeaderImage';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(""); 

  
  const { visibility, hideItem, resetVisibility } = useVisibility(films);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/films");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const filmData = await response.json();
      setFilms(filmData.result); 
    } catch (error) {
      console.error("Failed to fetch films:", error);
    }
  };

  const handleSubmit = (text) => {
    setSubmittedText(text);
    setModalVisible(true);
  };

  const handleSwipe = (filmName, uid) => {
    setSelectedFilm(filmName); 
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
      
      <Input label="Search a film name" onSubmit={handleSubmit} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {selectedFilm ? `Film: ${selectedFilm}` : `You submitted: ${submittedText}`}
          </Text>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </Modal>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.grid}>
          {films.map((item) => (
            visibility[item.uid] && ( 
              <Box key={item.uid} onSwipe={() => handleSwipe(item.properties?.title, item.uid)}>
                {item.properties?.title}
              </Box>
            )
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
