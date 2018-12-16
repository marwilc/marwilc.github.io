var data;
var mayor = 0;
$(document).ready(
    data = $.getJSON("letters.json", function( data ) {
        console.log(data);
    })
);



function limpiar() {

    console.log('clear');
    document.getElementById('input').value = ' ';
    document.getElementById('output').innerHTML = ' ';


}

function alternates() {

    let Json = buildOutput();

    for (let i = 0; i < mayor; i++ ) {
        for (let j = 0; j < Json.arrays.length; j++) {
            let item = Json.arrays[j][i];
            if(item !== undefined){
                document.getElementById('output').innerHTML +=  `${item} `;
            }else{
                document.getElementById('output').innerHTML +=  '   ---   ';
            }

        }

        document.getElementById('output').innerHTML += '<br>';
    }
}

function buildOutput() {

    let letters = data.responseJSON;
    let input =  document.getElementById('input').value;
    let Indices = {
        'arrays' : []
    };
    Indices.arrays = new Array(input.length);
    for (let i = 0; i < input.length; i++ ){
        let alt = letters.find( x => x.name === input[i].toLowerCase()).alternates;
        if(alt.length > mayor){
            mayor = alt.length;
        }
        Indices.arrays[i] = alt;
    }
    console.log(Indices);
    return Indices;
}
