/*  Author: Shamik and Shreyash
Last edited: 15/1/22

*/

/* Bottom Tab Navigator Component */


import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View,Text,Image } from 'react-native';
import AstrenRiseScreen from '../screens/AstrenRiseScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
   return(
    
    <Tab.Navigator
    tabBarOptions={{
        showLabel:false,
        
    }}

    screenOptions={{
        tabBarStyle: { 
            position: 'absolute',
             backgroundColor: '#50555C',
             height:  60,
             opacity: 0.45,
             borderColor: 'transparent',
             borderTopColor: '#160033'


        },
        tabBarScrollEnabled: true,
        swipeEnabled: true
        
        


      }}>
        <Tab.Screen options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View 
                style={{ alignItems: 'center', justifyContent: 'center', top: 0}}
                >
                    <Image 
                    source={require('../assets/arrow-up-circled.png')} 
                    resizeMode="contain"
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? '#8113EF' : '#FFFFFF'
                    }}
                    
                    />
                   
                </View>

            ),
        }}
         name="Astren Rise" 
         component={AstrenRiseScreen} 
         />
        <Tab.Screen  options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View 
                style={{ alignItems: 'center', justifyContent: 'center', top: 0}}
                >
                    <Image 
                    source={require('../assets/icons_person.png')} 
                    resizeMode="contain"
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? '#801DE2' : '#FFFFFF'
                    }}
                    
                    />
                   
                </View>

            ),


            }} 
            name="User Profile" 
            component={UserProfileScreen} 
        />
    </Tab.Navigator>
    
    );
}

export default Tabs;