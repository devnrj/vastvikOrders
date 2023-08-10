import { React, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const FilterPanel = props => {

    const searchTextHandler = text => {
        props.onSearchTextInput(text);
    }
    return (
        <View style={{ ...styles.screen, ...props.style }}>
            <View style={styles.panel}>
                <View style={styles.input}>
                    <View style={styles.icon}>
                        <FontAwesomeIcon icon="magnifying-glass" color={Colors.accent}></FontAwesomeIcon>
                    </View>
                    <TextInput
                        placeholder='Search by order number...'
                        onChangeText={searchTextHandler}
                    />
                </View>
                <View style={styles.actionItems}>
                    <Pressable style={styles.button}
                        android_ripple={{ color: '#ccc' }}>
                        <View style={styles.icon}>
                            <FontAwesomeIcon icon="filter" color={Colors.accent}></FontAwesomeIcon>
                        </View>
                        <Text style={styles.font}>Filter</Text>
                    </Pressable>
                    <Pressable style={styles.button}
                        android_ripple={{ color: '#ccc' }}
                        onPress={props.onSortOrders}>
                        <View style={styles.icon}>
                            <FontAwesomeIcon icon="sort" color={Colors.accent}></FontAwesomeIcon>
                        </View>

                        <Text style={styles.font}>Sort</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        width: '100%',
        alignItems: 'center'
    },
    icon: {
        padding: 10
    },
    input: {
        borderWidth: 0.7,
        elevation: 3,
        borderCurve: 'circular',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#cfcfcf',
        padding: 10,
        flexDirection: 'row',
    },
    panel: {
        height: 200,
        justifyContent: 'space-evenly'
    },
    actionItems: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderWidth: 0.7,
        elevation: 3,
        borderColor: '#cfcfcf',
        backgroundColor: 'white',
        width: '45%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    font: {
        fontSize: 16,
        color: Fonts.secondaryColor
    }
});

export default FilterPanel;