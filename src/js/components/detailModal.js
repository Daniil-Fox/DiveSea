const dModal = document.querySelector('.detail-modal')
const modalWindow = document.querySelector('.detail-modal__window')
const historyBtn = document.querySelector('.history__btn')

historyBtn
  ? historyBtn.addEventListener('click', () => {
  console.log('click');
  dModal.classList.add('detail-modal-active')
  document.body.style.overflow = 'hidden'
  })
  : null;
modalWindow
  ? modalWindow.addEventListener('click', (e) => e.stopPropagation())
  : null;
dModal
  ?  dModal.addEventListener('click', () => {
  dModal.classList.remove('detail-modal-active')
  document.body.style.overflow = null
  })
  : null;
