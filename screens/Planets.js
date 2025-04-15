import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, Button, Modal, Text } from "react-native";
import Box from "../assets/Box";
import Input from '../components/Input';
import styles from "../assets/styles";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleSubmit = (text) => {
    setSubmittedText(text); 
    setModalVisible(true); 
  };

   const renderItem = ({ item }) => (
      <View style={styles.grid}>
        <Box>{item.name}</Box>
      </View>
    );

  return (
    <View style={styles.container}>
          <StatusBar hidden={false} />
          
        <Input label="Search a planet name" onSubmit={handleSubmit}/>

          <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>You submitted: {submittedText}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
          </Modal>


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
