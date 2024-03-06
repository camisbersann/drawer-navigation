import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Contact from './src/screens/Contact';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>

    <StatusBar style= "auto"/>
    </NavigationContainer>
  );
}

