   
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react"
import { StyleSheet, Text, TextInput, View ,TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledButton from '../components/StyledButton';
import {Colors} from "../utils/Colors"
import { useForm,Controller } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage"
import HeadingTitle from "../components/HeadingTiltle"
import { useAddCategoryMutation, useAddSubCategoryMutation, useLoginMutation } from '../services/api';
import { addRandomColor } from '../utils/RandomColor';
// import { getData, saveUser } from '../utils/saveUser';
export default function CreateSubCategory({route,navigation}) {
  
 const {id,topic} =route.params
  const schema = yup.object().shape({
   
  
    title:yup.string().min(5).required()
  });
  const [addSubCategory,{data,isSuccess,isLoading,isError,error}]= useAddSubCategoryMutation()
 
  console.log(data,"from login Screen")
  console.log(error,"from Error Screen")
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [focus,setFocus]=React.useState({
   title:false
    


  })
  


  const FocusIt=(name)=>{

    setFocus({
      [name]:true
    })


  }
  const BlurIt=(name)=>{

    setFocus({
      [name]:false
    })

  }
  const propsInput=(name)=>{
    return {
      onFocus:()=>FocusIt(name),
      onBlur:()=>BlurIt(name),
      
    }
  }
  useEffect(()=>{
    if(isSuccess){
     Alert.alert("Suffessfully added")
     reset()
    }
    if(isError){
      Alert.alert(error.data.message?error.data.message:"Some Error has occured")
    }

  },[navigation,isSuccess,isError])
   const add=async(data1)=>{
    console.log(data1)
    await addSubCategory({title:data1.title,id})

   }

  return (
    <View style={styles.container}>
       
      <HeadingTitle title={`Create new subcategory in ${topic}`} fontSize={18} color={Colors.textColor2}/>
      
       
     

        <Controller
        control={control}
        render={({field: { onChange, onBlur, value ,onFocus}}) => (
           

          <TextInput
          {...propsInput('title')}
            
            placeholder='Title'
            style={focus.title?styles.focusInput:styles.input}
           
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="title"
       
      />
        {
       errors.title?.message && <ErrorMessage title={errors.title?.message}/>
     }  
       
       {
         isLoading?  <View  style={styles.horizontal}> 
         <ActivityIndicator size="large" color="white" />
         </View>:
       
    
       <StyledButton h={56} onClick={handleSubmit((data1)=>add(data1))} bg={addRandomColor(topic)} 
        title="Add subcategory" />
       }

      
    </View>
  );
}

const styles = StyleSheet.create({
  focusInput:{
    borderColor:Colors.purple1,
    width:"100%",
    borderWidth:2,
    borderRadius:10,
    paddingVertical:13,
    paddingHorizontal:10,
    marginTop:10,
  
  },
   
  input:{
   
    width:"100%",
    borderWidth:1,
    borderRadius:10,
    paddingVertical:13,
    paddingHorizontal:10,
    marginTop:10,
   

  },
  horizontal: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 13,
    backgroundColor:Colors.purple1,
    marginTop:10,
    borderRadius:10,

  
  },
  container: {
    
    paddingHorizontal:25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
