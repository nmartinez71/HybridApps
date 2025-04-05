import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import Task from '../components/Task';
import { useState } from 'react';

export default function TodoApp() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>

            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => completeTask(index)}>
                    <Task key={index} text={item} />
                  </TouchableOpacity>
                )
              })
            }


          </View>

      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View  style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

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
      paddingTop: 25,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 25,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      backgroundColor: '#FFF',
      paddingVertical: 15,
      width: 250,
      paddingHorizontal: 15,
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderWidth: 1,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "#C0C0C0",
      borderWidth: 1
    },
    addText:{}
  });
  