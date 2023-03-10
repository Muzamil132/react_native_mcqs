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
import { useGetCategoryQuery } from "../services/api";
// import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
// import LinearGradient from 'expo-linear-gradient';


import { Colors } from "../utils/Colors";

const CategoryList = ({ route, navigation }) => {
 const {data,isError,isLoading,isSuccess,error} =useGetCategoryQuery()
  console.log(data,"from categoryList")
  // const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
  if(isLoading){
    return(
      <View style={{flex:1}}>
          <Text>Loading</Text>
       </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        data!==undefined &&
      
      <FlatList 
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
