import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  SafeAreaView,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

const StartGameScreen = (props) => {
  const { pickedNumberHandler } = props;
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputNumber) => setEnteredNumber(inputNumber);
  const resetInputHandler = () => setEnteredNumber("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    } else {
      pickedNumberHandler(chosenNumber);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.upperScreenContainer}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.screenText}>Guess my number</Text>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={["#72063c", "#93084d", "#aa0c5b"]}
        style={styles.screenContainer}
      >
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView>
            <View style={styles.innerContainer}>
              <Text style={styles.instructionsText}>Enter a number below</Text>
              <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    buttonTitle={"Reset"}
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    buttonTitle={"Confirm"}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperScreenContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    backgroundColor: "#72063c",
  },
  screenContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  innerContainer: {
    padding: 20,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.15,
  },
  screenText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 10,
  },
  instructionsText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  numberInput: {
    width: 50,
    height: 50,
    color: "#fff",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
