import { TouchableOpacity, View ,TextInput,Text} from "react-native"


const ErrorMessage=({title,color="red",bg="black",fontSize=14})=>{
    return(
      
              <View 
               style={{width:"100%",justifyContent:"flex-start"}}
              >
                <Text style={{fontSize:fontSize,color:color,fontWeight:"normal",fontFamily:"Roboto"}}>
                  {title}
                </Text>
                </View>
      
    )

}

export default ErrorMessage