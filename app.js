//<<<< DESAFÍO ENTREGABLE #1
//* by: ferJen

//<<< COFFEE CAPUCHINO SHOPPING LIST
/* RECETAS https://www.cocinafacil.com.mx/recetas/recetas-latte/ */

document.querySelector('.btnDesafio').addEventListener('click', function () {
  let cafeElegido = parseInt(prompt('Elegí el café que deseas preparar: \n🔴 Capuchino de Canela => ingresar 1 \n🟢 Capuchino de Matcha => ingresar 2 \n🟣 Capuchino de Lavanda => ingresar 3'));

  if (!cafeElegido && !cafeElegido.value) {
    //first cancel btn
  } else if (isNaN(cafeElegido)) {
    alert('El valor ingresado no es un número.\nRecuerde ingresar:\n🔴 Capuchino de Canela => ingresar 1 \n🟢 Capuchino de Matcha => ingresar 2 \n🟣 Capuchino de Lavanda => ingresar 3');
  } else if (cafeElegido) {
    if (cafeElegido == 1 || cafeElegido == 2 || cafeElegido == 3) {
      let porciones = parseInt(prompt('Para cuantas personas desea preparar capuchino?'));

      if (!porciones && !porciones.value) {
        //second cancel btn
      } else if (isNaN(porciones)) {
        alert('El valor ingresado no es un número. Debe ingresar el número de la cantidad de personas a las que va a servir Lattes.');
      } else {
        switch (cafeElegido) {
          case 1:
            alert(`Para preparar 🔴 Capuchinos de Canela, vas a necesitar: \n ${20 * porciones} ml de leche \n ${25 * porciones} ml de leche condensada \n ${1 * porciones}pizcas de canela\n ${150 * porciones} ml de café \n Que disfrutes ☕!`);
            break;
          case 2:
            alert(`Para preparar 🟢 Capuchinos de Matcha, vas a necesitar: \n ${200 * porciones} ml de leche \n ${100 * porciones} ml de agua \n ${15 * porciones} gr de té matcha \n ${1 * porciones} cucharaditas de caramelo \n Que disfrutes ☕!`);
            break;
          case 3:
            alert(`Para preparar 🟣 Capuchinos de Lavanda, vas a necesitar: \n ${15 * porciones} flores de lavanda \n ${5 * porciones} cucharaditas de miel \n ${200 * porciones} ml de leche de almendras \n ${3 * porciones} gotitas de escencia de vainilla \n Que disfrutes ☕!`);
            break;
        }
      }
    } else {
      alert('Sólo es posible ingresar un número del 1 al 3 para seleccionar las opciones de Capuchino.');
    }
  }
});

//<<< PASS GEN

document.querySelector('.btnSiguiente').addEventListener('click', function () {
  // const inputWebSite = prompt('Ingrese el sitio para el que desea generar una contraseña.');
  const inputLength = prompt('Para contraseñas seguras se recomienda que tengan entre 8 y 12 caracteres.\nCuantos caracteres desea que tenga la contraseña?');
  // const inputSymbols = prompt('Ingrese 4 symbolos para mayor seguridad.\nPuede elegir entre ! # + *.');
  const passChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!+*-0123456789';
  let passGen = '';

  for (let i = 0; i <= inputLength; i++) {
    // let randomNumber = Math.trunc(Math.random() * 9) + 1;
    passGen += passChars.charAt(Math.floor(Math.random() * passChars.length));
  }
  alert(`La contraseña creada es: ${passGen}`);
});
