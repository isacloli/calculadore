//main.js

let display = document.getElementById ("display");
let currentlnput = "";

function appendToDisplay(value) {
    currentlnput += value;
    display.valeu = currentlnput;
}

function clearDisplay() {
    currentlnput = "";
    display.valeu = "";
}

function caculateResult() {
    try {
        currentlnput = eval(currentlnput);
        display.valeu = currentlnput;
    } catch (error) {
        display.valeu ="Erro";
    }
}