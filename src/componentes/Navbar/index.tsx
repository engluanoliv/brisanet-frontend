import React from 'react';
// import pokemonLogo from '';
import { 
    Container, 
    NavLink,
    NavLogo,
    NavMenu, 
    NavBtn 
} from './styles';

const Navbar: React.FC = () => {

    return (
            <Container>
                <NavLogo>
                    imgLogo
                </NavLogo>
                <NavMenu>
                    <NavLink>
                        Favoritos
                    </NavLink>
                    <NavLink>
                        Procurar
                    </NavLink>
                    <NavLink>
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
