import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes/routes';

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
      <Routes />
      <StatusBar />
    </NavigationContainer>
  ) : null;
}
