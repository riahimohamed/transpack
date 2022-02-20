import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import * as Yup from "yup";

import colors from '../../core/colors';
import Screen from '../../components/Screen';
import { Form, 
         FormField,
         SubmitButton } from "../../components/Forms";
import BackButton from '../../components/BackButton';

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(4).label("Password"),
});

const ForgotPasswordScreen = ({navigation}) => {

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/forgot.png')}
          style={styles.image} />
        <BackButton goBack={navigation.goBack} color={colors.black} />
      </View>
      
      <View style={styles.footer}>
        <Text h3 h3Style={{ color: colors.primary, marginVertical: 15, }}>Mot de passe oublié</Text>
        <View style={{ justifyContent:'center', alignItems: 'center' }}>
          <Form
            initialValues={{ password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Votre Email"
              textContentType="emailAddress"
            />
            <SubmitButton style={styles.button} width={'100%'} title="Envoyer" />
          </Form>
        </View>

      </View>
    </Screen>
  );
};

export default ForgotPasswordScreen;

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
    height: 200
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
    color: colors.primary,
    paddingHorizontal: 20
  }
});
