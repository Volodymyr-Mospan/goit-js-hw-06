function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountRef = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

amountRef.value = '1';

btnCreate.addEventListener('click', onBtnCreate);
btnDestroy.addEventListener('click', onBtnDestroy);

function onBtnCreate() {
  let amount = amountRef.value;
  createBoxes(amount);
}

function onBtnDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  let markup = [];
  let amountDiv = boxesRef.children.length;

  for (let i = 0 + amountDiv; i < Number(amount) + amountDiv; i++) {
    markup.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px"></div>`
    );
  }
  markup = markup.join('');
  boxesRef.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
