import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { Text, Button } from 'react-native-elements';

import SafeArea from "./SafeArea";
import defaultStyles from "../core/theme";
import PickerItem from "./PickerItem";
import Icon from './Icon';

function AppPicker({ icon, items, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width = "100%" }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon 
              name={icon}
              size={20}
              color={defaultStyles.colors.primary} 
              style={styles.icon} />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.name}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeArea>
          <View style={{alignItems: 'flex-end', margin: 10}}>
            <Icon
              name='times-circle'
              onPress={() => setModalVisible(false)} />
          </View>
          
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.name}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeArea>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    width: "100%",
    marginVertical: 3,
    padding: 15,
    paddingHorizontal: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 6,
  },
  icon: {
    marginRight: 20,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default AppPicker;
