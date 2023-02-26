   
import { StatusBar } from 'expo-status-bar';
import React from "react"
import { StyleSheet, Text, TextInput, View ,TouchableOpacity, Alert} from 'react-native';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledButton from '../components/StyledButton';
import {Colors} from "../utils/Colors"
import { useForm,Controller } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage"
import HeadingTitle from "../components/HeadingTiltle"
export default function LoginScreen({navigation}) {

  const schema = yup.object().shape({
    name: yup.string().min(8).required(),
    password: yup.string().min(8).max(32).required(),
    email:yup.string().email().required()
  });
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
    
    
       <StyledButton h={56} onClick={handleSubmit((data)=>console.log(data))} bg={Colors.purple1}  title="REGISTER" />

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

  container: {
    
    paddingHorizontal:25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
