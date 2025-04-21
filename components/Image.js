import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Image = ({ source, style }) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image source={{ uri: source }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Image;
