const inputTextRef = document.querySelector('input#validation-input');

const dataLengthRef = Number(inputTextRef.getAttribute('data-length'));

inputTextRef.addEventListener('blur', () => {
  if (!inputTextRef.value.length) {
    inputTextRef.classList.remove('invalid');
    inputTextRef.classList.remove('valid');
  } else if (inputTextRef.value.length === dataLengthRef) {
    inputTextRef.classList.remove('invalid');
    inputTextRef.classList.add('valid');
  } else {
    inputTextRef.classList.remove('valid');
    inputTextRef.classList.add('invalid');
  }
});
