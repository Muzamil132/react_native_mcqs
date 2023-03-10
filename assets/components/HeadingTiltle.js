import { TouchableOpacity, View ,TextInput,Text} from "react-native"


const HeadingTitle=({title,color="black",bg="black",fontSize=25,postion="flex-start"})=>{
    return(
        <View  
         style={{alignItems:postion}}
        >
           
                <Text style={{fontSize:fontSize,color:color,marginBottom:10,fontWeight:"600",fontFamily:"Roboto"}}>
                  {title}
                </Text>
          
        </View>
    )

}

export default HeadingTitle