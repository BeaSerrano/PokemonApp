import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigate = () => {

    const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext);
	const navigate = useNavigate();

	const onSearchSubmit = (e) => {
		e.preventDefault()
		navigate('/search', {
			state: valueSearch
		});
		onResetForm();
	}

    return (
        <>
			<header className='container'>
				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<input
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Filtrar pokemons por nombre...'
						/>
					</div>
				</form>
			</header>

			<Outlet />
		</>
    )
}