import React, {useContext, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Divider } from 'react-native-paper';

import Screen from '../components/Screen';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import SocialButton from '../components/form/SocialButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>

      <Image
        source={require('../assets/signin.png')}
        style={styles.logo}
      />

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Mot de passe"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Se connecter"
      />

      {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.navButtonText}>
          Ne pas avoir de compte? Créer ici
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
  );
};

export default LoginScreen;

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
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  createButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },
});
