document.querySelector('body').style.fontFamily = 'Arial, Helvetica, sans-serif';

document.querySelector('.title').style.textAlign = 'center';

const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.flexFlow = 'row wrap';
main.style.justifyContent = 'space-around';

const category = document.getElementsByClassName('category');

for (item of category) {
  item.style.fontStyle = 'italic';
  item.style.fontSize = '2rem';
  item.style.borderBottom = '1px solid black';
}

const unorderedList = document.getElementsByClassName('food-category');

for (item of unorderedList) {
  // function colorGenerator() {
  //   let colors = ['green', 'blue', 'yellow', 'purple', 'coral', 'cyan', 'lightblue', 'lightcyan', 'lightgreen', 'orange'];
  //   let randomNum = Math.floor(Math.random() * colors.length);
  //   return colors[randomNum];
  // }

  const colorGenerator = function () {
    let letter = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += letter[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  item.style.backgroundColor = colorGenerator();
  item.style.display = 'block';
  item.style.width = '20rem';
  item.style.height = '8.5rem';
  item.style.fontSize = '1.2rem';
  item.style.paddingTop = '.5rem';
}

const warning = document.getElementById('warning');

warning.style.fontSize = '2rem';
warning.style.fontFamily = 'sans-serif';
warning.style.textAlign = 'center';

const evenItems = document.querySelectorAll('.allergies li:nth-child(2n)');

for (item of evenItems) {
  item.style.backgroundColor = 'lightblue';
  item.style.fontSize = '1.2rem';
}

const sectionAllergy = document.querySelector('.allergy-warning');

sectionAllergy.style.cssText += 'width : 50%; textAlign : center; margin : auto';
sectionAllergy.style.display = 'flex';
sectionAllergy.style.flexFlow = 'column nowrap';
sectionAllergy.style.justifyContent = 'center';

for (item of document.getElementsByClassName('allergy-info')) {
  item.style.listStyle = 'none';
}

const footer = document.querySelector('footer');

footer.style.display = 'flex';
footer.style.flexFlow = 'row wrap';
footer.style.justifyContent = 'center';

const foodDescription = document.querySelectorAll('.food-desc');
for (item of foodDescription) {
  item.style.cssText += 'border : 5px solid orange; margin : 1rem ;';
  item.style.display = 'inline-flex';
  item.style.justifyContent = 'center';
  item.style.alignItems = 'center';
  item.style.width = '8rem';
  item.style.height = '8rem';
  item.style.borderRadius = '50%';
}
