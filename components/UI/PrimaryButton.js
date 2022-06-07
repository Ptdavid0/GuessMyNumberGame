import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const { buttonTitle, children, onPress } = props;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#f3f1f2" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
      >
        {buttonTitle ? (
          <Text style={styles.buttontext}>{buttonTitle}</Text>
        ) : (
          <Text style={styles.buttontext}>{children}</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#72063c",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default PrimaryButton;
