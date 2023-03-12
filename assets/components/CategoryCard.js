import { StyleSheet, View ,Text, TouchableOpacity} from "react-native"
import { Colors } from "../utils/Colors";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { addRandomColor } from "../utils/RandomColor";
import { getIcon } from "../utils/data";
const CateGoryCard =({title,id})=>{
    console.log(title,id)
    const myIcon = <Icon name="atom" size={30}  color={Colors.indigo2} />;
    const navigation = useNavigation()

    // const navigateToScreen=(subject)=>{
    //  switch(subject){
    //     case "Physics":
    //         navigation.navigate("NestedCategory",{})
    //         break ;
    //     default:
    //         navigation.navigate("subCategory",{title,cate}) 
           

    //  }


    // }

    return (
        <TouchableOpacity 
        style={[styles.card,{borderLeftColor:addRandomColor(title)}]} 
         onPress={()=>navigation.navigate("SubCategoryListing",{id,title})}
        >
            <Text><Icon name={getIcon(title)} size={30}  color={addRandomColor(title)} /></Text>
        <View>
            
         <Text style={styles.text} >
          {title}
         </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderLeftWidth:2,
        
        backgroundColor:"white",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        height:150,
        width:170,
        margin:5,
        shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity:  0.17,
          shadowRadius: 3.05,
          elevation: 2
       
    }
    ,text:{
        marginTop:10,
        fontSize:17,
        fontFamily:"Roboto",
        color:"black",
        fontWeight:"600"
    }
    
  });

  export default CateGoryCard