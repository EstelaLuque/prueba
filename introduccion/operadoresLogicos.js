/* operadores logicos
    && And
    || Or
    ! NOT
*/

const nombre = 'Estela';
const edad = 26;
const tieneEntrada = 'true';
const tienePermiso = 'true';

// EJEMPLO 1 - &&
const entra = edad >= 18 && tieneEntrada;
console.log('Acceso: '+ entra);

// EJEMPLO 2 - ||
const entrar = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('Acceso: '+ entrar);

// EJEMPLO 3 - !
const variable = false;
console.log(!variable);