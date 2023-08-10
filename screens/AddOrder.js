import React from 'react';
import OrderForm from '../components/OrderForm';
import uuid from 'react-native-uuid';
import OrderService from '../services/orders.service';
import moment from 'moment';

const AddOrder = ({ navigation, route }) => {
    const params = route.params;

    const saveOrderHandler = async (order) => {
        console.log('saveOrderHandler');

        const orderData = { ...order };
        orderData['date'] = moment().format('DD-MM-YYYY HH:mm:ss');
        orderData['id'] = uuid.v1();
        console.log(orderData);

        await OrderService.addOrder(orderData);
        params.populateOrders();
        navigation.goBack();
    }
    const cancelOrderHandler = () => {
        console.log('cancelOrderHandler')
        navigation.goBack();
    }
    return (

        <OrderForm onSave={saveOrderHandler} onCancel={cancelOrderHandler}></OrderForm>

    )
}

export default AddOrder;