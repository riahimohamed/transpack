import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HistoricScreen from "../screens/Tab/HistoricScreen";
import FineScreen from "../screens/Fines/FineScreen";
import FineDetailScreen from "../screens/Fines/FineDetailScreen";
import MapsScreen from "../screens/Fines/MapsScreen";

const Stack = createNativeStackNavigator();

const HistoricNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName='Feed'
  >
    <Stack.Screen name="Feed" component={HistoricScreen} />
    <Stack.Screen name="Fine" component={FineScreen} />
    <Stack.Screen name="FineDetails" component={FineDetailScreen} />
    <Stack.Screen name="Maps" component={MapsScreen} />
  </Stack.Navigator>
);

export default HistoricNavigator;
