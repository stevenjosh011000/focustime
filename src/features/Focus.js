import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
          mode="outlined"
          theme={{
            colors: {
              placeholder: "white",
            },
          }}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    color: colors.lightGrey,
    marginRight: spacing.sm,
    backgroundColor: colors.grey,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "center",
    flexDirection: "row",
  },
});
