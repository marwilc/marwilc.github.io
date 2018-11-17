/**
 *  function que captura las teclas
 */
const pi = { value:  Math.PI, name: 'pi'};
function teclear(tecla){
    let  input = document.getElementById('display').value;

    switch (tecla){
        case  '0':
        case  '1':
        case  '2':
        case  '3':
        case  '4':
        case  '5':
        case  '6':
        case  '7':
        case  '8':
        case  '9':
        case  '/':
        case  '*':
        case  '-':
        case  '+':
            // obtiene el input pantalla y le asigna la tecla
            document.getElementById('display').value = input + tecla;
            break;
        case  '=':
            let result = operar(input);
            document.getElementById('display').value = result;
            // efectuar operation
            break;
        case  'C':
            document.getElementById('display').value = '';
            break;
        case  'PI':
            document.getElementById('display').value += pi.value;
            console.log(pi);
            break;
    }
}

/**
 * opera el string
 * @param input
 * @returns {any}
 */
function operar(input){
    let result = 0;
    try {
        result = eval(input);
    }catch (e) {
        result = 'Expression invalida';
    }
    return result;
}

/**
 * function que cambia el skin de la calculadora
 */
function cambiarSkin() {
    // obtiene el selector
    let selector = document.getElementById('selector');
    let selected = selector.options[selector.selectedIndex].value; // se obtiene el valor seleccionado
    console.log(selected);
    // obtiene el div de contenido de la calculadora
    let object = document.getElementById('skin');
    object.className  = 'grid-container ' + selected; // cambia la clase de la calculadora

}
