import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import { PokemonService } from "../../services";

const Todos: React.FC = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {

    //     const init = async () => {
    //         const response = await PokemonService.getPokemons();
    //         console.log(response.data.results);
    //     }
    //     init();

    // }, [])
    


    return (
        <Navbar />
    );
}



export default Todos;