/*  Author: Swapnil Mitra
Last edited: 10/1/22

/* App Button Component */
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    borderRadius: 30,
    height: 60,
    width: 275,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;
