import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Title from '../components/Title';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../core/colors';
import FormButton from '../components/form/FormButton';
import Button from '../components/Button';

export default function SplashScreen({ navigation }) {
    
    return (
            <Screen>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground
                            resizeMode='stretch'
                            style={styles.image}
                            source={require('../assets/splash.png')}
                            />
                    </View>
                    
                    <View style={styles.footer}>
                        <Title>Réserver n'importe quel transport</Title>
                        <FormButton 
                            buttonTitle="Continuer"
                            onPress={() => navigation.navigate('LoginScreen')} />
                            
                    </View>
                </View>
            </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1.5,
        // resizeMode:"cover",
        justifyContent: 'center',
        alignItems: 'center'
        // marginBottom: 20,
        // borderTopLeftRadius: 30,
    },
    footer: {
        flex: 1,
        backgroundColor: colors.primary,
        fontWeight: 'bold',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        flexDirection: 'row'
    }
})
