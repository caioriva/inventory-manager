import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import GenerateCodesScreen from "./src/screens/GenerateCodesScreen";
import ScanCodesScreen from "./src/screens/ScanCodesScreen";
import HomeScreen from "./src/screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  GenerateCodes: undefined;
  ScanCodes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inventário' }} />
          <Stack.Screen name="GenerateCodes" component={GenerateCodesScreen} options={{ title: 'Gerar Códigos' }} />
          <Stack.Screen name="ScanCodes" component={ScanCodesScreen} options={{ title: 'Escanear Códigos' }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
