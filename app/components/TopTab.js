import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import UserPostsScreen from '../screens/UserPostsScreen';
import UserRisePostsScreen from '../screens/UserRisePostsScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
            <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#aaa',
                    marginTop: 20,

                },
                tabBarScrollEnabled: true,
                swipeEnabled: true
            }}>
                <Tab.Screen name="User Posts" component={UserPostsScreen} />
                <Tab.Screen name="User Rise Posts" component={UserRisePostsScreen} />
            
            </Tab.Navigator>


    )
}

export default TopTab
