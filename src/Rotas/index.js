import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recuperarsenha from "../Paginas/RecuperarSenha";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";
import Cadastro from "../Paginas/Cadastro";
import useAuth from "../Hook/useAuth";
import CadastroPf from "../Paginas/CadastroPf/index";
import HomeLazer from "../Paginas/HomeLazer"

const Private = ({ Item }) => {
  const { cadastrado } = useAuth();

  return cadastrado > 0 ? <Item /> : <Login />;
};

const RotasApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Recuperarsenha" element={<Recuperarsenha />} />
          <Route path="/CadastroPf" element={<CadastroPf />} />
          <Route path="/" element={<Login />} />
          <Route path="/HomeLazer" element={<HomeLazer/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RotasApp;