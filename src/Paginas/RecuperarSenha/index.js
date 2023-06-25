import React from "react";
import { Box,Typography, Button,TextField } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import img from "../../Assets/fundobox.jpg";
import logo from "../../Assets/logo.png";
import "../RecuperarSenha/style.css"

const Recuperarsenha = () =>{
    return(
        <div className="recuperarsenha"> 
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
          <img src={logo} alt="" style={{ width: "150px", height: "70px", marginTop: "-50px"  }}></img>
          <Typography variant="h1" gutterBottom fontSize={20} fontFamily={"roboto slab"} textAlign='center'  color={"white"} marginTop={5} >Bem-vindo(a)! <br/>Crie sua conta no Inclusive Care</Typography>
          <Typography variant="h3" gutterBottom fontSize={15} fontFamily={"roboto slab"} textAlign='center'   color={"White"} marginTop={1} padding={3}>Para começar escolha uma das categorias <br/>  abaixo com a qual você mais se identifica.</Typography>
          
          <TextField   
        id="filled-basic"
        label="Digite seu email" 
        variant="filled"
        margin="normal"
          InputProps={{
            style: {
              backgroundColor: "white", 
              width:'35ch',

            },
          }}/>
        <Button
          variant="contained" disableElevation 
          marginTop={10}
          sx={{ backgroundColor: "#4386AC", color:"white", width: '38ch' }}
          >
            Próximo
    
          </Button>
          <Button 
        variant="contained" 
        disableElevation 
        href="/"
        sx={{ backgroundColor: "#4386AC", color:"white", width:'18ch', height:"35px", marginTop:"50px",  borderRadius:"60px", marginBottom:"-40px", alignItems:"center",
        display: "flex",
        justifyContent:"center" }}
        startIcon={<ArrowBackIosNewIcon />}
        > 
    
         </Button>
    
    
        </Box>
    
       
        </>
        </div>
        
    )
}

export default Recuperarsenha;