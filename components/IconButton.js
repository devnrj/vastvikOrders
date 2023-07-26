import { Pressable, View, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "../constants/Colors";

const IconButton = ({ onPress, icon, style, title }) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress}
                style={
                    [(({ pressed }) => pressed && styles.pressed), styles.icon]}>
                <FontAwesomeIcon icon={icon} color={Colors.accent}></FontAwesomeIcon>
                <Text style={{ color: 'white' }}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.1
    },
    icon: {
        flexDirection: 'row',
        width: 30,
        justifyContent: 'space-between',
        marginRight: 10
    }
})

export default IconButton;