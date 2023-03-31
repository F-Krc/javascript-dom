const passwordInput = document.getElementById('passwordInput');
const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');

const togglePasswordVisibility = () => {
  // if (showPasswordCheckbox.checked && passwordInput.value.length >=6 )  {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};
showPasswordCheckbox.addEventListener('click', togglePasswordVisibility);
