import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import CharacterDetails from './src/screens/CharacterDetails';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='CharacterDetails' component={CharacterDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
