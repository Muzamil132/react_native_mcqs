
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Pressable,
  ActivityIndicator
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Color from "../utils/Colors";

import { Colors } from "../utils/Colors";
import HeadingTitle from "../components/HeadingTiltle";
import { TextInput, TouchableOpacity, Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import StyledButton from "../components/StyledButton";
import ErrorMessage from "../components/ErrorMessage";
import { useSelector } from "react-redux";
import { useAddQuestionMutation, useEditQuestionMutation } from "../services/api";
import { sideItemList } from "../utils/data";
const AddQuestionScreen = ({ route, navigation }) => {
    
    console.log(route)
  const [selected, setSelected] = useState(sideItemList[3].title);
 
  const [editQuestion,{data,isLoading,isError,isSuccess,error}]=useEditQuestionMutation()
  const { user } = useSelector((state) => state.userReducer);
  const {questions} =useSelector((state)=>state.myQuestionReducer)
  const existQuestion = questions.filter((item)=>item._id===route.params.id)[0]
 
  const schema = yup.object().shape({
    question: yup.string().min(8).required(),
    option_1: yup.string().required(),
    option_2: yup.string().required(),
    option_3: yup.string().required(),
    option_4: yup.string().required(),
    answer: yup.string().required(),
  });
  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues:{
        question:existQuestion.question,
        option_1:existQuestion.options[0],
        option_2:existQuestion.options[1],
        option_3:existQuestion.options[2],
        option_4:existQuestion.options[3],
        answer:existQuestion.answer

    }
  });
  const [focus, setFocus] = useState({
    question: false,
    answer: false,
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false,
  });

  const FocusIt = (name) => {
    setFocus({
      [name]: true,
    });
  };
  const BlurIt = (name) => {
    setFocus({
      [name]: false,
    });
  };
  const propsInput = (name) => {
    return {
      onFocus: () => FocusIt(name),
      onBlur: () => BlurIt(name),
    };
  };

  const addQuestiontoDb =async (values) => {
    const questionData = {
     
      question: values.question,
      options: [
        values.option_1,
        values.option_2,
        values.option_3,
        values.option_4,
      ],
      
    };
    
    await  editQuestion({question:questionData,id:route.params.id})
  
   
    
  };
   useEffect(()=>{

    if(isSuccess){
      reset()
    }
    if(isError){
      Alert.alert(
        "Some thing went wrong"
      )
      
    }
    
    if(isSuccess){
      Alert.alert(
        "Question edited successfully"
      )
      
    }
   },[isSuccess,isError])
 

  const subjects = [
    "Cuurent Affairs",
    "World Affairs",
    "Pysics",
    "Mathematics",
    "Chemistrty",
    "Biology",
  ];


  // console.log(route);
  return (
    <KeyboardAwareScrollView
    
    style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
       
       
        <View style={styles.formBox}>
          <HeadingTitle title="Edit Question" fontSize={15} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
               
                placeholder="Question"
                style={focus.question ? styles.focusInput : styles.input}
                {...propsInput("question")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="question"
          />
          {errors.question?.message && (
            <ErrorMessage title={errors.question?.message} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
               
                placeholder="Option-1"
                style={focus.option_1 ? styles.focusInput : styles.input}
                {...propsInput("option_1")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="option_1"
          />
          {errors.option_1?.message && (
            <ErrorMessage title={errors.option_1?.message} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
              
                placeholder="Option-2"
                style={focus.option_2 ? styles.focusInput : styles.input}
                {...propsInput("option_2")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="option_2"
          />
          {errors.option_2?.message && (
            <ErrorMessage title={errors.option_2?.message} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
             
                placeholder="Option-3"
                style={focus.option_3 ? styles.focusInput : styles.input}
                {...propsInput("option_3")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="option_3"
          />
          {errors.option_3?.message && (
            <ErrorMessage title={errors.option_3?.message} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
            
                placeholder="Option-4"
                style={focus.option_4 ? styles.focusInput : styles.input}
                {...propsInput("option_4")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="option_4"
          />
          {errors.answer?.message && (
            <ErrorMessage title={errors.answer?.message} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus } }) => (
              <TextInput
               
                placeholder="Answer"
                style={focus.option_1 ? styles.focusInput : styles.input}
                {...propsInput("answer")}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="answer"
          />
          {errors.option_2?.message && (
            <ErrorMessage title={errors.option_2?.message} />
          )}
          
          { isLoading?  
          <View  style={styles.horizontal}> 
          <ActivityIndicator size="large" color="white" />
          </View>
          :
            <StyledButton  onClick={handleSubmit((data1)=>addQuestiontoDb(data1))} h={56} bg={Colors.indigo2} title="ADD"/>
          }
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddQuestionScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 20,
    width: "100%",
    height: "100%",
   
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 13,
    backgroundColor:Colors.indigo2,
    marginTop:10,
    borderRadius:10,

  
  },
  focusInput: {
    borderColor: Colors.indigo2,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  input: {
    borderColor: Colors.lightText,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  formBox: {
    marginTop: 10,
  },
});
