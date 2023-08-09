import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
const Input = ({ label, textInputConfig }) => {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 10
    },
    label: {
        fontSize: 12,
        marginBottom: 4
    },
    input: {
        color: 'black',
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        height: 100,
        textAlignVertical: 'top'
    }
})
export default Input;