import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthNavigator from "./AuthNavigator";
import AppNavigator from './AppNavigator';
import { FavoriteScreen, 
         LanguageScreen, 
         SettingScreen, 
         InfoScreen } from '../screens/Drawer';

import colors from '../core/colors';

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
            <Drawer.Screen name="Home" component={AppNavigator} />
            <Drawer.Screen name="Profile" component={AuthNavigator} />
            <Drawer.Screen name="Language" component={LanguageScreen} />
            <Drawer.Screen name="Favorite" component={FavoriteScreen} />
            <Drawer.Screen name="Parametres" component={SettingScreen} />
            <Drawer.Screen name="Info" component={InfoScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;