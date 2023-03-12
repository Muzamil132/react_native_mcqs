import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddQuestionScreen from '../screens/AddQuestionScreen';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import Physics from '../screens/Physics';
import RegisterScreen from '../screens/RegisterScreen';
import SubCategories from '../screens/SubCategory';

import { Colors } from './Colors';

import Profile from '../screens/Profile';
import SavedScreen from '../screens/SavedScreen';
import EditScreen from '../screens/EditScreen';
import CreateCategory from '../screens/AddCategory';
import CategoryList from '../screens/Categories';
import CreateSubCategory from '../screens/AddSubCategory';
import NestedCategories from '../screens/NestedCategoryList';
import SubCategoryListing from '../screens/SubCategoryListingScreen';
import { addRandomColor, RandomAppBarColors, randomRange } from './RandomColor';

const Stack = createNativeStackNavigator();


const NavtionContainer=()=>{

   






    return (
    <NavigationContainer>
      <Stack.Navigator  
       screenOptions={{
        headerStyle:{
        elevation:0,
        headerShadowVisible:false,
        fontFamily:"Roboto",
        headerTintColor:"white",
        headerStyle:{
          backgroundColor:Colors.purple
        }
        }
      
      }}
       initialRouteName='Home' >
        <Stack.Screen name="SignUp" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={LoginScreen} />
        <Stack.Screen options={{title:"",headerShadowVisible:false}} name="Create Category" component={CreateCategory} />
        <Stack.Screen options={{title:"",headerShadowVisible:false}} name="Create subcategory" component={CreateSubCategory} />
        <Stack.Screen options={({route})=> ({title:route.params.title,headerShadowVisible:false,fontFamily:"Roboto",fontWeight:"600"})} name="NestedCategory" component={NestedCategories} />
        <Stack.Screen options={({route})=> ({title:route.params.title,headerShadowVisible:false,fontFamily:"Roboto",headerStyle:{backgroundColor:addRandomColor(route.params.title)},headerTintColor:"white"})} name="SubCategoryListing" component={SubCategoryListing} />
        <Stack.Screen options={
          {
           headerShadowVisible:false,
          
           headerTitleAlign:"center",
          
           title:"ADD QUESTION"
          }
        }   name="addQuestion" component= {AddQuestionScreen}/>
        
        <Stack.Screen options={ ({ route }) => ({ title: route.params.title.toUpperCase()})}  name="physics" component={Physics} />
        <Stack.Screen  options={{headerShown:false}}  name="Home" component={Home} />
        <Stack.Screen   options={
          {
           headerShadowVisible:false,
           headerTitleAlign:"center",
          
           title:"Edit QUESTION"
          }
        }  name="Edit" component={EditScreen} />
        <Stack.Screen options={({ route }) => ({ title: route.name.toUpperCase(),headerShadowVisible:false,
    headerTintColor:"black" } )}  name="Profile" component={Profile} />
        <Stack.Screen  options={({ route }) => ({ title: route.name.toUpperCase(),headerShadowVisible:false,
    headerTintColor:Colors.green } )}  name="Saved" component={SavedScreen} />
       
       
       
         
        <Stack.Screen   options={({ route }) => ({ title: route.params.title.toUpperCase(),headerShadowVisible:false,
    headerTintColor:"white",fontFamily:"Roboto",fontSize:14,headerStyle:{backgroundColor:addRandomColor(route.params.title)} } )}   name="subCategory" component={SubCategories} />
      
      <Stack.Screen     name="CategoryList" component={CategoryList} />
       
       
      
      </Stack.Navigator>
    </NavigationContainer>

    )
}
export default NavtionContainer