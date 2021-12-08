import React from "react";
import { 
    InputEmail, 
    InputSenha, 
    Title, 
    ButtonLogin 
} from "./style";

const Login: React.FC = () => {

    return (
        <>
            <Title>Comece a coletar pokémons!</Title>
            <InputEmail />
            <InputSenha />
            <ButtonLogin>Entrar</ButtonLogin>
        </>
    )
}

export default Login;