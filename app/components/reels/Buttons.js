import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

{/*type Props = {
  onPress?: () => void;
  text?: string;
  name?: any;
  size?: number;
  color?: string;
  customComponent?: React.ReactNode;
};*/}

function Buttons({
  customComponent,
  name = "like2",
  text = "Like",
  color = "white",
  size = 30,
  onPress,
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {customComponent ? (
        customComponent
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name={name} color={color} size={size} />
          <Text style={{ marginTop: 10, fontWeight: "bold", color: "white" }}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
  },
});

export default Buttons;