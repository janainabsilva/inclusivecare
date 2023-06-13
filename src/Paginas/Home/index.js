import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Navbar from "../../Components/Navbar";
import { Box, Typography } from '@mui/material';
import imagem from "../../Assets/home.png";

<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>

const contentStyle = {

  margin: 0,
  width:'50px',
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#000',
};


const Home = () => {
  const { user, login } = useContext(AuthContext);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div> 
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
        marginTop={-65} 
        padding={3}
        borderRadius="none"
       
        sx={{ backgroundColor: "white",overflow: "hidden",  }}
      >
        <Typography
          variant="h1"
          gutterBottom
          fontSize={30}
          fontFamily="'Roboto Slab', serif'"
          textAlign="center"
          marginBottom={0} 
          
        >
          Serviços
        </Typography>
       

      </Box>
    </div>
  );
};

export default Home;
