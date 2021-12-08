import React from "react";
import { Input } from "./style";

const Login: React.FC = () => {

    return (
        <>
            <form className="form">
                <Input/>
                <Input/>
                <button className="login">Entrar</button>
            </form>
        </>
    )
}

export default Login;