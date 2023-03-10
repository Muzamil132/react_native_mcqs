import { TouchableOpacity, View ,TextInput,Text} from "react-native"


const StyledButton=({title,color="white",bg,h=50,onClick,mt=10,mb,fontSize=14,brColor,bw,w="100%",disabled})=>{
    return(
        <TouchableOpacity disabled={disabled} onPress={onClick} style={{width:w,borderRadius:10,marginBottom:mb,elevation:1,marginTop:mt,borderWidth:bw,borderColor:brColor}}  >
        <View style={{height:h,justifyContent:"center",alignItems:"center",backgroundColor:bg,borderRadius:10,
        
        
    
         }} >
           
                <Text  style={{color:color,fontWeight:"600",fontSize:fontSize,fontFamily:"Roboto"}}>
                  {title}
                </Text>
            
        </View>
        </TouchableOpacity>
    )

}

export default StyledButton