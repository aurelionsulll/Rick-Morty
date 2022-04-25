import { Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import Location from '../components/Location';
import Episode from '../components/Episode';
import { Icon } from 'react-native-elements';

export default function Home({ navigation }) {
	const [characters, setCharacters] = useState([]);
	const [locations, setLocations] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState('');
	const [refreshing, setRefreshing] = React.useState(false);
	const [random, setRandom] = useState(1);
	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	const onRefresh = React.useCallback(() => {
		var rand = Math.floor(Math.random() * (1 - 42 + 1)) + 42;
		setRefreshing(true);
		setRandom(rand);
		console.log(random);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/?page=${random}`)
			.then(function (response) {
				var data = [];
				if (search == '') {
					data = response.data.results;
				} else {
					data = response.data.results.filter((data) => {
						return data.name.toLowerCase().match(search.toLowerCase());
					});
				}
				setFilteredData(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [search, random]);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/location')
			.then(function (response) {
				setLocations(response.data.results.slice(0, -11));
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get('https://rickandmortyapi.com/api/episode')
			.then(function (response) {
				setEpisodes(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<SafeAreaView style={tw`bg-emerald-500 h-full `}>
			<ScrollView stickyHeaderIndices={[0]} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				<View>
					<TextInput
						autoComplete='off'
						autoCorrect={false}
						returnKeyType='go'
						autoCapitalize={false}
						placeholder='Search by character name'
						defaultValue={search}
						onChangeText={(search) => setSearch(search)}
						style={tw`bg-white py-4 px-5 mx-7 my-6 rounded-xl border border-gray-300 shadow-xl`}
					/>
					<View style={tw`absolute top-9 right-10`}>
						<Icon name='search' />
					</View>
				</View>
				<View style={tw`flex-row items-center mb-3 mt-2 mx-6 justify-between`}>
					<Text style={tw` text-2xl font-bold text-emerald-900`}>Featured characters</Text>
					<Text style={tw` font-bold text-white underline`}>View more</Text>
				</View>

				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={tw`flex-row justify-center min-h-70`}>
						{filteredData.map((character) => (
							<TouchableOpacity
								key={character.id}
								onPress={() => navigation.navigate('CharacterDetails', { character: character })}
							>
								<Character character={character} />
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				<View style={tw`flex-row items-center mb-3 mt-2 mx-6 justify-between`}>
					<Text style={tw` text-2xl font-bold text-emerald-900`}>Locations</Text>
					<Text style={tw` font-bold text-white underline`}>View more</Text>
				</View>

				<View style={tw`flex-row flex-wrap justify-center mb-4`}>
					{locations.map((location) => (
						<Location key={location.id} location={location} />
					))}
				</View>

				<View style={tw`flex-row items-center mb-3 mt-2 mx-6 justify-between`}>
					<Text style={tw` text-2xl font-bold text-emerald-900`}>Episodes</Text>
					<Text style={tw` font-bold text-white underline`}>View more</Text>
				</View>

				<ScrollView style={tw`mb-10`} horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={tw`flex-row mx-4`}>
						{episodes.map((episode) => (
							<Episode key={episode.id} episode={episode} />
						))}
					</View>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}
