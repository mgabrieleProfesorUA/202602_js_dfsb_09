interface UsuarioDTO {
    nombre: string;
    email: string;
    edad: number;
}

function registrarUsuario(usuario: UsuarioDTO): string {
    return `Usuario ${usuario.nombre} registrado correctamente`;
}

const nuevoUsuario: UsuarioDTO = {
    nombre: "Miguel",
    email: "mgabriele@autonoma.edu.pe",
    edad: 35
};

console.log(registrarUsuario(nuevoUsuario));