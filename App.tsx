import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import HomeScreen from './src/components/Home';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
