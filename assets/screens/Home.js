import { StatusBar } from "expo-status-bar"
import { useEffect, useRef } from "react"
import { View,Text, SafeAreaView , DrawerLayoutAndroid,StyleSheet,Button, FlatList} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {SideDrawer} from "../components/SideDrawer"
import StyledButton from "../components/StyledButton"
import { addUser } from "../reducers/userReducer"
import { getData } from "../utils/saveUser"
import {Colors} from "../utils/Colors"
import HeadingTitle from "../components/HeadingTiltle"
import CateGoryCard from "../components/CategoryCard"

const Home =({navigation})=>{



 
    const dispatch = useDispatch()
     const retriveData=async()=>{
           const data2 = await getData()
           dispatch(addUser({user:data2}))
     }
    useEffect(()=>{
     
        retriveData()

    },[])
   const {user}= useSelector(state=>state.userReducer)
     console.log(user,"home se aaya ")
    const subjects =[
      "Cuurent Affairs",
      "World Affairs",
      "Pysics",
      "Mathematics",
      "Chemistrty",
      "Biology"


    ]

  return (
    
  
        <SideDrawer>
       <StatusBar  translucent={true} backgroundColor={Colors.orange} />
         <View style={styles.container}>
          <View style={styles.header}>
            <HeadingTitle color="white" title="CATEGORIES" fontSize={20}/>
          </View>
          <View style={styles.body}>
           <FlatList
           numColumns={2}
          
           data={subjects}
           renderItem={({item})=>(
             <CateGoryCard title={item} />
           )}
           
           />
           
          </View>
       
       
        

        </View>
         </SideDrawer>
   
        
    
  )
}

export default Home

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