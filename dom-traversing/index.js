const headerH1 = document.querySelector('.heading')
const header = headerH1.closest('header')
header.style.border = '5px solid rgb(211, 211, 211)';

const packageTitles = document.querySelectorAll('.package-title');
packageTitles.forEach((title) => {
  const previousElement = title.previousElementSibling;
  if (previousElement) {
    previousElement.style.border = '2px solid rgb(7, 47, 95)';
  }
});


const labels = document.querySelectorAll('.info label');
labels.forEach((label) => {
  if (label.classList.contains('mild')) {
    label.style.borderBottom = '2px solid yellow';
  } else if (label.classList.contains('intense')) {
    label.style.borderBottom = '2px solid orange';
  } else if (label.classList.contains('extreme')) {
    label.style.borderBottom = '2px solid red';
  }
});


// const navListChildren = document.querySelector('.nav-list').children;

// let navListChildrenCopy = [];
// for (let item of navListChildren) {
//   navListChildrenCopy.push(item);
// }

// const siteMap = document.querySelector('.site-map');
// for (let item of navListChildrenCopy) {
//   siteMap.appendChild(item);
// }


const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');

while (navList.firstChild) {
  siteMap.appendChild(navList.firstChild);
}





// The other Way

// // closest header element to an h1s
// let heading = document.querySelector("h1");
// let header = heading.closest("header");
// header.style.borderBottom = "5px solid grey";

// // matches classes
// let labels = document.querySelectorAll(`.info label`);
// labels.forEach(label => {
//     if (label.matches(".mild")) {
//         label.style.borderBottom = "2px solid yellow";
//     } else if (label.matches(".intense")) {
//         label.style.borderBottom = "2px solid orange";
//     } else {
//         label.style.borderBottom = "2px solid red";
//     }
// })

// //selecting previous element sibling of paragraph element if its parent exists
// const infoSection = document.querySelector(".info");
// const packages = document.querySelector(".info-package");
// const packageTitles = document.querySelectorAll(".package-title");

// if (infoSection.contains(packages)) {
//     packageTitles.forEach(title => {
//         title.previousElementSibling.style.border = "2px solid #072F5F";
//     })
// }

// // get links of nav and place them in footer
// const navList = document.querySelector(".nav-list");
// const siteMap = document.querySelector(".site-map");
// const listItems = navList.children;

// for (let i = 0; i < listItems.length; i++) {
//     const item = document.createElement("li");
//     item.innerText = listItems[i].innerText;
//     siteMap.appendChild(item);
// }