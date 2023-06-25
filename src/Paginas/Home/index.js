import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Navbar from "../../Components/Navbar";
import { Typography, Button } from '@mui/material';
import imagem from "../../Assets/home.png";
import { Carousel } from 'antd';
import saude from "../../Assets/saude.png";
import lazer from "../../Assets/lazer.jpg";
import educacao from "../../Assets/educacao.jpg";
import esporte from "../../Assets/esporte.jpg";
import mapa from "../../Assets/mapa.png";
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet"></link>;


const contentStyle = {
  margin:0,
  height: '550px',
  width:'1100px',
  lineHeight: '160px',
  maxWidth:"100%",
  textAlign: 'center',
  background: '#364d79',
  borderRadius:"50px"
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
    <div className="home"> 
      <Navbar />
      <img src={imagem} alt="" style={{ maxWidth: "100%", width:"1480px" }} ></img>
      <div style={{ marginTop: "60px", marginLeft:"40px" }}>
        <Typography
          variant="h1"
          gutterBottom
          fontSize={30}
          fontFamily="'Roboto Slab', serif'"
          textAlign="center"
        >
          Serviços
        </Typography>
        </div>

        <Carousel afterChange={onChange} style={{ margin: "0 auto", maxWidth:"80%",marginTop:"60px",borderRadius:"50px" }}>
      <div>
        <img src={saude} alt="" style={contentStyle}  ></img>
        <Typography
          fontFamily="'Inter', sans-serif" 
         style={{position: "absolute",
         transform: "translateX(-50%)",
         bottom: "20px",
        marginLeft:"100px",
        fontSize:"25px",
         color: "white",
         whiteSpace: "nowrap",
         overflow: "hidden",
         textOverflow: "ellipsis",
         maxWidth: "80%"}}
        >
          Saúde
        
          </Typography>
        <Button 
        style={{ 
          
          position: "absolute",
          transform: "translateX(-50%)",
          bottom: "20px",
          left: "20%",
          padding: "10px 10px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter:" blur(12.5px)",
          color: "#000000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "80%",
          borderRadius:"20px",
          }}
        
        >
          Saiba mais
          
        </Button>
        
      </div>
      <div>
        <img src={lazer} alt="" style={contentStyle} ></img>
      </div>
      <div>
      <img src={educacao} alt="" style={contentStyle} ></img>
      </div>
      <div>
      <img src={esporte} alt="" style={contentStyle} ></img>
      </div>
    </Carousel>
    <div style={{ marginTop: "60px", marginLeft:"40px" }}>
        <Typography
          variant="h1"
          gutterBottom
          fontSize={30}
          fontFamily="'Roboto Slab', serif'"
          textAlign="center"
        >
          Perto de você
        </Typography>
        </div>
        <img src={mapa} alt="" style={{maxWidth:"100%", width:"1410px"}}></img>
    </div>
  );
};

export default Home;
