import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = (props) => {
  const { number } = props;
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    borderWidth: 2,
    borderColor: "#72063c",
    padding: 10,
    borderRadius: 10,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: "white",
    color: "black",
  },
});

export default NumberContainer;
