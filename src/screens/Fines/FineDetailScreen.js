import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-elements';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import Icon from '../../components/Icon';
import colors from '../../core/colors';

export default function FineDetailsScreen({navigation}) {

    const route = useRoute();
    
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <BackButton goBack={navigation.goBack} />
                <Text h4 h4Style={{color: colors.white}}>{route.name}</Text>
            </View>
            <View style={styles.mask} />
            <View style={styles.footer}>
                <View style={styles.boxContainer}>
                    <View style={styles.row}>
                        <View>
                            <Icon
                                reverse
                                name='subway' 
                                color='#16C72E' 
                                size={30} />
                        </View>
                        <View>
                            <Text style={style.textStation}>date d'expiration</Text>
                            <Text style={style.textTitle}>Nov 14</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text style={style.textTitle}>Amende</Text>
                        </View>
                        <View>
                            <Text style={style.textTitle}>montante</Text>
                            <Text style={style.textTitle}>25.00 TND</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text style={style.textTitle}>numéro</Text>
                        </View>
                        <View>
                            <Text style={style.textTitle}>Passager</Text>
                            <Text style={style.textTransform}>1</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Button title="Souver pour controle" />
                    </View>
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
        justifyContent: 'center',
      },
    header: {
        flex: 0.5,
        backgroundColor: colors.primary,
        width: '100%',
        height:80,
    },
    footer: {
        flex: 2.5,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    mask: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 50,
        top: -18,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: '100%',
    },
    boxContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: colors.white,
        shadowColor: 'grey',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 20
    },
    textBody: {
        color: colors.primary,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        textTransform: 'capitalize',
        flexWrap: 'wrap',
    },
    textStation: {
        marginVertical: 10,
        fontFamily: 'Roboto-Light',
        fontWeight: '400',
        fontSize: 16,
        color: 'grey',
        textTransform: 'capitalize',
    },
    textTitle: {
        marginVertical: 10,
        fontFamily: 'Roboto-Medum',
        fontWeight: '400',
        fontSize: 18,
        color: 'grey',
        textTransform: 'capitalize',
    },
})
