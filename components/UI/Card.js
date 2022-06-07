import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.screenContainer}>{children}</View>;
};
const styles = StyleSheet.create({
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
});

export default Card;
