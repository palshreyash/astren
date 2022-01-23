import React, { useState } from "react";
import {View, StyleSheet, TextInput } from "react-native";
import {FontAwesome5,FontAwesome} from '@expo/vector-icons'
import colors from "../config/colors";

function Input(props) {
  return (
  <View style={styles.fields}>
    <FontAwesome5 style={styles.avatar} name={props.icon} size={20} color={colors.inputText}/>
    <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
    )
}

const styles = StyleSheet.create({
  fields: {
    flexDirection: 'row',
    overflow: "hidden",
  },
  input: {
    backgroundColor: colors.input,
    borderColor: colors.inputBorder,
    height: 55,
    width: 300,
    borderWidth: 2.5,
    borderRadius: 15,
    padding: 10,
    position:"relative",
    color: colors.inputText,
  },
  avatar: {
    padding: 18,
    zIndex:1,
    paddingTop:22,
    paddingLeft:260,
    position: 'absolute',
  }
});

export default Input;