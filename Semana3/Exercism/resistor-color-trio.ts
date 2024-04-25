// RESISTOR COLOR TRIO

// La constante ColorAry es un array de strings que contiene los nombres de los colores de las bandas de los resistores.
const ColorAry = [
    'black', 'brown', 'red', 'orange', 'yellow', 
    'green', 'blue', 'violet', 'grey', 'white',
] as const; // Se usa "as const" para asegurar que el tipo de los elementos sea constante.

// Define un tipo 'Color' que representa los colores de las bandas de los resistores.
export type Color = typeof ColorAry[number];

// La constante ohms es un array de arrays donde cada subarray contiene un valor de magnitud de ohmios y su prefijo correspondiente.
const ohms = [
    [1_000_000_000, "giga"],
    [1_000_000, "mega"],
    [1_000, "kilo"],
] as const; // Se usa "as const" para asegurar que el tipo de los elementos sea constante.

// La función decodedResistorValue toma un array con tres colores que representan las bandas de un resistor y devuelve su valor de resistencia.
export function decodedResistorValue([band1, band2, band3]: Color[]): string {
    // Calcula el valor de la resistencia utilizando los colores y la fórmula adecuada.
    let num = ((ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2)) * (10 ** ColorAry.indexOf(band3));

    // Busca el divisor y el prefijo correctos para la magnitud del valor de la resistencia.
    const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ""];

    // Retorna el valor de la resistencia formateado con su prefijo y la unidad 'ohms'.
    return `${num / divisor} ${prefix}ohms`;
}
