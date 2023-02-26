import { TouchableOpacity, View ,TextInput,Text} from "react-native"


const StyledButton=({title,color="white",bg,h=50,onClick,mt=10,mb,fontSize=14})=>{
    return(
        <View style={{width:"100%",height:h,justifyContent:"center",alignItems:"center",marginTop:mt,backgroundColor:bg,borderRadius:10,
        
        
    
         }} >
            <TouchableOpacity onPress={onClick} style={{borderRadius:10}}  >
                <Text  style={{color:color,fontWeight:"600",fontSize:fontSize}}>
                  {title}
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default StyledButton