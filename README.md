# TechDegreeProject-5


This project uses an API to collect random user information from randomuser.me.

The purpose is to successfully collect that information, and display it on the webpage as if it were a distributed company's users' contact information. 
There are other challenges which include creating more detailed modal windows and a search box dynamically.

The javascript functionality and styling changes I've made are listed below:

--The get request returns a json object with 12 results. We were instructed to collect 12 random users' information.
--I iterate over the 12 users to build a string containing HTML to add to the contact card gallery. At the same time, I use a three random numbers to create a radial
	gradient background image color for each card. I collect the json data and color data as objects within arrays to use later to create the modals.
--Upon hover over any "card" div, I used CSS transitions to transform the "card" to a 1.1 scale.
--When a card is clicked, I use a function to pass the index number of the child node clicked to a function to build the modal. That index number corresponds to the
	index number collected when creating the cards. When building an html string, I use a conditional statement to determine the index number position within the
	search array to disable the previous, next, or both buttons.
--The close button resets the modal div's html to nothing, and the previous/next buttons rerun the create modal function with the next or previous index number within
	the search array.
--The search box will limit the search array by iterating over the "cards" and checking to see if the search box value is included within the name date associated with
	each "card." If the search criteria is included, the corresponding index number gets pushed onto the search array. If there are no search results, a message
	is displayed notifying the user.
--The colors produced for the cards and the modals are limited to each rgb value being between 155 and 255 in order to maintain a light color.
