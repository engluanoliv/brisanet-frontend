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

export const NavLink = styled.a`
    width: 57px;
    height: 18px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    padding-right: 25px;
    padding-left: 30px;
    white-space: nowrap;
    cursor: pointer;
`

export const NavBtn = styled.button`
    width: 89px;
    height: 28px;
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



export const NavLogo = styled.button`
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
    &.active {
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
