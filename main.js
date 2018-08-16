$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0].gender);
  }
});
/*
let htmlStr = '';
for (let i = 0; i < 12; i += 1) {
  htmlStr += `<div class="card"><div class="card-img-container">`;

}
*/
/*
<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>
*/

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
