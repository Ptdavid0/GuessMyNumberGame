import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = (props) => {
  const { title } = props;
  return (
    <View>
      <Text style={styles.title}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-sans-bold",
    marginTop: 10,
    borderColor: "#72063c",
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
export default Title;
