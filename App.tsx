/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/comps/Header'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.appContainer} >
        <Text style={styles.baseText}>Asdadasa</Text>
        <Button title="Yooooo" onPress={() => Alert.alert('Yoo wtf')}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flex: 1.
  },
  sectionContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  baseText: {
    color: '#ffffff',
  },
  Header: {
    flex: 1,
  }
});

export default App;
