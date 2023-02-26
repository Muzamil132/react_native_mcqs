import { StyleSheet, View ,Text, TouchableOpacity} from "react-native"
import { Colors } from "../utils/Colors";
import { useNavigation } from '@react-navigation/native';
const CateGoryCard =({title})=>{

    const navigation = useNavigation()
    return (
        <TouchableOpacity 
         onPress={()=>navigation.navigate("subCategory",{title:"Home"})}
        >
        <View style={styles.card} >
         <Text style={styles.text} >
          {title}
         </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        color:"white",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        height:150,
        width:170,
       
        margin:5,
        backgroundColor:Colors.purple
    }
    ,text:{
        color:"white"
    }
    
  });

  export default CateGoryCard