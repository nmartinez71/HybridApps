import React from "react";
import { View, StatusBar } from "react-native";
import styles from "../assets/styles";
import Box from "../assets/Box";
import Column from "../assets/Column";
import Row from "../assets/Row";



export default function Planets() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>This is for Planets</Box>
        </Column>
      </Row>
    </View>
  );
}
