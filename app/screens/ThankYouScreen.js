/*  Author: Swapnil Mitra
Last edited: 10/1/22

*/

/* Thank you Screen */

import React from "react";
import { 
  ImageBackground,
   StyleSheet,
    Text,
     View,
    Dimensions } from "react-native";
import colors from "../config/colors";
import {LinearGradient} from 'expo-linear-gradient';


const {height, width} = Dimensions.get('screen');

function ThankYouScreen(props) {
  return (

      <ImageBackground
        source={require("../assets/juniperphoton-ckU7CseK6ag-unsplash.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Thank You!</Text>
          <Text style={styles.subtitle}>
            We hope you have an{" "}
            <Text style={styles.boldText}>astounding</Text> time with us.
            We will get back to you as soon as the app is live.
          </Text>
        </View>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
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

export default ThankYouScreen;
