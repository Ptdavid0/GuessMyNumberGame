import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GuessLogItem = ({ guess }) => {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.text}>
        Guess #{guess.round}: {guess.guess}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guessLogItem: {
    borderColor: "#72063c",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
    flexDirection: "row",
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 16,
    fontFamily: "open-sans",
    color: "black",
    textAlign: "center",
    width: "100%",
  },
});

export default GuessLogItem;
