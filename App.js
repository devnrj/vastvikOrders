import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import FilterPanel from './screens/FilterPanel';
import Colors from './constants/Colors';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const getSearchText = (text) => {
    setSearchText(text);
    console.log(text);
  }
  return (
    <View style={styles.screen}>
      <Header style={styles.header} title='ORDERS'></Header>
      <FilterPanel style={styles.filterPanel} onSearchTextInput={getSearchText}></FilterPanel>
      <View style={styles.contentPanel}>
        <Text>{searchText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
  },
  filterPanel: {
    height: 200,
    backgroundColor: Colors.background
  },
  contentPanel: {
    height: '65%'
  }
});
