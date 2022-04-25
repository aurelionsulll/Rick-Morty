import { Text, View, ScrollView, SafeAreaView, TextInput, Image } from 'react-native';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';

function CharacterDetails({
	route: {
		params: { character },
	},
	navigation: { goBack },
}) {
	return (
		<ScrollView style={tw`bg-emerald-100 h-full pb-96`}>
			<View style={tw`h-full`}>
				<View style={tw`min-h-1/2 `}>
					<Image style={tw`h-full w-full rounded-b-3xl`} source={{ uri: character.image }} />
					<View style={tw`flex-row absolute items-center justify-center bottom-5 right-5 bg-white px-4 py-1 rounded-full`}>
						<View
							style={tw`${
								character.status == 'unknown' ? 'bg-gray-500' : character.status == 'Alive' ? 'bg-green-500' : 'bg-red-500'
							} w-4 h-4 rounded-full`}
						/>
						<Text style={tw`text-gray-800 font-light text-lg ml-3 shadow-2xl`}>{character.status}</Text>
					</View>
					<View style={tw`absolute top-12 left-4 bg-white rounded-full p-0.5 shadow-2xl `}>
						<Icon name='chevron-left' color='#000444' size={43} onPress={() => goBack()} />
					</View>
				</View>
				<Text style={tw` text-center mt-2 text-gray-800 text-3xl font-bold `}>{character.name}</Text>
				<View style={tw`mx-8 mt-6 `}>
					<Text style={tw`text-emerald-800 text-2xl font-bold `}>Species : </Text>
					<Text style={tw`text-gray-800 text-lg font-bold mt-1`}>{character.species}</Text>
					<Text style={tw`text-emerald-800 text-2xl font-bold mt-4`}>Gender : </Text>
					<Text style={tw`text-gray-800 text-lg font-bold mt-1`}>{character.gender}</Text>
					<Text style={tw`text-emerald-800 text-2xl font-bold mt-4`}>Origin : </Text>
					<Text style={tw`text-gray-800 text-lg font-bold mt-1`}>{character.origin.name}</Text>
					<Text style={tw`text-emerald-800 text-2xl font-bold mt-4`}>Last known location : </Text>
					<Text style={tw`text-gray-800 text-lg font-bold mt-1`}>{character.location.name}</Text>
				</View>
			</View>
		</ScrollView>
	);
}

export default CharacterDetails;
