import React from 'react'
import { PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const Home = () => {
    return (
        <div className="container-one">
            <PokemonList />
        </div>
    )
}