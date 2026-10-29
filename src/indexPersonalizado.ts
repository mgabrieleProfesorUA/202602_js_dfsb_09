type EstadoOrden = "pendiente" | "enviado" | "entregado";

function actualizarEstado(estado: EstadoOrden): string {
    return `La orden esta ${estado}`;
}

console.log(actualizarEstado("enviado"));