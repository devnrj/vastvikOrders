import { React, useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Orders from '../components/Orders';
import FilterPanel from '../components/FilterPanel';
import IconButton from "../components/IconButton";
import Colors from '../constants/Colors';


const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const getSearchText = (text) => {
        setSearchText(text);
        console.log(text);
    }
    const headerButtonPressedHandler = () => {
        navigation.navigate("AddOrder");
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
                <FilterPanel onSearchTextInput={getSearchText}></FilterPanel>
            </View>
            <View style={styles.orders}>
                <Orders navigation={{ ...navigation }}></Orders>
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