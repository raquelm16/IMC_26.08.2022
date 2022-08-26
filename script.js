//CALCULANDO
let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', enviarResposta)

      
function enviarResposta(){
  let altura = Number.parseFloat(document.getElementById('altura').value) 
  let peso = Number.parseFloat(document.getElementById('peso').value)
  let imc = altura / (peso*peso)
  document.getElementById('imc').value = imc
}

//APAGANDO
let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', limpValor)

function limpValor(){
    let altura = document.getElementById('altura').value - document.getElementById('altura').value
    let peso = document.getElementById('peso').value - document.getElementById('peso').value
    let imc = document.getElementById('imc').value - document.getElementById('imc').value
    altura = (" ")
    peso = (" ")
    imc = (" ")
    document.getElementById('altura').value = altura
    document.getElementById('peso').value = peso
    document.getElementById('imc').value = imc
}

