import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Contexts/auth";
import Navbar from "../../Components/Navbar";
import MediaCard from "../../Components/Card";
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Pagination from '@mui/material/Pagination';
import Chip from '@mui/material/Chip';
import Splide from '@splidejs/splide';
import { URLHash } from '@splidejs/splide-extension-url-hash';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import lazer from "../../Assets/lazer.jpg";
import saude from "../../Assets/saude.png";
import educacao from "../../Assets/educacao.jpg";
import esporte from "../../Assets/esporte.jpg";
import caixa from "../../Assets/caixa.jpg";




<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />;
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />;

const contentStyle = {
  margin: 0,
  height: '550px',
  width: '1100px',
  lineHeight: '160px',
  maxWidth: "100%",
  textAlign: 'center',
  background: '#364d79',
  borderRadius: "50px"
};

const HomeEsporte = () => {


  const { user, login } = useContext(AuthContext);
  const splideRef = useRef(null);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };




  useEffect(() => {
    const splide = new Splide('.splide', {
      perPage: 3, 
      perMove: 1,
      height: '40rem',
      width:'80rem',
      focus: 'center',
      trimSpace: false,
      breakpoints: {
        600: {
          perPage: 2,
          height: '6rem',
        },
      },
      extensions: [URLHash], 
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  if (!login) {
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="home">
      <Navbar />
      <div style={{ marginTop: "40px", marginLeft: "40px", padding:"30px" }}>
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

      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
           
            <li className="splide__slide" data-splide-hash="slide02"  >
              <img src={lazer} alt="" style={{  width: '500px', height: '460px', borderRadius:"10px",  margin: '0 -140px',maxWidth:"100%",maxHeight:"100%" }}/>
              <div style={{ position: 'absolute', top: '60%', marginLeft:'-40px' , transform: 'translate(-70%, -10%)' }}>
              <Typography 
              color={"black"}
              variant="h4"
              gutterBottom 
              fontFamily="'Roboto Slab', serif'"
              fontSize={10}
              marginRight={7}
              color={"white"}
              >
                Lazer
              </Typography>
              </div>
          <Stack spacing={2} direction="row"  style={{ position: 'absolute', top: '60%', marginLeft:"190px" , transform: 'translate(-70%, -10%)',maxWidth:"100%", maxWidth:"100%", maxHeight:"100%" }}>
            <Button variant="contained" sx={{ background:"rgba(255, 255, 255, 0.25)", backdropFilter:"blur(12.5px)",borderRadius:"20px" }}>Saiba Mais</Button>
          </Stack>
        
            </li>
            <li className="splide__slide" data-splide-hash="slide03"  >
              <img src={saude} alt="" style={{ width: '700px', height: '460px', borderRadius:"10px",  margin: '0 -130px',maxWidth:"100%",maxHeight:"100%" }}/>
              <div style={{ position: 'absolute', top: '60%', marginLeft:'-30px' , transform: 'translate(-70%, -10%)' }}>
              <Typography 
              color={"black"}
              variant="h4"
              gutterBottom 
              fontFamily="'Roboto Slab', serif'"
              textAlign="center"
              color={"white"}
              fontSize={10}
              
              >
                Saúde
              </Typography>
              </div>
          <Stack spacing={2} direction="row" style={{ position: 'absolute', top: '60%', marginLeft:"190px" , transform: 'translate(-70%, -10%)' }}>
            <Button variant="contained" sx={{ background:"rgba(255, 255, 255, 0.25)", backdropFilter:"blur(12.5px)",borderRadius:"20px" }}>Saiba Mais</Button>
          </Stack>
            </li>
            <li className="splide__slide" data-splide-hash="slide03"  >
              <img src={educacao} alt="" style={{ width: '700px', height: '460px', borderRadius:"10px",  margin: '0 -120px',maxWidth:"100%",maxHeight:"100%" }}/>
              <div style={{ position: 'absolute', top: '60%', marginLeft:'20px' , transform: 'translate(-70%, -10%)' }}>
              <Typography 
              color={"black"}
              variant="h4"
              gutterBottom 
              fontFamily="'Roboto Slab', serif'"
              textAlign="center"
              color={"white"}
              fontSize={10}
              
              >
                Educação
              </Typography>
              </div>
          <Stack spacing={2} direction="row" style={{ position: 'absolute', top: '60%', marginLeft:"220px" , transform: 'translate(-70%, -10%)' }}>
            <Button variant="contained" sx={{ background:"rgba(255, 255, 255, 0.25)", backdropFilter:"blur(12.5px)",borderRadius:"20px" }}>Saiba Mais</Button>
          </Stack>
            </li>
            <li className="splide__slide" data-splide-hash="slide03"  >
              <img src={esporte} alt="" style={{ width: '700px', height: '460px', borderRadius:"10px",  margin: '0 -110px',maxWidth:"100%",maxHeight:"100%" }}/>
              <div style={{ position: 'absolute', top: '60%', marginLeft:'20px' , transform: 'translate(-70%, -10%)' }}>
              <Typography 
              color={"black"}
              variant="h4"
              gutterBottom 
              fontFamily="'Roboto Slab', serif'"
              textAlign="center"
              color={"white"}
              fontSize={10}
              
              >
                Esporte
              </Typography>
              </div>
          <Stack spacing={2} direction="row" style={{ position: 'absolute', top: '60%', marginLeft:"220px" , transform: 'translate(-70%, -10%)' }}>
            
            <Button variant="contained" sx={{ background:"rgba(255, 255, 255, 0.25)", backdropFilter:"blur(12.5px)",borderRadius:"20px" }}>Saiba Mais</Button>
            
          </Stack>
            </li>
          </ul>
        </div>
      </div>
    
      <div style={{ marginTop: "40px", marginLeft: "75px", padding:"30px" }}>
        <Typography
          variant="h1"
          gutterBottom
          fontSize={30}
          fontFamily="'Roboto Slab', serif'"
          textAlign="center"
        >
          Preencha o campo abaixo com seu CEP e encontre um atendimento próximo a você
        </Typography>
      </div>

      <Box
      display="flex"
      flexDirection="column"
      maxWidth={900}
      height={100}
      alignItems="center"
      justifyContent="center"
      margin="auto"
      padding={3}
      borderRadius="none"
      sx={{
        backgroundImage: `url(${caixa})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }}
      >
         <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
      </Box>
      <div style={{ marginTop: "40px", marginLeft: "40px", padding:"30px" }}>
        <Typography
          variant="h1"
          gutterBottom
          fontSize={30}
          fontFamily="'Roboto Slab', serif'"
          textAlign="center"
        >
          Esporte
        </Typography>
        <Stack direction="row" spacing={1} style={{top:"10px"}}>
      <Chip
        label="Psicólogos(a)"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
       
      />
      <Chip
        label="Clínicas "
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Fonoaudiólogos(a)"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
     

    </Stack>
      </div>

      
        
        

      
    </div>
  );
};

export default HomeEsporte;