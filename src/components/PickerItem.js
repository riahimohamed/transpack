import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text, Badge } from 'react-native-elements';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={{marginRight: 20}}>

        <Badge style={[styles.text]} value={item.ligne} status="success" />
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    paddingHorizontal: 20,
  },
});

export default PickerItem;
