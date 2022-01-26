import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import colors from '../core/colors';

export default function Counter() {
    const [counter, setCounter] = useState(1);

    const setCountPlus = () => {
        if(counter >= 10)
            return;

        setCounter(counter + 1);
    }

    const setCountMinus = () => {
        if(counter == 1)
            return;

        setCounter(counter - 1);
    }

    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={setCountPlus}>
                <Text h4 h4Style={styles.text}>+</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>{counter}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={setCountMinus}>
                <Text h4 h4Style={styles.text}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        fontSize: 20,
        fontWeight: '100',
        color: colors.primary,
    }
})
