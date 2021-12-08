import React from 'react';
import { ContainerCard, Header, NamePokemon, ContainerImg, ContainerInfo } from './style';

const Card: React.FC = () => {
    return (
        <ContainerCard>
            <Header>Detalhes</Header>
            <NamePokemon>Pikachu</NamePokemon>
            <ContainerImg>
                <h1>im1</h1>
                <h1>im2</h1>
            </ContainerImg>
            <ContainerInfo>
                <h1>m</h1>
                <h1>kg</h1>
            </ContainerInfo>

        </ContainerCard>
    )
}

export default Card;