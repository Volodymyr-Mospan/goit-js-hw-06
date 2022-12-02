function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button.change-color');
const spanColorRef = document.querySelector('span.color');

buttonRef.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor() {
  const backgroundColor = getRandomHexColor();
  bodyRef.style.backgroundColor = `${backgroundColor}`;
  spanColorRef.textContent = backgroundColor;
}
