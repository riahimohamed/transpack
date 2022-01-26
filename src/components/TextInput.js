import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from 'react-native-elements';

import defaultStyles from "../core/theme";

function AppTextInput({ error = null, width = "100%", ...props }) {
  return (
    <View style={{ width }}>
      <Input
        errorMessage={ error }
        inputContainerStyle={{ borderBottomColor: "#4D14D0" }}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;