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
import SubCategoryItem from "../components/SubCategoryItem";
import { useGetCategoryQuery, useGetSubCategoryQuery } from "../services/api";

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'expo-linear-gradient';

import { Colors } from "../utils/Colors";

const SubCategoryListing = ({ route, navigation }) => {
  const {id}= route.params
 const {data,isError,isLoading,isSuccess,error} =useGetSubCategoryQuery(id)
  console.log(data,"from categoryList")
 
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
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

  
  if(isSuccess && data.Subcategories.length<1){
    return(
    <View style={{flex:1,justifyContent:"center",padding:20}}>
    <Text style={{fontFamily:"Roboto",fontSize:18}} >We are working on this section keep visiting us</Text>
   
   </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        data!==undefined &&
      
      <FlatList 
       data={data.Subcategories}
       renderItem={({item})=>(
        <SubCategoryItem category={item.Category} title={item.title} id={item._id} />
       )}
      />
       }
    </View>
  );
};

export default SubCategoryListing

const styles = StyleSheet.create({


  container: {
    paddingVertical:15,
    backgroundColor: "white",
   
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
