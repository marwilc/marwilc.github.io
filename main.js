let data;           // variable global del array custom
let data2;           // variable global del array custom
let mayor = 0;      // verifica el array mayor
$(document).ready(
    data = $.getJSON("letters.json", function (data) {
        console.log(data);
    }),

    data2 = $.getJSON("unicodes.json", function (data) {
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

    let input = document.getElementById('input').value;
    let arraySubstring = input.split(" ");
    // construimos un json con las letras especificas 
    let Json = buildOutput(data.responseJSON, arraySubstring);

    // imprimimos los resultados
    for (let i = 0; i < mayor; i++) {
        for (let j = 0; j < Json.arrays.length; j++) {
            // let rand1 = getRandomInt(mayor, 0);
            // let rand2 = getRandomInt(mayor, 0);
            let item = Json.arrays[j][i];
            if (item !== undefined) {
                document.getElementById('output').innerHTML += `${item} `;
            } else {
                document.getElementById('output').innerHTML += `${Json.arrays[j][0]} `;
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
    for (let i = 0; i < arrays.length; i++) {
        input += arrays[i];
    }

    console.log(input);
    let Indices = {
        'arrays': []
    };
    Indices.arrays = new Array(input.length);
    for (let i = 0; i < input.length; i++) {
        let object = letters.find(x => x.name === input[i].toLowerCase());
        console.log(object);
        let alt = object.alternates;
        if (alt.length > mayor) {
            mayor = alt.length;
        }
        Indices.arrays[i] = alt;
    }
    console.log(Indices);

    return Indices;
}
//--------------------------------- part two ------------------------------------
/**
 * 
 */
function wordToUnicode() {

    let input = document.getElementById('input2').value;
    let arraySubstring = input.split(" ");

    let unicodes='';
    for(let i = 0; i < arraySubstring.length; i++){
        unicodes += strToUnicode(arraySubstring[i]);
    }
    

    console.log(unicodes);
    console.log(arraySubstring);
    let Json = buildOutput2(data2.responseJSON, unicodes);

    console.log(Json);
   
    // imprimimos los resultados
    for (let i = 0; i < mayor; i++) {
        for (let j = 0; j < Json.arrays.length; j++) {
            // let rand1 = getRandomInt(mayor, 0);
            // let rand2 = getRandomInt(mayor, 0);
            let item = Json.arrays[j][i];
            if (item !== undefined) {
                document.getElementById('output2').innerHTML += `${item} `;
            } else {
                document.getElementById('output2').innerHTML += `${Json.arrays[j][0]} `;
            }

        }

        // imprimimos un salto de linea para cada iteracion 
        document.getElementById('output2').innerHTML += '<br>';
    }

}

/**
 * search words
 * @param {*} letters 
 * @param {*} arrays 
 */
function buildOutput2(letters, arrays) {

    console.log(letters, arrays);
    mayor = 0;
    let input = '';
    input = arrays.split("\\");

    input.splice(0,1); // delete caracter empty

    let Indices = {
        'arrays': []
    };
    Indices.arrays = new Array(input.length);
    for (let i = 0; i < input.length; i++) {

        console.log(input[i]);
        
        let object = letters.find(x => x.name === input[i]);
        console.log(object);
        let alt = object.alternates;
        if (alt.length > mayor) {
            mayor = alt.length;
        }
        Indices.arrays[i] = alt;
    }

    console.log(input);
    return Indices;

}

/**
 * 
 */
function limpiar2() {

    console.log('clear');
    document.getElementById('input2').value = '';
    document.getElementById('output2').innerHTML = '';


}


function strToUnicode(unStrng) {

    var result = "";
    for (var i = 0; i < unStrng.length; i++) {
        var partial = unStrng[i].charCodeAt(0).toString(16);
        while (partial.length !== 4) partial = "0" + partial;
        result += "\\u" + partial;
    }

    return result;

}

function strToUnicode2(arrayStr) {

    console.log(arrayStr);
    var result = "";
    for (var i = 0; i < arrayStr.length; i++) {
        var partial = arrayStr[i].toString(16);
        while (partial.length !== 4) partial = "0" + partial;
        result += "\\u" + partial;
    }

    console.log(result);

}

function getArrResult(paramArray) {

    function addTo(curr, args) {

        var i, copy,
            rest = args.slice(1),
            last = !rest.length,
            result = [];

        for (i = 0; i < args[0].length; i++) {

            copy = curr.slice();
            copy.push(args[0][i]);

            if (last) {
                result.push(copy);

            } else {
                result = result.concat(addTo(copy, rest));
            }
        }

        return result;
    }


    return addTo([], Array.prototype.slice.call(arguments));
}


/// create and mutliplay with arrys
function getArrResult2(paramArray) {

    function addTo(curr, args) {

        var i, copy,
            rest = args.slice(1),
            last = !rest.length,
            result = [];

        for (i = 0; i < args[0].length; i++) {

            copy = curr.slice();
            copy.push(args[0][i]);

            if (last) {
                result.push(copy);

            } else {
                result = result.concat(addTo(copy, rest));
            }
        }

        return result;
    }

    return addTo([], Array.prototype.slice.call(arguments));
}

// convert array to string 
function arrayToString(arr) {
    let str = '';
    arr.forEach(function (i, index) {
        str += i;
        if (index != (arr.length - 1)) {
            str += '<br/>';
        };
    });
    return str.replace(/\,/g, " ");
}


//var jsonArray = getArrResult(["unicode", "unicodeTow", "unicodeThree"], [10, 20], [100, 200, 300]);
//var value = arrayToString(jsonArray);
//document.write(value)



