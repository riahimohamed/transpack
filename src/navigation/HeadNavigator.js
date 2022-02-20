import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BusScreen from "../screens/Tab/BusScreen";

const Stack = createNativeStackNavigator();

const HeadNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName='Bus'
  >
    <Stack.Screen name="Bus" component={BusScreen} />
  </Stack.Navigator>
);

export default HeadNavigator;
