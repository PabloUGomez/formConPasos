import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre,validarApellido,validarTelefono } from "./validaciones.js";

const DatosPersonales = ({updateStep}) => {

  const [nombre,setNombre] = useState({
    value: "",
    valid: null
  });
  const [apellido,setApellido] = useState({
    value: "",
    valid: null
  });
  const [telefono,setTelefono] = useState({
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
        if (nombre.valid && apellido.valid && telefono.valid) {
          updateStep(2);
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={nombre.value}
        error={nombre.valid == false}
        helperText={nombre.valid == false && "Ingresa un nombre válido, debe tener mas de 2 caracteres y maximo 40"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setNombre({value, valid})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={apellido.value}
        error={apellido.valid == false}
        helperText={apellido.valid == false && "Ingresa un apellido válido, debe tener mas de 2 caracteres y maximo 40"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellido(value);
          setApellido({value, valid})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telefono.value}
        error={telefono.valid == false}
        helperText={telefono.valid == false && "Ingresa un telefono válido, debe tenre mas de 6 caracteres y maximo 14"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setTelefono({value, valid})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
