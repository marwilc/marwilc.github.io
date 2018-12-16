
function limpiar() {

    console.log('clear');
    document.getElementById('input').value = ' ';
    document.getElementById('output').innerHTML = ' ';


}

function alternates() {
    console.log('clear');
    let input =  document.getElementById('input').value;
    let Indices = new Array(input.length);

    for (let i = 0; i < Indices.length; i++ ){
        Indices[i] = new Array(4);
        Indices[i][0] = input[i];
        document.getElementById('output').innerHTML += Indices[i][0] + ' = ';

        for (let j = 1; j <= 3; j++){
            Indices[i][j] =  ` [${Indices[i][0]} - alt ${j}] `;
            document.getElementById('output').innerHTML +=  Indices[i][j];
        }

        document.getElementById('output').innerHTML += '<br>';
    }

    Indices = null;
}
