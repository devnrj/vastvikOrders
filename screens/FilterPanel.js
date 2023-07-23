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
                        placeholder='Search by order id'
                        onChangeText={searchTextHandler}
                    />
                </View>
                <View style={styles.actionItems}>
                    <Pressable style={styles.button}>
                        <View style={styles.icon}>
                            <FontAwesomeIcon icon="filter" color={Colors.accent}></FontAwesomeIcon>
                        </View>
                        <Text style={styles.font}>Filter</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
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
        borderWidth: 1,
        borderCurve: 'circular',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    panel: {
        marginLeft: 10,
        height: 200,
        justifyContent: 'space-evenly'
    },
    actionItems: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderWidth: 1,
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