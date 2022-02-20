import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const DrawerBurger = ({navigation, style}) => {
    return (
        <View style={[styles.burger, style]}>
            <TouchableOpacity onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer())
                } }>
                    <Image 
                        source={require('../assets/icones/bars-solid.svg')}
                        style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    burger: {
        position: 'relative',
        top: 10,
        color: 'white',
        elevation: 99
    },
    icon: {
        width: 30,
        height: 30,
    }
})


export default DrawerBurger
