import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Icon from './Icon'

export default function BackButton({ goBack, color='white' }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Icon name='arrow-left' color={color} size={20} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 15,

  },
})
