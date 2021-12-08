import React, { useEffect } from 'react';
import { PokemonService } from './services';


const App: React.FC = () => {

    useEffect(() => {
        
        const init = async () => {
            const response = await PokemonService.getPokemons();
            console.log(response.data.results);
        }
        init();

    }, [])

    return (
        <>
        </>
    )

}

export default App;
