
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import home from './screens/home';
import aboutus from './screens/aboutus';
import login from './screens/login';
import ContactUs from './screens/contactus';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={home}></Stack.Screen>
    <Stack.Screen name='About' component={aboutus}></Stack.Screen>
    <Stack.Screen name='LogIn' component={login}></Stack.Screen>
    <Stack.Screen name='Contact' component={ContactUs}></Stack.Screen>
   </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



