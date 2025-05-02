import React from 'react';
import { View, Text } from 'react-native';
import styles from "../assets/styles";

export default function Details({ route }) {
    const { title, description } = route.params;


    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

