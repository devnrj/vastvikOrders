import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
const Header = props => {
    return (
        <View style={{ ...styles.screen, ...props.style }}>
            <FontAwesomeIcon icon="clipboard-list" color={Colors.accent} size={25}></FontAwesomeIcon>
            <Text style={styles.font}>{props.title}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        width: '100%',
        height: '10%'
    },
    font: {
        fontFamily: Fonts.family,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Header;