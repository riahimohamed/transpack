import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExplorerScreen from "../screens/Tab/ExplorerScreen";
import BuyTicketScreen from "../screens/BuyTicketScreen";

const Stack = createNativeStackNavigator();

const TicketNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ headerShown: false }} 
  >
    <Stack.Screen name="Route" component={ExplorerScreen} />
    <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
  </Stack.Navigator>
);

export default TicketNavigator;
