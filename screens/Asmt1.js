import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Asmt1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Assignment 1</Text>
      <Text style={styles.details}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginTop: 20,
  },
});