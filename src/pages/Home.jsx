import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import Skeletons from '../components/Skeleton';

function Home() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		const endpoints = [];

		for (var i = 1; i < 30; i++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
		}

		axios
			.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => setPokemons(res))
			.catch((err) => console.log(err));
	};

	const pokemonFilter = (name) => {
		var filteredPokemons = [];
		if (name === '') {
			getPokemons();
		}
		console.log(name);

		for (var i in pokemons) {
			if (pokemons[i].data.name.includes(name)) {
				filteredPokemons.push(pokemons[i]);
			}
		}
		setPokemons(filteredPokemons);
	};

	return (
		<div>
			<NavBar pokemonFilter={pokemonFilter} />
			<Container maxWidth="lg" style={{ marginBottom: '2em' }}>
				<Grid container spacing={{ xs: 2, md: 3 }} justifyContent={'center'}>
					{pokemons.length === 0 ? (
						<Skeletons />
					) : (
						pokemons.map((pokemon, key) => (
							<Grid item key={key}>
								<PokemonCard
									name={pokemon.data.name}
									image={pokemon.data.sprites.front_default}
									types={pokemon.data.types}
								/>
							</Grid>
						))
					)}
				</Grid>
			</Container>
		</div>
	);
}

export default Home;
