const inputNameRef = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

console.log(inputNameRef.value);

inputNameRef.addEventListener(
  'input',
  () => (outputName.textContent = inputNameRef.value ? inputNameRef.value : 'Anonymous')
);
