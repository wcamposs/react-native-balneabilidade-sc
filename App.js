// libraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './src/routes/TabNavigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </>
  );
}

