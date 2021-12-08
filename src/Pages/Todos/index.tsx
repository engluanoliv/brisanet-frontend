import React, { useState, useEffect } from "react";
import { PokemonService } from "../../services";
import Navbar from "../../componentes/Navbar";
import { IData } from "../../interfaces";

const Todos: React.FC = () => {
    
    const [data, setData] = useState<IData[]>();

    useEffect(() => {

        const init = async () => {
            
            const response = await PokemonService.getPokemons();
            setData(response.data.results);

        }
        init();

    }, [])
    
    console.log(data);


    return (
        <Navbar />
    );
}



export default Todos;