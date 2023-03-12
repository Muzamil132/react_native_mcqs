import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  DrawerLayoutAndroid,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AdminCategoryComponent from "../components/AdminCategoryComponent";
import { useGetCategoryQuery } from "../services/api";


import { Colors } from "../utils/Colors";

const CategoryList = ({ route, navigation }) => {
 const {data,isError,isLoading,isSuccess,error} =useGetCategoryQuery()
  console.log(data,"from categoryList")

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
      {
        data!==undefined &&
      
      <FlatList 
      showsVerticalScrollIndicator={false}
       data={data.categories}
       renderItem={({item})=>(
        <AdminCategoryComponent title={item.title} id={item._id}  />
       )}
      />
       }
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    paddingHorizontal: 15,
    width: "100%",
  },

  container: {
    backgroundColor: "white",
    paddingHorizontal:15,
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: "white",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
