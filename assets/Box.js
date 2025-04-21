import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";
import Swipeable from "../components/Swipeable";

export default function Box({ children, onSwipe }) {
  return (
    <Swipeable onSwipe={() => onSwipe(children)} name={children}>
      <View style={styles.box}>
        <Text style={styles.boxText}>{children}</Text>
      </View>
    </Swipeable>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  onSwipe: PropTypes.func.isRequired,
};