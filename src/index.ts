function calcularPrecioFinal(precio: number): number {
    const igv: number = 0.18;
    return precio + (precio * igv);
}

console.log(calcularPrecioFinal(100));