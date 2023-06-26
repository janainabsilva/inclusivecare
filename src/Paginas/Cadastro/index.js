import React, { useState } from "react";
import { Box, Typography, Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import logo from "../../Assets/logo.png";
import img from "../../Assets/fundobox.jpg";
import "../Cadastro/style.css"

<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Neste momento procuro serviços inclusivos para pessoas autistas nas seguintes áreas: saúde, educação, lazer e esporte',
  'Atualmente busco uma logística inteligente para divulgar meus serviços especializados para autistas nas áreas de: saúde, educação, lazer e esporte',
];

const Cadastro = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (selectedOption === '') {
      setError('Selecione uma opção');
    } else {
      if (selectedOption === names[0]) {
       
        window.location.href = "/CadastroPf";
      } else {
        window.location.href = "/CadastroPj";
      }
    }
   
  }
  

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
        <img src={logo} alt="" style={{ width: "150px", height: "70px", marginTop: "-100px" }}></img>
        <Typography variant="h1" gutterBottom fontSize={25} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"white"} marginTop={5}>Bem-vindo(a)! <br />Crie sua conta no Inclusive Care</Typography>
        <Typography variant="h3" gutterBottom fontSize={15} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"White"} marginTop={1} padding={3}>Para começar escolha uma das categorias abaixo com a qual você mais se identifica.</Typography>

        <div>
          <FormControl sx={{ m: 1, width: 300, backgroundColor: "rgba(255, 255, 255, 0.44)" }}>
            <InputLabel id="demo-multiple-checkbox-label">Opções</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={selectedOption}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected}
              MenuProps={MenuProps}
              sx={{backgroundColor:"white"}}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedOption === name} />
                  <ListItemText primary={name} sx={{ whiteSpace: 'normal', fontSize: '8px', overflow: 'hidden', textOverflow: 'ellipsis' }} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained" disableElevation
          marginTop={10}
          sx={{ backgroundColor: "#4386AC", color: "white", width: '38ch' }}
          onClick={handleNext}
          
        >
          Próximo
        </Button>
        <Button
          variant="contained"
          disableElevation
          href="/"
          sx={{
            backgroundColor: "#4386AC", color: "white", width: '18ch', height: "35px", marginTop: "70px", borderRadius: "60px", marginBottom: "-40px", alignItems: "center",
            display: "flex",
            justifyContent: "center"
          }}
          startIcon={<ArrowBackIosNewIcon />}
        >
        </Button>
      </Box>
    </>
    </div>
  );
};

export default Cadastro;
