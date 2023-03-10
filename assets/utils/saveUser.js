import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'


export const saveUser=async(data)=>{
    try{
   await AsyncStorage.setItem("user",JSON.stringify(data))
    
    }
    catch(error){

   


    }

}

export const getData=async()=>{
    try{
       const user= await AsyncStorage.getItem("user")
       if(user!==null){
         console.log(JSON.parse(user),"nouman haider")
         return JSON.parse(user)
       }else{
       
        return
       }
    }
    catch(error){

    


    }

}


export const removeUser=async()=>{
  try{
     await AsyncStorage.removeItem("user")
    
    
 }
 catch(error){

   Alert.alert("Error has Occured")


 }
}