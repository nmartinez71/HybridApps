import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "../assets/styles";

function Input({ label, onChangeText }) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder="Enter search term"
      />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
