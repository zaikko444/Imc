let form = document.querySelector('.form')
let resultado = document.querySelector('#resultado')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const pesoInput = form.querySelector('#peso')
  const alturaInput = form.querySelector('#altura')
  const imc  = getImc(pesoInput.value, alturaInput.value)
  if (!Number(pesoInput.value) || Number(!alturaInput.value)){
    setResult('Peso ou Altura inválido', false)
  } else {
    setResult(`Seu imc é ${imc.toFixed(2)} ` + getNivel(imc), true)
  }

})

function getNivel(imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso,altura){
  const imc = peso / altura ** 2
  return imc
}

// criamos um paragrafo
function criaP(){
  const p = document.createElement('p')
  return p 
}

function setResult(msg, isValid){
  resultado.innerHTML = '';
  const p = criaP()

  if (isValid){
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML =  msg
  resultado.appendChild(p)
}