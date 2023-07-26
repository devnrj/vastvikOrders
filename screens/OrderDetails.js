import { React, useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native";
import IconButton from "../components/IconButton";

const OrderDetails = ({ route, navigation }) => {
    const order = route.params.item;
    const headerButtonPressedHandler = () => {
        console.log(order);
        navigation.navigate("EditOrder", order);
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: order.id,
            headerRight: () => {
                return <IconButton title="Edit" style={styles.headerRight} icon="pen-to-square" onPress={headerButtonPressedHandler}></IconButton>
            }
        });
    }, [order.id, navigation, headerButtonPressedHandler]);

    return (
        <Text>
            print {order.id}
        </Text>
    )
}

const styles = StyleSheet.create({
});

export default OrderDetails;