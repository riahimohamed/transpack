import React, {useState} from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';
import * as Yup from "yup";

import usersApi from "../../api/users";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import { Form, 
  FormField, 
  SubmitButton } from "../../components/Forms";
import FormImagePicker from "../../components/Forms/FormImagePicker";
import colors from '../../core/colors';
import Screen from '../../components/Screen';

import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  tel: Yup.string().required().label("Tel"),
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({navigation}) => {

  const [check1, setCheck1] = useState(false);
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    console.log(result)

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/signup.png')}
          style={styles.image} />
      </View>
      
      <View style={styles.footer}>
        <Text h3 h3Style={{ color: '#4D14D0', textAlign: 'center' }}>Inscription</Text>
        <View style={{ justifyContent:'center',  }}>
          <Form
            initialValues={{ tel: "", 
                              name: "", 
                              email: "", 
                              password: "", 
                              images: [], }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="tel"
              keyboardType="numeric"
              name="tel"
              placeholder="Votre Tel"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="user"
              name="name"
              placeholder="Votre Nom & Pr??nom"
            />
            <CheckBox
              title="El??ve ou Etudiant"
              checked={check1}
              containerStyle={{ width: "100%" }}
              onPress={() => setCheck1(!check1)}
            />
            {check1 &&
              <>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="plus-circle"
                keyboardType="numeric"
                name="inscri"
                placeholder="Votre Num d'inscription"
              />
              <FormImagePicker name="images" />
              </>
            }
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
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <View style={{alignItems: 'center', marginVertical: 15}}>
              <SubmitButton style={styles.button} title="Enregistrer" />
            </View>
          </Form>
        </View>
        
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signup}>
                vous avez un compte?
                  <Text style={styles.signupText}> Se connecter</Text>
              </Text>
            </TouchableOpacity>  
        </View>
      </View>
    </Screen>
    </>
  );
};

export default RegisterScreen;

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
  socialIcon: {
    width: 35,
    height: 35,
    borderRadius: 20
  },
  buttonContent: {
    marginVertical: 40
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 200,
    marginBottom: 10,
    borderRadius: 30
  },
  text: {
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
