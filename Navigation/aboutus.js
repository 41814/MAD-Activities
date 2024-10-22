import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello, I am the About Us page</Text>
      <Button onPress={() => navigation.navigate('LogIn')} title="Go to Login page" />

      <View style={styles.imageContainer}>
        <Image style={styles.img} source={require('../assets/pic1.jpg')} />
        <Image style={styles.img} source={require('../assets/pic1.jpg')} />
        <Image style={styles.img} source={require('../assets/pic1.jpg')} />
        <ImageBackground resizeMode='cover'></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',  
    justifyContent: 'flex-start', 
    alignItems: 'center',  
  },
  img: {
    height: 150,  // Adjust height as needed
    width: 150,   // Adjust width as needed
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 50,  // Small space between images
    marginBottom:50,
  },
});
