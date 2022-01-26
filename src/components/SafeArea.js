import React from 'react'
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function SafeArea({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]}>{ children }</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'white'
    },
    view: {
        flex: 1,
    },
})
