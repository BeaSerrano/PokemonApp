import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonCard } from './PokemonCard';
import { Loader } from './Loader';

export const PokemonList = () => {

    const {allPokemons} = useContext(PokemonContext)

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </>
    )
}