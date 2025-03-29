import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './components/Task';
import Asmt1 from './screens/Asmt1'; 
import Asmt2 from './screens/Asmt2'; 
import Asmt3 from './screens/Asmt3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Assignment 1" component={Asmt1} />
        <Stack.Screen name="Assignment 2" component={Asmt2} /> 
        <Stack.Screen name="Assignment 3" component={Asmt3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.entryText}> This Home page is to navigate to the different assignments assigned throughout the course. It was easier to navigate this way. </Text>
        <Text style={styles.sectionTitle}>Module 2</Text>
        <ScrollView>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('Assignment 1')}>
              <Task text={'Assignment 1'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Assignment 2')}>
              <Task text={'Assignment 2'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Assignment 3')}>
              <Task text={'Assignment 3'} />
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
