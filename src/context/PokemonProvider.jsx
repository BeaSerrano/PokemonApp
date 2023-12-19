import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [globalPokemons, setGlobalPokemons] = useState([]);
	const [evolutionPokemons, setEvolutionPokemons] = useState([]);
	const [offset, setOffset] = useState(0);

	// Utilizar CustomHook - useForm
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

	// Estados para la aplicación simples
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

    // lLamar 50 pokemones a la API
	const getAllPokemons = async (limit = 30) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setAllPokemons([...allPokemons, ...results]);
		setLoading(false);
	};

	// Llamar todos los pokemones
	const getGlobalPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=100000&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setGlobalPokemons(results);
		setLoading(false);
	};

	// Llamar a un pokemon por ID
	const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

			/* // evolution from pokemons
			const getEvolutionPokemons = async (id) => {
				const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/${id}';

				const res = await (`${baseURL}pokemon-species/${id}`);
				const data = await res.json();

				const promises = data.results.map(async pokemonEv => {
					const res = await fetch(pokemonEv.url);
					const data = await res.json();
					return data;
				});
				const results = await Promise.all(promises);

				setEvolutionPokemons([...allPokemons, ...results]);
				setLoading(false);
			}; */

			// evolucion pokemons
			const getEvolutionPokemons = async (id) => {
				const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/';

				const res = await fetch(`${baseURL}${id}`);
				const data = await res.json();


				const evolutionChainURL = data.evolution_chain.url;

				const evolutionChainRes = await fetch(evolutionChainURL);
				const evolutionChainData = await evolutionChainRes.json();

				console.log(evolutionChainData);

				// acceso evolucion
				const firstPokemonURL = evolutionChainData.chain.species.url;
				const firstPokemonRes = await fetch(firstPokemonURL);
				const firstPokemonData = await firstPokemonRes.json();

				setEvolutionPokemons([...allPokemons, ...results]);
				setLoading(false);
			};


    useEffect(() => {
		getAllPokemons();
	}, [offset]);

	useEffect(() => {
		getGlobalPokemons();
	}, []);

    // BTN CARGAR MÁS
	const onClickLoadMore = () => {
		setOffset(offset + 30);
	};

    return (
		<PokemonContext.Provider
		value={{
			valueSearch,
			onInputChange,
			onResetForm,
			allPokemons,
			globalPokemons,
			getPokemonByID,
			onClickLoadMore,
			// Loader
			loading,
			setLoading,
			evolutionPokemons, // Asegúrate de incluir la información de evolución en el contexto
		  }}
		>
			{children}
		</PokemonContext.Provider>
	);
};