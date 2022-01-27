import React from "react";
import styled from 'styled-components';

export const ContainerCard: React.FC = styled.div`
    width: 165px;
    height: 236px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: block;
`

export const ImgCard: React.FC = styled.img`
    display: flex;
    justify-content: center;
`

export const NameCard: React.FC = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
`
export const IdCard: React.FC = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #8E8787;
`
export const Details: React.FC = styled.button`
    background: #FFCB05;
    border-radius: 8px;
    width: 147px;
    height: 32px;
    border: none;
`
