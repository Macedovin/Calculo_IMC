// IMPORTANDO OS DADOS NECESSÁRIOS

import { Modal } from './modal.js'

import { AlertError } from './alert-erro.js'

import { notANumber, calculateIMC } from './utils.js'

/* VARIÁVEIS - VARIABLES */

const form = document.querySelector('form')

const inputWeight = document.querySelector('#weight')

const inputHeight = document.querySelector('#height')

/* ELEMENTOS REFERNTES A MODAL -> NOVO ARQUIVO MODAL.JS */

/* 3 maneiras de criar e atribuir função a um evento 

form.onsubmit = (event) => {}

form.onsubmit = event => {}

form.onsubmit = function(event) {}

form.onsubmit = handleSumbmit

function handleSumbmit(event) {}

*/

// RECEBENDO OS DADOS E FAZENDO O CÁLCULO

form.onsubmit = function (event) {
  event.preventDefault()

  /* RECEBENDO AS VARIÁVEIS DO USUÁRIO */

  const weight = inputWeight.value

  const height = inputHeight.value

  /* LÓGICA DE VALIDAÇÃO DE INPUT */

  /* REFATORANDO A VARIÁVEL
  
  NOME ANTERIOR -> const showAlertError = notANumber(weight) || notANumber(height)
  */

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    console.log('MOstrar o alerta de erro')

    AlertError.open()

    return
  }

  AlertError.close()

  /* CHAMANDO A FUNÇÃO DE CÁLCULO DO IMC, UTILIZANDO AS VARIÁVEIS ANTERIORES COMO ARGUMENTO E APRESENTANDO RESULTADO */

  const result = calculateIMC(weight, height)

  displayResultMessage(result)
}

/* LINHAS DE CÓDIGO PARA FUNÇÕES UTILITÁRIAS: é UM NÚMERO E CÁLCULO IMC -> NOVO ARQUIVO UTILS.JS */

/* LINHA DE CÓDIGO DE FECHAMENTO DA MODAL -> NOVO ARQUIVO MODAL.JS    */

/* FUNÇÃO PARA MOSTRAR MENSAGEM DE RESULTADO */

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  // ABRINDO A MODAL E MUDANDO O TEXTO

  /* modalWrapper.classList.add('open') */
  Modal.open()

  /*   modalMessage.innerText = message */

  Modal.message.innerText = message
}

// Fechar a janela de erro ao digitar no campo
// evento é do tipo input

/* 
AlertError.close() */

inputWeight.oninput = () => {
  AlertError.close()
}

inputHeight.oninput = () => {
  AlertError.close()
}
