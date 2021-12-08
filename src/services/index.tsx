import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokeResult } from '../interfaces';

const pokemonUrlApi: string = 'https://pokeapi.co/api/v2/pokemon/';

export const PokemonService = {
    getPokemons: () => {
        return axios.get<PokeResult>(pokemonUrlApi)
    }
}



