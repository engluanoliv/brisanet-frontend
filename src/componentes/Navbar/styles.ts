import styled from 'styled-components';

const NAV_HEIGHT: string = '50px';

export const Container = styled.div`
    background: #FFCB05;
    height: ${NAV_HEIGHT};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    margin: 0;
    & > * {
        height: 100%; 
    }
`

export const NavBtn = styled.button`
    width: 89px;
    height: 28px;
    font-family: Poppins;
    border: 1px solid #343232;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: transparent;
    margin-right: 25px;
    cursor: pointer;
    
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavBrand = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 80px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    margin-left: 25px;
`

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 80px;
    text-align: center;
    font-family: Poppins;
    cursor: pointer;
    color: #343232;
    white-space: nowrap;
    height: 100%;
    margin: 0 1rem;

    &:hover {
        font-weight: bold;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            background: black;
            height: 3px;
            bottom: 0;
        }
    }    
`
