import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Navigate } from "./components/Navigate";
import { Home, PokemonDetail, PokemonSearch } from "./pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate />}>
                <Route index element={<Home />} />
                <Route path='pokemon/:id' element={<PokemonDetail />} />
                <Route path='search' element={<PokemonSearch />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}