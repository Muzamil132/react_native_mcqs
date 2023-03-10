import { StatusBar } from "expo-status-bar";
import { useEffect, useRef,useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  DrawerLayoutAndroid,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import HeadingTitle from "../components/HeadingTiltle";
import LoadingUI from "../components/Loading";
import QuestionCard from "../components/QuestionCard";
import StyledButton from "../components/StyledButton";
import { updateQuestionList } from "../reducers/QuestionReducer";

import { useGetQuestionsQuery, useMyQuestionsQuery } from "../services/api";

import { Colors } from "../utils/Colors";

const Profile = ({ route, navigation }) => {
 const {user}= useSelector((state)=>state.userReducer)

  const [page,setPage]=useState(1)

  const dispatch = useDispatch()
  const { data, isSuccess, isError, isLoading,isFetching,error} = useMyQuestionsQuery(
    {
     id:user?.id ,page
    }
  );
 
  const  {questions,count}= useSelector((state)=>state.myQuestionReducer)
  console.log(data, "dat is  ")
  console.log(error, "error is  ")
   
//    useEffect(()=>{
//     if(!isFetching){
//       dispatch(updateQuestionList({questions:data}))
//     }
    


//    },[page,dispatch])

  
  const subjects = [
    "Cuurent Affairs",
    "World Affairs",
    "Pysics",
    "Mathematics",
    "Chemistrty",
    "Biology",
  ];

   
  if(isLoading){
    return(
      <View 
      style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" color={Colors.green} />


      </View>
    )
  }

  if(data!==undefined && questions.length===0){
    return(
      <View style={{paddingHorizontal:30,paddingVertical:20}}>
<HeadingTitle color={Colors.indigo2} title="You have not added any Question"  />
</View>
    )
    
  }
  const NextPage=()=>{
    setPage((prev)=>prev+1)
  
  }
  const previousPage=()=>{
    setPage((prev)=>prev-1)
  
  }

  return (
    
   
    <View style={styles.container}>
      <View>
     {
       data!==undefined && <FlatList 
        
        data={questions}
        renderItem={({item,index})=>(
          <QuestionCard profile  id={item._id} isShown={item.isShown}  i={index}   question={item.question} options={item.options} answer= {item.answer} />
        )}
       />
     }
    </View>
    { 
    count>1 &&  <View 
    style={styles.pagination}
   >
    {
       isFetching?  <ActivityIndicator color={Colors.indigo2} />: <Button onPress={previousPage}  disabled={page===1} color={Colors.indigo2} title="Previous"/>
    }
  
    <View style={styles.pageBox}>
      <Text>{page}</Text>
    </View>
    {
      isFetching?    <ActivityIndicator color={Colors.indigo2} />:
    
      <Button  onPress={NextPage} disabled={page===count} color={Colors.indigo2} title="Next"  />
    }
  </View>
      
    }
   
    </View>
   
  );
};

export default Profile;

const styles = StyleSheet.create({
  loadingContainer:{
    backgroundColor:"white",
    paddingHorizontal:20,
    paddingVertical:15,
    justifyContent:"center",
    alignItems:"center",
    flex: 1,

  },
  
  container: {
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:40,

    flex: 1,
  },
  questionBox:{
    paddingHorizontal:20,
    paddingVertical:15,

  },
  question_number:{
    color:"white",
    backgroundColor:Colors.orange,
    alignSelf:"flex-start",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    elevation:1,

    

  },
  pagination:{
    paddingVertical:5,
    paddingHorizontal:25,
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor:"white",
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    
  },
  pageBox:{
    width:100,
    justifyContent:"center",
    alignItems:"center",
    borderColor:Colors.lightGray,
    borderWidth:1,
    borderRadius:10,

  }

 
});
