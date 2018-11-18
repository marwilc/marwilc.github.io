/**
 *  function que captura las teclas
 */
let f = false;
let expresion = '';
let checkedGraph;
let myGraph;
const pi = { value:  Math.PI, name: 'pi'};

/**
 * funcion que Enciende la graficadora
 */
function onGraph() {
    checkedGraph = document.getElementById('slider').checked;
    const  canvas = document.getElementById('display-graph');
    const  context = canvas.getContext('2d');
    if(!checkedGraph)
        context.clearRect(0, 0, canvas.width, canvas.height);
    else{
        myGraph = new Graph({
            canvasId: 'display-graph',
            minX: -10,
            minY: -10,
            maxX: 10,
            maxY: 10,
            unitsPerTick: 1
        });
    }


}
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
        case  'x':
        case  'y':
            // obtiene el input pantalla y le asigna la tecla
            document.getElementById('display').value = input + tecla;
            expresion += tecla; //para la funcion eval
            break;
        case  '=':
            console.log(expresion);
            if(checkedGraph){
                // plot function
                plot(expresion);
            }else
            {
                let result = operar(expresion);
                document.getElementById('display').value = result;
                expresion = result;
            }
            // efectuar operation
            break;
        case  'C':

            const  canvas = document.getElementById('display-graph');
            const  context = canvas.getContext('2d');
            document.getElementById('display').value = '';
            expresion = '';
            if(checkedGraph){
                context.clearRect(0, 0, canvas.width, canvas.height);
                 myGraph = new Graph({
                    canvasId: 'display-graph',
                    minX: -10,
                    minY: -10,
                    maxX: 10,
                    maxY: 10,
                    unitsPerTick: 1
                });
            }

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

        case  'SQRTN':
            document.getElementById('display').value += String.fromCharCode(8730);
            expresion += 'Math.pow ' ;
            console.log('ln');
            break;

        case 'graph':

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

/**
 * funcion de graficar
 * @param config
 * @constructor
 */
function Graph(config) {
    // user defined properties
    this.canvas = document.getElementById(config.canvasId);
    this.minX = config.minX;
    this.minY = config.minY;
    this.maxX = config.maxX;
    this.maxY = config.maxY;
    this.unitsPerTick = config.unitsPerTick;

    // constants
    this.axisColor = '#aaa';
    this.fontColor= '#aaa';
    this.font = '8pt Calibri';
    this.tickSize = 20;

    // relationships
    this.context = this.canvas.getContext('2d');
    this.rangeX = this.maxX - this.minX;
    this.rangeY = this.maxY - this.minY;
    this.unitX = this.canvas.width / this.rangeX;
    this.unitY = this.canvas.height / this.rangeY;
    this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
    this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
    this.iteration = (this.maxX - this.minX) / 1000;
    this.scaleX = this.canvas.width / this.rangeX;
    this.scaleY = this.canvas.height / this.rangeY;

    // draw x and y axis
    this.drawXAxis();
    this.drawYAxis();
}

Graph.prototype.drawXAxis = function() {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(0, this.centerY);
    context.lineTo(this.canvas.width, this.centerY);
    context.strokeStyle = this.axisColor;
    context.lineWidth = 2;
    context.stroke();

    // draw tick marks
    var xPosIncrement = this.unitsPerTick * this.unitX;
    var xPos, unit;
    context.font = this.font;
    context.textAlign = 'center';
    context.textBaseline = 'top';

    // draw left tick marks
    xPos = this.centerX - xPosIncrement;
    unit = -1 * this.unitsPerTick;
    while(xPos > 0) {
        context.moveTo(xPos, this.centerY - this.tickSize / 2);
        context.lineTo(xPos, this.centerY + this.tickSize / 2);
        context.stroke();
        context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
        unit -= this.unitsPerTick;
        xPos = Math.round(xPos - xPosIncrement);
    }

    // draw right tick marks
    xPos = this.centerX + xPosIncrement;
    unit = this.unitsPerTick;
    while(xPos < this.canvas.width) {
        context.moveTo(xPos, this.centerY - this.tickSize / 2);
        context.lineTo(xPos, this.centerY + this.tickSize / 2);
        context.stroke();
        context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
        unit += this.unitsPerTick;
        xPos = Math.round(xPos + xPosIncrement);
    }
    context.restore();
};

Graph.prototype.drawYAxis = function() {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(this.centerX, 0);
    context.lineTo(this.centerX, this.canvas.height);
    context.strokeStyle = this.axisColor;
    context.lineWidth = 2;
    context.stroke();

    // draw tick marks
    var yPosIncrement = this.unitsPerTick * this.unitY;
    var yPos, unit;
    context.font = this.font;
    context.textAlign = 'right';
    context.textBaseline = 'middle';

    // draw top tick marks
    yPos = this.centerY - yPosIncrement;
    unit = this.unitsPerTick;
    while(yPos > 0) {
        context.moveTo(this.centerX - this.tickSize / 2, yPos);
        context.lineTo(this.centerX + this.tickSize / 2, yPos);
        context.stroke();
        context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
        unit += this.unitsPerTick;
        yPos = Math.round(yPos - yPosIncrement);
    }

    // draw bottom tick marks
    yPos = this.centerY + yPosIncrement;
    unit = -1 * this.unitsPerTick;
    while(yPos < this.canvas.height) {
        context.moveTo(this.centerX - this.tickSize / 2, yPos);
        context.lineTo(this.centerX + this.tickSize / 2, yPos);
        context.stroke();
        context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
        unit -= this.unitsPerTick;
        yPos = Math.round(yPos + yPosIncrement);
    }
    context.restore();
};

Graph.prototype.drawEquation = function(equation, color, thickness) {
    try {
        var context = this.context;
        context.save();
        context.save();
        this.transformContext();

        context.beginPath();
        context.moveTo(this.minX, equation(this.minX));

        for(var x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
            context.lineTo(x, equation(x));
        }

        context.restore();
        context.lineJoin = 'round';
        context.lineWidth = thickness;
        context.strokeStyle = color;
        context.stroke();
        context.restore();

    }catch (e) {
        // reset canvas
        myGraph = new Graph({
            canvasId: 'display-graph',
            minX: -10,
            minY: -10,
            maxX: 10,
            maxY: 10,
            unitsPerTick: 1
        });
    }

};

Graph.prototype.transformContext = function() {
    var context = this.context;

    // move context to center of canvas
    this.context.translate(this.centerX, this.centerY);

    /*
     * stretch grid to fit the canvas window, and
     * invert the y scale so that that increments
     * as you move upwards
     */
    context.scale(this.scaleX, -this.scaleY);
};

function plot(expression) {
    myGraph = new Graph({
        canvasId: 'display-graph',
        minX: -10,
        minY: -10,
        maxX: 10,
        maxY: 10,
        unitsPerTick: 1
    });

    let func = expression;
    myGraph.drawEquation(function(x) {
        return  eval(func);
    }, 'green', 3);
/*
myGraph.drawEquation(function(x) {
    return 5 * Math.sin(x);
}, 'green', 3);

myGraph.drawEquation(function(x) {
    return x * x;
}, 'blue', 3);

myGraph.drawEquation(function(x) {
    return 1 * x;
}, 'red', 3);
*/
}