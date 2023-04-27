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



//andere weg

// const firstNameElement = document.querySelector('#firstName');
// const lastNameElement = document.querySelector('#lastName');
// const programmingLanguageElement = document.querySelector('#programmingLanguage');
// const formElement = document.querySelector('#send');
// const sendButton = document.querySelector('#send');
// const resetButton = document.querySelector('#reset');

// function displayDevelopers() {
//   let content = `<tr>
//                    <th>First Name</th>
//                    <th>Last Name</th>
//                    <th>Programming Language</th>
//                    </tr>`;

//   //if there is developers then continue
//   if (localStorage.getItem('developers') !== null) {
//     JSON.parse(localStorage.getItem('developers')).forEach((developer) => {
//       content += `<tr>
//         <td>${developer.firstName}</td>
//         <td>${developer.lastName}</td>
//         <td>${developer.programmingLanguage}</td>
//       </tr>`;
//     });
//   }

//   return (document.querySelector('table').innerHTML = content);
// }

// //To see in the <table> the values of each "developer" from "developers" item" in dem localStorage after the page and external resources load

// window.addEventListener('load', displayDevelopers);

// const cleanFormFields = () => {
//   firstNameElement.value = '';
//   lastNameElement.value = '';
//   programmingLanguageElement.value.value = '';
// };

// sendButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   //get developer from all inputs
//   const newDeveloper = {
//     firstName: firstNameElement.value,
//     lastName: lastNameElement.value,
//     programmingLanguage: programmingLanguageElement.value,
//   };
//   const arrOfValues = Object.values(newDeveloper);
//   if (!arrOfValues.includes('')) {
//     // get an empty array if there is nothing saved
//     if (localStorage.getItem('developers') === null) {
//       localStorage.setItem('developers', '[]');
//     }
//     //get old developers array and slap it to the new developers array
//     const oldDevelopers = JSON.parse(localStorage.getItem('developers'));
//     oldDevelopers.push(newDeveloper);
//     //save the old + new developers array to Local Storage
//     localStorage.setItem('developers', JSON.stringify(oldDevelopers));
//     cleanFormFields();
//     displayDevelopers();
//   } else {
//     alert('fields cannot be empty');
//   }
// });

// //Reset
// resetButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   localStorage.removeItem('developers');
//   // If we call the "displayDevelopers" function (which returns the innerHTML of <table> element) after remove the "developers" item from localStorage
//   // we makes the innerHTML of <table> empty without refresh the page
//   displayDevelopers();
// });