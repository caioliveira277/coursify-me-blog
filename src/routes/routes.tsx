import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/home';
import Article from '../pages/article/article';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
