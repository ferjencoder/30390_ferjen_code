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

  console.log(id);
  console.log(arrayProducto);

  arrayProducto.push(id);

  let pval = '';

  for (i = 0; i < arrayProducto.length; i++) {
    pval = pval + arrayProducto[i];
    // pval = pval + arrayProducto[i] + '<br/>';
  }

  // display array data
  document.getElementById('pText').innerHTML = pval;
  console.log(arrayProducto);
}
