import { View, Text } from 'react-native';
import tw from 'twrnc';

function Location({ location }) {
	return (
		<View style={tw`bg-green-900/20 m-2 w-25 h-25 flex items-center justify-center rounded-full border-2 border-white `}>
			<Text style={tw`text-white font-bold  p-2`}>{location.name}</Text>
		</View>
	);
}

export default Location;
