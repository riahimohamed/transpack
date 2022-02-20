import React, {useState} from 'react';
import { StyleSheet, View, Image,TouchableOpacity,Platform, KeyboardAvoidingView } from 'react-native';
import { Text } from 'react-native-elements';
import * as Yup from "yup";

import colors from '../../core/colors';
import Screen from '../../components/Screen';
import { Form, 
         FormField,
         ErrorMessage,
         SubmitButton, 
         SocialForm } from "../../components/Forms";
import authApi from "../../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({navigation}) => {

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >
      <View style={styles.header}>
        <Image
          source={require('../../assets/signin.png')}
          style={styles.image} />
      </View>
      
      <View style={styles.footer}>
        <Text h3 h3Style={{ color: '#4D14D0', textAlign: 'center' }}>Connecter</Text>
        <View style={{ justifyContent:'center', alignItems: 'center' }}>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFailed}
              />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Mot de passe"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton style={styles.button} title="Se connecter" />
          </Form>
        </View>

        <View style={styles.justify}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Mot de passe oublié</Text>  
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#7048B6'}} />
          <View>
            <Text style={{width: 40, color: '#7048B6', textAlign: 'center'}}>OU</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#7048B6'}} />
        </View>

        <View style={styles.justifySocial}>
          <SocialForm type="facebook" title="Facebook" button light />
          <SocialForm type="google" title="Google" button light />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signup}>
                vous n'avez pas de compte?
                  <Text style={styles.signupText}> S'inscrire</Text>
              </Text>
            </TouchableOpacity>  
        </View>
      </View>
      </KeyboardAvoidingView>
    </Screen>
    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  header:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: 300
  },
  footer:{
    flex: 2,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 0,
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  justify:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 0,
    paddingBottom: 15
  },
  justifySocial: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  button: {
    marginVertical: 10
  },
  forgotText: {
    paddingVertical: 10,
    color: "#9863EC",
    fontSize: 14,
    fontWeight: 'bold'
  },
  signup: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.medium
  },
  signupText: {
    color: '#7048B6',
    paddingHorizontal: 20
  }
});
