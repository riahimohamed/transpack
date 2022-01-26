import React from "react";
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

function AppButton({ title, width = '80%', style, onPress }) {
   
  const linearGradientProps = {
                colors: ['#7048B6', '#9863EC'],
                start: { x: 0, y: 1 },
                end: { x: 1, y: 1 },
                }

  return (
    <Button
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={linearGradientProps}
        buttonStyle={styles.buttonStyle}
        containerStyle={[style, {width, margin: 5, borderRadius: 30, marginVertical: 10 }]}
        loadingProps={{ animating: true }}
        title={title}
        titleStyle={{ marginHorizontal: 5 }}
        onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5
    },
});

export default AppButton;
