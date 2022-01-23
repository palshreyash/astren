/*  Author: Shamik and Shreyash
Last edited: 15/1/22

*/

/* Input Field Box Component */

import React, { useState } from "react";
import { StyleSheet, TextInput,Dimensions } from "react-native";
import colors from "../config/colors";
const {height, width} = Dimensions.get('screen');

function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    height: 36,
    width: width/3,
    padding: 10,
    color:colors.searchBoxText,
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default Input;