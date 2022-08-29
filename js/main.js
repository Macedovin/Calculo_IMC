// IMPORTANDO OS DADOS NECESSÁRIOS

/* ACRESCENTANDO A IMPORTAÇÃO DA MODAL DE ALERTA */

import { Modal, ModalInform } from './modal.js'

import { AlertError } from './alert-erro.js'

import { notANumber, calculateIMC } from './utils.js'

/* VARIÁVEIS - VARIABLES */

const form = document.querySelector('form')

const inputWeight = document.querySelector('#weight')

const inputHeight = document.querySelector('#height')

/* ELEMENTOS DA MODAL INFORM */

const modalInform = document.querySelector('.modal.inform')

const modalInformTitle = modalInform.querySelector('h3')

const modalInformText = modalInform.querySelector('.text')

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
  
  /* VARIÁVEIS DE PESO */

  const skinny = result < 18.5

  const helthy = result >= 18.5 && result <= 24.9

  const highWeight = result >= 25 && result <= 29.9

  const obesityOne = result >= 30 && result <= 34.9

  const obesityTwo = result >= 35 && result <= 39.9

  const faty = result >= 40

  /* CONDICIONAIS DE ALERTA */
  
  if (helthy) {
    ModalInform.congrats()

    ModalInform.title.innerText = 'Parabéns!!!'

    ModalInform.text.innerText = 'Peso normal'

    console.log(result, 'Parabéns!!! Peso normal')
  } else if (result < 18.5 || (result >= 25 && result <= 39.9)) {
    if (skinny) {
      ModalInform.text.innerText = 'Abaixo do peso'
      console.log(result, 'Cuidado! Abaixo do peso')
    } else if (highWeight) {
      ModalInform.text.innerText = 'Acima do peso (sobrepeso)'
      console.log(result, 'Cuidado! Acima do peso (sobrepeso)')
    } else if (obesityOne) {
      ModalInform.text.innerText = 'Obesidade I'
      console.log(result, 'Cuidado! Obesidade I')
    } else if (obesityTwo) {
      ModalInform.text.innerText = 'Obesidade II'
      console.log(result, 'Cuidado! Obesidade I')
    }

    alertWorry()
  } else if (faty) {
    ModalInform.danger()

    ModalInform.title.innerText = 'Perigo!'

    ModalInform.text.innerText = 'Obesidade III'
    console.log(result, 'Perigo! Obesidade III')
  }

  displayResultMessage(result)
}

/* LINHAS DE CÓDIGO PARA FUNÇÕES UTILITÁRIAS: é UM NÚMERO E CÁLCULO IMC -> NOVO ARQUIVO UTILS.JS */

/* LINHA DE CÓDIGO DE FECHAMENTO DA MODAL -> NOVO ARQUIVO MODAL.JS    */

/* FUNÇÃO PARA O ALERTA DE CUIDADO */

function alertWorry(result) {
  ModalInform.worry()

  ModalInform.title.innerText = 'Cuidado!'
}

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
