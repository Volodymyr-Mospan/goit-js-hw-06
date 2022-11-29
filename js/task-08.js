const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  if (!formElement.email.value || !formElement.password.value) {
    return alert('Будь ласка, заповніть усі поля.');
  }

  const formData = {
    [formElement.email.name]: formElement.email.value,
    [formElement.password.name]: formElement.password.value,
  };

  formElement.email.value = '';
  formElement.password.value = '';

  console.log(formData);
}
