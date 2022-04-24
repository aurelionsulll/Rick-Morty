import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

export default function Character({ character }) {
	return (
		<View style={tw`mt-4 ml-6 `}>
			<Image style={tw`h-50 w-50 rounded-2xl`} source={{ uri: character.image }} />

			<View style={tw`flex-row absolute items-center bg-black/40 w-full justify-end rounded-t-2xl`}>
				<View
					style={tw`${
						character.status == 'unknown' ? 'bg-gray-500' : character.status == 'Alive' ? 'bg-green-500' : 'bg-red-500'
					} w-3 h-3  rounded-full`}
				/>
				<Text style={tw`text-gray-200 font-bold py-3 mr-3 ml-2`}>{character.status}</Text>
			</View>

			<Text style={tw`text-gray-800 font-bold  text-lg mt-2 w-50 `}>{character.name}</Text>
		</View>
	);
}
