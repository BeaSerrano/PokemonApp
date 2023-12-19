import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigate = () => {

    const {numero} = useContext(PokemonContext)

    return (
        <>
			<header className='container'>
                {/* onSubmit={onSearchSubmit} */}
				<form>
					<div className='form-group'>
						<input
							type='search'
							name='valueSearch'
							id=''
							/* value={valueSearch}
							onChange={onInputChange} */
							placeholder='Filtrar pokemons por nombre...'
						/>
					</div>

					{/* <button className='btn-search'>Buscar</button> */}
				</form>
			</header>

			<Outlet />
		</>
    )
}