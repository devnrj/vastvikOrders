import React from 'react';
import OrderForm from '../components/OrderForm';
import uuid from 'react-native-uuid';
import OrderService from '../services/orders.service';

const AddOrder = (navigation) => {
    const saveOrderHandler = async (order) => {
        console.log('saveOrderHandler');

        const orderData = { ...order };
        orderData['date'] = Date.now();
        orderData['id'] = uuid.v1();
        console.log(orderData);

        await OrderService.addOrder(orderData);

        navigation.navigation.goBack();
    }
    const cancelOrderHandler = () => {
        console.log('cancelOrderHandler')
        navigation.navigation.goBack();
    }
    return (

        <OrderForm onSave={saveOrderHandler} onCancel={cancelOrderHandler}></OrderForm>

    )
}

export default AddOrder;