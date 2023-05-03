let salarioBruto = 15000
let liquidoDeInss;
let liquidoDeIr;

if (salarioBruto <= 1556.94) {
    liquidoDeInss = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594,92) {
    liquidoDeInss = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
    liquidoDeInss = 0.11 * salarioBruto;
} else {
    liquidoDeInss = 570.88;
}

let salarioBase = salarioBruto - liquidoDeInss;

if (salarioBase <= 1903.98) {
    liquidoDeIr = 0;
}   else if (salarioBase <= 2826.65) {
    liquidoDeIr = (salarioBase * 0.075) - 142.8;
}   else if (salarioBase <= 3571.05) {
    liquidoDeIr = (salarioBase * 0.15) - 354.8;
}   else if (salarioBase <= 4664.68) {
    liquidoDeIr = (salarioBase * 0.225) - 636.13;
}   else {
    liquidoDeIr = (salarioBase * 0.275) - 869.36;
}
console.log(liquidoDeIr);
console.log("Salário líquido: " + (salarioBase-liquidoDeIr));