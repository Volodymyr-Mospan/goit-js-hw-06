const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('span#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueJS = 0;

decrementBtn.addEventListener('click', () => {
  valueJS -= 1;
  valueRef.textContent = valueJS;
});

incrementBtn.addEventListener('click', () => {
  valueJS += 1;
  valueRef.textContent = valueJS;
});
