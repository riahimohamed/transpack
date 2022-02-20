import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthNavigator from "./AuthNavigator";
import AppNavigator from './AppNavigator';
import {  
         LanguageScreen, 
         SettingScreen, 
         InfoScreen, } from '../screens/Drawer';
import SubscribeScreen from '../screens/Drawer/SubscribeScreen';

// import colors from '../core/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                // headerStyle: {
                //   backgroundColor: colors.primary,
                //   height: 50
                // },
            }}
            initialRouteName="Home">
            <Drawer.Screen name="Accueil" component={AppNavigator} />
            <Drawer.Screen name="Profile" component={AuthNavigator} />
            <Drawer.Screen name="Language" component={LanguageScreen} />
            <Drawer.Screen name="Abonner" component={ SubscribeScreen } />
            <Drawer.Screen name="Parametres" component={SettingScreen} />
            <Drawer.Screen name="Info" component={InfoScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;