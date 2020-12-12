import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://image.freepik.com/free-vector/businessman-top-mountain_23-2147620851.jpg",
          // }}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.bodyText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>

      {/* <Button title="START A NEW GAME" onPress={props.onRestart} /> */}
      <MainButton onPress={props.onRestart}>START A NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#000",
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  bodyText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
