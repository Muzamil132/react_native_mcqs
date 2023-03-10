import { View,Text,StyleSheet, Alert } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import Icon1 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utils/Colors"

import { useNavigation } from "@react-navigation/native";
import { useDeleteSubCategoryMutation} from "../services/api";
import { addRandomColor } from "../utils/RandomColor";


const AdminSubCategory=({title,id,isNestedList,category})=>{

  const navigation = useNavigation()
  const [deleteSubCategory,{data,isSuccess,isError,error,isLoading}]=useDeleteSubCategoryMutation()
  const myIcon = <Icon1 name="plus" size={20}  color={Colors.green} />;
  const myIcon2 = <Icon1 name="arrow-right" size={20}  color={Colors.indigo2} />;
  const myIcon3 = <Icon1 name="trash" size={20}  color={Colors.red} />;

   const deleteCategoryHandler =()=>{
    Alert.alert('Delete', 'This will permanantly delete it', [
      {
        text: 'Cancel',
        onPress: () =>  {}  ,
        style: 'cancel',
      },
      {text: 'Delete', onPress: async() => await deleteSubCategory(id) },
    ]);
    

   }

    return(
        <View style={styles.card}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <View style={[styles.circle,{backgroundColor:addRandomColor(title)}]}>
            <Text style={{fontSize:16,fontWeight:"600",color:"white"}} >{title[0].toUpperCase()}</Text>
          </View>
           
         <Text
         style={{fontFamily:"Roboto",fontSize:18,marginLeft:20,color:"black"}}
         
         >{title}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:25}}>
             
            {!isNestedList &&
           <TouchableOpacity style={styles.float}
            onPress={()=>navigation.navigate("NestedCategory",{id})}
            >
            <Text>
             {myIcon2}
            </Text>
           </TouchableOpacity>
}         
           {!isNestedList &&
           <TouchableOpacity style={styles.float}
               onPress={()=>navigation.navigate("Create subcategory",{topic:title,id})}
           >
            <Text>
             {myIcon}
            </Text>
           </TouchableOpacity>
}

           
           
            
           <TouchableOpacity 
            onPress={deleteCategoryHandler}
           style={styles.float}  
           
           >
            <Text>
             {myIcon3}
            </Text>
           </TouchableOpacity>

           {
              isNestedList &&  <TouchableOpacity 
              onPress={()=>navigation.navigate("addQuestion",{title,id,category})}
              style={[styles.float,{width:150,borderWidth:2,borderColor:"lightgray"}]}  
           
              >
               <Text>
                 Add Question
               </Text>
              </TouchableOpacity>
           }
          </View>
        </View>

    )
}

export default AdminSubCategory

const styles = StyleSheet.create({
    circle:{
        width:40,
        height:40,
        borderRadius:20,
     
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
    backgroundColor:"white",
    paddingVertical:10,
    paddingHorizontal:15,
   
    shadowColor: "#000",
    marginTop:5,
    borderRadius:5,
    
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 2
}


})