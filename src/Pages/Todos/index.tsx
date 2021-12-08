import React, { useState, useEffect } from "react";
import { PokemonService } from "../../services";

const Todos: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const init = async () => {
            const response = await PokemonService.getPokemons();
            console.log(response.data.results);
        }
        init();

    }, [])
    



    return (
        <h1>Todos Page</h1>
    );
}



export default Todos;