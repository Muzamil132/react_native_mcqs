
import { StatusBar } from 'expo-status-bar';

import React, {useEffect} from "react"
import { StyleSheet, Text, TextInput, View ,TouchableOpacity, Alert} from 'react-native';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Colors} from "../utils/Colors"
import StyledButton from "../components/StyledButton"

import { useForm,Controller } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage"
import HeadingTitle from "../components/HeadingTiltle"
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../services/api';

import { saveUser,getData } from '../utils/saveUser';

export default function RegisterScreen({navigation}) {
  const [register,{data,isLoading,isSuccess,isError}] = useRegisterMutation()
   console.log(data,"data from here")
  const schema = yup.object().shape({
    name: yup.string().min(8).required(),
    password: yup.string().min(8).max(32).required(),
    email:yup.string().email().required()
  });
  const {setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [focus,setFocus]=React.useState({
    name:false,
    email:false,
    password:false,
    


  })
  

  


  useEffect(()=>{
    if(isSuccess){
      saveUser(data)
      getData().then((data)=>console.log(data,"ookkk"))
      navigation.navigate("Home")
    }
  },[navigation,isSuccess])



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

  const registerUser = async(data1)=>{
  await register(data1)
  }


  return (
    <View style={styles.container}>
        <HeadingTitle title="Welcome !" fontSize={35} color={Colors.textColor2}/>
      <HeadingTitle title="Sign Up with Email" fontSize={16} color={Colors.textColor2}/>
       <Text 
        style={{justifyContent:"flex-start"}}
       >Name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value ,onFocus}}) => (
           

          <TextInput
           {...propsInput('name')}
            placeholder='Name'
            style={focus.name?styles.focusInput:styles.input}
           
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
       
      />
     {
       errors.name?.message && <ErrorMessage title={errors.name?.message}/>
     }  
       
       <Controller
        control={control}
        render={({field: { onChange, onBlur, value ,onFocus}}) => (
           

          <TextInput
            placeholder='Email'
            
            style={focus.email?styles.focusInput:styles.input}
            {...propsInput('email')}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
       
      />
        {
       errors.email?.message && <ErrorMessage title={errors.email?.message}/>
     }  

<Controller
        control={control}
        render={({field: { onChange, onBlur, value ,onFocus}}) => (
           

          <TextInput
          {...propsInput('password')}
            secureTextEntry={true}
            placeholder='Password'
            style={focus.password?styles.focusInput:styles.input}
           
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
       
      />
        {
       errors.password?.message && <ErrorMessage title={errors.password?.message}/>
     }  
    
    
       <StyledButton h={56} onClick={handleSubmit((data1)=>registerUser(data1))} bg={Colors.purple1}  title={isLoading?"Loading..":"REGISTER"} />

       <Text style={{marginTop:10,fontSize:14,color:Colors.textColor1}} >
        Already has account?
       </Text>
       <StyledButton onClick={()=>navigation.navigate("SignIn")} fontSize={16} mt={0} bg="white" title="Sign In" color={Colors.textColor2}/>
        
      <StatusBar style="auto" />
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

  container: {
    
    paddingHorizontal:25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
