import React from 'react';
import Logo from "../../images/pokemonLogo.svg";
import { 
    Container, 
    NavLink,
    NavMenu, 
    NavBtn 
} from './styles';

const Navbar: React.FC = () => {

    return (
            <Container>
                <NavLink href="/favoritos">
                    <img src={Logo} alt="Pokemon Logo" />
                </NavLink>
                <NavMenu>
                    <NavLink href="/favoritos">
                        Favoritos
                    </NavLink>
                    <NavLink href="/procurar">
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
