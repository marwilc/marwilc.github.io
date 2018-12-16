let data;
let mayor = 0;
$(document).ready(
    data = $.getJSON("arrays/letters.json", function( data ) {
        console.log(data);
    })
);



function limpiar() {

    console.log('clear');
    document.getElementById('input').value = '';
    document.getElementById('output').innerHTML = '';


}

function alternates() {

    let Json = buildOutput(data.responseJSON);

    for (let i = 0; i < mayor; i++ ) {
        for (let j = 0; j < Json.arrays.length; j++) {
            let item = Json.arrays[j][i];
            if(item !== undefined){
                document.getElementById('output').innerHTML +=  `${item} `;
            }else{
                document.getElementById('output').innerHTML +=  `--- `;
            }

        }

        document.getElementById('output').innerHTML += '<br>';
    }
}

function buildOutput(letters) {

    console.log(letters);
    mayor = 0;

    let input =  document.getElementById('input').value;
    let Indices = {
        'arrays' : []
    };
    Indices.arrays = new Array(input.length);
    for (let i = 0; i < input.length; i++ ){
        let object = letters.find( x => x.name === input[i].toLowerCase());
        console.log(object);
        let alt = object.alternates;
        console.log(object);
        if(alt.length > mayor){
            mayor = alt.length;
        }
        Indices.arrays[i] = alt;
    }
    console.log(Indices);

    return Indices;
}
