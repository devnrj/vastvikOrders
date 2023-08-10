import React from "react";
import moment from 'moment';
import Fonts from "../constants/Fonts";
import { Text, Pressable, StyleSheet, View } from 'react-native';
const OrderCard = (props) => {
    const getQuantity = () => {
        let res =
            (props.data.item.size36Quantity * props.data.item[36].length) +
            (props.data.item.size38Quantity * props.data.item[38].length) +
            (props.data.item.size40Quantity * props.data.item[40].length) +
            (props.data.item.size42Quantity * props.data.item[42].length) +
            (props.data.item.size44Quantity * props.data.item[44].length) +
            (props.data.item.size46Quantity * props.data.item[46].length);
        return res;
    }
    return (
        <Pressable style={styles.card}
            android_ripple={{ color: '#ccc' }}
            onPress={props.onPress}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Text style={styles.label}>Order# </Text>
                    <Text style={styles.data}>{props.data.item.orderNumber}</Text>
                </View>
                <Text style={styles.date}>{moment(props.data.item.date, 'DD-MM-YYYY HH:mm:ss').format('D MMM YYYY, HH:mm:ss')}</Text>
            </View>
            <View style={{ width: '90%', marginHorizontal: '5%' }}>
                <View style={styles.row2}>
                    <Text style={styles.subHeading}>{props.data.item.partyName}</Text>
                </View>
                <View style={styles.row2odd}>
                    <Text style={styles.itemLabel}>Size 36</Text>
                    <Text style={styles.date}>{props.data.item.size36Quantity} set(s) x {props.data.item[36].length} color(s)</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.itemLabel}>Size 38</Text>
                    <Text style={styles.date}>{props.data.item.size38Quantity} set(s) x {props.data.item[38].length} color(s)</Text>
                </View>
                <View style={styles.row2odd}>
                    <Text style={styles.itemLabel}>Size 40</Text>
                    <Text style={styles.date}>{props.data.item.size40Quantity} set(s) x {props.data.item[40].length} color(s)</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.itemLabel}>Size 42</Text>
                    <Text style={styles.date}>{props.data.item.size42Quantity} set(s) x {props.data.item[42].length} color(s)</Text>
                </View>
                <View style={styles.row2odd}>
                    <Text style={styles.itemLabel}>Size 44</Text>
                    <Text style={styles.date}>{props.data.item.size44Quantity} set(s) x {props.data.item[44].length} color(s)</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.itemLabel}>Size 46</Text>
                    <Text style={styles.date}>{props.data.item.size46Quantity} set(s) x {props.data.item[46].length} color(s)</Text>
                </View>
                <View style={styles.row2odd}>
                    <Text style={styles.itemLabel}>Total Quantity</Text>
                    <Text style={styles.date}>{getQuantity()} items</Text>
                </View>
                <Text></Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '50',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0)',
        elevation: 5,
        padding: 10,
        marginVertical: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#eeeeee',
        paddingVertical: 5,
        borderRadius: 5,
    },
    row2odd: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        fontSize: Fonts.heading
    },
    data: {
        fontSize: Fonts.heading
    },
    date: {
        fontSize: 16
    },
    itemLabel: {
        fontWeight: 'bold',
        fontSize: 18
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: Fonts.subHeading
    }
})
export default OrderCard;