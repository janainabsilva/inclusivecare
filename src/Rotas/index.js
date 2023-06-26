import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recuperarsenha from "../Paginas/RecuperarSenha";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";
import Cadastro from "../Paginas/Cadastro";
import useAuth from "../Hook/useAuth";
import CadastroPf from "../Paginas/CadastroPf/index";
import HomeLazer from "../Paginas/HomeLazer";
import HomeSaude from "../Paginas/HomeSaude/index";
import HomeEducacao from "../Paginas/HomeEducacao";
import HomeEsporte from "../Paginas/HomeEsporte";
import CadastroPj from "../Paginas/CadastroPJ";
import CadastroPj2 from "../Paginas/CadastroPj2";
import CadastroPj3 from "../Paginas/CadastroPj3";



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
          <Route path="/CadastroPj" element={<CadastroPj />} />
          <Route path="/CadastroPj2" element={<CadastroPj2/>}/>
          <Route path="/CadastroPj3" element={<CadastroPj3/>}/>
          <Route path="/" element={<Login />} />
          <Route path="/HomeLazer" element={<HomeLazer/>}/>
          <Route path="/HomeSaude" element={<HomeSaude/>}/>
          <Route path="/HomeEducacao" element={<HomeEducacao/>}/>
          <Route path="/HomeEsporte" element={<HomeEsporte/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RotasApp;