const elSelectCustom = document.getElementsByClassName('select__custom-js')[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const fieldSelect = document.querySelector('.select__custom-trigger');

Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener('click', (e) => {
    elSelectCustomValue.textContent = e.target.textContent;
    const optionValue = e.target.getAttribute('data');
    elSelectCustomValue.setAttribute('data', optionValue);
    elSelectCustom.classList.remove('select__isActive');
    fieldSelect.classList.remove('select__custom-trigger_arrow');
  });
});

elSelectCustomValue.addEventListener('click', () => {
  elSelectCustom.classList.toggle('select__isActive');
  fieldSelect.classList.toggle('select__custom-trigger_arrow');
});

document.addEventListener('click', (event) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove('select__isActive');
    fieldSelect.classList.remove('select__custom-trigger_arrow');
  }
});
