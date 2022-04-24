import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

export default function Character({ character }) {
	return (
		<View style={tw`my-4 ml-6 `}>
			<Image style={tw`h-50 w-50 rounded-3xl`} source={{ uri: character.image }} />
			<Text style={tw`text-gray-800 font-bold  text-lg mt-2 w-50 `}>{character.name}</Text>
		</View>
	);
}
