function teclear(tecla){
    let  input = $('#display').val();
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
        case  'X':
        case  '-':
        case  '+':
            $('#display').val(input + tecla);
            break;
        case  '=':
            let result = operar(input);
            $('#display').val(result);
            // efectuar operation
            break;
        case  'C':
            $('#display').val('');
            break;
    }
}

function operar(input){
    let result = 0;

    return result;
}

$(document).ready(function ( ) {


/*
    $('#tecla_0').click(function () {
        var  cadena = $('#display').value;
        $('#display').val(cadena + '0');
    });
    */
});