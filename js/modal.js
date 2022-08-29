/* 

MODAL VARIABLES 

const modalWrapper = document.querySelector('.modal-wrapper')

const modalMessage = document.querySelector('.modal .title span')

const modalBtnClose = document.querySelector('.modal button.close')

// MODAL INFORM VARIABLES 

const modalInform = document.querySelector('.modal.inform')

const modalInformTitle = modalInform.querySelector('h3')

const modalInformText = modalInform.querySelector('.text')

console.log(modalInformTitle)

console.log(modalInformText)

*/

/* UTILIZANDO OOBJECT LITERAL PARA A MODAL */

// EXPORTANDO OS DADOS

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

/* FECHANDO A MODAL -> Com somentwe uma linh, também posso retirar as chaves */

/* modalBtnClose.onclick */

Modal.buttonClose.onclick = () =>
  /* modalWrapper.classList.remove('open') */
  Modal.close()

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    Modal.close()
  }
}

/* UTILIZANDO OOBJECT LITERAL PARA A MODAL INFORM */

export const ModalInform = {
  itSelf: document.querySelector('.modal.inform'),
  title: document.querySelector('.modal.inform h3'),
  text: document.querySelector('.modal.inform .text'),

  worry() {
    ModalInform.itSelf.classList.add('worry')

    ModalInform.itSelf.classList.remove('congrats')
    ModalInform.itSelf.classList.remove('danger')
  },
  congrats() {
    ModalInform.itSelf.classList.add('congrats')

    ModalInform.itSelf.classList.remove('worry')
    ModalInform.itSelf.classList.remove('danger')
  },
  danger() {
    ModalInform.itSelf.classList.add('danger')

    ModalInform.itSelf.classList.remove('worry')
    ModalInform.itSelf.classList.remove('congrats')
  }
}
