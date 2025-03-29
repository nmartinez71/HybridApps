import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from '../components/Task';

export default function Asmt3() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Assignment 3 Tasks </Text>
        <ScrollView>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate()}>
              <Task text={'Touchable Task (No Navigation)'} />
            </TouchableOpacity>
            <Task text={'Task 1'} />
            <Task text={'Task 2'} />
            <Task text={'Task 3'} />
            <Task text={'Task 4'} />
            <Task text={'Task 5'} />
            <Task text={'Task 6'} />
            <Task text={'Task 7'} />
            <Task text={'Task 8'} />
            <Task text={'Task 9'} />
            <Task text={'Task 10'} />
            <Task text={'Task 11'} />
            <Task text={'Task 12'} />
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEAED'
    },
    tasksWrapper:  {
      paddingTop: 40,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
  });
  