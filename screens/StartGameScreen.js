import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number:</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});