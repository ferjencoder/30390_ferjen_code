//<<<< YEAR
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//<<<< DESAFIO COMPPLEMENTARIO #2

function pushData() {
  tipoSeleccionado = document.getElementById('tipo').value;
  materialSeleccionado = document.getElementById('material').innerHTML;
  productorSeleccionado = document.getElementById('productor').innerHTML;

  //console.log(tipoSeleccionado);

  const nuevoProducto = {
    id: document.getElementById('id').value,
    numeroProducto: document.getElementById('numeroProducto').value,
    productor: productorSeleccionado,
    tipo: tipoSeleccionado,
    codigoTipo: document.getElementById('codigoTipo').value,
    alto: document.getElementById('alto').value,
    ancho: document.getElementById('ancho').value,
    material: materialSeleccionado,
    color1: document.getElementById('color1').value,
    color2: document.getElementById('color2').value,
    precio: document.getElementById('precio').value,
    imagenProducto: document.getElementById('imagenProducto').src,
  };
  console.log({ nuevoProducto });
}
