import { React, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from './constants/Colors';
import Fonts from './constants/Fonts';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import OrderDetails from './screens/OrderDetails';
import AddOrder from './screens/AddOrder';
import EditOrder from './screens/EditOrder';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator(); 

export default function App() {

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: Fonts.family,
            fontSize: 22,
            fontWeight: 'bold'
          },
          contentStyle: {
            backgroundColor: Colors.background
          }
        }}>
          <Stack.Screen name="ORDERS" component={Home}
            options={
              {
                title: 'VASTAVIK ORDERS'
              }
            }
          />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="AddOrder" component={AddOrder} />
          <Stack.Screen name="EditOrder" component={EditOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
