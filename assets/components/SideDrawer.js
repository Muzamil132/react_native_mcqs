
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { View,Text, SafeAreaView , DrawerLayoutAndroid,StyleSheet,Button} from "react-native"
import { Colors } from "../utils/Colors";

export const SideDrawer = ({children})=>{

    const drawer= useRef()

    
  const navigationView = () => (
    <SafeAreaView style={[styles.container, styles.navigationContainer]} >
  
    <View  style={[styles.container, styles.navigationContainer]}  >
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
    </SafeAreaView>
  );

    return(
    
    <DrawerLayoutAndroid  
    ref={drawer}
    drawerWidth={300}
    renderNavigationView={navigationView}
   >

        {children}
 
   
   
   </DrawerLayoutAndroid>
  
    )

   
}

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      marginTop:25,
     
    
      
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      color:"black",
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
  });