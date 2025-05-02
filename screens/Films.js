import React, { useState, useEffect } from "react";
import { View, StatusBar, Modal, Text, Button, ScrollView } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";
import useVisibility from "../hooks/useVisibility";
import HeaderImage from '../components/HeaderImage';

export default function Films({ navigation }) {
  const [films, setFilms] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState("");

  const { visibility, hideItem, resetVisibility } = useVisibility(films);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/films");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const filmData = await response.json();
      setFilms(filmData.result);
    } catch (error) {
      console.error("Failed to fetch films:", error);
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

  const handleSwipe = (filmName, uid, description) => {
    setSelectedFilm(filmName);
    setModalVisible(true);
    hideItem(uid);
    setTimeout(() => {
      setModalVisible(false);
      resetVisibility();
      navigation.navigate("Details", { 
        title: filmName, 
        description: description 
      });
    }, 500); 
  };

  const handleModalClose = () => {
    setModalVisible(false);
    resetVisibility();
  };

  const filteredFilms = films.filter((item) =>
    item.properties?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <HeaderImage />
      <Input label="Search a film name" onChangeText={handleSearchInput} />

      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {selectedFilm ? `Film: ${selectedFilm}` : "No film selected"}
          </Text>
          <Button title="Open Details" onPress={() => { handleModalClose(); navigateToDetails();}}  />
        </View>
      </Modal>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.grid}>
          {filteredFilms.map((item) =>
            visibility[item.uid] ? (
              <Box key={item.uid} onSwipe={() => handleSwipe(item.properties?.title, item.uid, item.properties?.opening_crawl)}>
                {item.properties?.title}
              </Box>
            ) : null
          )}
        </View>
      </ScrollView>
    </View>
  );
}
