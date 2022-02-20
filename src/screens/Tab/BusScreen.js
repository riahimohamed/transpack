import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import * as Yup from "yup";
import * as Location from 'expo-location';

import Screen from '../../components/Screen';
import Icon from '../../components/Icon';
import colors from '../../core/colors';
import {
    Form,
    FormPicker as Picker,
    FormField,
    SubmitButton,
  } from "../../components/Forms";
import Counter from '../../components/Counter';

import bus from '../../assets/json/bus.json';
import ActivityIndicator from '../../components/ActivityIndicator';
import { Alert } from 'react-native';
// import ErrorMessage from '../../components/Forms/ErrorMessage';

  const validationSchema = Yup.object().shape({
    // position: Yup.object().required().nullable().label("Position"),
    station: Yup.object().required().nullable().label("Station"),
  });

export default function ExplorerScreen({navigation}) {

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState();

    let response;

    useEffect(() => {
        (async () => {
          if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
              'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
            );
            return;
          }
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          
        })();
      }, []);

    const handleLocation = async() => {
        setLoading(true);
        let {coords} = await Location.getCurrentPositionAsync({});
        setLoading(false);
        if (coords) {
            const { latitude, longitude } = coords;
            response = await Location.reverseGeocodeAsync({
              latitude,
              longitude
            });
         }
        for (let item of response) {
            let address = `${item.country} ${item.city}, ${item.street}`;
      
            setDisplayCurrentAddress(address.toString());
        }
    }

    const handleSubmit = () => {
        navigation.navigate('BuyTicket')
    }
    
    return (
        <>
        <ActivityIndicator visible={loading} />
        <Screen style={styles.container}>
            <View style={styles.header}>
                <View style={styles.choose}>
                    <View style={styles.chooseIcon}>
                        <Icon name='subway' color={colors.primary} size={40} />
                        <Text h4 h4Style={styles.chooseText} >Métro</Text>
                    </View>
                    <View style={[styles.chooseIcon, {backgroundColor:colors.primary}]}>
                        <Icon 
                            name='bus' 
                            color={colors.white} 
                            size={40}
                            onPress={() => navigation.navigate('Bus')} />
                        <Text h4 h4Style={styles.chooseText} >Bus</Text>
                    </View>
                    <View style={styles.chooseIcon}>
                        <Icon name='wallet'
                         color={colors.primary} 
                         size={40}
                         onPress={() => navigation.navigate('Historic', { screen: 'Fine' })} />
                        <Text h4 h4Style={styles.chooseText} >Amende</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mask} />
            <View style={styles.footer}>
                <View style={{ width: '90%'}}>
                    <Text h2 h2Style={styles.title}>Where would like to go today?</Text>
                    <Form
                        initialValues={{ position: null, station: null }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                        >
                        <View style={styles.boxContainer}>
                            <View style={{ width: '10%' }}>
                                <Image style={{ width: 15, height: 100, resizeMode:'contain' }} source={require('../../assets/explore.png')} />
                            </View>
                            <View style={{ width: '90%' }}>
                                <FormField
                                    disabled
                                    // disabledInputStyle={{ background: "#ddd" }}
                                    autoCapitalize="none"
                                    autoCorrect
                                    leftIcon={
                                        <Icon 
                                        name='locate-outline'
                                        type='ionicon'
                                        size={30}
                                        onPress={() => {handleLocation()}} />
                                    }
                                    name="position"
                                    value={displayCurrentAddress}
                                    placeholder="Position Actuelle"

                                />
                                <View style={styles.roll}>
                                    <Image 
                                        source={require('../../assets/sort_alt.png')}
                                        containerStyle={styles.rollImage} />
                                </View>
                                <Picker
                                    items={bus}
                                    name="station"
                                    icon="map-marker-alt"
                                    placeholder="Arrivée"
                                    />
                            </View>
                        </View>
                        <View style={styles.justify}>
                            <Icon name='user' size={25} color={colors.primary} />
                            <Text h3 h3Style={styles.countText}>Passager</Text>
                            <Counter />
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <SubmitButton title="Recherche" />
                        </View>
                    </Form>
                </View>
            </View>
        </Screen>
        </>
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
        flex: 1,
        backgroundColor: colors.primary,
        width: '100%',
        height: 150,
    },
    footer: {
        flex: 3,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    choose: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mask: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 50,
        top: -18,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    chooseIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        padding: 10,
        marginHorizontal: 7,
        backgroundColor: colors.white,
        borderRadius: 10
    },
    chooseText: {
        marginTop: 5,
        color: colors.primary,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '300'
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 15,
        padding: 10,
        paddingVertical: 20,
        backgroundColor: colors.white,
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 10,
        borderRadius: 20
    },
    roll: {
        position: 'absolute',
        justifyContent: 'center',
        width: 45,
        height: 45,
        right: 18,
        top: 35,
        borderRadius: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 20,
    },
    rollImage:{
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    justify: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
    },
    countText: {
        color: colors.primary,
        fontFamily: 'Roboto-Medum',
        fontSize: 20,
        fontWeight: '100'
    },
    title: {
        marginVertical: 10,
        color: colors.primary,
        fontFamily: 'Roboto-Medum',
        fontSize: 22,
        letterSpacing: 1.7,
        fontWeight: '300',

    },
    text: {
        color: colors.primary,
        fontFamily: 'Roboto',
    },
})
