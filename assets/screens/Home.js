import { StatusBar } from "expo-status-bar";
import { useEffect, useRef,useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
 
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { addUser, logUserOut } from "../reducers/userReducer";
import { getData } from "../utils/saveUser";
import { Colors } from "../utils/Colors";

import CateGoryCard from "../components/CategoryCard";

import Icon from "react-native-vector-icons/MaterialIcons";

import Icon2 from "react-native-vector-icons/FontAwesome5";
import StyledButton from "../components/StyledButton";
import { useGetCategoryQuery } from "../services/api";
import { addRandomColor } from "../utils/RandomColor";

const Home = ({ navigation }) => {
  const {data,isLoading,isError,isSuccess,error} =useGetCategoryQuery()
 
  const myIcon1 = <Icon name="sort" size={30} color="black" />;




  const drawerItems=[
   
    {
      icon:"heart",
      title:"Saved",
      to:"Saved"
    },
    {
      icon:"file-contract",
      title:"Your contributions",
      to:"Profile"
    },
   
  ]

  const adminItem=[
    {
      icon:"plus-circle",
      title:"Create Category",
      to:"Create Category"
    },
   
    {
      icon:"th-list",
      title:"CategoryList",
      to:"CategoryList"
    }

  ]


 
  const dispatch = useDispatch();
  const retriveData = async () => {
    const data2 = await getData();
   
    dispatch(addUser({ user: data2 }));
  };
  useEffect(() => {
    
    retriveData();

  }, [dispatch])

  const {user} = useSelector((state) => state.userReducer);
   
 

function NavigateToparticularScreen(name){
  switch(name){
    case "addQuestion":
        if(user){
          navigation.navigate("addQuestion")
          drawer.current.closeDrawer()
        }else{
          navigation.navigate("SignIn")
          drawer.current.closeDrawer()
        }
        
        break ;
    case "Saved":
        navigation.navigate("Saved") 
        drawer.current.closeDrawer()
        break;
    case "CategoryList":
        navigation.navigate("CategoryList") 
        drawer.current.closeDrawer()
        break;
    case "Create Category":
          navigation.navigate("Create Category") 
          drawer.current.closeDrawer()
          break;    
    default:
      if(user){
        navigation.navigate("Profile")
        drawer.current.closeDrawer()
      }else{
        navigation.navigate("SignIn")
        drawer.current.closeDrawer()
      }
      
       

 }

}
 

  function Nav(){
    return(
    
      <View 
         style={{flex:1,backgroundColor:"white",paddingTop:26}}

         >

          <SafeAreaView style={{flex:1,paddingVertical:5,paddingHorizontal:20}} >
            <StatusBar color="white" />

            <View  style={{paddingBottom:10,borderBottomWidth:1,borderColor:"lightgray"}}>
         
          <StyledButton  title="Examica"  bg="black" color="white" />
           
            {
              user?  <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}> 
               
                       <View  
                       style={{width:40,height:40,borderRadius:20,backgroundColor:addRandomColor(user?.name),justifyContent:"center",alignItems:"center"}}

                       >
                        <Text style={{fontSize:22,fontWeight:"600",color:"white"}}>{"M"}</Text>
                      </View>


                 <Text style={{fontSize:16,color:Colors.textColor2,marginLeft:20,fontWeight:"700",fontFamily:"Roboto"}} >{user?.name.toUpperCase()}</Text>
                
                     </View>
              :
              <StyledButton  color={Colors.green} onClick={()=> {  
                navigation.navigate("SignIn")
                drawer.current.closeDrawer()
              }} bg={Colors.green50} title="Sign in"/>
            }
           
           </View>
           <View> 
            {
              user &&
            
           <StyledButton onClick={()=>dispatch(logUserOut())} bg={addRandomColor(user?.name)} title="Logout" />
            }
            <FlatList 
              data={drawerItems}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=>NavigateToparticularScreen(item.to)} style={{flexDirection:"row",alignItems:"center",marginTop:15}} >
                <Text><Icon2 name={item.icon} size={22}  /></Text>
                <Text style={{color:"black",fontWeight:"500",marginLeft:20,fontSize:16,fontFamily:"Roboto"}} >{item.title}</Text>
              </TouchableOpacity>

              )}
            />
            {

            user?.isAdmin &&
            
             <FlatList 
              data={adminItem}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=>NavigateToparticularScreen(item.to)} style={{flexDirection:"row",alignItems:"center",marginTop:15}} >
                <Text><Icon2 name={item.icon} size={22}  /></Text>
                <Text style={{fontWeight:"500",marginLeft:20,fontSize:17,fontFamily:"Roboto"}} >{item.title}</Text>
              </TouchableOpacity>

              )}
            />
              }
            

           
            
           </View>
          
         
       
       </SafeAreaView>
      </View>

     
     
    )
  }
  const drawer= useRef()

  const addQuestionhandler=()=>{
    if(user){
      navigation.navigate("addQuestion")
    }else{
      navigation.navigate("SignIn")
    }
  }
 
  if(isLoading){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <ActivityIndicator size="large" color={Colors.purple} />

    </View>
    )
  }

  if(isError){
    return(
    <View style={{flex:1,justifyContent:"center",padding:20}}>
    <Text style={{fontFamily:"Roboto",fontSize:18}} >Some Error has occured!</Text>
    <Text style={{fontFamily:"Roboto",fontSize:18}} >Please check Your Internet Connection</Text>
   </View>
    )
  }



  return (
    
    <View style={styles.container}>
    
    <DrawerLayout 
      useNativeAnimations={false}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={Nav}
   
    >
   
   
     
      <View style={styles.header}>
      
        <TouchableOpacity
          onPress={()=>drawer.current.openDrawer()}
           >
          <View style={styles.btn_box}>
            <Text>{myIcon1}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center", flexGrow: 1 }}>
          <Text style={styles.text}>CATEGORIES</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          numColumns={2}
          data={data.categories}
          renderItem={({ item }) => (
            <CateGoryCard title={item.title} id={item._id} />
          )}
        />
      </View>
      {/* <TouchableOpacity
        onPress={addQuestionhandler}
        style={styles.float}
      >
        <Text>{myIcon}</Text>
      </TouchableOpacity> */}
    
   </DrawerLayout>
  </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    alignItems: "center",

    width: "100%",

    flex: 1,
  },

  container: {
   
    
    backgroundColor:"white",

    flex: 1,
  },

  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  float: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    backgroundColor:Colors.green,
  },
  header: {
    
    marginTop: 25,
    
    paddingHorizontal: 17,
    alignContent: "space-between",
    
    paddingVertical: 15,
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    color:"black",
    fontSize: 18,
    fontWeight: "600",
  },
});
