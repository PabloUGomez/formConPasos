import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {

  const [email,setEmail] = useState({
    value: "",
    valid: null
  });
  const [password,setPassword] = useState({
    value: "",
    valid: null
  });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e)=>{
        e.preventDefault();
        if (email.valid && password.valid) {
          updateStep(1);
        }else{
        }
        console.log({email,password});
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        //onBlur={() => validarEmail(email)}
        type="email"
        error={email.valid == false}
        helperText={email.valid == false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;
          setEmail ({value : email, valid: validarEmail(email) })}
        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid == false}
        helperText={password.valid == false && "Ingresa una contraseña de al menos 8 caracteres y maximo 20"}
        value={password.value}
        onChange={(input) => {
          const password = input.target.value;
          setPassword ({value : password , valid: validarPassword (password)})}
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
