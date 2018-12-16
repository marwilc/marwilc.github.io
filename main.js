let data;           // variable global del array custom
let mayor = 0;      // verifica el array mayor
$(document).ready(
    data = $.getJSON("letters.json", function( data ) {
        console.log(data);
    })
);


/**
 * Limpia la entrada de datos
 */
function limpiar() {

    console.log('clear');
    document.getElementById('input').value = '';
    document.getElementById('output').innerHTML = '';


}

/**
 * Genera la salida alternativa de la palabra introducida
 */
function alternates() {

    let input =  document.getElementById('input').value;
    let arraySubstring = input.split(" ");
    // construimos un json con las letras especificas 
    let Json = buildOutput(data.responseJSON, arraySubstring);

    // imprimimos los resultados
    for (let i = 0; i < mayor; i++ ) {
        for (let j = 0; j < Json.arrays.length; j++) {
            // let rand1 = getRandomInt(mayor, 0);
            // let rand2 = getRandomInt(mayor, 0);
            let item = Json.arrays[j][i];
            if(item !== undefined){
                document.getElementById('output').innerHTML +=  `${item} `;
            }else{
                document.getElementById('output').innerHTML +=  `${Json.arrays[j][0]} `;
            }

        }

        // imprimimos un salto de linea para cada iteracion 
        document.getElementById('output').innerHTML += '<br>';
    }
}

/**
 * Obtiene los arrays necesarios para mostrar las combinaciones de las letras
 * @param {*} letters - parametro de tipo json que contiene todo los arrays 
 *                      necesarios para construir las combinaciones de las letras 
 */
function buildOutput(letters, arrays) {

    console.log(letters, arrays);
    mayor = 0;
    let input = '';
    for(let i = 0; i < arrays.length; i++){
        input += arrays[i];
    }
    
    console.log(input);
    let Indices = {
        'arrays' : []
    };
    Indices.arrays = new Array(input.length);
    for (let i = 0; i < input.length; i++ ){
        let object = letters.find( x => x.name === input[i].toLowerCase());
        console.log(object);
        let alt = object.alternates;
        if(alt.length > mayor){
            mayor = alt.length;
        }
        Indices.arrays[i] = alt;
    }
    console.log(Indices);

    return Indices;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
