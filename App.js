import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native'
// import Demo from './Componets/Demo';
import DemoComponent from './Componets/DemoComponent';

function App() {
  return (
    <View style={styles.container}>
      
        <DemoComponent  />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'whitesmoke'
  }
})

export default App