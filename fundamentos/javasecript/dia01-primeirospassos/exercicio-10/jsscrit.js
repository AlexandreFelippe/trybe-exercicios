let valorCusto = 120;
let valorVenda = 150;

if (valorCusto >= 0 && valorVenda >= 0) {
    let valorCustoTotal = valorCusto * 1.2;
    let lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Erro, valores menores que zero");
}