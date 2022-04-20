import tw from 'twrnc';
import { Text, View } from 'react-native';
export default function Home() {
	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<Text style={tw`text-lg font-bold text-green-400`}>Gate</Text>
		</View>
	);
}
