/*  Author: Shamik Bera and Shreyash
Last edited: 14/1/22

*/

/* Astren Rise Screen */



import React, { useEffect} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import colors from "../config/colors";
import Reels from '../components/reels/Reels.js';
import Video from 'react-native-video';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import SearchBox from '../components/SearchBox';
import Icon from 'react-native-ico-flags';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopTab from "../components/TopTab";


// Later on in your component
const videos=[
  {
    _id: '1',
    uri: { uri: "https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4" },
},
{
    _id: '2',
    uri: { uri: "https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4" },
},
{
    _id: '3',
    uri: { uri: "https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4" },
}
]

const { height, width } = Dimensions.get('screen');
function AstrenRiseScreen(props){

  return (



    <SafeAreaView style={styles.background}>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.NavBarContainer}>
          <Text style={styles.compName}>AstrenRise</Text>
          <TouchableOpacity>
            <AntDesignIcon name="plus" size={24} color="#fff" style={{
              marginTop: 5
            }} />
          </TouchableOpacity>
        </View>

        <View style={styles.BelowNavContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/menu.png')} style={styles.navIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/trend.png')} style={styles.navIcons} />
          </TouchableOpacity>
          <View style={styles.searchbox}>
            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
            <SearchBox
              placeholder="Search"
              placeholderTextColor={colors.searchBoxText} />
            <Image source={require('../assets/camera.png')} style={styles.searchIcon} />
          </View >
          <Icon name="india" height="40" width="40" />
        </View>
        
     <View> <Reels videos={videos} pauseOnOptionsShow={false} headerTitle="Astren Rise"/></View>
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

    height: height / 10,
    width: width - width / 16,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compName: {

    fontSize: 22,
    fontFamily: 'Inconsolata',
    marginLeft: 20,
    color: colors.white,
  },

  icons: {

  },

  BelowNavContainer: {
    height: height / 10,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: width - width / 12,
    justifyContent: 'space-between',
    marginHorizontal: 12,


  },
  navIcons: {
    height: 28,
    width: 28
  },
  searchbox: {
    height: 36,
    width: width - width / 2.2,
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
});

export default AstrenRiseScreen;