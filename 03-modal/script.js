'use strict';

const modalEl = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal');
const overlayEl = document.querySelector('.overlay');

const showModalFn = () => {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModalFn = () => {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

showBtn.forEach(show => {
  show.addEventListener('click', showModalFn);
});

closeBtn.addEventListener('click', closeModalFn);

overlayEl.addEventListener('click', closeModalFn);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModalFn();
  }
});
