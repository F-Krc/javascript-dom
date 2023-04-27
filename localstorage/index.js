const sendBtn = document.getElementById('send');
const resetBtn = document.getElementById('reset');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const programmingLanguageInput = document.getElementById('programmingLanguage');
const table = document.querySelector('table');

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tableBody = document.querySelector('table tbody');

sendBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const programmingLanguage = programmingLanguageInput.value;

  if (firstName && lastName && programmingLanguage) {
    const newDeveloper = {
      firstName: firstName,
      lastName: lastName,
      programmingLanguage: programmingLanguage,
    };

    let developers = localStorage.getItem('developers');
    if (!developers) {
      developers = [];
    } else {
      developers = JSON.parse(developers);
    }
    developers.push(newDeveloper);
    localStorage.setItem('developers', JSON.stringify(developers));

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('programmingLanguage').value = '';

    displayDevelopers(developers);
  } else {
    alert('Please fill in all fields.');
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('developers');
  tbody.innerHTML = '';
});

function displayDevelopers(developers) {
  tableBody.innerHTML = '';
  developers.forEach(function (developer) {
    let row = `
    <tr>
        <th>${developer.firstName}</th>
        <th>${developer.lastName}</th>
        <th>${developer.programmingLanguage}</th>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let developers = JSON.parse(localStorage.getItem('developers'));
  displayDevelopers(developers);
});
