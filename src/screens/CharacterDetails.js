import { Text, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import tw from 'twrnc';

function CharacterDetails({
	route: {
		params: { character },
	},
}) {
	return (
		<SafeAreaView style={tw`bg-emerald-500 h-full `}>
			<Text style={tw`mt-10 text-center text-gray-800 text-3xl font-bold `}>{character.name}</Text>
		</SafeAreaView>
	);
}

export default CharacterDetails;
