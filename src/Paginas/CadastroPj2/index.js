import React, { useState } from "react";
import { Box, Typography, TextField,Button} from '@mui/material';
import logo from "../../Assets/logo.png";
import img from "../../Assets/fundobox.jpg";
import "../Cadastro/style.css"

<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>



const CadastroPj2 = () => {
 
  const [texto, setTexto] = useState("");

  const handleNext = () => {
    if (texto === "") {
      return; 
    } else {
      window.location.href = "/CadastroPj3";
    }
  };

  return (
   <div className="cadastro">
   <>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={390}
        height={580}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        padding={3}
        borderRadius="none"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} alt="" style={{ width: "150px", height: "70px", marginTop: "-30px" }}></img>
        <Typography variant="h1" gutterBottom fontSize={25} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"white"} marginTop={2}>Bem-vindo(a)! <br />Crie sua conta no Inclusive Care</Typography>
        <Typography variant="h3" gutterBottom fontSize={15} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"White"} marginTop={1} padding={0}>Você está procurando uma plataforma para realizar a logística de divulgação do(s) seu(s) serviços(s) inclusivo(s). Preencha os campos abaixo e encontre conosco <br/> <br/> escreva um texto explicando melhor os serviços que você vai oferecer</Typography>
        <TextField
          id="filled-multiline-static"
          label="Escreva um texto"
          multiline
          rows={4}
          variant="filled"
          sx={{background:"white",width:"300px"}}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <Typography variant="h3" gutterBottom fontSize={15} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"White"} marginTop={1} padding={3}>Atenção: Seu texto aparecerá quando um usuário encontrar seu serviço no mapa. Então capriche!</Typography>
        
        <Button
            variant="contained"
            disableElevation
            marginTop={20}
            sx={{ backgroundColor: "#4386AC", color: "white", width: "38ch",top:"5px" }}
            onClick={handleNext}
            disabled={texto === ""}
          >
            Próximo
          </Button>
          
      </Box>
    </>
    </div>
  );
};

export default CadastroPj2;
