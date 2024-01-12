//texto
const nombre = 'estela';
const parrafo = 'esto es un parrafo';
// si queremos poner comillas en el parrafo afuera comillas sencillas y dentro comillas dobles y viceversa
const parrafo2 = 'esto es un "parrafo"'; 
//numero
const num = 1;
//boolean
const usuarioconectado = true;
const mayorque = 1 > 2;
console.log(mayorque);
//Array
const arreglo = [1, 10 , 5];
const arreglo1 = ['texto', 456, true, { propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo1);

//Objeto
const persona = {
    nombre: 'Estela',
    edad: 27,
    carro: {
        marca: '...',
        color: 'negro',
    },
};
console.log(persona.carro.color);

//function
function hola(){
console.log('hola mundo')
}

hola();

//null 
const miVariable = null;

//Undefined indica que un valor no es definido
const miVariable2 = undefined;