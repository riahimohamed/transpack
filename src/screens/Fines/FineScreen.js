import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

import Screen from '../../components/Screen';
import Icon from '../../components/Icon';
import colors from '../../core/colors';

export default function FineScreen({navigation}) {
    
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <View style={styles.choose}>
                    <View style={styles.chooseIcon}>
                        <Icon 
                            name='subway' 
                            color='#16C72E' 
                            size={40}
                            onPress={() => navigation.navigate('Explorer')} />
                        <Text h4 h4Style={styles.chooseText} >Métro</Text>
                    </View>
                    <View style={styles.chooseIcon}>
                        <Icon name='bus' color='#E8E230' size={40} onPress={() => navigation.navigate('Bus')} />
                        <Text h4 h4Style={styles.chooseText} >Bus</Text>
                    </View>
                    <View style={[styles.chooseIcon, {backgroundColor:colors.primary}]}>
                        <Icon name='wallet' color={colors.white} size={40} />
                        <Text h4 h4Style={styles.chooseText} >Amende</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mask} />
            <View style={styles.footer}>
                <View style={styles.boxContainer}>
                    <ListItem
                        Component={TouchableHighlight}
                        containerStyle={styles.list}
                        >
                        <Icon name='check-circle' color={colors.primary} size={40} />
                        <ListItem.Content>
                            <ListItem.Title>
                            <Text>Date :</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                            <Text>14 Mars, 2020</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <Text>25DT</Text>
                    </ListItem>

                    <ListItem
                        Component={TouchableHighlight}
                        containerStyle={styles.list}
                        >
                        <Icon name='times-circle' color={colors.primary} size={40} />
                        <ListItem.Content>
                            <ListItem.Title>
                            <Text>Pranshu Chittora</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                            <Text>30 Dec, 2021</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <Text>25DT</Text>
                    </ListItem>
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
    list: {
        marginVertical: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 20
    }
})
