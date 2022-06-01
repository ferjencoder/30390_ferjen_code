//<<<< YEAR
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//<<<< DESAFÍO ENTREGABLE #1 - 220524
// document.querySelector('.btnDesafio').addEventListener('click', function () {
//   const costoAPropinar = parseInt(prompt('Ingrese el costo de su cena'));
//   const porcentajePropinador = parseFloat(prompt('Ingrese el número del porcentaje de propina que desea dejar, por ej. ingresar el número 10 si desea dejar 10% de propina'));
//   const cantidadDePersonas = prompt('Ingrese la cantidad de personas que van a cenar');

//   let propina = '';
//   let costoTotal = '';

//   propina = costoAPropinar * (porcentajePropinador / 100);
//   costoTotal = costoAPropinar + propina;
//   costoPorPersona = costoTotal / cantidadDePersonas;

//   alert(`La propina es: ${propina}`);
//   alert(`El costo total es: ${costoTotal}`);
//   alert(`El costo por persona incluida la propina es: ${costoPorPersona}`);
// });

//<<< PASS GEN
// document.querySelector('.btnSiguiente').addEventListener('click', function () {
//   // const inputWebSite = prompt('Ingrese el sitio para el que desea generar una contraseña.');
//   const inputLength = prompt('Para contraseñas seguras se recomienda que tengan entre 8 y 12 caracteres.\nCuantos caracteres desea que tenga la contraseña?');
//   // const inputSymbols = prompt('Ingrese 4 symbolos para mayor seguridad.\nPuede elegir entre ! # + *.');
//   const passChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!+*-0123456789';
//   let passGen = '';

//   for (let i = 0; i <= inputLength; i++) {
//     if (!inputLength && !inputLength.value) {
//       // cancel btn
//     } else {
//       passGen += passChars.charAt(Math.floor(Math.random() * passChars.length));
//     }
//   }
//   alert(`La contraseña creada es: ${passGen}`);
// });

//<<< ACTIVA EL MODAL
// const myModal = document.getElementById('myModal');
// const myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });

//<<<< DESAFIO COMPPLEMENTARIO #2

// class Producto {
//   constructor(objLit) {
//     this.id = objLit.id.toUpperCase();
//     this.tipo = objLit.tipo;
//     this.tamaño = objLit.tamaño;
//     this.material = objLit.material;
//     this.color = objLit.color;
//     this.precio = objLit.precio;
//     this.stock = objLit.stock; //! agregar function para evaluar stock
//   }
//   mostrarInfo() {
//     console.log(this.id + ' ' + this.tipo + ' ' + this.tamaño + ' ' + this.material + ' ' + this.color + ' ' + this.precio + ' ' + this.stock);
//   }
// }

// const river = [];

// for (const producto of productos) {
//   river.push(new Jugador(jugador));
// }

// console.log(river);
// //buscar indice del jugador con camiseta 3
// let indice = river.findIndex((j) => j.camiseta == 3);
// console.log(indice);

// //Ejercico 2
// /*Codificar una función con la siguiente cabecera:
// buscarJugador(equipo, jugador). En ella, se recibe
// por parámetro un array de jugadores (objetos
// instanciados empleando la clase Jugador), y el nombre
// de un jugador. La función retorna el jugador que
// coincide con el nombre. Informar!
// */

// function buscarJugador(equipo, jugador) {
//   let encontrado = equipo.find((jug) => jug.nombre == jugador);
//   return encontrado;
// }

// let nombre = prompt('Ingrese el nombre y apellido del jugador a buscar').toUpperCase();
// const resultado = buscarJugador(river, nombre);
// if (resultado == undefined) {
//   console.log('Jugador no encontrado!');
// } else {
//   resultado.mostrarInfo();
// }

// //Ejercicio 3
// /*
// Codificar una función con la siguiente cabecera:
// filtroJugadores(equipo, edad). En ella, se recibe
// un array de jugadores y una edad. La función retorna
// los jugadores cuya edad coincide con el segundo parámetro.
//  */

// function filtroJugadores(equipo, edad) {
//   const listaFiltro = equipo.filter((jug) => jug.edad == edad);
//   return listaFiltro;
// }

// let edad = parseInt(prompt('Ingrese la edad a buscar'));
// const listaJug = filtroJugadores(river, edad);
// if (listaJug.length != 0) {
//   for (const jugador of listaJug) {
//     jugador.mostrarInfo();
//   }
// } else {
//   console.log('No hay jugadores de esa edad!');
// }

// create an array
// let myArr = ['A', 'B', 'C', 'D'];

// function pushData() {
//   console.log(myArr);
//   let id = document.getElementById('id').value;

//   console.log(id);
// }

// function pushData() {
//   let idProducto = document.getElementById('id').value;

//   console.log(idProducto);
//   console.log(myArr);

//   myArr.push(idProducto);

//   let pval = '';

//   for (i = 0; i < myArr.length; i++) {
//     pval = pval + myArr[i] + '<br/>';
//   }

//   // display array data
//   document.getElementById('pText').innerHTML = pval;
//   console.log(myArr);
// }

// class Producto {
//   constructor(objLit) {
//     this.id = objLit.id.toUpperCase();
//     this.numeroProducto = objLit.numeroProducto;
//     this.productor = objLit.productor.toLowerCase();
//     this.tipo = objLit.tipo.toUpperCase();
//     this.codigoTipo = objLit.codigoTipo.toLowerCase();
//     this.alto = objLit.alto;
//     this.ancho = objLit.ancho;
//     this.material = objLit.material.toUpperCase();
//     this.color1 = objLit.color1.toUpperCase();
//     this.color2 = objLit.color2.toUpperCase();
//     this.precio = objLit.precio;
//     this.imagenProducto = objLit.imagenProducto;
//   } //! agregar function para evaluar stock

//   mostrarProducto() {
//     console.log(this.id + ' ' + this.numeroProducto + ' ' + this.productor + ' ' + this.tipo + ' ' + this.codigoTipo + ' ' + this.alto + ' ' + this.ancho + ' ' + this.material + ' ' + this.color1 + ' ' + this.color2 + ' ' + this.precio + ' ' + this.imagenProducto);
//   }
// }

// // Mostrar todos los productos
// const arrayProductos = [];
// for (const producto of productos) {
//   arrayProductos.push(new Producto(producto));
// }
// console.log(arrayProductos);
// console.log(document.getElementById('id').value);

// // Tomar datos del formulario y crear producto

// let id = document.getElementById('id').value;
// let numeroProducto = document.getElementById('id').value;
// let productor = document.getElementById('id').value;
// let tipo = document.getElementById('id').value;
// let codigoTipo = document.getElementById('id').value;
// let alto = document.getElementById('id').value;
// let ancho = document.getElementById('id').value;
// let material = document.getElementById('id').value;
// let color1 = document.getElementById('id').value;
// let color2 = document.getElementById('id').value;
// let precio = document.getElementById('id').value;
// let imagenProducto = document.getElementById('id').value;

// const nuevoProducto = new Producto({
//   id: id,
//   numeroProducto: numeroProducto,
//   productor: productor,
//   tipo: tipo,
//   codigoTipo: codigoTipo,
//   alto: alto,
//   ancho: ancho,
//   material: material,
//   color1: color1,
//   color2: color2,
//   precio: precio,
//   imagenProducto: imagenProducto,
// });

// arrayProductos.push(nuevoProducto);

// console.log(nuevoProducto);
// console.log(arrayProductos);

//NEW TRY
class Producto {
  constructor(objLit) {
    this.id = objLit.id.toUpperCase();
    this.numeroProducto = objLit.numeroProducto;
    this.productor = objLit.productor.toLowerCase();
    this.tipo = objLit.tipo.toUpperCase();
    this.codigoTipo = objLit.codigoTipo.toLowerCase();
    this.alto = objLit.alto;
    this.ancho = objLit.ancho;
    this.material = objLit.material.toUpperCase();
    this.color1 = objLit.color1.toUpperCase();
    this.color2 = objLit.color2.toUpperCase();
    this.precio = objLit.precio;
    this.imagenProducto = objLit.imagenProducto;
  } //! agregar function para evaluar stock

  mostrarProducto() {
    console.log(this.id + ' ' + this.numeroProducto + ' ' + this.productor + ' ' + this.tipo + ' ' + this.codigoTipo + ' ' + this.alto + ' ' + this.ancho + ' ' + this.material + ' ' + this.color1 + ' ' + this.color2 + ' ' + this.precio + ' ' + this.imagenProducto);
  }
}

// Mostrar todos los productos
const arrayProductos = [];
for (const producto of productos) {
  arrayProductos.push(new Producto(producto));
}
console.log(arrayProductos);

function pushData() {
  console.log(arrayProductos);
}

function pushData() {
  let id = document.getElementById('id').value;
  let numeroProducto = document.getElementById('numeroProducto').value;
  let productor = document.getElementById('productor').value;
  let tipo = document.getElementById('tipo').value;
  //let codigoTipo = document.getElementById('codigoTipo').value;
  let alto = document.getElementById('alto').value;
  let ancho = document.getElementById('ancho').value;
  let material = document.getElementById('material').value;
  //let color1 = document.getElementById('color1').value;
  //let color2 = document.getElementById('color2').value;
  let precio = document.getElementById('precio').value;
  let imagenProducto = document.getElementById('thumbnailProducto').src;

  console.log(id);
  console.log(arrayProductos);

  arrayProductos.push(id, numeroProducto, productor, tipo, alto, ancho, material, precio, imagenProducto);

  let pval = '';

  for (i = 0; i < arrayProductos.length; i++) {
    pval = pval + arrayProductos[i] + '<br/>';
  }

  // display array data
  document.getElementById('pText').innerHTML = pval;
  console.log(arrayProductos);
}
