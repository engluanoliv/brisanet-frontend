import React, { useState, useEffect } from "react";
// import { PokemonService } from "../../services";
import Navbar from "../../componentes/Navbar";
import PokeAPI from "pokeapi-typescript";
import { IPokeResult } from "../../interfaces";
import Card from '../../componentes/Card'

const Todos: React.FC = () => {

    const [data, setData] = useState<IPokeResult>();

    useEffect(() => {

        const init = async () => {
            // const response = await PokemonService.getPokemons();
            // // console.log(response.data);
            // setData(response.data);

            const completeResourceList = await PokeAPI.Pokemon.listAll();
            setData(completeResourceList);
        }

        init();
        
    }, []);

    console.log(data);

    return (
        <>
            <Navbar />
            <h1>Todos Page</h1>
            <Card />
        </>
    );
}


export default Todos;