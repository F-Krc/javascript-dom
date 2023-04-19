// Write you code here
import { data } from './data.js';

let parsedData = JSON.parse(data);
let cakes = document.getElementById('cakes');
let biscuits = document.getElementById('biscuits');
let bread = document.getElementById('bread');

const getCakes = () => {
  let html = '';
  for (let cake of parsedData.cakes) {
    html += `
    <div class="card m-3 col-md-3">
        <img src=${cake.image} class="card-img-top" style="height:250px;">
        <div class="card-body ">
        <h2>${cake.title}</h2>
         <div class="border-bottom">${cake.author}</div>
        <div style="height:100px">${cake.ingredients}</div>
        </div>
    </div>
    `;
  }
  return html;
};
cakes.innerHTML = getCakes();

const getBiscuits = () => {
  let html = '';
  for (let biscuit of parsedData.biscuits) {
    html += `
    <div class="card m-3 col-md-3">
        <img src=${biscuit.image} class="card-img-top" style="height:250px;">
        <div class="card-body ">
         <h2>${biscuit.title}</h2>
        <div class="border-bottom">${biscuit.author}</div>
        <div style="height:100px">${biscuit.ingredients}</div>
        </div>
    </div>
    `;
  }
  return html;
};
biscuits.innerHTML = getBiscuits();

for (let breadd of parsedData.bread) {
  let card = `
    <div class="card m-3 col-md-3">
        <img src=${breadd.image} class="card-img-top" style="height:250px;">
        <div class="card-body ">
        <h2>${breadd.title}</h2>
        <div class="border-bottom">${breadd.author}</div>
        <div style="height:50px">${breadd.ingredients}</div>
        </div>  
    </div>
    `;
  bread.insertAdjacentHTML('beforeend', card);
}
