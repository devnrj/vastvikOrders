import { React, useState, useLayoutEffect, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Orders from '../components/Orders';
import FilterPanel from '../components/FilterPanel';
import IconButton from "../components/IconButton";
import Colors from '../constants/Colors';
import OrderService from '../services/orders.service';
import moment from 'moment';

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [orders, setOrders] = useState([]);
    const [sortingOrder, setSortingOrder] = useState(true);
    useEffect(() => {
        populateOrders();
    }, []);
    const populateOrders = async () => {
        let orders = await OrderService.getOrders();
        sortOrders(orders, false);
        setOrders(orders);
    }
    const sortOrders = (orders, sortingOrder) => {
        orders.sort((a, b) => {
            const time1 = moment(a.date, 'DD-MM-YYYY HH:mm:ss').unix();
            const time2 = moment(b.date, 'DD-MM-YYYY HH:mm:ss').unix();
            const res = sortingOrder ? time1 - time2 : time2 - time1;
            return res;
        });
        return orders;
    }
    const sortOrdersHandler = () => {
        setSortingOrder(!sortingOrder);
        const newOrders = [...orders];
        //newOrders.sort((a, b) => sortingOrder ? (+a['orderNumber'] - (+b['orderNumber'])) : (+b['orderNumber'] - (+a['orderNumber'])));
        sortOrders(newOrders, sortingOrder);
        setOrders(newOrders);
    }
    const getSearchText = (text) => {
        setSearchText(text);
    }
    const headerButtonPressedHandler = () => {
        navigation.navigate("AddOrder", { populateOrders });
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton title='Add' textColor='white' style={styles.headerRight} icon="plus" onPress={headerButtonPressedHandler}></IconButton>
            }
        });
    }, [navigation, headerButtonPressedHandler]);
    return (
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={styles.filterPanel}>
                <FilterPanel onSearchTextInput={getSearchText} onSortOrders={sortOrdersHandler}></FilterPanel>
            </View>
            <View style={styles.orders}>
                <Orders data={orders} navigation={{ ...navigation }}></Orders>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    filterPanel: {
        height: '30%'
    },
    orders: {
        height: '70%'
    },
    screen: {
        flex: 1,
    }
});

export default Home;