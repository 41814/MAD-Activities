import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Image 
        source={require('./assets/pic1.jpg')} 
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius:10,
    borderWidth:3
  },
});
