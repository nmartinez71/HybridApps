import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, Modal, View, Button } from "react-native";
import styles from "../assets/styles";
import Input from '../components/Input';

function Search({ label, onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text); 
      setText("");
    }
  };

  return (
    <View>
        <Input label="Search ${label}" onSubmit={handleSubmit}/>
        
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>You submitted: {submittedText}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
        </Modal>
    </View>
  );
}


export default Search;
