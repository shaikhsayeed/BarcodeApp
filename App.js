import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './components/Routes';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    
  },
});
