import { Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import Locations from '../components/Locations';

export default function Home({ navigation }) {
	const [characters, setCharacters] = useState([]);
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character')
			.then(function (response) {
				setCharacters(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get('https://rickandmortyapi.com/api/location')
			.then(function (response) {
				setLocations(response.data.results.slice(0, -11));
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<SafeAreaView style={tw`bg-emerald-500 h-full`}>
			<ScrollView>
				<TextInput placeholder='Search by character name' style={tw`bg-white py-4 px-5 mx-8 my-6 rounded-md `} />
				<View style={tw`flex-row items-center mb-3 mt-8 mx-6 justify-between`}>
					<Text style={tw` text-2xl font-bold text-emerald-800`}>Featured characters</Text>
					<Text style={tw` font-bold text-white underline`}>View more</Text>
				</View>

				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={tw`flex-row justify-center `}>
						{characters.map((character) => (
							<Character key={character.id} character={character} />
						))}
					</View>
				</ScrollView>

				<View style={tw`flex-row items-center mb-3 mt-2 mx-6 justify-between`}>
					<Text style={tw` text-2xl font-bold text-emerald-900`}>Locations</Text>
					<Text style={tw` font-bold text-white underline`}>View more</Text>
				</View>

				<View style={tw`flex-row flex-wrap justify-center`}>
					{locations.map((location) => (
						<Locations key={location.id} location={location} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
