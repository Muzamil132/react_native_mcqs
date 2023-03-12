   
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
import { useLoginMutation } from '../services/api';
import { getData, saveUser } from '../utils/saveUser';
import { addUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
export default function LoginScreen({navigation}) {

  const schema = yup.object().shape({
   
    password: yup.string().min(8).max(32).required(),
    email:yup.string().email().required()
  });
  const [login,{data,isSuccess,isLoading,isError,error}]= useLoginMutation()
  const dispatch = useDispatch()
  console.log(data,"from login Screen")
  console.log(error,"from Error Screen")
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [focus,setFocus]=React.useState({
    name:false,
    email:false,
    password:false,
    


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
      saveUser(data)
      getData().then((data1)=>
    dispatch(addUser({ user: data1 })))
      navigation.navigate("Home")
    }
    if(isError){
      Alert.alert(error.data.message)
    }

  },[navigation,isSuccess,isError])
   const loginUser=async(data1)=>{
  
    await login(data1)

   }

  return (
    <View style={styles.container}>
        <HeadingTitle title="Welcome !" fontSize={35} color={Colors.textColor2}/>
      <HeadingTitle title="Sign In with Email" fontSize={16} color={Colors.textColor2}/>
      
       
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
       
       {
         isLoading?  <View  style={styles.horizontal}> 
         <ActivityIndicator size="large" color="white" />
         </View>:
       
    
       <StyledButton h={56} onClick={handleSubmit((data1)=>loginUser(data1))} bg={Colors.purple1} 
        title="Sign in" />
       }

       <Text style={{marginTop:10,fontSize:14,color:Colors.textColor1}} >
        Dont have Account?
       </Text>
       <StyledButton onClick={()=>navigation.navigate('SignUp')} fontSize={16} mt={0} bg="white" title="Sign Up" color={Colors.textColor2}/>
        
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
