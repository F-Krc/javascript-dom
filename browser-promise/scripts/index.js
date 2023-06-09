// write your code here


const myModal = document.querySelector('.modal');

const timer = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

timer(5000).then(() => {
  myModal.style.display = 'block';
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  myModal.style.display = 'none';
  // myModal.remove();
});



// Andere weg

// const displayText = (message) => {
//   const textBox = document.createElement('div');
//   textBox.innerHTML = `
//     <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;">
//       <div style="background-color: white; padding: 20px; border-radius: 5px; width: 60%; display: flex; align-items: center; justify-content: space-between;">
//         <span>${message}</span>
//         <span id="closeBtn" style="margin-left: 50px; cursor:pointer; color: lightgray ">&times;</span>
//       </div>
//     </div>
//   `;

//   document.body.appendChild(textBox);

//   const closeBtn = textBox.querySelector('#closeBtn');
//   closeBtn.addEventListener('click', () => {
//     textBox.remove();
//   });
// };

// const waitFiveSeconds = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 5000);
// });

// waitFiveSeconds.then(() => {
//   displayText("You've been on the site for 60 seconds! Cool!");
// });
