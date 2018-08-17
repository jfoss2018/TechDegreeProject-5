let htmlStr1 = '';
let htmlStr2 = '';

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
    htmlStr2 += `
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
      </div>`;
  }
  htmlStr2 += `
    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>`;
  const modalDiv = document.createElement('div');
  modalDiv.className = 'modal-container';
  modalDiv.innerHTML = htmlStr2;
  const galleryDiv = document.getElementById('gallery');
  galleryDiv.innerHTML = htmlStr1;
  const $body = $('body');
  $body.append(modalDiv);
}
});

const searchBox = `
  <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
  </form>`;
const $searchContainer = $('.search-container');
$searchContainer.html(searchBox);





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
