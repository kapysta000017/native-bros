const warningElement = document.querySelector('.label-input__warning-password');
const inputLabel = document.querySelector('.label-input__field');
const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);
function logSubmit(event) {
  event.preventDefault();
  console.log({
    username: event.target.username.value,
    password: event.target.password.value,
    valueLabel: event.target.valueLabel.value,
    option: event.target.options.value,
  });
  inputLabel.style.border = '2px solid #EB5757';
  warningElement.innerHTML = `<span>Error message informing me of a problem</span>`;
}
