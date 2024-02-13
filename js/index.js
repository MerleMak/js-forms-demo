const form = document.querySelector('[data-js="form"]');

const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeft = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener('input', (event) => {
  charactersLeft.textContent = 150 - event.target.value.length;
  console.log(event.target.value.length);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const data = {
    firstName: formElements.firstName.value,
    lastName: formElements.lastName.value,
    age: formElements.age.value,
    email: formElements.email.value,
    date: formElements.date.value,
    personalMessage: formElements.personalMessage.value,
    subOptions: formElements.subOptions.value,
  };

  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);
  // console.log(data);
  event.target.reset();
  formElements.firstName.focus();
});
