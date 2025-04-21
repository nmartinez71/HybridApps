import React, { useState, useRef } from "react";
import { Animated, PanResponder, Text } from "react-native";
import styles from "../assets/styles";

export default function Swipeable({ onSwipe, name}) {
  const pan = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const [visible, setVisible] = useState(true);  

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      pan.setValue({ x: gesture.dx, y: 0 });
    },
    onPanResponderRelease: (e, gesture) => {
      if (Math.abs(gesture.dx) > 120) {
        
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);  
          onSwipe();
        });
      } else {
        
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: true,
        }).start();
      }
    },
  });
 
  return (
    visible && (
      <Animated.View
        style={[
          styles.swipeable,
          styles.swipeableWrapper, 
          { 
            opacity, 
            transform: [{ translateX: pan.x }] 
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.swipeableText}>{name}</Text>
      </Animated.View>
    )
  );
}
