import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import { generateRandomBetween } from "../utils";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const { userChoice, onGameOver } = props;

  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { guess: initialGuess, round: 1 },
  ]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = async (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    } else {
      if (direction === "lower") {
        maxBoundary = currentGuess - 1;
      } else {
        minBoundary = currentGuess + 1;
      }
      const newNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newNumber);
      setGuessRounds((prevGuess) => [
        { guess: newNumber, round: guessRounds.length + 1 },
        ...prevGuess,
      ]);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Title title={"Opponent's Guess"} />
      </View>
      <View style={styles.numberContainer}>
        <NumberContainer number={currentGuess} />
      </View>
      <View style={styles.controlContainer}>
        <View>
          <Text style={styles.controlText}>Higher or Lower ?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              buttonTitle={
                <Ionicons name="md-remove" size={24} color="black" />
              }
              onPress={nextGuessHandler.bind(this, "lower")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              buttonTitle={<Ionicons name="md-add" size={24} color="black" />}
              onPress={nextGuessHandler.bind(this, "greater")}
            />
          </View>
        </View>
      </View>
      <View style={styles.guessLogContainer}>
        <FlatList
          style={styles.logsContainer}
          data={guessRounds}
          renderItem={({ item }) => <GuessLogItem guess={item} />}
          keyExtractor={(item) => item.guess.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 24,
  },
  titleContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  numberContainer: {
    marginHorizontal: 24,
  },

  controlContainer: {
    marginHorizontal: 24,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#72063c",
    borderRadius: 10,
  },
  controlText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 1,
  },
  buttonContainer: {
    flex: 1,
  },
  guessLogContainer: {
    marginBottom: 40,
  },
  logsContainer: {
    paddingHorizontal: 24,
    height: Dimensions.get("window").height / 1.8,
    width: "100%",
    marginTop: 10,
  },
});

export default GameScreen;
