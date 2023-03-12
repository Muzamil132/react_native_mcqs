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

import { useGetQuestionsQuery } from "../services/api";

import { Colors } from "../utils/Colors";



const SubCategories = ({ route, navigation }) => {
  const [page,setPage]=useState(1)

  const dispatch = useDispatch()
  const { data, isSuccess, isError, isLoading,isFetching,error} = useGetQuestionsQuery(
    {
      id:route.params.id,page
    }
  );
  const {questions} = useSelector(state=>state.QuestionReducer)
  console.log(data,error)
   useEffect(()=>{
    if(!isFetching){
      dispatch(updateQuestionList({questions:data}))
    }
    


   },[page,dispatch])

  


   
  if(isLoading){
    return(
      <View 
      style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" color={Colors.purple} />


      </View>
    )
  }

  if(data!==undefined && questions.questions.length===0){
    return(
      <View style={{paddingHorizontal:30,paddingVertical:20}}>
        <Text style={{fontSize:18,fontFamily:"Roboto"}}>We are working on this section keep visiting us</Text>
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
       showsVerticalScrollIndicator={false}
        data={questions.questions}
        renderItem={({item,index})=>(
          <QuestionCard id={item._id} isShown={item.isShown}  i={index}   question={item.question} options={item.options} answer= {item.answer} />
        )}
       />
     }
    </View>
    { 
    questions.count>1 &&  <View 
    style={styles.pagination}
   >
    {
       isFetching?  <ActivityIndicator size="large" color={Colors.indigo2} />:   <StyledButton
       bg={page===1?Colors.lightGray:Colors.indigo2}
       color={page===1?"lightgray":"white"}
       mt={0} w={120} h={38}  onClick={previousPage} disabled={page===1}  title="Previous"  />
    }
  
    <View style={styles.pageBox}>
      <Text style={{fontSize:16,fontWeight:"500",color:Colors.textColor2}}  >{page}</Text>
    </View>
    {
      isFetching?    <ActivityIndicator size="large"  color={Colors.indigo2} />:
    
      <StyledButton color={page===questions.count?"lightgray":"white"} mt={0} w={120} h={38}  onClick={NextPage} disabled={page===questions.count} bg={page===questions.count?Colors.lightGray:Colors.indigo2} title="Next"  />
    }
  </View>
      
    }
   
    </View>
   
  );
};

export default SubCategories;

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
    paddingTop:20,
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
    paddingVertical:2,
    paddingHorizontal:25,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"white",
    position:"absolute",
    bottom:1,
    right:0,
    left:0,
    
  },
  pageBox:{
     
    width:50,
    height:36,
    justifyContent:"center",
    alignItems:"center",
    borderColor:Colors.lightGray,
    borderWidth:2,
    borderRadius:10,

  }

 
});
