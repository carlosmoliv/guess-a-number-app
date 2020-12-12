import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";
import Input from "../components/Input";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ tex: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.text}>You selected </Text>

        <NumberContainer> {selectedNumber} </NumberContainer>
        {/* <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        /> */}

        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START A GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* <TileText style={styles.title}>Start a new game!</TileText> */}
        <TitleText>Start a new game!</TitleText>
        <Card style={styles.inputContainer}>
          {/* <Text style={styles.text}>Select a number:</Text> */}
          <BodyText>Select a number</BodyText>
          <Input
            styles={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View>
              <Button
                style={styles.button}
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View>
              <Button
                style={styles.button}
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});
