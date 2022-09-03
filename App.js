import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Root from './src/Root';

export default function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
