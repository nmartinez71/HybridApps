import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './components/Task';
import Asmt1 from './screens/Asmt1'; 
import TodoApp from './screens/TodoApp';
import StarWarsAPI from './screens/StarWarsAPI';
import Geolocation from './screens/Geolocation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Assignment 1" component={Asmt1} />
        <Stack.Screen name="StarWarsAPI" component={StarWarsAPI} /> 
        <Stack.Screen name="TodoApp" component={TodoApp} />
        <Stack.Screen name="Geolocation" component={Geolocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Hybrid Apps</Text>
        <Text style={styles.entryText}> This Home page is to navigate to the different assignments assigned throughout the course. It was easier to navigate this way.</Text>
        
        <ScrollView>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('Assignment 1')}>
              <Task text={'Assignment 1'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('StarWarsAPI')}>
              <Text>Module 4 Assignment 2</Text>
              <Task text={'Star Wars App'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TodoApp')}>
              <Task text={'Todo App'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Geolocation')}>
              <Text>Module 4 Assignment</Text>
              <Task text={'Geolocation'} />
            </TouchableOpacity>

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
    paddingTop: 10,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  entryText: {
    fontSize: 15
  }
});
