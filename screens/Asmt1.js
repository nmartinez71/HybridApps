import React from "react";
import { View, StatusBar } from "react-native";
import styles from "../assets/styles";
import Box from "../assets/Box";
import Column from "../assets/Column";
import Row from "../assets/Row";


export default function Asmt1() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row>
    </View>
  );
}

