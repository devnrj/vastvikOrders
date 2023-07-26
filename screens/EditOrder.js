import React from 'react';
import { Text } from 'react-native';

const EditOrder = (route) => {
    const order = route.route.params;

    console.log('Edit', order);
    return (<>
        <Text>EditScreen</Text>
    </>)
}

export default EditOrder;