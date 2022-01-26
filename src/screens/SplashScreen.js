import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import colors from '../core/colors';
import { Text } from 'react-native-elements';
import SwipeButton from '@dillionverma/react-native-swipe-button';

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
                    <Text h3 h3Style={styles.text}>Réserver n'importe quel transport</Text>
                        <SwipeButton 
                            title='Glisser pour continuer'
                            height={60}
                            containerStyle={{
                                backgroundColor: colors.white,
                                paddingVertical: 20,
                                marginTop: 20,
                                width: '70%'
                            }}
                            underlayStyle={{ backgroundColor: colors.primary }}
                            iconContainerStyle={{
                                backgroundColor: colors.secondary
                            }}
                            titleStyle={{ color: colors.primary }}
                            onComplete={() => navigation.navigate('Drawer')} />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    header: {
        flex: 2.5,
        width: '100%',
        height: '100%',
    },
    footer: {
        flex: 0.5,
        width: '100%',
        height: 150,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: colors.white,
    }
})
