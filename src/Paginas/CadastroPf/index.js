import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import logo from "../../Assets/logo.png";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import img from "../../Assets/fundobox.jpg";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>

const CadastroPf = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        height={580}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
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
         
          style={{ width: "140px", height: "80px", marginBottom: "1px",paddingTop:"10px" }}
        ></img>
        <Typography
          variant="h1"
          gutterBottom
          fontSize={25}
          fontFamily={"'Oswald', sans-serif"}
          textAlign="center"
          color={"white"}
          
        >
          Bem-vindo(a)! <br/>
          Crie sua conta no Inclusive Care
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          fontSize={15}
          fontFamily={"'Oswald', sans-serif"}
          textAlign="center"
          color={"white"}
          padding={1}
        >
          Você está procurando serviços  inclusivos para   autismo.Preencha os campos    abaixo e encontre-os conosco
         
          durante o seu registro
        </Typography>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          margin="normal"
          type="email"
          InputProps={{
            style: {
              backgroundColor: "white",
              width: "35ch",
            },
          }}
        />
        <FormControl
          sx={{ m: 1, width: "39ch", backgroundColor: "white" }}
          variant="filled"
          margin="normal"
        >
          <InputLabel htmlFor="filled-adornment-password">
            Senha
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "39ch", backgroundColor: "white" }}
          variant="filled"
          margin="normal"
        >
          <InputLabel htmlFor="filled-adornment-password">
            Confirme sua senha
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          variant="contained"
          disableElevation
          href="/"
          sx={{
            backgroundColor: "#1498E4",
            width: "30ch",
            height: "40px",
            marginBottom: "8px",
            marginTop:"15px"
          }}
        >
          Finalizar
        </Button>
      </Box>
    </>
  );
};

export default CadastroPf;