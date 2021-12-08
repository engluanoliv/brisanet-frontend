import styled from 'styled-components';
import { InputProps } from '../../interfaces'

export const LoginLogo = styled.img`
    position: absolute;
    width: 206px;
    height: 76px;
    left: 138px;
    top: 33px;
`

export const InputEmail = styled.input<InputProps>`
    position: absolute;
    width: 365px;
    height: 54px;
    left: 138px;
    top: 344px;
    border: 1px solid #7D7E80;
    box-sizing: border-box;
    border-radius: 8px;
`

export const InputSenha = styled.input<InputProps>`
    position: absolute;
    width: 365px;
    height: 54px;
    left: 138px;
    top: 413px;
    border: 1px solid #7D7E80;
    box-sizing: border-box;
    border-radius: 8px;
    
`

export const Title = styled.h1`
    position: absolute;
    width: 365px;
    height: 108px;
    left: 138px;
    top: 188px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
`

export const ButtonLogin = styled.button`
    position: absolute;
    width: 365px;
    height: 54px;
    left: 138px;
    top: 500px;
    background: #FFCB05;
    border-radius: 8px;
`