// Asi seria en el tiempo pasado
// const base = newSkill[0];
// const intermedio = newSkill[1];
// const requerido = newSkill[2];
// const deseable = newSkill[3];
// const seguro = newSkill[4];

//
// Consideraciones basicas
// -----------------------
//
// las varibales sobrantes tomaran el valor de undefined
// const [base, intermedio, requerido, deseable, seguro, other] = newSkill
// console.log(base, deseable, other);
// -----> salida: javascript, React, undefined
//
// Tambien podemos indicar explicitamente lo que requerimos
// const [base,, requerido,, ] = newSkill
// console.log(base, requerido)
// -----> salida: javacript Webpack
//
// Los tres puntos seguidos serian el resto del array
// refiriendose a lo no asignado
// const [base, ...todoLoDemaPs] = newSkill
// console.log(base, todoLoDemas)
// -----> salida: javacript [ 'Vuejs', 'Webpack', 'React', 'Nodejs' ]

// Destructurando un array
//
const newSkill = ["javacript", "Vuejs", "Webpack", "React", "Nodejs"];
const [base, intermedio, requerido, deseable, seguro] = newSkill;
console.log('// Destructurando un array');
console.log(base, intermedio, requerido, deseable, seguro);

// Destructurando un string
//
const direccionPrincipal =
  "Edo Miranda, Municipio Guaicaipuro, Los Teques, calle 19 de abril casa #24";
const [estado, municipio, parroquia, ubicacion] = direccionPrincipal.split(",");
console.log('// Destructurando un string');
console.log(estado, municipio, parroquia);

const url = "https://developer.mozilla.org/en-US/Web/JavaScript";

const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
const [, protocol, fullhost, fullpath] = parsedURL;

console.log(fullpath);

// Destructurando un objeto
//
const laptop = {
  marca: "Lenovo",
  descripcion: "negra, 14 pulgadas, teclado en ingles, sin cd, cargador",
  Memoria: "4 gygas",
  hd: "500 gygas",
  software: {
    os: {
      nombre: "Linux mint",
      version: "19 - lisa",
    },
    dev: {
      work: "php",
      hobbie: "javascript",
    },
  },
};

const {
  marca,
  descripcion,
  memoria,
  hd,
  software: {dev: softwareDev},
  propietario = "pedro",//valor por defecto
} = laptop;
console.log('// Destructurando un objeto');
console.log(propietario, descripcion, softwareDev,softwareDev.hobbie);

// Destructurando argumentos en funciones
//
console.log('// Destructurando argumentos en funciones');
// ES5:
function saludar(options){
  options = options === undefined ? {} : options;
  var saludo = options.saludo === undefined ? 'Hola':options.saludo
  var nombre = options.nombre === undefined? 'Fulano':options.nombre
  var mensaje = options.mensaje === undefined?'cuidate':options.mensaje

  console.log(saludo+' '+nombre+' '+mensaje);
}
saludar({
  saludo: 'Epale'
})

// ES2015
// Se destructura primero un objeto en blanco a variables con 
// variables por valores por defecto
saludar = ({saludo='Hola', nombre='Fulano',mensaje='regresa pronto'} = {}) => {
  console.log(`${saludo} ${nombre}, ${mensaje}.`);
}
saludar({
  saludo: 'Epale',
  nombre: 'Pedro Antonio',
  mensaje: 'tu puedes!!!',
})

