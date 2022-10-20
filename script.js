function converterDolar() {
  var real = parseFloat(document.getElementById("valor").value);
  var mostrar = document.getElementById("valorConvertido");
  if (real > 0) {
    var dolar = real / 5;
    var valorConvertido = "R$" + real + " para dólar fica U$" + dolar;
    mostrar.innerHTML = valorConvertido;
    document.getElementById("valor").value = "";
  } else if (real <= 0) {
    mostrar.innerHTML =
      "O valor digitado é negativo, ou igual a zero! Digite um valor Válido!";
    document.getElementById("valor").value = "";
  } else {
    mostrar.innerHTML = "Você se esqueceu de digitar um valor no campo acima!";
    document.getElementById("valor").value = "";
  }
}

function converterReal() {
  var dolar = parseFloat(document.getElementById("valor").value);
  var mostrar = document.getElementById("valorConvertido");
  if (dolar > 0) {
    var real = dolar * 5;
    var conversao = "U$" + dolar + " para real fica R$" + real;
    mostrar.innerHTML = conversao;
    document.getElementById("valor").value = "";
  } else if (dolar <= 0) {
    mostrar.innerHTML =
      "O valor digitado é negativo, ou igual a zero! Digite um valor Válido!";
    document.getElementById("valor").value = "";
  } else {
    mostrar.innerHTML = "Você se esqueceu de digitar um valor no campo acima!";
    document.getElementById("valor").value = "";
  }
}

function converterBitcoin() {
  var moeda = parseFloat(document.getElementById("valor").value);
  var mostrar = document.getElementById("valorConvertido");
  if (moeda > 0) {
    var bitcoinReal = moeda * 0.0000091;
    var bitcoinDolar = moeda * 0.000047;
    var conversaoReal =
      "R$" + moeda + " em bitcoin fica " + bitcoinReal.toFixed(7);
    var conversaoDolar =
      "U$" + moeda + " em bitcoin fica " + bitcoinDolar.toFixed(6);
    mostrar.innerHTML = conversaoReal + "<br>" + conversaoDolar;
    document.getElementById("valor").value = "";
  } else if (moeda <= 0) {
    mostrar.innerHTML =
      "O valor digitado é negativo, ou igual a zero! Digite um valor Válido!";
    document.getElementById("valor").value = "";
  } else {
    mostrar.innerHTML = "Você se esqueceu de digitar um valor no campo acima!";
    document.getElementById("valor").value = "";
  }
}