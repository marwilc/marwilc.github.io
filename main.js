/**
 *  function que captura las teclas
 */
let f = false;
let expresion = '';
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
        case  '(':
        case  ')':
        case  ',':
            // obtiene el input pantalla y le asigna la tecla
            document.getElementById('display').value = input + tecla;
            expresion += tecla; //para la funcion eval
            break;
        case  '=':
            console.log(expresion);
            let result = operar(expresion);
            document.getElementById('display').value = result;
            // efectuar operation
            break;
        case  'C':
            document.getElementById('display').value = '';
            expresion = '';
            break;

        case  'del':
            // obtiene el substring de una cadena
            let res = input.substring(0,input.length-1);
            console.log(res);
            document.getElementById('display').value = res;
            expresion = expresion.substring(0,expresion.length-1);
            break;
        case  'PI':
            document.getElementById('display').value += String.fromCharCode(928);
            expresion += 'Math.PI';
            console.log(expresion);
            break;
        case  'E':
            document.getElementById('display').value += 'e ';
            expresion += 'Math.exp';

            console.log('e');
            break;

        case  'POW':
            document.getElementById('display').value += 'pow ';
            expresion += 'Math.pow ' ;

            console.log('pow');
            break;

        case  'ABS':
            document.getElementById('display').value += 'abs ';
            expresion += 'Math.abs ' ;

            console.log('abs');
            break;

        case  'SEN':
            document.getElementById('display').value += 'sen ';
            expresion += 'Math.sin ' ;
            console.log('sen');
            break;

        case  'COS':
            document.getElementById('display').value += 'cos ';
            expresion += 'Math.cos ' ;
            console.log('cos');
            break;

        case  'TAN':
            document.getElementById('display').value += 'tan ';
            expresion += 'Math.tan ' ;
            console.log('tan');
            break;

        case  'LOG10':
            document.getElementById('display').value += 'log10 ';
            expresion += 'Math.log10 ' ;
            console.log('log10');
            break;

        case  'LOG2':
            document.getElementById('display').value += 'log2 ';
            expresion += 'Math.log2 ' ;
            console.log('log2');
            break;

        case  'LN':
            document.getElementById('display').value += 'ln ';
            expresion += 'Math.log ' ;
            console.log('ln');
            break;

        case  'SQRT':
            document.getElementById('display').value += String.fromCharCode(8730);
            expresion += 'Math.sqrt ' ;
            console.log('ln');
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
    if(input.length !== 0){
        try {
            result = eval(input);
        }catch (e) {
            result = 'Expression invalida';
        }
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
