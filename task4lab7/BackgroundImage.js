import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/pic1.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover" 
      >
        <Text style={styles.text}>Hello, this is on top of the image!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',  // Full width of the screen
    height: 400,    // Set the height for the image
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
  },
  text: {
    color: 'white',          // White text
    fontSize: 24,            // Font size
    fontWeight: 'bold',      // Bold text
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
    padding: 10,             // Padding for better readability
    borderRadius: 5,         // Rounded corners for the text box
  },
});
