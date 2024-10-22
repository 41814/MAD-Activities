import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrDashboard from './UI/DrDashboard';

export default function App() {
  
  return (
    
<Text>
<DrDashboard />
</Text>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#943126',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
