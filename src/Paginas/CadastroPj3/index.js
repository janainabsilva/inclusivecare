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
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../CadastroPf/style.css";

<link
  href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
  rel="stylesheet"
></link>;

const CadastroPj3 = () => {
  const { cadastro } = useAuth(""); 
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("preencha todos os campos");
      return;
    }
  };

 

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
   <div className="cadastropf">
   <>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
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
          style={{
            width: "140px",
            height: "80px",
            
            paddingTop: "2px",
          }}
        ></img>
        
       
        <TextField
          id="filled-basic"
          label="Nome"
          variant="filled"
          margin="normal"
          type=""
          InputProps={{
            style: {
              backgroundColor: "white",
              width: "35ch",
              height:"6ch"
            },
          }}
        />
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
              width: "35ch",
            },
          }}
        />
         <TextField
          id="filled-basic"
          label="Telefone"
          variant="filled"
          margin="normal"
          type="number"
          InputProps={{
            style: {
              backgroundColor: "white",
              width: "35ch",
            },
          }}
        />
          <TextField
          id="filled-basic"
          label="Cep"
          variant="filled"
          margin="normal"
          type="number"
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
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
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
        <Typography>{error}</Typography>

        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            const res = cadastro(email, senha);
            if (res) {
              setError(res);
            } else {
              navigate("/");
            }
          }}
          sx={{
            backgroundColor: "#1498E4",
            width: "30ch",
            height: "40px",
            marginBottom: "8px",
            marginTop: "10px",
          }}
        >
          Finalizar
        </Button>
      </Box>
    </>
    </div>
  );
};

export default CadastroPj3;