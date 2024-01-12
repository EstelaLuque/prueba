const personaArreglo = ['Estela', 27, 'correo@gmail.com', true, true];
// adiferencia de un arreglo y un objeto en un areglo no se puede saber que cosa tenemos almacenado pero en un objeto si se puede organizar

const persona = {
    nombre: 'Estela',
    edad: 26,
    correo: 'correo@gmail.com',
    suscriptores: {
        web: true,
        correo: true,
    },
    coleresFavo:['Negro', 'Rojo'],
    saludo: function(){
        alert('Hola!');
    },
};

console.log(persona.nombre);
console.log(persona['edad']);


 const variable = 'suscriptores';
 console.log(persona.suscriptores.correo);

 //AGREGAR AL OBJETO
 persona.pais = 'Bolivia';
 //sobre escribimos a pais
 persona.pais = 'España';
 console.log(persona);

 //para ingresar a funcion  saludo: function(){  alert('Hola!'); },
 persona.saludo();