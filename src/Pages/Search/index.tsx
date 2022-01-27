import React from "react";
import Navbar from "../../componentes/Navbar";
import { InputSearch } from "./style";

const Search: React.FC = () => {

    return (
        <>
        <Navbar />
        <InputSearch placeholder="Procure por pokémons" type="text"/>   
        <h1>Search Page</h1>
        </>
    );
}

export default Search;