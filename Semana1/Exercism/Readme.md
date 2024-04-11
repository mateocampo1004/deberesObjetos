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

(`---`)


// HELLO-WORLD

### Función de Saludo en TypeScript

El siguiente código TypeScript define una función `hello` que simplemente devuelve la cadena `'Hello, World!'`. 

export: Esta palabra clave indica que la función hello será accesible fuera de este módulo TypeScript, lo que significa que puede ser importada y utilizada en otros archivos TypeScript si es necesario.

function hello(): string { ... }: Define una función llamada hello que no toma ningún argumento y devuelve una cadena. La declaración (): string después del nombre de la función indica que esta función devuelve un valor de tipo string.

return 'Hello, World!';: Dentro de la función, se utiliza la declaración return para devolver la cadena 'Hello, World!'. Cuando la función hello se llama, esta cadena será el resultado que se obtiene.


```typescript
export function hello(): string {
  return 'Hello, World!';
}

