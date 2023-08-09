import { React, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import Input from './Input';
import IconButton from './IconButton';
import CustomModal from './CustomModal';
import ColorService from '../services/colors.service';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';


const OrderForm = (props) => {
    const onSaveOrderHandler = () => {
        const colorsData = { ...colors };
        delete colorsData['global'];
        const orderData = {
            orderNumber,
            partyName,
            size36Quantity,
            size38Quantity,
            size40Quantity,
            size42Quantity,
            size44Quantity,
            size46Quantity,
            description,
            ...colorsData
        };
        console.log(orderData);
        props.onSave(orderData);
    }
    const [modalVisible, setModalVisible] = useState([false, false, false, false, false, false, false]);
    const [colors, setColors] = useState({});
    const [selectedItems, setSelectedItems] = useState({});
    const [orderNumber, setOrderNumber] = useState('');
    const [partyName, setPartyName] = useState('');
    const [size36Quantity, setSize36Quantity] = useState('');
    const [size38Quantity, setSize38Quantity] = useState('');
    const [size40Quantity, setSize40Quantity] = useState('');
    const [size42Quantity, setSize42Quantity] = useState('');
    const [size44Quantity, setSize44Quantity] = useState('');
    const [size46Quantity, setSize46Quantity] = useState('');
    const [description, setDescription] = useState('');
    const orderNumberHandler = (text) => {
        setOrderNumber(text);
    };
    const partyNameHandler = (text) => {
        setPartyName(text);
    };
    const size36QuantityHandler = (text) => {
        setSize36Quantity(text);
    };
    const size38QuantityHandler = (text) => {
        setSize38Quantity(text);
    };
    const size40QuantityHandler = (text) => {
        setSize40Quantity(text);
    };
    const size42QuantityHandler = (text) => {
        setSize42Quantity(text);
    };
    const size44QuantityHandler = (text) => {
        setSize44Quantity(text);
    };
    const size46QuantityHandler = (text) => {
        setSize46Quantity(text);
    };
    const descriptionHandler = (text) => {
        setDescription(text);
    };
    const selectAllHandler = (key) => {
        console.log('inselectall', key);
        console.log(colors[key]);
        setSelectedItems(prev => ({
            ...prev,
            [key]: colors[key]
        }));
    }
    const deselectAllHandler = (key) => {
        setSelectedItems(prev => ({
            ...prev,
            [key]: []
        }));
    }
    const removeSelectedItem = (key, items, id) => {
        const updatedItems = items[key].filter(item => item.id !== id);
        setSelectedItems(prev => ({
            ...prev,
            [key]: updatedItems
        }));
    }
    const addSelectedItem = (key, items, item) => {
        setSelectedItems(prev => ({
            ...prev,
            [key]: [...items[key], item]
        }));
    }
    const onItemClick = (key, item) => {
        item = JSON.stringify(item);
        item = JSON.parse(item);
        console.log(key);
        console.log(selectedItems[key]);
        const filteredItems = selectedItems[key].filter(i => i.id == item.id);
        if (filteredItems && filteredItems.length > 0) {
            filteredItems.forEach(fItem =>
                removeSelectedItem(key, selectedItems, fItem.id));
        } else {
            addSelectedItem(key, selectedItems, item);
        }
    }
    const toggleModal = (index) => {
        setModalVisible(prev => {
            let newModalVisible = [...prev];
            newModalVisible[index] = !prev[index];
            return newModalVisible;
        });
    }
    const modalCloseHandler = (index) => {
        toggleModal(index);
        if (index == 0) {

        }
    }
    const modalApplyHandler = (index) => {
        toggleModal(index);
        if (index == 0) {
            setColors(prev => {
                let newColors = { ...prev };
                newColors['36'] = selectedItems['global'];
                newColors['38'] = selectedItems['global'];
                newColors['40'] = selectedItems['global'];
                newColors['42'] = selectedItems['global'];
                newColors['44'] = selectedItems['global'];
                newColors['46'] = selectedItems['global'];
                return newColors;
            });
            setSelectedItems(
                prev => {
                    let newColors = { ...prev };
                    newColors['36'] = selectedItems['global'];
                    newColors['38'] = selectedItems['global'];
                    newColors['40'] = selectedItems['global'];
                    newColors['42'] = selectedItems['global'];
                    newColors['44'] = selectedItems['global'];
                    newColors['46'] = selectedItems['global'];
                    return newColors;
                });
        }
    }

    async function populateColors() {
        let cols = await ColorService.getColors();
        const colors = {
            'global': cols,
            '36': [],
            '38': [],
            '40': [],
            '42': [],
            '44': [],
            '46': []
        };
        const selectedColors = {
            'global': [],
            '36': [],
            '38': [],
            '40': [],
            '42': [],
            '44': [],
            '46': []
        };
        setSelectedItems(selectedColors);
        setColors(colors);
    }

    useEffect(() => {
        populateColors();
    }, []);
    return (
        <ScrollView bounces={false} contentContainerStyle={styles.contentContainer}>

            <View>
                <Text >Order #</Text>
                <TextInput keyboardType='default' placeholder='Enter Order number' onChangeText={orderNumberHandler} />
            </View>
            <View>
                <Text >Party Name</Text>
                <TextInput keyboardType='default' placeholder='Enter Party Name' onChangeText={partyNameHandler} />
            </View>
            <View>
                <IconButton title="Select Colors" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 0)}></IconButton>
                <CustomModal
                    selector='global'
                    onPressClose={modalCloseHandler.bind(this, 0)}
                    onPressApply={modalApplyHandler.bind(this, 0)}
                    modalVisible={modalVisible[0]}
                    title='Select Colors'
                    data={colors['global']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['global']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}

                />
            </View>
            <View>
                <View>
                    <Text>Size 36</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 36' onChangeText={size36QuantityHandler} />
                </View>
                <IconButton title="Select Colors for Size 36" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 1)}></IconButton>
                <CustomModal
                    selector='36'
                    onPressClose={modalCloseHandler.bind(this, 1)}
                    onPressApply={modalApplyHandler.bind(this, 1)}
                    modalVisible={modalVisible[1]}
                    title='Select Colors for Size 36'
                    data={colors['36']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['36']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>

            <View>
                <View>
                    <Text >Size 38</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 38' onChangeText={size38QuantityHandler} />
                </View>
                <IconButton title="Select Colors for Size 38" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 2)}></IconButton>
                <CustomModal
                    selector='38'
                    onPressClose={modalCloseHandler.bind(this, 2)}
                    onPressApply={modalApplyHandler.bind(this, 2)}
                    modalVisible={modalVisible[2]}
                    title='Select Colors for Size 38'
                    data={colors['36']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['38']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>
            <View>
                <View>
                    <Text >Size 40</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 40' onChangeText={size40QuantityHandler} />
                </View>
                <IconButton title="Select Colors for Size 40" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 3)}></IconButton>
                <CustomModal
                    selector='40'
                    onPressClose={modalCloseHandler.bind(this, 3)}
                    onPressApply={modalApplyHandler.bind(this, 3)}
                    modalVisible={modalVisible[3]}
                    title='Select Colors for Size 40'
                    data={colors['40']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['40']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>
            <View>
                <View>
                    <Text >Size 42</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 42' onChangeText={size42QuantityHandler} />
                </View>

                <IconButton title="Select Colors for Size 42" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 4)}></IconButton>
                <CustomModal
                    selector='42'
                    onPressClose={modalCloseHandler.bind(this, 4)}
                    onPressApply={modalApplyHandler.bind(this, 4)}
                    modalVisible={modalVisible[4]}
                    title='Select Colors for Size 42'
                    data={colors['42']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['42']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>
            <View>
                <View>
                    <Text >Size 44</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 44' onChangeText={size44QuantityHandler} />
                </View>
                <IconButton title="Select Colors for Size 44" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 5)}></IconButton>
                <CustomModal
                    selector='44'
                    onPressClose={modalCloseHandler.bind(this, 5)}
                    onPressApply={modalApplyHandler.bind(this, 5)}
                    modalVisible={modalVisible[5]}
                    title='Select Colors for Size 44'
                    data={colors['44']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['44']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>
            <View>
                <View>
                    <Text >Size 46</Text>
                    <TextInput keyboardType='numeric' placeholder='Enter quantity for size 46' onChangeText={size46QuantityHandler} />
                </View>
                <IconButton title="Select Colors for Size 46" style={styles.icon} textColor='black' icon="fa-square-check" onPress={modalCloseHandler.bind(this, 6)}></IconButton>
                <CustomModal
                    selector='46'
                    onPressClose={modalCloseHandler.bind(this, 6)}
                    onPressApply={modalApplyHandler.bind(this, 6)}
                    modalVisible={modalVisible[6]}
                    title='Select Colors for Size 46'
                    data={colors['46']}
                    onItemClick={onItemClick}
                    selectedItems={selectedItems['46']}
                    selectAllHandler={selectAllHandler}
                    deselectAllHandler={deselectAllHandler}
                    populateColors={populateColors}
                />
            </View>
            <View>
                <View>
                    <Text >Size 42</Text>
                    <TextInput keyboardType='default' multiline={true} placeholder='Remarks/Description for this order' onChangeText={descriptionHandler} />
                </View>

            </View>

            <View style={styles.footer}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={props.onCancel}
                >
                    <Text style={styles.textClose}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonApply]}
                    onPress={onSaveOrderHandler}
                >
                    <Text style={styles.textApply}>Save</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
    },
    container: {
        flexGrow: 1,
        height: '100%'
    },
    contentContainer: {

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    footer: {
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
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
})

export default OrderForm;