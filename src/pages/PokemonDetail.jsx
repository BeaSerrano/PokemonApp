import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const PokemonDetail = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);

	return (
		<main className='container main-pokemon'>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{pokemon.name}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
							</div>
						</div>
					</div>

					
				</>
			)}
		</main>
	);
};