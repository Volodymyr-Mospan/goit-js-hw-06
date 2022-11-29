const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('span#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => (valueRef.textContent -= 1));

incrementBtn.addEventListener(
  'click',
  () => (valueRef.textContent = Number(valueRef.textContent) + 1)
);
