function getNumeroAleatorio(items: number[]): number{
    let indiceAleatorio = Math.floor(Math.random() * items.length);
    return items[indiceAleatorio];
}

let numeros = [10, 20, 30];
console.log(getNumeroAleatorio(numeros));

function getcadenaAleatorio(items: string[]): string{
    let indiceAleatorio = Math.floor(Math.random() * items.length);
    return items[indiceAleatorio];
}

let cadenas = ['rojo', 'verde', 'amarillo'];
console.log(getcadenaAleatorio(cadenas));


function getGenerico1Aleatorio(items: any[]): any{
    let indiceAleatorio = Math.floor(Math.random() * items.length);
    return items[indiceAleatorio];
}

console.log(getGenerico1Aleatorio(cadenas));
console.log(getGenerico1Aleatorio(numeros));

function getGenerico2Aleatorio<T>(items: T[]): T{
    let indiceAleatorio = Math.floor(Math.random() * items.length);
    return items[indiceAleatorio];
}

let numerocapturado = getGenerico2Aleatorio<number>(numeros);
console.log(`El numero obtenido es ${numerocapturado}`);