import React, { useState } from "react";
import { Box,Button,Typography,Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {useNavigate} from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import "../Login/style.css";
import logo from "../../Assets/logo.png";
import img from "../../Assets/fundobox.jpg";
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>



const Login = () => {

  const {login} = useAuth();
  const navigate = useNavigate()



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
  
    const res = login(email, password);
  
    if (res) {
      setError(res);
      return;
    }
  
    navigate("/Home");
  };

  return (
    
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
        <img src={logo} alt="" style={{ width: "140px", height: "120px", marginBottom: "1px" }}></img>
        <Typography variant="h1" gutterBottom fontSize={25} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"white"}>Faça login na sua conta.</Typography>
        <Typography variant="h3" gutterBottom fontSize={15} fontFamily={"'Oswald', sans-serif"} textAlign='center' color={"White"}>Realize o login com seus dados que você digitou <br />durante o seu registro</Typography>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          InputProps={{
            style: {
              backgroundColor: "white",
              width: '35ch'
            },
          }}
        />

        <Grid container direction="column" alignItems="center" justifyContent="center" marginLeft={-4}>
          <FormControl sx={{ m: 1, width: '39ch', backgroundColor: "white" }} variant="filled" margin="normal">
            <InputLabel htmlFor="filled-adornment-password">
              Senha
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
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

          <Grid container justifyContent="flex-start" alignItems="center" marginLeft={4} >
            <Grid item>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Lembre-me" sx={{ color: "white" }} />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>

        <Button href="/Recuperarsenha" sx={{ color: "white", top: "-36px", fontSize: "12px", marginLeft: "150px" }}>Recupere sua Senha</Button>
        <label>{error}</label>
        <Button
          variant="contained" disableElevation
          sx={{ backgroundColor: "#1498E4", width: '39ch', height: "60px", marginBottom: "8px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography color={"white"} marginTop={-1}>ou</Typography>
        <Button
          variant="contained" disableElevation
          sx={{ backgroundColor: "#05abc4", color: "white", width: '38ch' }}
          startIcon={<GoogleIcon />}
        >
          Continue com o Google
        </Button>
        <Button
          variant="contained" disableElevation
          sx={{ backgroundColor: "#4DCEAF", color: "white", width: '38ch', marginTop: "10px" }}
          startIcon={<FacebookIcon />}
        >
          Continue com o Facebook
        </Button>

        <Stack spacing={2} direction="row">
          <Button href="/Cadastro" sx={{ color: "white", marginTop: "6px" }}>Crie uma conta</Button>
        </Stack>
      </Box>
    
  );
};

export default Login;