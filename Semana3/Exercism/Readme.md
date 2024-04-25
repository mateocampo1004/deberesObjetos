# Resistor-Color-Trio

```typescript
// Definición de un arreglo constante que contiene los colores de las bandas del resistor.
const ColorAry = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
] as const; // Se necesita "as const" para el tipo Color

// Define un tipo 'Color' que representa los colores del resistor.
export type Color = typeof ColorAry[number];

// Definición de las magnitudes de ohmios con sus respectivos prefijos.
const ohms = [
    [1_000_000_000, "giga"],
    [1_000_000, "mega"],
    [1_000, "kilo"],
] as const;

// Función para decodificar el valor del resistor a partir de los colores de sus bandas.
export function decodedResistorValue([band1, band2, band3]: Color[]): string {
    // Calcula el valor del resistor usando los colores y la fórmula adecuada.
    let num = ((ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2)) * (10 ** ColorAry.indexOf(band3));
    
    // Busca el divisor y el prefijo correctos para la magnitud del valor del resistor.
    const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ""];
    
    // Retorna el valor del resistor formateado con su prefijo y la unidad 'ohms'.
    return `${num / divisor} ${prefix}ohms`;
}
```
URL Youtube

https://youtu.be/lq-lbaveNoE