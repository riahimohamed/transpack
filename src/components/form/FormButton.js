import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../core/colors';

const FormButton = ({buttonTitle, onPress, ...rest}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer} {...rest}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      );
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      backgroundColor: colors.button,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
    },
  });
