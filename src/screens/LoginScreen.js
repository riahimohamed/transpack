import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground,TouchableOpacity } from 'react-native';
import { Icon,  CheckBox, Input, SocialIcon, Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../core/colors';
import Screen from '../components/Screen';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [check1, setCheck1] = useState(false);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <ImageBackground 
          source={require('../assets/bg.png')}
          style={styles.image} />
          <View style={styles.mask}>
            <Text>Se connecter</Text>
          </View>
      </View>
      
      <View style={styles.footer}>
        <View style={{ marginBottom: 10 }}>
          <Input
            placeholder='Votre email'
            leftIcon={
              <Icon
                name='mail'
                size={20}
                color='rgb(237, 99, 84)'
              />
            }
          />
        </View> 
        <View>
          <Input 
            placeholder="Password"
            leftIcon={<Icon
              name='lock'
              size={20}
              color='rgb(237, 99, 84)'
            />
            }
            secureTextEntry={true} />
        </View>
        <View style={styles.justify}>
          <CheckBox
            left
            title="Souvies-moi"
            containerStyle ={{
              backgroundColor: 'transparent',
              padding: 0,
              margin: 0,
              marginLeft: 0,
              borderWidth: 0
            }}
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <Text>Mot de passe oublié</Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <LinearGradient
            // Button Linear Gradient
            colors={['#eb6354', '#f26352', '#fe634e']}
            style={styles.button}>
            <Text style={styles.text}>Se Connecter</Text>
          </LinearGradient>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#fe634e'}} />
          <View>
            <Text style={{width: 40, color: '#fe634e', textAlign: 'center'}}>OU</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#fe634e'}} />
        </View>

        <View style={styles.justifySocial}>
          <SocialIcon
            style={styles.socialIcon}
            iconSize={20}
            type='google'
          />
          <SocialIcon
            style={styles.socialIcon}
            iconSize={20}
            type='facebook'
          />
          <SocialIcon
            style={styles.socialIcon}
            iconSize={20}
            type='instagram'
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.signup}>
                vous n'avez pas de compte?
                  <Text style={styles.signupText}> S'inscrire</Text>
              </Text>
            </TouchableOpacity>  
        </View>
      </View>
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
    flex: 1.2,
    width: '100%',
    height: 200,
  },
  footer:{
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 0,
    width: '100%',
    height: '100%'
  },
  mask:{
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 30,
    paddingTop: 40,
    width: '100%',
    height: 40,
    bottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  justify:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    paddingBottom: 15,
    alignItems: 'center',
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
    height: 50,
    width: '90%',
    marginBottom: 10,
    borderRadius: 8
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold'
  },
  signup: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.medium
  },
  signupText: {
    color: '#fe634e',
    paddingHorizontal: 20
  }
});
