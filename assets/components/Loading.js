import { View,StyleSheet } from "react-native"
import Colors from "../utils/Colors"

const LoadingUI=()=>{
    return(
       <View style={styles.card} >
        <View style={styles.question}>
         
        </View>

       </View>
    )
}

export default LoadingUI


const styles = StyleSheet.create({
    card:{
        borderRadius:10,
       
        height:100

    },
    question:{
        width:"100%",
        height:30,
        backgroundColor:Colors.lightGray
    }


})