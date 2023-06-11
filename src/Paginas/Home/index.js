import React from "react";
import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";



const Home = () => {

  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div>
      olá
      
    </div>
  );
};

export default Home;