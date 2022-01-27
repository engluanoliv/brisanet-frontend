import React from 'react';
import Logo from "../../images/pokemonLogo.svg";
import { 
    Container,
    NavBrand, 
    NavLink,
    NavMenu, 
    NavBtn 
} from './styles';

const Navbar: React.FC = () => {

    return (
            <Container>
                <NavBrand href="/favoritos">
                    <img src={Logo} alt="Pokemon Logo" />
                </NavBrand>
                <NavMenu>
                    <NavLink href="/favoritos">
                        Favoritos
                    </NavLink>
                    <NavLink href="/search">
                        Procurar
                    </NavLink>
                    <NavLink href="/vertodos">
                        Ver Todos
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    Sair
                </NavBtn>
            </Container>
    )
}

export default Navbar;
