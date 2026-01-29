/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
