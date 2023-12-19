import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonCard = ({pokemon}) => {
    /* const evolutionInfo = pokemon.evolution_info; */
    return (
        <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">

            <div className='card-img'>
				<div>
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={`Pokemon ${pokemon.name}`}
                    />
                </div>
                <div className="position-id">
                    <span className='pokemon-id'>ID / {pokemon.id}</span>
                </div>
                
			</div>
			<div className='card-info'>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className="typeRounded">
							{type.type.name}
						</span>
					))}
				</div>
                
                    {/* <div className="card-types">
                    {evolutionInfo && evolutionInfo.evolves_from_species && (
                        <span>Evolución de: {evolutionInfo.evolves_from_species}</span>
                         )}
                    </div> */}
                
			</div>

        </Link>
    )
}