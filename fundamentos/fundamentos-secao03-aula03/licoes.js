let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

    function checkIntegerPositive(l1, l2 ,l3) {
     if (l1 > 0 && l2 > 0 && l3 > 0 && Number.isInteger (l1) && Number.isInteger (l2) && Number.isInteger (l3)) {
        return true;
    }   else{
        return false;
    } 
    }

    function checkIsATriangle(l1, l2, l3) {
    if (l1 < (l2 + l3) && l2 < l1 + l3 && l3 < l1 + l2) {
        return true;
    }   else{
        return false;
    }
    }
    console.log(checkIsATriangle(9, 7, 8))

    function checkPerimeterTriangle(l1, l2, l3) {
    if (l1 + l2 + l3) {
    return l1 + l2 +l3;
    }   
    }
    console.log(checkPerimeterTriangle(lado1, lado2, lado3))

    function checkWitchTriangle(l1, l2, l3) {
    if (l1 !== l2 && l2 !== l3 && l1 !== l3) {
        return 'escaleno';
    }   else if (l1 === l2 && l2 === l3 && l1 === l3) {
        return 'equilátero';
    }   else{
        return 'isóceles'   
    }
    }
    console.log(checkWitchTriangle(lado1, lado2, lado3));


     
    console.log('O triângulo é ' + checkWitchTriangle(lado1, lado2, lado3) + ' e seu perímetro vale ' + checkPerimeterTriangle(lado1, lado2, lado3) + 'cm.')
    

// 5. Crie uma função `infoTriangle` que irá apresentar uma mensagem na saída do console.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - a função deve verificar se os valores dos lados são inteiros positivos e se os valores dos lados formam um triângulo. Dica: você já criou as funções que fazem esta verificação (checkIntegerPositive() e checkItsATriangle()). Basta chamá-las aqui. Que tal colocar os resultados dentro de variáveis e depois usá-las na estrutura do IF?
// - se a condição for satisfeita, a função deve retornar a mensagem: `O triângulo é <tipo-do-triângulo> e seu perímetro vale <valor-do-perimetro> cm.`. Dica: chame a função checkWitchTriangle() para obter <tipo-do-triângulo> e a função checkPerimeterTriangle() para obter <valor-do-perimetro>;
// - se a condição não for satisfeita, a função deve retornar a mensagem: `Não é um triângulo.`.

// OBS: o console.log final deverá ser assim: console.log(infoTriangle(lado1, lado2, lado3)); Tudo deve acontecer depois de sua execução...
