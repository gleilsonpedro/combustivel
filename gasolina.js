const calcular = document.getElementById("calcular");

function consumo() {
  const gasolina = document.getElementById("gasolina").value;
  const etanol = document.getElementById("etanol").value;
  const carro = document.getElementById("carro").value;

  if (carro == 1.0) {
    consumo_gasolina = 14;
    consumo_etanol = 10;
  } else if (carro == 1.4) {
    consumo_gasolina = 11;
    consumo_etanol = 7;
  } else if (carro == 1.6) {
    consumo_gasolina = 10;
    consumo_etanol = 8;
  } else if (carro == 1.8) {
    consumo_gasolina = 9;
    consumo_etanol = 5;
  } else {
    consumo_gasolina = 7;
    consumo_etanol = 4;
  }
  const kml_etanol = (etanol / consumo_etanol).toFixed(2);
  const kml_gasolina = (gasolina / consumo_gasolina).toFixed(2);
  if (kml_etanol > kml_gasolina) {
    combustivel_vencedor = "Gasolina";
  } else {
    combustivel_vencedor = "Etanol";
  }

  resultado.textContent = combustivel_vencedor;
  resposta.textContent = kml_gasolina;
  resposta2.textContent = kml_etanol;
  valores0.textContent = carro;
  valores1.textContent = consumo_gasolina;
  valores2.textContent = consumo_etanol;
}
calcular.addEventListener("click", consumo);
