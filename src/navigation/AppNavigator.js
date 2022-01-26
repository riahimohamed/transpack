import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';

import TicketNavigator from "../navigation/TicketNavigator";
import TicketScreen from "../screens/Tab/TicketScreen";
import HistoricScreen from "../screens/Tab/HistoricScreen";
import NotifScreen from "../screens/Tab/NotificationScreen";
import colors from "../core/colors";
import HistoricNavigator from "./HistoricNavigator";

// import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveBackgroundColor: colors.white,
      tabBarInactiveTintColor: colors.primar 
    }}
    >
    <Tab.Screen
      name="Explorer"
      component={TicketNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name='compass'
            type='font-awesome'
            color={color}
            size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="SaveTicket"
      component={TicketScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name='ticket'
            type='font-awesome'
            color={color}
            size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Historic"
      component={HistoricNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name='clock-o'
            type='font-awesome'
            color={color}
            size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotifScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name='bell'
            type='font-awesome'
            color={color}
            size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
