import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <ScrollView style={{marginVertical: 20}}>
                <View style={[styles.view, style]}>{ children }</View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
})

export default Screen;
