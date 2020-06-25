// spread-rest

// Condiseraciones basicas
//
// ------- Spread: Expande valores (string, matrices) donde se esperan argumentos (funciones) o elementos (matrices)

const numeros = [1, 2, 3, 4, 5, 6];
console.log(typeof numeros); // [ 1, 2, 3, 4, 5, 6 ] --> objeto
console.log(...numeros); // 1 2 3 4 5 6 --> digito por digito

const oracion = "Cerro Avila";
console.log(...oracion); // C e r r o   A v i l a --> letra por letra

// Destructurando para pasar parametros
//
// Toma cada posicion del arry y lo pasa como parametros,
// la funcion espera 6 parametros y el array posee 6 posiciones
console.log("// Destructurando para pasar parametros");
sumar = (q, w, e, r, t, y) => q + w + e + r + t + y;
console.log(sumar(...numeros));

// Destructurando los parametros quedaria asi
resta = ([q, w, e, r, t, y] = numeros) => y - t - r - e - w - q;
console.log(resta(numeros));

// En ES5 se usaria el apply cuya funcion es sobre escribir
// el objeto this con el valor que pasa como parametro
// en este caso pasamos null para no sobre escribir el this
//
console.log(sumar.apply(null, numeros));

// Otro uso posible del spread es la clonacion
// IMPORTANTE se crea otro objeto nuevo no es un referencia
//
console.log("// Clonar matrices y objetos");
const numerosCopia = [...numeros]; // enrte parentesis se crea un array
numerosCopia.push(12414);
console.log(numeros, numerosCopia);

const personaImportante = { nombre: "Adan", profesion: "Encargado del Eden" };
const personaImportanteCopia = { ...personaImportante }; //Las llaves para indicar un objeto
personaImportanteCopia.edad = 35;
console.log(
  `La nueva persona importante tiene: ${personaImportanteCopia.edad} anios`
);

// Tambien podemos fusionar objetos
//
console.log("// Tambien podemos fusionar objetos");
const preferencias = { hobbie: "caminar", comida: "cereales" };
const persona = { ...personaImportante, ...preferencias };
console.log(persona);

// ------- rest: representa un numero infinito de argumento como matriz donde
// se espere(function)
//
// el SPREAD envia una matriz u objeto, separado
// el REST espera, lo que venga y lo empaqueta en una matriz
//
// La funcion total empaqueta en parametros todo lo que se le envie
// gracias al rest, en el llamado de la funcion hay spread para desempacar
// los arrays
//

total = (...parametros) => parametros.reduce((row, total) => row + total);

const cantidades = [56, 89, 43, 45, 78];
console.log(total(...numeros, ...[12 * 10], ...cantidades, 12, 414, 122));


// Un caso paractico al estilo Vuejs seria
//
const mapState = { //objeto construido en un fetch a un api
  loggedIn: (data) => true,
  isVIP: () => false
}

const computed = {
  ...mapState,
  computedProp(){
    return null
  }
}
