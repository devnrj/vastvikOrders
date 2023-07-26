import React from "react";
import { Text, Pressable, StyleSheet, View } from 'react-native';
const OrderCard = (props) => {
    return (
        <Pressable style={styles.card}
            android_ripple={{ color: '#ccc' }}
            onPress={props.onPress}>
            <Text>{props.data.item.id}</Text>
            <Text>date</Text>
            <Text>{props.data.item.partyName}</Text>
            <View style="line"></View>
            <Text>{props.data.item.s36}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        width: '95%',
        height: '50',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0)',
        elevation: 5,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: '2%'
    }
})
export default OrderCard;