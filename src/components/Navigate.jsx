import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigate = () => {

    const {numero} = useContext(PokemonContext)

    return (
        <>
			<header className='container'>
				<Link to='/' className='logo'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'
						alt='Logo Pokemon'
					/>
				</Link>
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

					<button className='btn-search'>Buscar</button>
				</form>
			</header>

			<Outlet />
		</>
    )
}