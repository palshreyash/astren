/*  Author: Shamik Bera and Shreyash
Last edited: 14/1/22

*/

/* User Profile Screen */



import React, { useEffect,useState } from "react";
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  
   } from "react-native";
import colors from "../config/colors";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import SearchBox from '../components/SearchBox';
import Icon from 'react-native-ico-flags';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopTab from "../components/TopTab";
import { ScrollView } from "react-native-gesture-handler";

// Later on in your component


const {height, width} = Dimensions.get('screen');



function UserProfileScreen(props) {

    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState("");
    const fetchUsername = async() => {
        try {
             setUser(await AsyncStorage.getItem('username'));
            console.log(user);
            
            
        } catch (error) {

            console.error(error)
            
        }
    }


    useEffect(() => {
        fetchUsername();
    }, [])


    if(loading) {

        return (
            <View>
                <Text>Loading</Text>
            </View>
        );

    }
  

  return (


      <SafeAreaView style={styles.background}> 
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, flex: 1}}
          vertical={true}
          nestedScrollEnabled={true}>
            <View style={styles.NavBarContainer}>
              <TouchableOpacity>
                <AntDesignIcon name="arrowleft" size={24} color="#fff" style={{
                    marginTop: 5
                }}/>
              </TouchableOpacity>
              <Text style={styles.compName}>Profile</Text>
              <TouchableOpacity>
                <AntDesignIcon name="customerservice" size={24} color="#fff" style={{
                    marginTop: 5,
                    marginLeft: width/4
                }} />
              </TouchableOpacity>
              <TouchableOpacity>
              <AntDesignIcon name="plus" size={24} color="#fff" style={{
                    marginTop: 5
                }}/>
              </TouchableOpacity>
            </View>

            <View style={styles.BelowNavContainer}>
              <TouchableOpacity>
              <Image source={require('../assets/menu.png')} style={styles.navIcons}/>
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../assets/trend.png')}style={styles.navIcons} />
              </TouchableOpacity>
              <View  style={styles.searchbox}>
                <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                <SearchBox 
                  placeholder="Search"
                  placeholderTextColor={colors.searchBoxText} />
                <Image source={require('../assets/camera.png')} style={styles.searchIcon} />

              </View >
              <Icon name="india" height="40" width="40"/>


            </View>

            <View style={styles.UserProfileBackground}>
                <Image source={require('../assets/user_cover.png')} style={{
                    width:width,
                    
                }} />
                <Image source={require('../assets/user_profile_pic.jpg')} resizeMode="contain" style={{
                    width: 110,
                    height:110,
                    borderRadius: 1000,
                    position: 'relative',
                    top:-50,

                }} />

            </View>
            <View style={styles.UserInfo}>
                <TouchableOpacity>
                    <Image 
                        source={require('../assets/fist.png')}
                        style={{
                            height: 24,
                            width: 24,
                        }} 
                    />
                </TouchableOpacity>
                <Text style={{
                    color: colors.white
                }}>@{user}</Text>
                <FontAwsomeIcon name="check-circle" size={16} style={{
                    color:'#9D9DFF',
                    marginLeft: width - width/0.84
                }} />
                <TouchableOpacity>
                    <Image 
                        source={require('../assets/donation.png')}
                        style={{
                            height: 24,
                            width: 24,
                        }} 
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.UserAdditionalInfo}>
                <Text style={styles.whiteText}>8k Followers</Text>
                <Text style={styles.whiteText}>Seller</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: height/50

                }}>
                <FontAwsomeIcon name="star-o" size={30} style={{
                    color:'#CECEFF',
                }} />
                <Text style={{
                    color: '#FFFFFF',
                    marginTop: 2,
                }}>4/5</Text>
                </View>
                <Icon name="india" height="40" width="40"/>
                <TouchableOpacity>
                    <FeatherIcon name="corner-up-right" size={24} style={{
                        color: '#FFFFFF'
                    }} />
                </TouchableOpacity>

            </View>

            <View style={styles.UserFollow}>
              <TouchableOpacity>
              <LinearGradient colors={['#5C5CFF','#B649A3']} start={{x: 0.1, y: 0.85}} end={{x: 0.9, y: 0.25}} style={{

                height: height/20,
                width: width/3,
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'rgba(133, 133, 230, 0.72)'


              }}>
                <Text style={{ color: colors.white, fontWeight: 'bold' }}>Follow</Text>

              </LinearGradient>

              </TouchableOpacity>
              
              <TouchableOpacity style={{
                backgroundColor: 'rgba(29, 0, 58, 0.74)',
                borderWidth: 1,
                height: 50,
                width: 57,
                borderColor:'rgba(133, 133, 230, 0.72)',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius: 5,
                elevation: 10,      
              }}>
                <Image source={require('../assets/cash-coin.png')} style={{

                  height: 24,
                  width: 24,
                  marginTop: 5
                  

                }} />
              </TouchableOpacity>

              <TouchableOpacity style={{
                backgroundColor: 'rgba(29, 0, 58, 0.74)',
                borderWidth: 1,
                height: 50,
                width: 57,
                borderColor:'rgba(133, 133, 230, 0.72)',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius: 5,
                elevation: 10,      
              }}>
                <FeatherIcon name="message-circle" size={24} color="#fff" style={{}}/>
              </TouchableOpacity>

            </View>
            
            <TopTab />


          </ScrollView>
          
      </SafeAreaView>


 

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
    
  },
  boldText: {
    fontWeight: "bold",
  },
  NavBarContainer: {

    height: height/10,
    width: width - width/8,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,

    
  },
  compName: {

    fontSize: 22,
    fontFamily: 'Inconsolata',
    marginLeft: -10,
    color: colors.white,
  },
  
  icons: {

  },

  BelowNavContainer: {
    height: height/7,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: width - width/12,
    justifyContent: 'space-between',
    marginHorizontal: 12,
    

  },
  navIcons: {
    height: 28,
    width:28
  },
  searchbox: {
    height: 36,
    width: width-width/2.2,
    backgroundColor: colors.searchBoxBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10
  },
  

 
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    lineHeight: 30,
    color: colors.white
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: colors.text,
  },

  UserProfileBackground: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: height/5,
  },
  UserInfo: {
      height: height/18,
      width: width -width/20,
      marginHorizontal: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10
      
  },
  UserAdditionalInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: height/10,
      marginTop: height/50,


  },
  whiteText: {
      color: colors.white
  },
  UserFollow: {

    width: width -width/12,
    height: height/12,
    marginTop: height/30,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default UserProfileScreen;
