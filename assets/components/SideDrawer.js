
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { View,Text, SafeAreaView , DrawerLayoutAndroid,StyleSheet,Button, TouchableOpacity} from "react-native"
import { Colors } from "../utils/Colors";
import HeadingTitle from "./HeadingTiltle";
import Icon from 'react-native-vector-icons/MaterialIcons';
export const SideDrawer = ({children,open})=>{

    const drawer= useRef()
    const myIcon = <Icon name="sort" size={30} color={Colors.green} />;
    
  // const navigationView = () => (

  //   <SafeAreaView style={[styles.container, styles.navigationContainer]} >
  
  //   <View  style={[styles.container, styles.navigationContainer]}  >
  //     <Text style={styles.paragraph}>I'm in the Drawer!</Text>
  //     <Button
  //       title="Close drawer"
  //       onPress={() => drawer.current.closeDrawer()}
  //     />
  //   </View>
  //   </SafeAreaView>
  // );

    return(
    
      <View style={styles.root}>
         <View style={styles.main} >
           {children}
         </View>
         {
          open &&    <View style={styles.drawer}> 
        
        </View>
         }
         {
          open &&   <View style={styles.dropShadow}> 
        
        </View>
         }
     
      

      </View>
  
    )

   
}

const styles = StyleSheet.create({

     main:{
      left:0,
      right:0,
      position:"absolute",
      top:0,
      bottom:0,
      flex:1,

      

     },
     dropShadow:{
      left:0,
      right:0,
      position:"absolute",
      top:0,
      bottom:0,
      flex:1,
      backgroundColor:"black",
      opacity:0.5,


     },
     drawer:{
        left:0,
        top:0,
        bottom:0,
       position:"absolute",
        backgroundColor:"white",
      width:"75%",
      flex:1,
      zIndex:10,
     },
    root: {
    
      flex: 1,
      
     
    
      
    },
   

  });