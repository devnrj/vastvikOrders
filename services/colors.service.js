import http from "../util/http";
import Color from "../models/color";
import uuid from 'react-native-uuid';

const ColorService = {
    addColor: async (data) => {
        if (data) {
            const dataToBeSaved = new Color(uuid.v1(), data);
            let res = await http.post('colors.json', dataToBeSaved);
            if (res) {
                return true;
            }
        }
        return false;
    },
    getColors: async () => {
        let res = await http.get('colors.json', '');
        if (res) {
            let colors = [];
            try {
                let x = res.data;
                x = JSON.stringify(x);
                colors = Object.values(JSON.parse(x));
            } catch (error) {
                console.error(error);
            }
            return colors;
        }
    }
}

module.exports = ColorService;