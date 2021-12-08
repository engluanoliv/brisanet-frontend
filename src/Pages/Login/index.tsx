import React from "react";
import logoImageLogin from "../../images/pokemonLogin.svg";
import { 
    LoginLogo,
    InputEmail, 
    InputSenha, 
    Title, 
    ButtonLogin 
} from "./style";

const Login: React.FC = () => {

    return (
        <>
            <LoginLogo src={logoImageLogin} />
            <Title>Comece a coletar pokémons!</Title>
            <InputEmail placeholder="Email" type="email"/>
            <InputSenha placeholder="Senha" type="password" />
            <ButtonLogin>Entrar</ButtonLogin>
        </>
    )
}

export default Login;