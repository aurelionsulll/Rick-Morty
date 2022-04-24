import { Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/Character';

export default function Home({ navigation }) {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character')
			.then(function (response) {
				setCharacters(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<SafeAreaView style={tw`bg-emerald-500 h-full`}>
			<TextInput placeholder='Search by character name' style={tw`bg-white py-4 px-5 mx-8 my-6 rounded-md `} />
			<Text style={tw`mx-6 text-2xl font-bold mt-8 mb-3 text-gray-800`}>Popular characters</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style={tw`flex-row justify-center `}>
					{characters.map((character) => (
						<Character key={character.id} character={character} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
