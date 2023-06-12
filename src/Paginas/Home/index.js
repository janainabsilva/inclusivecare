import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Navbar from "../../Components/Navbar";
import { Box } from '@mui/material';


const Home = () => {
  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div className="home-container"> 
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        height={880}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius="none"
      >
      </Box>
    </div>
  );
};

export default Home;
