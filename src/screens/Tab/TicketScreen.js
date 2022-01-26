import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';

import Screen from '../../components/Screen';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import colors from '../../core/colors';

export default function TicketScreen({navigation}) {
    
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <BackButton goBack={navigation.goBack} color={colors.black} />
            </View>
            {/* <View style={styles.mask} /> */}
            <View style={styles.footer}>
                <View style={styles.card}>
                    <View style={styles.cardBody} >
                        <View style={{alignItems: 'flex-end', paddingBottom: 10,}}>
                            <Icon name='download' size={20} />
                        </View>
                        <View style={styles.rowStart}>
                            <View style={{ paddingRight: 10 }}>
                                <Icon reverse name='paper-plane' size={15} />
                            </View>
                            <View>
                                <Text h4 h4Style={styles.textBody}>PLACE BARCELONE SUD</Text>
                                <Text h4 h4Style={styles.textStation}>Nov 14, 16:20</Text>
                            </View>
                        </View>
                        <View style={styles.rowStart}>
                            <View style={{ paddingRight: 10 }}>
                                <Icon reverse name='map-marker-alt' size={15} />
                            </View>
                            <View>
                                <Text h4 h4Style={styles.textBody}>ABOU EL KACEM ECHEBBI</Text>
                                <Text h4 h4Style={styles.textStation}>Nov 14, 16:50</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../../assets/cropped.png')} style={styles.border} />
                    <View style={styles.cardBody}>
                        <View style={styles.rowStart}>
                            <View>
                                <Text style={styles.textTitle}>Passager</Text>
                                <Text style={styles.textBody}>Ahmed Amin</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View >
                                <Text style={styles.textTitle}>Date</Text>
                                <Text h4 h4Style={styles.textBody}>12 Juin</Text>
                            </View>
                            <View>
                                <Text style={styles.textTitle}>Metro N°</Text>
                                <Text h4 h4Style={styles.textBody}>2</Text>
                            </View>
                            <View>
                                <Text style={styles.textTitle}>Tickets</Text>
                                <Text h4 h4Style={styles.textBody}>1</Text>
                            </View>
                        </View>
                            <View style={styles.qr}>
                                <QRCode
                                    value="http://awesome.link.qr"
                                    />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Button title="Souver pour controle" />
                            </View>
                    </View>
                    
                </View>{/*card */}
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
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: '100%',
        height: 50,
    },
    footer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    mask: {
        flex: 1,
        backgroundColor: colors.primary,
        width: '100%',
        height: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        zIndex: -1,
    },
    row: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingVertical: 10,
       width: '100%',
    },
    rowStart: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        width: '100%',
    },
    card: {
        flex: 1,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: colors.white,
        // top: -50,
        borderRadius: 30,
        shadowColor: 'grey',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    cardBody: {
        flex: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
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
    border: {
        width: '100%',
        height: 35,
        zIndex: 99,
    },
    qr: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
})