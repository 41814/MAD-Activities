import React from 'react'
import { View,Text,Button } from 'react-native'
export default function home({navigation}) {
  return (
    <>
    <View>
        <Text>Heelo I am home page</Text>
        <Button onPress={()=>navigation.navigate('About')} title='Go to about page'></Button>
    </View>
    </>
  )
}
