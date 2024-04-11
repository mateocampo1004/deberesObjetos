
// TWO-FEARS

### Función para mensaje personalizado

La función TypeScript `twoFer` está diseñada para devolver una cadena que sigue el formato "One for [name], one for me.". Aquí está el desglose del código:

- Define una función llamada `twoFer`.
- Toma un parámetro `name` de tipo `string`, con un valor predeterminado de `'you'` si no se proporciona ningún valor al llamar a la función.
- Retorna una cadena formateada utilizando la plantilla de cadenas de JavaScript.
- La interpolación `${name}` inserta el valor del parámetro `name` en la cadena resultante.

Este código TypeScript puede ser útil cuando deseas generar un mensaje personalizado con un nombre específico, pero proporciona un valor predeterminado si no se proporciona ningún nombre.

```typescript
export function twoFer(name: string = 'you'): string {
    return `One for ${name}, one for me.`;
}
```

// HELLO-WORLD

### Función de Saludo en TypeScript

El siguiente código TypeScript define una función `hello` que simplemente devuelve la cadena `'Hello, World!'`. 

- `export`: Esta palabra clave indica que la función `hello` será accesible fuera de este módulo TypeScript, lo que significa que puede ser importada y utilizada en otros archivos TypeScript si es necesario.
- `function hello(): string { ... }`: Define una función llamada `hello` que no toma ningún argumento y devuelve una cadena. La declaración `(): string` después del nombre de la función indica que esta función devuelve un valor de tipo `string`.
- `return 'Hello, World!';`: Dentro de la función, se utiliza la declaración `return` para devolver la cadena 'Hello, World!'. Cuando la función `hello` se llama, esta cadena será el resultado que se obtiene.

```typescript
export function hello(): string {
  return 'Hello, World!';
}
```


// RESISTOR-COLOR


### Función para determinar el valor de una resistencia

La enumeración TypeScript `ResistorValues` define los valores de los colores de los resistores en un circuito. Cada color está asignado a un valor numérico del 0 al 9, siguiendo el estándar de codificación de colores para resistores.

- `black = 0`: Representa el color negro, que tiene el valor numérico 0.
- `brown = 1`: Representa el color marrón, que tiene el valor numérico 1.
- `red = 2`: Representa el color rojo, que tiene el valor numérico 2.
- `orange = 3`: Representa el color naranja, que tiene el valor numérico 3.
- `yellow = 4`: Representa el color amarillo, que tiene el valor numérico 4.
- `green = 5`: Representa el color verde, que tiene el valor numérico 5.
- `blue = 6`: Representa el color azul, que tiene el valor numérico 6.
- `violet = 7`: Representa el color violeta, que tiene el valor numérico 7.
- `grey = 8`: Representa el color gris, que tiene el valor numérico 8.
- `white = 9`: Representa el color blanco, que tiene el valor numérico 9.


El tipo `Color` se define como una unión de las claves de la enumeración `ResistorValues`. Esto garantiza que solo se puedan usar colores válidos al decodificar los valores de los resistores.

La función `decodedValue` toma un array de dos elementos de tipo `Color`, que representan el color del primer y segundo anillo de un resistor. Luego, convierte estos colores en sus valores numéricos correspondientes según la enumeración `ResistorValues` y los concatena para obtener el valor del resistor como un número entero.

```typescript
export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}

type Color = keyof typeof ResistorValues;

export function decodedValue([first, second]: Color[]): number {
  return Number(`${ResistorValues[first]}${ResistorValues[second]}`)
}
```