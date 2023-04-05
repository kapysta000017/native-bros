const elSelectCustom = document.getElementsByClassName('select__custom-js')[0];
const elSelectCustomValue = elSelectCustom.children[0];
const warningElement = document.querySelector('.label-input__warning-password');
const inputLabel = document.querySelector('.label-input__field');
const wrapperInputLabel = document.querySelector('.label-input__label');
const form = document.getElementById('form');
const resetButton = document.querySelector('.buttons__button_clear');

form.addEventListener('submit', logSubmit);
function logSubmit(event) {
  event.preventDefault();

  warningElement.innerHTML = '';
  inputLabel.classList.remove('label-input__warning-border');
  wrapperInputLabel.classList.remove('label-input__warning-svg');

  if (inputLabel.value) {
    console.log({
      username: event.target.username.value,
      password: event.target.password.value,
      valueLabel: event.target.valueLabel.value,
      option: elSelectCustomValue.getAttribute('data'),
    });
  }

  if (!inputLabel.value) {
    warningElement.innerHTML = `<span>We must write anything</span>`;
    inputLabel.classList.add('label-input__warning-border');
    wrapperInputLabel.classList.add('label-input__warning-svg');
  }

  event.target.reset();
  elSelectCustomValue.textContent = '';
}

resetButton.addEventListener('click', () => {
  warningElement.innerHTML = '';
  inputLabel.classList.remove('label-input__warning-border');
  wrapperInputLabel.classList.remove('label-input__warning-svg');
  elSelectCustomValue.textContent = '';
});
