import React,{useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCiudad,validarDireccion,validarProvincia } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [direccion,setDireccion] = useState({
    value: "",
    valid: null,
  });

  const [ciudad,setCiudad] = useState({
    value: "",
    valid: null,
  });

  const [provincia,setProvincia] = useState({
    value: "",
    valid: null,
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
        if (direccion.valid && ciudad.valid && provincia.valid) {
          updateStep(3);
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={direccion.value}
        error={direccion.valid == false}
        helperText={direccion.valid == false && "Ingresa una direccion válida"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarDireccion(value);
          setDireccion({value, valid})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ciudad.value}
        error={ciudad.valid == false}
        helperText={ciudad.valid == false && "Ingresa una ciudad válida"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarCiudad(value);
          setCiudad({value, valid})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={provincia.value}
        error={provincia.valid == false}
        helperText={provincia.valid == false && "Ingresa una provincia válida"}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarProvincia(value);
          setProvincia({value, valid})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
