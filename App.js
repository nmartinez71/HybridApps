import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './components/Task';
import Asmt1 from './screens/Asmt1'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Asmt1" component={Asmt1} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <ScrollView>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('Asmt1')}>
              <Task text={'Assignment 1'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Asmt2')}>
              <Task text={'Task 2'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Task text={'Task 3'} />
            </TouchableOpacity>
            <Task text={'Task 4'} />
            <Task text={'Task 5'} />
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
    paddingTop: 80,
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
