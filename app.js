//<<<< DESAFÍO ENTREGABLE #1 - 220524

document.querySelector('.btnDesafio').addEventListener('click', function () {
  const costoAPropinar = parseInt(prompt('Ingrese el costo de su cena'));
  const porcentajePropinador = parseFloat(prompt('Ingrese el número del porcentaje de propina que desea dejar, por ej. ingresar el número 10 si desea dejar 10% de propina'));
  const cantidadDePersonas = prompt('Ingrese la cantidad de personas que van a cenar');

  let propina = '';
  let costoTotal = '';

  propina = costoAPropinar * (porcentajePropinador / 100);
  costoTotal = costoAPropinar + propina;
  costoPorPersona = costoTotal / cantidadDePersonas;

  alert(`La propina es: ${propina}`);
  alert(`El costo total es: ${costoTotal}`);
  alert(`El costo por persona incluida la propina es: ${costoPorPersona}`);
});
