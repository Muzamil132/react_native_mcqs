import { View,Text,StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utils/Colors"
import StyledButton from "./StyledButton"
import { useNavigation } from "@react-navigation/native";
import { useDeleteSubCategoryMutation } from "../services/api";
import  { addRandomColor, RandomColors } from "../utils/RandomColor";

const SubCategoryItem=({title,id,category})=>{
  const [deleteSubCategory,{data,isSuccess,isError,error,isLoading}]= useDeleteSubCategoryMutation()
  const navigation = useNavigation()
  const myIcon = <Icon1 name="plus" size={20}  color={Colors.purple2} />;

    return(
        <TouchableOpacity onPress={()=>navigation.navigate("subCategory",{id,title})} style={styles.card}>
        <View style={{flexDirection:"row",alignItems:"center",flex:1}}>
          <View style={[styles.circle,{backgroundColor:addRandomColor(title)}]}>
            <Text style={{fontSize:16,fontWeight:"600",color:"white"}} >{title[0].toUpperCase()}</Text>
          </View>
           
         <Text
         style={{fontFamily:"Roboto",fontSize:18,marginLeft:20,color:"black"}}
         
         >{title}</Text>
             
            {/* <TouchableOpacity 
              onPress={()=>navigation.navigate("addQuestion",{title,id,category})}
              style={[styles.float,{width:150,borderWidth:2,borderColor:"lightgray"}]}  
           
              >
               <Text>
                 Add Question
               </Text>
              </TouchableOpacity> */}
          </View>
          <TouchableOpacity  style={styles.float}>
            <Text>{myIcon}</Text>

          </TouchableOpacity>
         
        </TouchableOpacity>

    )
}

export default SubCategoryItem

const styles = StyleSheet.create({
    circle:{
        width:40,
        height:40,
        borderRadius:20,
        //  backgroundColor:Colors.red,
        justifyContent:"center",
        alignItems:"center",
         

    },
    float: {
    
      width: 70,
      height: 40,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      elevation: 1,
      backgroundColor: "white",
    },

card:{
    alignItems:"center",
    flexDirection:"row",
    marginHorizontal:5,
    backgroundColor:"white",
    paddingVertical:10,
    paddingHorizontal:25,
    borderBottomColor:"lightgray",
    borderBottomWidth:1
   
}


})