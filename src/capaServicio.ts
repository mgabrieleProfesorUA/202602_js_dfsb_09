export interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

export function obtenerProducto(): Producto {
    return {
        id: 2,
        nombre: "maquinaria",
        precio: 3000
    };
}