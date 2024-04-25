
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
-// RESISTOR-COLOR-DUO 




Este módulo de TypeScript se encarga de decodificar el valor de un resistor a partir de los colores de sus bandas.

### Código

```typescript
const COLORS: string[] = [
  'black', 'brown', 'red', 'orange', 'yellow', 
  'green', 'blue', 'violet', 'grey', 'white'
];

export class ResistorColor {
  private colors: string[];
  
  // Constructor de la clase ResistorColor
  constructor(colors: string[]) {
    // Verifica que haya al menos dos colores presentes
    if (colors.length < 2)
      throw new Error("At least two colors need to be present");
    
    // Guarda solo los primeros dos colores
    this.colors = colors.slice(0, 2);
  }
 
  // Método 'value' que calcula el valor del resistor
  value = (): number => {
    let result = 0;
    
    // Itera sobre los colores
    this.colors.forEach((color: string) => {
      // Obtiene el índice del color en el arreglo COLORS
      const code = COLORS.indexOf(color);
      
      // Lanza un error si el color es desconocido
      if (code == -1)
        throw new Error("Unknown color: " + color);
      
      // Calcula el valor del resistor
      result = 10 * result + code;
    });
    
    // Retorna el valor calculado del resistor
    return result; 
  }; 
}

// Función 'decodedValue' que calcula el valor del resistor decodificado
export const decodedValue = (colors: string[]): number => {
  // Crea una instancia de ResistorColor y calcula su valor
  return new ResistorColor(colors).value();
}


URL Youtube

https://youtu.be/eXlfS-edTV0