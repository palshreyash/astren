/*  Author: Swapnil and Shamik
Last edited: 10/1/22

*/


//imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUpScreen from "./app/screens/SignUpScreen";
import ThankYouScreen from "./app/screens/ThankYouScreen";
import AstrenRiseScreen from './app/screens/AstrenRiseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./app/screens/HomeScreen";
import Tabs from "./app/components/Tabs";
export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    /* Using the Stack Navigator to navigate
    through different screens of the app */
    
    <NavigationContainer>
    <Stack.Navigator  
      initialRouteName="Home Screen"
      screenOptions={{
        headerShown: false
      }}

    >
      <Stack.Screen name="Astren Rise" component={AstrenRiseScreen} /> 
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Thank You" component={ThankYouScreen} />
     
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
