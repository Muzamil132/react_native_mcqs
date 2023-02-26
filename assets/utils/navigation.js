import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SubCategories from '../screens/SubCategory';
const Stack = createNativeStackNavigator();
const NavtionContainer=()=>{
    return (
    <NavigationContainer>
      <Stack.Navigator  
       screenOptions={{
        headerShown: false
      }}
       initialRouteName='Home' >
        <Stack.Screen name="SignUp" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="subCategory" component={SubCategories} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}
export default NavtionContainer