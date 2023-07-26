import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ORDERS } from "../data/dummyData";
import OrderCard from "./OrderCard";

const Orders = (navigation) => {
    const renderOrder = (order) => {
        const PressHandler = () => {
            navigation.navigation.navigate("OrderDetails", { ...order });
        }
        return (
            <View styles={styles.list}>
                <OrderCard data={{ ...order }} onPress={PressHandler}></OrderCard>
            </View>
        )
    }
    return (

        <FlatList
            data={ORDERS}
            keyExtractor={(item) => item.id}
            renderItem={renderOrder}
            numColumns={1}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        alignItems: 'center'
    },
    line: {
        height: 10,
        width: '100%',
        borderColor: 'black',
        backgroundColor: 'black'
    }
});

export default Orders;