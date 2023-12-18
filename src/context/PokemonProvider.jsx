import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({children}) => {

    //estados llamada pokemons
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    //estado formulario
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch:''
    })

    //estados carga
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    //50 - lista pokemons
    const getAllPokemons = async(limit=50) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`{baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemons(results);
        setLoading(false)
    }

    //GLOBAL - llamar a todos los pokemons (para búsqueda)
    const getGlobalPokemons = async() => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`{baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        //combinación de pokemons cargados y resultados
        setGlobalPokemons([...allPokemons,...results
        ]);
        setLoading(false)
    }

    //ÚNICO - llamar pokemon por id
    const getPokemonByID = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`{baseURL}pokemon?${id}`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemons(results)
    }


    useEffect(() => {
        getAllPokemons()
    }, []);

    useEffect(() => {
        setGlobalPokemons()
    }, []);

    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID
        }}>
            {children}
        </PokemonContext.Provider>
    );
};