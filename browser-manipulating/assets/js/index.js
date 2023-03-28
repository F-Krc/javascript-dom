const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy',
  },
  {
    title: 'Thinking with Type',
    author: 'Ellen Lupton',
    alreadyRead: true,
    img: 'https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg',
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    alreadyRead: false,
    img: 'https://eloquentjavascript.net/img/cover.jpg',
  },
];

// Your code here

let cards = document.getElementById('cards');

for (let book of books) {
  let isReading = '';
  let btnClass = '';
  let authorNameArray = book.author.split(' ');
  if (book.alreadyRead) {
    isReading = 'Read';
    btnClass = 'btn-success';
  } else {
    isReading = 'To read';
    btnClass = 'btn-secondary';
  }

  let card = `
      <div class="card col-lg-3 col-md-6 p-1 m-3">
        <img src="${book.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${book.title} </h5>
          <p class="card-text">${authorNameArray[1]}, ${authorNameArray[0]} </p>
        </div>
        <div class="card-footer text-end">
          <a href="#" class="btn ${btnClass} rounded-pill">${isReading}</a>
        </div>
      </div>
  `;

  cards.insertAdjacentHTML('beforeend', card);
}