import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, Button } from "react-native";
import styles from "../assets/styles";

function Input({ label, onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text); 
      setText("");
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Enter search term"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
