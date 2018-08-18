!function () {

// Initial variable declarations.
let htmlStr1 = '';
let htmlStr2 = '';
let modalArray = [];
let colorArray = [];
let indexNum;
let searchArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let cards;

// Inital Element selection.
const galleryDiv = document.getElementById('gallery');

// Create and append the modal container div.
const modalDiv = document.createElement('div');
modalDiv.className = 'modal-container';
const $body = $('body');
$body.append(modalDiv);

// Create and append the "no search results" message div.
const messageDiv = document.createElement('div');
const parentNode = galleryDiv.parentNode;
parentNode.insertBefore(messageDiv, galleryDiv);

// Create and append the search box.
const searchBox =
  `<form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>`;
const $searchContainer = $('.search-container');
$searchContainer.html(searchBox);

// Element selections after creation of the search box.
const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');

// jQuery get api that requests 12 results that include a nationality of "US." This also loops
// through the json object to create a string with all 12 "cards" that contain the employee info.
// I collect all the relevent data into an array for use in creating the modals, and set each card
// to a random background gradient color. I collect the colors in an array for use in creating the
// modals as well.
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
    }
    modalDiv.style.display = 'none';
    galleryDiv.innerHTML = htmlStr1;
    cards = galleryDiv.children;
    for (let i = 0; i < cards.length; i += 1) {
      const rNum = Math.random()*100+155;
      const gNum = Math.random()*100+155;
      const bNum = Math.random()*100+155;
      cards[i].style.backgroundImage = `radial-gradient(transparent 60%, rgba(${rNum}, ${gNum}, ${bNum}, 1))`;
      colorArray.push({
        red: rNum,
        green: gNum,
        blue: bNum
      })
    }
  }
});

// This Event Listener collects information typed into the search bar, and checks to see
// if any first or last name includes the typed string. It also collects which index number
// for each card that displays in order to limit which modals will display later.
searchSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  searchArray = [];
  const searchText = searchInput.value.toUpperCase();
  for (let i = 0; i < modalArray.length; i += 1) {
    cards[i].style.display = 'none';
    const fullName = `${modalArray[i].first.toUpperCase()} ${modalArray[i].last.toUpperCase()}`;
    //const lastName = modalArray[i].last.toUpperCase();
    //if (firstName.includes(searchText) || lastName.includes(searchText)) {
    if (fullName.includes(searchText)) {
      cards[i].style.display = 'flex';
      searchArray.push(i);
    }
  }
  if (searchArray.length === 0) {
    messageDiv.style.margin = '50px 0 0 0';
    messageDiv.innerHTML =
      `<span class='noresult'>There are no results for your search criteria. Please try again.</span>`;
  } else {
    messageDiv.style.margin = '0';
    messageDiv.innerHTML = '';
  }
});

// This Event Listener passes the index number of the card that was clicked
// to the createModal function.
galleryDiv.addEventListener('click', (e) => {
  for (i = 0; i < cards.length; i += 1) {
    if (e.target === cards[i]) {
      createModal(i);
    }
  }
});

// This Event Listener handles all button clicks made on the modal window.
// If the next or previous buttons are clicked, it calls the createModal function
// If the close button is clicked, it closes.
modalDiv.addEventListener('click', (e) => {
  if (e.target.id === 'modal-next') {
    createModal(searchArray[indexNum + 1]);
  } else if (e.target.id === 'modal-prev') {
    createModal(searchArray[indexNum - 1]);
  } else if (e.target.classList.contains('closeBtn')) {
    modalDiv.innerHTML = '';
    modalDiv.style.display = 'none';
  }
});

// This function uses the index number passed to it in addition to the modalArray created earlier
// to create a modal window. Each time a new modal window is opened, the previous one is overwritten.
// The html that gets added for the previous and next buttons depend on the position of index number within
// the searchArray array. If you're at the beginning, the previous button is disabled, and the same for the
// end with the next button. This function also sets the background gradient with the previously collected
// color info.
function createModal (index) {
  indexNum = searchArray.indexOf(index);
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
  if (0 === searchArray.length - 1) {
    htmlStr2 += `
        <button type="button" disabled=true id="modal-prev" class="modal-prev disbtn">Prev</button>
        <button type="button" disabled=true id="modal-next" class="modal-next disbtn">Next</button>
      </div>`;
  } else if (searchArray.indexOf(index) === searchArray.length - 1) {
    htmlStr2 += `
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" disabled=true id="modal-next" class="modal-next disbtn">Next</button>
      </div>`;
  } else if (searchArray.indexOf(index) === 0) {
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
  const modalCard = modalDiv.querySelector('.modal');
  const btnContainer = modalDiv.querySelector('.modal-btn-container');
  modalCard.style.backgroundImage =
    `radial-gradient(transparent 60%, rgba(${colorArray[index].red}, ${colorArray[index].green}, ${colorArray[index].blue}, 1))`;
  btnContainer.style.background = `rgba(${colorArray[index].red}, ${colorArray[index].green}, ${colorArray[index].blue}, 1)`;
}

}();
