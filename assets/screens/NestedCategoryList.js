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
} from "react-native";
import AdminCategoryComponent from "../components/AdminCategoryComponent";
import AdminSubCategory from "../components/AdminSubCategory";
import { useGetCategoryQuery, useGetSubCategoryQuery } from "../services/api";

import { Colors } from "../utils/Colors";

const NestedCategories = ({ route, navigation }) => {
  const {id}= route.params
 const {data,isError,isLoading,isSuccess,error} =useGetSubCategoryQuery(id)
  console.log(data,"from categoryList")
  
  if(isLoading){
    return(
      <View><Text>Loading...</Text></View>
    )
  }

  return (
    <View style={styles.container}>
      {
        data!==undefined &&
      
      <FlatList 
       data={data.Subcategories}
       renderItem={({item})=>(
        <AdminSubCategory category={item.Category} title={item.title} id={item._id} isNestedList />
       )}
      />
       }
    </View>
  );
};

export default NestedCategories;

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    paddingHorizontal: 15,
    width: "100%",
  },

  container: {
    paddingVertical:15,
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
