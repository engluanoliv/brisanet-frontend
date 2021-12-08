import styled from 'styled-components';

const NAV_HEIGHT: string = '50px';

export const Container = styled.div `
    background: #FFCB05;
    height: ${NAV_HEIGHT};
    display: flex;
    justify-content: space-between;
    z-index: 10;
    margin: 0;
    & > * {
        height: 100%; 
    }

`;

// export const Logo = styled.img`

    

// `;

// export const Logo = styled.a`

// `;

// export const NavLogo = styled.button `
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     width: 80px;
//     text-align: center;
//     font-family: Poppins;
//     cursor: pointer;
//     color: #343232;
//     white-space: nowrap;
//     height: 100%;
//     margin: 0 1rem;

//     &.active {
//         font-weight: bold;
//         position: relative;
//         &::after {
//             content: '';
//             position: absolute;
//             width: 100%;
//             background: black;
//             height: 3px;
//             bottom: 0;
//         }
//     }    

// `
