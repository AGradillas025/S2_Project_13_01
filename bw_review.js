"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Anthony S,A Gradillas
   Date:   3.14.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

// A event handler was inserted to run the int function after the page has been loaded
window.onload = init;

// The purpose of the following function is to define the event listeners used in the page
function init() {
      // The stars variable stores an object collection of the reviewing stars, efrenced by the span#stars img selector
      var stars = document.querySelectorAll("span#stars img");

      // This will loop through the star collection and for each star image change the cursor style to pointer and the event listener will run the lightStars function in response to the mouseenter event occuring for each star image
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }

      // The event listener has been added to to the comment text area box that runs the update count function in response to the keyup event
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

// The purpose of theis lightStars function is to color a star when the user moves the mouse pointer over a star image in order to reflect the user's rating of the book
function lightStars(e) {
      // The rating value of each star image has been stored within the img element's alt attribute, so the value of the alt attribute of the target of the event object has been stored in the starNumber variable.
      var starNumber = e.target.alt;
      // The stars variable has been declared while containing the object colection refrenced by the selector span#stars img
      var stars = document.querySelectorAll("span#stars img");

      // This will loop through the stars collection with an index ranging from 0 up to less than the value of the starNumber variable, and this will light every star in the collection by chenging the src attribute of the star imageto the "bw_star2.png" image file
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      // This loops through the stars collection with the index ranging from the value of the starNumber variable to less than 5, and will unlight every star in this collection by changing the src attribute of the star image to "bw_star.png" image file
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }

      // The value of the input box with the id attribute rating should be changes to starNumber stars, where starNumber will be the value of the starNumber variable
      document.getElementById("rating").value = starNumber + " star(s)";
      // The event listener targets the event object that runs an anonymous function removing the turnOffStars function from the mouseleave event
      e.target.addEventListener("mouseleave", function () {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

// The prupose of the following function is to unlight the stars when the mouse moves the pointer off the star images
function turnOffStars() {
      // The stars variable has been declared while containing the object colection refrenced by the selector span#stars img
      var stars = document.querySelectorAll("span#stars img");

      // Loops through all images in star collection and change the src attribute of each image to "bw_star.png" file
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }

      // Changes the value of the rating input box o an empty string
      document.getElementById("rating").innerHTML = "";
}

// This function keeps a running total of the number of characters that the user that the user has typed into the comment text area box 
function updateCount() {
      // The commentText variable is declared to refrence the value stored in the comment text area box
      var commentText = document.getElementById("comment").value;
      // The countCharacter function was used with commentText as the parameter value to calculate the number of of characters in commentText, and all of the is stored within the charCount variable
      var charCount = countCharacters(commentText);
      // Declares the wordCountBox that refrences the wordCount input box
      var wordCountBox = document.getElementById("wordCount");
      // Changes the value stored in the wordCount input box to the text string charCount/1000 where charCount is the value of the charCount variable
      wordCountBox.value = charCount + "/1000";

      //
      if (charCount > 1000) {
            wordCount.style.backgrounColor = "red";
            wordCount.style.Color = "white";
      } else {
            wordCountBox.style.backgroundColor = "white";
            wordCountBox.style.Color = "black";
      }
}







/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}