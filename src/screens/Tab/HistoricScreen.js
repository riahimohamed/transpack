import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { DrawerActions } from '@react-navigation/native';

export default function HistoricScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer())
                } }>
                    <Text>Drawer</Text>
              </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({})
