import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

function Episode({ episode }) {
	return (
		<View style={tw`w-35 h-20 bg-green-600 mx-2 rounded-lg shadow-md`}>
			<Text style={tw`text-lg mx-2 mt-1 font-semibold text-gray-200`}>{episode.name}</Text>
			<Text
				style={[
					tw`text-2xl mx-2 mt-1 font-bold text-black/30 top-8 left-0 right-0 absolute`,
					{
						transform: [{ rotateZ: '45deg' }],
					},
				]}
			>
				{episode.episode}
			</Text>
		</View>
	);
}

export default Episode;
