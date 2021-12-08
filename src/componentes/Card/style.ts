import React from "react";
import styled from "styled-components";

// , Header, NamePokemon, PokemonImg, Details, Class, Statistics, FooterCard } from './style';

export const ContainerCard: React.FC = styled.div`
    position: absolute;
    width: 378px;
    height: 639px;
    background: #FFFFFF;
    border-radius: 8px;

`
export const Header: React.FC = styled.h1`
    position: absolute;
    width: 253px;
    height: 24px;
    left: 24px;
    top: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
`

export const NamePokemon: React.FC = styled.h1`

    position: absolute;
    width: 330px;
    height: 36px;
    left: 24px;
    top: 75px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

`

export const ContainerImg: React.FC = styled.div`
    display:flex;
    position: absolute;
    left: 24px;
    top: 124px;
`

export const ContainerInfo: React.FC = styled.div`
    display: flex;
    left: 24px;
    top: 218px;
    position: absolute;
`
