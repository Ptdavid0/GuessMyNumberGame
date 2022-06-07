import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartScreenGame";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessNumber, setGuessNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessNumber(0);
  };

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };
  const gameIsOverHandler = (numberOfRounds) => {
    setGuessNumber(numberOfRounds);
    setGameIsOver(true);
  };

  let screenOnDisplay = (
    <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
  );

  if (userNumber) {
    screenOnDisplay = (
      <GameScreen userChoice={userNumber} onGameOver={gameIsOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screenOnDisplay = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessNumber}
        restartGame={startNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      {screenOnDisplay}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
