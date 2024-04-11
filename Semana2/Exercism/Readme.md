
// RESISTOR COLOR 

La constante `COLORS` es un array de strings que contiene los nombres de los colores de los resistores en el estándar de codificación de colores.

```typescript
export const COLORS: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow', 
    'green', 'blue', 'violet', 'grey', 'white'
];
```
La función `colorCode` toma un color como parámetro y devuelve su código correspondiente en la lista de colores. Utiliza el método `indexOf` para buscar el índice del color dentro del array `COLORS`. Si el color no se encuentra en la lista, se lanza un error con un mensaje indicando que el color es inválido.

```typescript
export const colorCode = (color: string): number => {
    const code = COLORS.indexOf(color);
    if (code === -1)
        throw new Error("Color inválido: " + color);
    return code;
}
```
