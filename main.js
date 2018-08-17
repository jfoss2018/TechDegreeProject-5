let htmlStr1 = '';
let htmlStr2 = '';
//let modals;
//let btnContainer;
let closeBtn;
let nextBtn;
let prevBtn;
let modalArray = [];
let indexNum;
const galleryDiv = document.getElementById('gallery');
let cards;
const modalDiv = document.createElement('div');
modalDiv.className = 'modal-container';
const $body = $('body');
$body.append(modalDiv);

$.ajax({
url: 'https://randomuser.me/api/?results=12&nat=us',
dataType: 'json',
success: function(data) {
  for (let i = 0; i < 12; i += 1) {
    htmlStr1 += `
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${data.results[i].picture.large}" alt="${data.results[i].name.first} ${data.results[i].name.last} profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
          <p class="card-text">${data.results[i].email}</p>
          <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
        </div>
      </div>`;
    modalArray.push({
      first: data.results[i].name.first,
      last: data.results[i].name.last,
      image: data.results[i].picture.large,
      email: data.results[i].email,
      cell: data.results[i].cell,
      street: data.results[i].location.street,
      city: data.results[i].location.city,
      state: data.results[i].location.state,
      zip: data.results[i].location.postcode,
      dob: data.results[i].dob.date
    });
    /*htmlStr2 += `
      <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src="${data.results[i].picture.large}" alt="${data.results[i].name.first} ${data.results[i].name.last} profile picture">
              <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
              <p class="modal-text">${data.results[i].email}</p>
              <p class="modal-text cap">${data.results[i].location.city}</p>
              <hr>
              <p class="modal-text">${data.results[i].cell}</p>
              <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
              <p class="modal-text">${data.results[i].dob.date}</p>
          </div>
      </div>`;*/
  }
  /*htmlStr2 += `
    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>`;*/
  //modalDiv.innerHTML = htmlStr2;
  //btnContainer = modalDiv.querySelector('.modal-btn-container');
  //modals = modalDiv.children;
  //closeBtn = modalDiv.querySelectorAll('')
  /*for (i = 0; i < modals.length; i += 1) {
    modals[i].style.display = 'none';
  }*/
  modalDiv.style.display = 'none';
  galleryDiv.innerHTML = htmlStr1;
  cards = galleryDiv.children;
}
});

const searchBox = `
  <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
  </form>`;
const $searchContainer = $('.search-container');
$searchContainer.html(searchBox);


galleryDiv.addEventListener('click', (e) => {
  for (i = 0; i < cards.length; i += 1) {
    if (e.target === cards[i]) {
      createModal(i);
    }
  }
});

/*function showModals (index) {
  for (let i = 0; i < modals.length; i += 1) {
    if (i === index) {
      modals[i].style.display = 'block';
      modalDiv.style.display = 'block';
      btnContainer.style.display = 'block';
    }
  }
}*/

function createModal (index) {
  indexNum = index;
  htmlStr2 = `
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn closeBtn"><strong class="closeBtn">X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${modalArray[index].image}" alt="${modalArray[index].first} ${modalArray[index].last} profile picture">
            <h3 id="name" class="modal-name cap">${modalArray[index].first} ${modalArray[index].last}</h3>
            <p class="modal-text">${modalArray[index].email}</p>
            <p class="modal-text cap">${modalArray[index].city}</p>
            <hr>
            <p class="modal-text">${modalArray[index].cell}</p>
            <p class="modal-text">${modalArray[index].street}, ${modalArray[index].city}, ${modalArray[index].state} ${modalArray[index].zip}</p>
            <p class="modal-text">${modalArray[index].dob}</p>
        </div>
    </div>
    <div class="modal-btn-container">`
  if (index === cards.length - 1) {
    htmlStr2 += `
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" disabled=true id="modal-next" class="modal-next disbtn">Next</button>
      </div>`;
  } else if (index === 0) {
    htmlStr2 += `
        <button type="button" disabled=true id="modal-prev" class="modal-prev disbtn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
      </div>`;
  } else {
    htmlStr2 += `
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>`;
  }
  modalDiv.innerHTML = htmlStr2;
  modalDiv.style.display = 'block';
  //closeBtn = document.getElementById('modal-close-btn');
  //nextBtn = document.getElementById('modal-next');
  //prevBtn = document.getElementById('modal-prev');



  /*closeBtn.addEventListener('click', (e) => {
    modalDiv.innerHTML = '';
    modalDiv.style.display = 'none';
  });
  nextBtn.addEventListener('click', (e) => {
    createModal(index + 1);
  });*/
}
modalDiv.addEventListener('click', (e) => {
  if (e.target.id === 'modal-next') {
    createModal(indexNum + 1);
  } else if (e.target.id === 'modal-prev') {
    createModal(indexNum - 1);
  } else if (e.target.classList.contains('closeBtn')) {
    modalDiv.innerHTML = '';
    modalDiv.style.display = 'none';
  }
});

// Create main components to the app and add them dynamically.
// Use the markup in the index.html file to create components.

// Add things like color, background color, font, shadows,
// transitions and animations to make this project your own.

// Use the random user generator API to generate 12 users *** make sure
// to filter by nationality in order to only include English names *** and display
// Image
// First and Last name
// email
// City or Location

// When any employee is clicked, a modal window should pop up with
// additional information. Be sure to include a way to close the window.
// All information listed above, plus
// Cell Number
// Detailed Address
// Birthday

// Add good code comments.

// Check for cross-browser consistency.

// Extra Credit: Add a search box in order to search directory by name.

// Extra Credit: Add a toggle feature to the modal window in order to toggle
// trough the list of employees. There should be no error when the beginning
// or ending of the list is reached.

// Extra Credit: Must make some changes in appearance and document those changes
// in the readme file. Also explain what the project is, and list any additional
// information that users may need in the readme.
