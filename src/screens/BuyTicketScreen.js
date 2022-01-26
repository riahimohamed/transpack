import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text, Badge, Image, Divider } from 'react-native-elements';

import Screen from '../components/Screen';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import SocialForm from '../components/Forms/SocialForm';
import Icon from '../components/Icon';
import colors from '../core/colors';

export default function TicketScreen({navigation}) {
    const route = useRoute();
    
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
            <BackButton goBack={navigation.goBack} />
            <Text h4 h4Style={{color: colors.white}}>{route.name}</Text>
            </View>
            <View style={styles.mask} />
            <View style={styles.footer}>
                <View style={styles.card}>
                    <View style={styles.cardTitle}>
                        <Text h3 h3Style={styles.textTitle}>0,5 DT</Text>
                        <Button title='Acheter' width={100} onPress={() => {
                            navigation.navigate('SaveTicket')
                        }} />
                    </View>
                    <View style={styles.cardBody} >
                        <View style={styles.row}>
                            <View >
                                <Text style={styles.textStation}>
                                    Station <Badge value="1" status="success" />
                                </Text>
                                <Text h4 h4Style={styles.textBody}>PLACE BARCELONE SUD</Text>
                            </View>
                            <View>
                                <Text style={styles.textStation}>Depart</Text>
                                <Text h4 h4Style={styles.textBody}>16:20</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.textStation}>Station <Badge value="2" status="success" /></Text>
                                <Text h4 h4Style={styles.textBody}>ABOU EL KACEM ECHEBBI</Text>
                            </View>
                            <View>
                                <Text style={styles.textStation}>Arrivée</Text>
                                <Text h4 h4Style={styles.textBody}>16:50</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/cropped.png')} style={styles.border} />
                    <View style={styles.cardBody}>
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.textBody}>
                                    <Icon name='users' size={30} />  01</Text>
                            </View>
                            <View>
                                <Text style={styles.textBody}><Icon name='subway' size={30} /></Text>
                            </View>
                        </View>
                        <View style={styles.justify}>
                            <View style={{alignItems: 'center'}}>
                                <Icon reverse name='map' size={20} 
                                    onPress={() => navigation.navigate('Historic', { screen: 'Maps' })} />
                                <Text style={styles.textTitle}>Maps</Text>
                            </View>
                            <Divider />
                            <View style={{alignItems: 'center'}}>
                                <Icon reverse name='route' size={20} />
                                <Text style={styles.textTitle}>Trajet</Text>
                            </View>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        height: 50,
    },
    footer: {
        flex: 2.5,
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
    justify: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'flex-start',
       paddingVertical: 10,
       width: '100%',
    },
    card: {
        flex: 1,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: colors.white,
        top: -30,
        borderRadius: 30,
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    cardTitle:{
       flexDirection: 'row',
       paddingHorizontal: 20,
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingVertical: 10,
    },
    cardBody: {
        flex: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
    },
    textTitle: {
        color: colors.primary,
        textTransform: 'capitalize',
    },
    textBody: {
        color: colors.primary,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        textTransform: 'capitalize',
        flexWrap: 'wrap'
    },
    textStation: {
        marginVertical: 10,
        fontFamily: 'Roboto-Light',
        fontWeight: '300',
        fontSize: 16,
        color: 'grey',
        textTransform: 'capitalize',
    },
    border: {
        width: '100%',
        height: 35,
        zIndex: 99,
    }
})