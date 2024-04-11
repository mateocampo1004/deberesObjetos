// TWO-FEARS

La función TypeScript `twoFer` está diseñada para devolver una cadena que sigue el formato "One for [name], one for me.". Aquí está el desglose del código:

- Define una función llamada `twoFer`.
- Toma un parámetro `name` de tipo `string`, con un valor predeterminado de `'you'` si no se proporciona ningún valor al llamar a la función.
- Retorna una cadena formateada utilizando la plantilla de cadenas de JavaScript.
- La interpolación `${name}` inserta el valor del parámetro `name` en la cadena resultante.

Este código TypeScript puede ser útil cuando deseas generar un mensaje personalizado con un nombre específico, pero proporciona un valor predeterminado si no se proporciona ningún nombre.

// HELLO-WORLD

### Función de Saludo en TypeScript

El siguiente código TypeScript define una función `hello` que simplemente devuelve la cadena `'Hello, World!'`. Aquí está el desglose del código:

```typescript
export function hello(): string {
  return 'Hello, World!';
}

