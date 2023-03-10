import { StatusBar } from "expo-status-bar"
import { useEffect, useRef } from "react"
import { View,Text, SafeAreaView , DrawerLayoutAndroid,StyleSheet,Button, FlatList} from "react-native"

import {SideDrawer} from "../components/SideDrawer"

import {Colors} from "../utils/Colors"


const Physics=({route,navigation})=>{

    const subjects =[
      "Cuurent Affairs",
      "World Affairs",
      "Pysics",
      "Mathematics",
      "Chemistrty",
      "Biology"


    ]
   console.log(route)
  return (
    
  
        
          
          <View style={styles.container}>

          <Text>
          It is Physics
          </Text>
          </View>
        
    
   
        
    
  )
}

export default Physics

const styles = StyleSheet.create({
  body:{
    alignItems:"center",
    paddingHorizontal:15,
    width:"100%"

  },
 
  container: {
    backgroundColor: 'white',
  
   
   flex:1
    
  },
  navigationContainer: {
    backgroundColor: 'white',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});