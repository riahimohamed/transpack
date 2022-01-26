import React from 'react'
import { Icon } from 'react-native-elements';

export default function AppIcon({ name, type = 'font-awesome-5', size, color='#6c00eb', reverse, onPress }) {
    return (
        <Icon
            name={name}
            type={type}
            size={size}
            color={color}
            onPress={onPress} 
            reverse={reverse} />
    )
}
