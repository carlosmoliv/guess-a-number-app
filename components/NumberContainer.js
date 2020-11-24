import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.number}> {props.children} </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    // borderWith: 2,
    borderColor: Colors.accent,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    fontWeight: "700",
  },
});
