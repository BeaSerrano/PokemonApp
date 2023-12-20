import React, { useContext } from 'react'
/* import { useLocation } from 'react-router-dom' */
import { PokemonContext } from '../context/PokemonContext'
import { PokemonCard } from '../components';

export const PokemonSearch = () => {

    /* const location = useLocation() */
    /* const {globalPokemons} = useContext(PokemonContext) */
    /* const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase())) */
	const { valueSearch, globalPokemons, filteredPokemons } = useContext(PokemonContext);

    return (
        <div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span> resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
    )
}