const num1 = parseInt(prompt("Anna ensimmäinen luku:"));
const num2 = parseInt(prompt("Anna toinen luku:"));
const num3 = parseInt(prompt("Anna kolmas luku:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.getElementById("tulos").innerHTML = 
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average;
