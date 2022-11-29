const inputRangeRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

textRef.style.fontSize = `${inputRangeRef.value}px`;

inputRangeRef.addEventListener('input', () => {
  textRef.style.fontSize = `${inputRangeRef.value}px`;
});
