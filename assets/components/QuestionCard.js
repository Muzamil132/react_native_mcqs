import { View, Text, StyleSheet,FlateList, TouchableOpacity } from "react-native";
import {Colors} from "../utils/Colors";
import Color from "../utils/Colors"
import { showAnswer } from "../reducers/QuestionReducer";
import { useDispatch } from "react-redux";
import StyledButton from "./StyledButton";
import { useNavigation } from "@react-navigation/native";
import { addRandomColor } from "../utils/RandomColor";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const QuestionCard = ({question,options,answer,i,id,isShown,profile}) => {
  const quora = <Icon2 name="quora" size={17} color="black" />;
  const  ball = <Icon2 name="volleyball-ball" size={15} color={addRandomColor(answer)} />;
   const navigation =useNavigation()
  const despatch= useDispatch()
  return (
    <View style={styles.questionBox}>
     
      <View  style={{flexDirection:"row",alignItems:"flex-start"}} >
      <Text style={{fontWeight:"900",fontFamily:"Roboto",fontSize:17}}>{quora}.{i+1} <Text style={{ fontSize:16,marginLeft:5,fontWeight:"600",fontFamily:"Roboto"}}>
        {question}
      </Text></Text>
     
   

      </View>
   
      { options.map((item,i)=>(
        <View key={i} style={styles.option_box}>
            <Text style={{marginRight:10}}>{ball}</Text>
            {/* {
                i===0 && <Text style={{color:Color.light.text,marginRight:10}} >(A)</Text>
            }
             {
                i===1 && <Text style={{color:Color.light.text,marginRight:10}} >(B)</Text>
            }
             {
                i===2 && <Text style={{color:Color.light.text,marginRight:10}} >(C)</Text>
            }
             {
                i===3 && <Text style={{color:Color.light.text,marginRight:10}} >(D)</Text>
            } */}
        
        <Text style={{color:"black",fontFamily:"Roboto",fontSize:16}}   >{item}</Text>
        </View>
       ))
}     

      { 
        isShown &&  <Text style={{marginTop:5,fontStyle:"italic"}} >Answer : <Text>{answer}</Text></Text>

      }
      {
        profile?   
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"}}>
        <Text style={{fontStyle:"italic"}} >Answer : <Text>{answer}</Text></Text>
        <StyledButton onClick={()=>navigation.navigate("Edit",{id})} h={36} bg={addRandomColor(answer)} w={100} title="Edit"/>

        </View>
        :

      
       <StyledButton h={36} bg={!isShown?addRandomColor(answer):Colors.orange} w={100} title={!isShown?"Answer":"Hide"} onClick={()=>despatch(showAnswer({id,isShown:!isShown}))} />
        
      }
   
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionBox: {
    paddingHorizontal:25,
    paddingVertical: 15,
     borderBottomWidth:1,
     borderColor:"lightgray",
     

   
    
  },

  option_box:{
    alignItems:"center",
    flexDirection:"row",
    marginTop:5,


  },
  show:{
    paddingVertical:8,
    paddingHorizontal:15,
    borderRadius:5,
    backgroundColor:Colors.green,
    alignSelf:"flex-start",
    marginTop:10,
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 1
 
    


  },
 
});
