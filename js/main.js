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
        case  '*':
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
    try {
        result = eval(input);
    }catch (e) {
        result = 'Expression invalida';
    }
    return result;
}

$(document).ready(function ( ) {
    /* Esta funcion cambia del color del
    * */
    $('#selector').change(function(){
        let select = $(this).children('option:selected').val();
        console.log(select);
        $('.grid-container').removeClass('azul');
        $('.grid-container').removeClass('gris');
        $('.grid-container').removeClass('rojo');
        $('.grid-container').addClass(select);
    });


/*
    $('#tecla_0').click(function () {
        var  cadena = $('#display').value;
        $('#display').val(cadena + '0');
    });
    */
});