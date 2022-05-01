import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
} from 'react-native';

import Home from './src/screens/Home';
import {ThemeProvider} from 'styled-components';
import themes from './src/theme';

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || themes.light;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}
