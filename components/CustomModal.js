import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal, Text, Pressable, View, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import IconButton from './IconButton';
import ColorService from '../services/colors.service';
import Colors from '../constants/Colors';

const Item = ({ item, onPress, backgroundColor, textColor, icon }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <IconButton title={item.name} style={styles.icon} textColor={textColor.color} onPress={onPress} icon={icon}></IconButton>
    {/* <Text style={[styles.title, textColor]}>{item.title}</Text> */}
  </TouchableOpacity>
);


const CustomModal = props => {

  const [color, setColor] = useState('');
  const renderItem = (itemX) => {
    const item = itemX.item;

    const isSelected = props.selectedItems.filter(i => item.id == i.id)[0] ? true : false;
    const backgroundColor = isSelected ? "#cfcfcf" : "#f8f8f9";
    const color = isSelected ? 'grey' : 'black';
    const itemIcon = isSelected ? 'square-check' : 'square';
    return (
      <Item
        item={item}
        onPress={() => props.onItemClick(props.selector, item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        icon={itemIcon}
      />
    )
  }

  const addColorHandler = (colorName) => {
    if (color && color.trim().length > 0) {
      ColorService.addColor(color);
      props.populateColors();
      setColor('');
    }
  }
  const colorTextHandler = (colorName) => {
    setColor(colorName);
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onPress}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.title}</Text>
          <View style={styles.input1}>
            <TextInput style={styles.textInput} placeholder='Add New Color' value={color} onChangeText={colorTextHandler}></TextInput>
            <Pressable
              style={[styles.button, styles.buttonSave]}
              onPress={addColorHandler}>
              <Text style={styles.textApply}>Save</Text>
            </Pressable>
          </View>
          <View style={styles.input}>
            <IconButton title="Select All" style={styles.icon} textColor='black' icon="square-check" onPress={props.selectAllHandler.bind(this, props.selector)}></IconButton>
            <IconButton title="Deselect All" style={styles.icon} textColor='black' icon="square" onPress={props.deselectAllHandler.bind(this, props.selector)}></IconButton>
          </View>
          <View style={styles.listView}>
            <FlatList data={props.data} renderItem={renderItem} numColumns={2} />
          </View>

          <View style={styles.footer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.onPressClose}>
              <Text style={styles.textClose}>Close</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonApply]}
              onPress={props.onPressApply}>
              <Text style={styles.textApply}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 70
  },
  listView: {
    width: '100%',
    height: 400
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonSave: {
    backgroundColor: Colors.primary,
    width: '35%'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '50%',
    elevation: 2,
    margin: '2%'
  },
  buttonApply: {
    backgroundColor: Colors.primary
  },
  buttonClose: {
    backgroundColor: Colors.background
  },
  textClose: {
    color: Colors.accent,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textApply: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 1,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input1: {
    marginRight: '20%',
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  item: {
    borderRadius: 5,
    width: '45%',
    height: '50',
    backgroundColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    shadowColor: 'rgba(0,0,0)',
    elevation: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: '2%'
  },
  icon: {
    padding: 10,
  },
})
export default CustomModal;