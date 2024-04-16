import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Components/Header';
import Form from './src/Components/Form';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
});
