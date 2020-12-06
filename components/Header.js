import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
import TextTitle from "../components/TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TextTitle>{props.title}</TextTitle>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
