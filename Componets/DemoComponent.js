import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
// import Demo from './Demo';
import * as Animatable from 'react-native-animatable';

function DemoComponent() {
    const [show,setShow] = useState(true)
    const demoFun = () =>{
        if (show === true){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 200,
            height: 100,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            demoFun();
          }}
        >
          <Text>Show Para</Text>
        </TouchableOpacity>
      </View>
      
        <View
          style={{ backgroundColor: "white", position: "absolute", bottom: 0 ,borderTopRightRadius:15,borderTopLeftRadius:20}}
        >
          {show === true ? (
            <Animatable.Text animation="zoomInUp" style = {{textAlign:'center'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Expedita, quidem. Sapiente veritatis eligendi et perspiciatis
              doloremque adipisci numquam accusamus quis obcaecati esse in, a
              pariatur, inventore, laborum consequuntur maiores. Aspernatur.
            </Animatable.Text>
          ) : null}
        </View>
      
    </View>
  );
}

export default DemoComponent