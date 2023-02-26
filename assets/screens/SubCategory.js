import { StatusBar } from "expo-status-bar"
import { useEffect, useRef } from "react"
import { View,Text, SafeAreaView , DrawerLayoutAndroid,StyleSheet,Button, FlatList} from "react-native"

import {SideDrawer} from "../components/SideDrawer"

import {Colors} from "../utils/Colors"


const SubCategories =({route,navigation})=>{

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
    
  
        <SideDrawer>
          <StatusBar  translucent={true} backgroundColor={Colors.orange}/>
          <View style={styles.container}>

          <Text>
          I am Ok sir
          </Text>
          </View>
        
         </SideDrawer>
   
        
    
  )
}

export default SubCategories

const styles = StyleSheet.create({
  body:{
    alignItems:"center",
    paddingHorizontal:15,
    width:"100%"

  },
  header:{
    backgroundColor:Colors.orange,
    paddingVertical:10,

  },
  container: {
   marginTop:25,
  
   
   flex:1
    
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});