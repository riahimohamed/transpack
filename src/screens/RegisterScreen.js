import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { Divider } from 'react-native-paper';
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

import Screen from '../components/Screen'
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import SocialButton from '../components/form/SocialButton';

export default function RegisterScreen({ navigation }) {

  return (
    <Screen style={styles.container}>
      <BackButton goBack={navigation.goBack} />

      <Image
        source={require('../assets/signup.png')}
        style={styles.logo}
      />

      <FormInput
        placeholderText="Nom et Pénom"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        placeholderText="Mot de passe"
        secureTextEntry={true}
      />

      <FormInput
        placeholderText="Confirmer voter mot de passe"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Enrgistrer"
      />

      {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.navButtonText}>
          Avez vous un compte? Se connecter
        </Text>
      </TouchableOpacity>

      <Divider style={{ marginBottom: 15, width:'100%' }} />

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 10
  },
  logo: {
    height: 150,
    width: 150,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  createButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },
})
