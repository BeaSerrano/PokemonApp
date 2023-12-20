import React, { useContext } from 'react';
import { PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const Home = () => {

    const {onClickLoadMore} = useContext(PokemonContext)

	return (
		<>
            <div className="container-one">
                <PokemonList />
            </div>
            <div className="container-btn-load-more container">
                <button className='btn-back-list' onClick={onClickLoadMore}>
                    cargar más
                </button>
            </div>
		</>
	);
};