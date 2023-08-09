import http from "../util/http";

const OrderService = {
    addOrder: async (data) => {
        if (data) {
            let res = await http.post('orders.json', data);
            if (res) {
                return true;
            }
        }
        return false;
    },
    getOrders: async () => {
        let res = await http.get('orders.json', '');
        if (res) {
            let orders = [];
            try {
                let x = res.data;
                x = JSON.stringify(x);
                orders = Object.values(JSON.parse(x));
            } catch (error) {
                console.error(error);
            }
            return orders;
        }
    }
}

module.exports = OrderService;