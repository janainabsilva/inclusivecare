import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth"; 
import Navbar from "../../Components/Navbar";
import "./Style.css"


const Home = () => {
  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div  className="white-background">
      <Navbar/>
    </div>
  );
};

export default Home;