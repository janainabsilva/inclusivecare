import React from "react";
import Navbar from "../../Components/Navbar";
import "../Home/Style.css";
import { AuthContext } from "../../Contexts/auth";



const Home = () => {

  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div>
      <Navbar/>
      
    </div>
  );
};

export default Home;