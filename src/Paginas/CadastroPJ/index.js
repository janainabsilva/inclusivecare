import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../../Assets/logo.png";
import img from "../../Assets/fundobox.jpg";
import "../Cadastro/style.css";

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

const names = ["Saúde", "Educação", "Lazer", "Esporte"];

const CadastroPj = () => {
    const [selectedOption, setSelectedOptions] = useState([]);
    const [error, setError] = useState("");
  
    const handleNext = () => {
      if (selectedOption === '') {
          setError('Selecione uma opção');
        } else {
          if (selectedOption === names[0]) {
           
            window.location.href = "/CadastroPj2";
          } else if (selectedOption.includes(names[0])){
            window.location.href = "/CadastroPj2";
          } else if (selectedOption.includes(names[1])){
            window.location.href = "/CadastroPj2";
          }
              else if (selectedOption.includes(names[2])){
              window.location.href = "/CadastroPj2";
            } else if (selectedOption.includes(names[3])){
              window.location.href = "/CadastroPj2";
            } 
        }
    };
  
  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
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
          <img
            src={logo}
            alt=""
            style={{ width: "150px", height: "70px", marginTop: "-50px" }}
          ></img>
          <Typography
            variant="h1"
            gutterBottom
            fontSize={25}
            fontFamily={"'Oswald', sans-serif"}
            textAlign="center"
            color={"white"}
            marginTop={2}
          >
            Bem-vindo(a)! <br />Crie sua conta no Inclusive Care
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            fontSize={15}
            fontFamily={"'Oswald', sans-serif"}
            textAlign="center"
            color={"White"}
            marginTop={1}
            padding={3}
          >
            Você está procurando uma plataforma para realizar a logística de
            divulgação do(s) seu(s) serviço(s) inclusivo(s). Preencha os campos
            abaixo e encontre conosco <br /> <br /> Qual serviço você pretende
            oferecer? <br /> <br /> Atenção: Você pode selecionar mais de um
            serviço
          </Typography>

          <div>
            <FormControl
              sx={{
                m: 1,
                width: 300,
                backgroundColor: "rgba(255, 255, 255, 0.44)",
              }}
            >
              <InputLabel id="demo-multiple-checkbox-label">
                Opções
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={selectedOption}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) =>
                  selected.join(", ")
                }
                MenuProps={MenuProps}
                sx={{ backgroundColor: "white" }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={selectedOption.includes(name)} />
                    <ListItemText
                      primary={name}
                      sx={{
                        whiteSpace: "normal",
                        fontSize: "8px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            disableElevation
            marginTop={10}
            sx={{ backgroundColor: "#4386AC", color: "white", width: "38ch" }}
            onClick={handleNext}
          >
            Próximo
          </Button>
          <Button
            variant="contained"
            disableElevation
            href="/Cadastro"
            sx={{
              backgroundColor: "#4386AC",
              color: "white",
              width: "18ch",
              height: "35px",
              marginTop: "70px",
              borderRadius: "60px",
              marginBottom: "-40px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            startIcon={<ArrowBackIosNewIcon />}
          ></Button>
        </Box>
      </>
    </div>
  );
};

export default CadastroPj;