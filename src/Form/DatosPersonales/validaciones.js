export const validarNombre = (nombre) => {
    const length = nombre.length;
    return (length > 1 && length < 40) ? true : false
}

export const validarApellido = (apellido) => {
    const length = apellido.length;
    return (length > 1 && length<40) ? true : false
}

export const validarTelefono = (telefono) => {
    const length = telefono.length;
    return (length > 7 && length <= 14) ? true : false

}
