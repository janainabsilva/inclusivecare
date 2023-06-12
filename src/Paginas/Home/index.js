import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Navbar from "../../Components/Navbar";
import { Box } from '@mui/material';
import imagem from "../../Assets/home.png";

const Home = () => {
  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  return (
    <div className="home-container"> 
      <Navbar />
      <img src={imagem} alt="" style={{ maxWidth: "100%", width:"1480px" }} ></img>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={1422}
        height={1200}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={-1}
        padding={3}
        borderRadius="none"
        sx={{backgroundColor:"white"}}
      >
        
      </Box>
    </div>
  );
};

export default Home;
