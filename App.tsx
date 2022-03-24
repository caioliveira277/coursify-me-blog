/* eslint-disable react/style-prop-object */
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes/routes';
import { Navbar } from './src/components';
import { theme } from './src/theme/default';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return appIsReady ? (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={theme.colors.white}
        animated
      />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  ) : null;
}
