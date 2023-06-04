const codeTxt = document.getElementById( 'codeTxt' );
let inputLength = parseInt( document.getElementById( 'inputLength' ).value ) || 15;
console.log( inputLength );

const passChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkLmnpqrstuvwxyz!+*-!+*-!+*-!+*-!+*-!+*-!+*-!+*-!+*-12345678901234567890123456789';

const btnCopy = document.getElementById( 'btnCopy' );
const messageCopied = document.getElementById( 'messageCopied' );


function removePlaceholder () {
  inputLength.removeAttribute( 'placeholder' );
}

function restorePlaceholder () {
  inputLength.setAttribute( 'placeholder', '15' );
}

function copyToClipboard () {
  navigator.clipboard.writeText( codeTxt.textContent );
  messageCopied.classList.remove( 'opacity-0' );
}

function generatePassword () {
  inputLength = parseInt( document.getElementById( 'inputLength' ).value ) || 15;
  console.log( inputLength );

  messageCopied.classList.add( 'opacity-0' );
  let passGen = '';
  codeTxt.textContent = '';

  for ( let i = 0; i < inputLength; i++ ) {
    passGen += passChars.charAt( Math.floor( Math.random() * passChars.length ) );
  }

  codeTxt.textContent = passGen;
}

document.getElementById( 'btnCopy' ).addEventListener( 'click', copyToClipboard );
document.getElementById( 'btnNew' ).addEventListener( 'click', generatePassword );
document.getElementById( 'codeTxt' ).addEventListener( 'click', copyToClipboard );
