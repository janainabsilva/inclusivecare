
import {Fragment} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Recuperarsenha from "../RecuperarSenha";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";
import Cadastro from "../Paginas/Cadastro";
import useAuth from "../Hook/useAuth";
import CadastroPf from "../Paginas/CadastroPf";

const Private =({Item}) =>{
    const {cadastrado} = useAuth()

    return cadastrado > 0 ? <Item/> : <Login/>
}

const RotasApp = () =>{
    return(

        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/Home" element={<Private Item={Home}/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route exact path="/Cadastro" element={<Cadastro/>}/>
                    <Route path="*" element={Login}/>
                    <Route path="/Recuperarsenha" element={<Recuperarsenha/>}/>
                    <Route exact path="/CadastroPf" element={<CadastroPf/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );

}

export default RotasApp;