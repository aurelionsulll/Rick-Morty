import { View, Text } from 'react-native';
import tw from 'twrnc';

function Locations({ location }) {
	return (
		<View style={tw`bg-green-900/20 m-1.5 w-30 h-30 flex items-center justify-center rounded-full border-2 border-white `}>
			<Text style={tw`text-white font-bold p-2`}>{location.name}</Text>
		</View>
	);
}

export default Locations;
