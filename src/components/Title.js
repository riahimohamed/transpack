import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'
import colors from '../core/colors';

export default function Title(props) {
    return (
        <Text style={styles.title} {...props} />
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '600',
    }
})
