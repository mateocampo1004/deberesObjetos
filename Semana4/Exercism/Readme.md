## Función isLeap

La función `isLeap` determina si un año dado es un año bisiesto. Un año es bisiesto si cumple las siguientes condiciones:
- Es divisible por 4.
- No es divisible por 100, a menos que también sea divisible por 400.

### Implementación

```typescript
export function isLeap(year: number) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

### Explicación del Código

```markdown
1. **Divisibilidad por 4**:
    
    ```typescript
    year % 4 === 0
    ```
    Un año es bisiesto si es divisible por 4. Este es el primer criterio que la función verifica.
    
2. **Exclusión de múltiplos de 100, excepto múltiplos de 400**:
    
    ```typescript
    (year % 100 !== 0 || year % 400 === 0)
    ```
    Si el año es divisible por 100, no es un año bisiesto a menos que también sea divisible por 400. Esta condición asegura que años como 1900 no sean considerados bisiestos, mientras que años como 2000 sí lo sean.


### Función toRna

La función `toRna` convierte una secuencia de ADN en su equivalente ARN.

```typescript
export function toRna(sequence: string): string {
    return sequence
      .split('') // Divide la secuencia de ADN en sus nucleótidos individuales.
      .map(nucleotide => {
        switch(nucleotide) {
          case 'G':
            return 'C' // Si el nucleótido es 'G', se convierte en 'C'.
          case 'C':
            return 'G' // Si el nucleótido es 'C', se convierte en 'G'.
          case 'T':
            return 'A' // Si el nucleótido es 'T', se convierte en 'A'.
          case 'A':
            return 'U' // Si el nucleótido es 'A', se convierte en 'U'.
          default:
            throw new Error('Invalid input DNA.') // Si el nucleótido no es uno de los válidos, se lanza un error.
        }
      })
      .join('') // Une los nucleótidos convertidos para formar la cadena de ARN resultante.
}
```

#### Explicación del Código

La función `toRna` toma una secuencia de ADN como entrada y realiza las siguientes transformaciones:

- `'G'` se convierte en `'C'`.
- `'C'` se convierte en `'G'`.
- `'T'` se convierte en `'A'`.
- `'A'` se convierte en `'U'`.

La función divide la secuencia de ADN en sus nucleótidos individuales usando el método `split('')`.
Luego, mapea cada nucleótido según las reglas de conversión de ADN a ARN usando el método `map`.
Finalmente, une los nucleótidos convertidos para formar la cadena de ARN resultante usando el método `join('')`.

Cualquier otro carácter de entrada que no sea uno de los cuatro nucleótidos válidos (G, C, T, A) resultará en un error, que se maneja mediante la instrucción `throw new Error('Invalid input DNA.')`.

