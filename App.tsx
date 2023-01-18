import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomePage from './src/pages/home-page';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safearea}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
});

export default App;
