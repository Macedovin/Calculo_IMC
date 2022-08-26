/* 

MODAL VARIABLES 

const modalWrapper = document.querySelector('.modal-wrapper')

const modalMessage = document.querySelector('.modal .title span')

const modalBtnClose = document.querySelector('.modal button.close')

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
