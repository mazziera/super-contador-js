const inputInicio = document.getElementById('inicio');
const inputFim = document.getElementById('fim');
const inputPasso = document.getElementById('passo');

let botaoLimpar = document.querySelector('button#limpar');

let resultado = document.getElementById('resultado');

function contar() {

  if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
    resultado.innerHTML = "Impossível contar! Verifique os dados!";

  } else {
    resultado.innerHTML = "<strong>Contando: </strong>";
    let inicio = Number(inputInicio.value);
    let fim = Number(inputFim.value);
    let passo = Number(inputPasso.value);

    for (inicio; inicio <= fim; inicio = inicio + passo) {
      resultado.innerHTML += `${inicio}  `;
    }

    for (inicio; inicio >= fim; inicio = inicio - passo) {
      resultado.innerHTML += `${inicio}  `;
    }
  }
};

botaoLimpar.addEventListener('click', limpar);

function limpar() {
  inputInicio.value = '';
  inputInicio.focus();

  inputFim.value = '';

  inputPasso.value = 1;

  resultado.innerHTML = '';
};