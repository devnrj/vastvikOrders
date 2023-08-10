import { React, useEffect, useState, useRef } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
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
        props.onSave(orderData);
    }
    const refArray = Array.from({ length: 9 }, () => useRef(null));

    useEffect(() => {
        // Access and modify refs in the array
        focusNextInput(-1);
    }, []);
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
    const focusNextInput = (index) => {
        if (index < refArray.length - 1 && refArray[index + 1].current) {
            refArray[index + 1].current.focus();
        }
    };
    const orderNumberHandler = (text,) => {
        if (text && text.length > 0) {
            setOrderNumber(text);
        }

    };
    const partyNameHandler = (text) => {
        if (text && text.length > 0) {
            setPartyName(text);
        }
    };
    const size36QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize36Quantity(text);
        }
    };
    const size38QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize38Quantity(text);
        }
    };
    const size40QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize40Quantity(text);
        }
    };
    const size42QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize42Quantity(text);
        }
    };
    const size44QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize44Quantity(text);
        }
    };
    const size46QuantityHandler = (text) => {
        if (text && text.length > 0) {
            setSize46Quantity(text);
        }
    };
    const descriptionHandler = (text) => {
        if (text && text.length > 0) {
            setDescription(text);
        }
    };
    const selectAllHandler = (key) => {
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
            <View style={styles.container}>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Order #</Text>
                    <TextInput
                        ref={refArray[0]}
                        style={styles.inputBox}
                        blurOnSubmit={false}
                        keyboardType='default'
                        placeholder='Enter Order number'
                        onChangeText={orderNumberHandler}
                        onSubmitEditing={() => focusNextInput(0)} />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Party Name</Text>
                    <TextInput
                        ref={refArray[1]}
                        style={styles.inputBox}
                        blurOnSubmit={false}
                        keyboardType='default'
                        placeholder='Enter Party Name'
                        onChangeText={partyNameHandler}
                        onSubmitEditing={() => focusNextInput(1)}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Pressable
                        style={styles.colorButton}
                        onPress={modalCloseHandler.bind(this, 0)}
                        android_ripple={{ color: '#ccc' }}
                    >
                        <Text style={styles.colorButton.buttonLabel}>Select Colors</Text>
                    </Pressable>

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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 36</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[2]}
                            style={styles.smallInputBox}
                            blurOnSubmit={false}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 36'
                            onChangeText={size36QuantityHandler}
                            onSubmitEditing={() => focusNextInput(2)}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 1)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 36 </Text>
                        </Pressable>
                    </View>
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

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 38</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[3]}
                            blurOnSubmit={false}
                            style={styles.smallInputBox}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 38'
                            onSubmitEditing={() => focusNextInput(3)}
                            onChangeText={size38QuantityHandler}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 2)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 38</Text>
                        </Pressable>
                    </View>
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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 40</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[4]}
                            style={styles.smallInputBox}
                            blurOnSubmit={false}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 40'
                            onSubmitEditing={() => focusNextInput(4)}
                            onChangeText={size40QuantityHandler}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 3)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 40</Text>
                        </Pressable>
                    </View>
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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 42</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[5]}
                            style={styles.smallInputBox}
                            blurOnSubmit={false}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 42'
                            onSubmitEditing={() => focusNextInput(5)}
                            onChangeText={size42QuantityHandler}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 4)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 42</Text>
                        </Pressable>
                    </View>
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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 44</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[6]}
                            style={styles.smallInputBox}
                            blurOnSubmit={false}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 44'
                            onSubmitEditing={() => focusNextInput(6)}
                            onChangeText={size44QuantityHandler}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 5)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 44</Text>
                        </Pressable>
                    </View>
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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Size 46</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            ref={refArray[7]}
                            style={styles.smallInputBox}
                            blurOnSubmit={false}
                            keyboardType='numeric'
                            placeholder='Enter quantity for size 46'
                            onSubmitEditing={() => focusNextInput(7)}
                            onChangeText={size46QuantityHandler}
                        />
                        <Pressable
                            style={styles.smallColorButton}
                            onPress={modalCloseHandler.bind(this, 6)}
                            android_ripple={{ color: '#ccc' }}
                        >
                            <Text style={styles.smallColorButton.buttonLabel}>Colors      Size 46</Text>
                        </Pressable>
                    </View>
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
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Remarks`</Text>
                    <TextInput
                        ref={refArray[8]}
                        style={[styles.inputBox, { height: 100 }]}
                        maxLength={100}
                        keyboardType='default'
                        multiline
                        numberOfLines={4}
                        placeholder='Remarks/Description for this order'
                        onSubmitEditing={() => focusNextInput(8)}
                        onChangeText={descriptionHandler}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={props.onCancel}>
                    <Text style={styles.textClose}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonApply]}
                    onPress={onSaveOrderHandler}>
                    <Text style={styles.textApply}>Save</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
    },
    inputBox: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#cfcfcf',
        height: 50,
        width: '100%',
        paddingLeft: 15,
        fontSize: 16
    },
    inputRow: {
        width: '90%',
        marginVertical: '2%'
    },
    container: {
        marginTop: '5%',
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'black'
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    smallInputBox: {
        width: '70%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#cfcfcf',
        height: 50,
        paddingLeft: 15,
        fontSize: 16
    },
    smallColorButton: {
        width: '25%',
        height: '90%',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        margin: '2%',
        backgroundColor: Colors.background,
        marginLeft: '5%',
        buttonLabel: {
            marginTop: '5%',
            color: Colors.accent,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    },

    contentContainer: {

    },
    label: {
        color: '#787878',
        marginLeft: '2%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    footer: {
        margin: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    colorButton: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: 'white',
        height: 50,
        buttonLabel: {
            marginTop: '5%',
            color: Colors.accent,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    },
    button: {
        borderRadius: 5,
        padding: 10,
        width: '50%',
        height: '90%',
        elevation: 2,
        margin: '2%',
        alignContent: 'center'
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
        marginTop: '7%'
    },
    textApply: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '7%'
    },
})

export default OrderForm;