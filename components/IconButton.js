import { Pressable, View, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "../constants/Colors";

const IconButton = ({ onPress, icon, style, title, textColor }) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress}
                style={
                    [(({ pressed }) => pressed && styles.pressed), styles.icon]}>
                <FontAwesomeIcon icon={icon} color={Colors.accent}></FontAwesomeIcon>
                <Text style={[styles.text, { color: textColor }]}>{title}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    text: {
        flexWrap: 'wrap',
        marginLeft: '10%'
    }
})

export default IconButton;