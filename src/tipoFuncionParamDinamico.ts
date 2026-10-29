function getTotal(... numeros: number[]): number {
    let total = 0;
    numeros.forEach((numero) => total += numero);
    return total;
}

console.log(getTotal());
console.log(getTotal(10));
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));