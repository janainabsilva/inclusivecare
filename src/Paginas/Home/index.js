import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth"; // Verifique o caminho correto para o AuthProvider

const Home = () => {
  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div>
      <h1>Bem-vindo à página inicial</h1>
    </div>
  );
};

export default Home;