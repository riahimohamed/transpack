import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import colors from '../core/colors'

export default function Button({ mode, icon, style, ...props }) {
  return (
    <PaperButton
      icon={icon}
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: colors.button },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: colors.button
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
})
