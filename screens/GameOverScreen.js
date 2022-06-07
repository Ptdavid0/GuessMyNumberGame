import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

const GameOverScreen = (props) => {
  const { userNumber, roundsNumber, restartGame } = props;
  return (
    <View style={styles.screenContainer}>
      <Title title={"Game Over!"} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed<Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber} </Text>.
      </Text>
      <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    borderRadius: 200,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: 24,
  },
  highlight: {
    color: "#72063c",
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
