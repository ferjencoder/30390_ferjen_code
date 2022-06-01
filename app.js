//<<<< YEAR
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//<<<< DESAFIO COMPPLEMENTARIO #2
// Crear un array

let arrayProducto = [];

function pushData() {
  console.log(arrayProducto);
  let id = document.getElementById('id').value;

  console.log(id);
}

function pushData() {
  let id = document.getElementById('id').value;
  let numeroProducto = document.getElementById('numeroProducto').value;
  let productor = document.getElementById('productor').value;
  let tipo = document.getElementById('tipo').value;
  let codigoTipo = document.getElementById('codigoTipo').value;
  let alto = document.getElementById('alto').value;
  let ancho = document.getElementById('ancho').value;
  let material = document.getElementById('material').value;
  let color1 = document.getElementById('color1').value;
  let color2 = document.getElementById('color2').value;
  let precio = document.getElementById('precio').value;
  //let imagenProducto = document.getElementById('imagenProducto').src;

  console.log(id);
  console.log(arrayProducto);

  arrayProducto.push(id);
  // arrayProducto.push(id, numeroProducto, productor, tipo, codigoTipo, alto, ancho, material, color1, color2, precio, imagenProducto);

  let pval = '';

  for (i = 0; i < arrayProducto.length; i++) {
    pval = pval + arrayProducto[i] + '<br/>';
  }

  // display array data
  document.getElementById('pText').innerHTML = pval;
  console.log(arrayProducto);
}

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

// //NEW TRY
// class Producto {
//   constructor(objLit) {
//     this.id = objLit.id;
//     this.numeroProducto = objLit.numeroProducto;
//     this.productor = objLit.productor;
//     this.tipo = objLit.tipo;
//     this.codigoTipo = objLit.codigoTipo;
//     this.alto = objLit.alto;
//     this.ancho = objLit.ancho;
//     this.material = objLit.material;
//     this.color1 = objLit.color1;
//     this.color2 = objLit.color2;
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

// function pushData() {

//   let id = document.getElementById('id').value;
//   let numeroProducto = document.getElementById('numeroProducto').value;
//   let productor = document.getElementById('productor').value;
//   let tipo = document.getElementById('tipo').value;
//   //let codigoTipo = document.getElementById('codigoTipo').value;
//   let alto = document.getElementById('alto').value;
//   let ancho = document.getElementById('ancho').value;
//   let material = document.getElementById('material').value;
//   //let color1 = document.getElementById('color1').value;
//   //let color2 = document.getElementById('color2').value;
//   let precio = document.getElementById('precio').value;
//   let imagenProducto = document.getElementById('thumbnailProducto').src;

//   let nuevoProductoArray = [];

//   nuevoProductoArray = nuevoProductoArray.push(id, numeroProducto, productor, tipo, codigoTipo, alto, ancho, material, color1, color2, precio, imagenProducto);
//   console.log(nuevoProductoArray);

//   console.log(id);
//   console.log(arrayProductos);

//   let pval = '';

//   for (i = 0; i < arrayProductos.length; i++) {
//     pval = pval + arrayProductos[i] + '<br/>';
//   }

//   // display array data
//   document.getElementById('pText').innerHTML = pval;
//   console.log(arrayProductos.id);
// }
