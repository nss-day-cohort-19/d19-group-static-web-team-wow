"use strict";

var btmBtn = document.getElementById('footerBtn');

btmBtn.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

var text = document.getElementById('userInput')
var userInput = document.getElementById('contactForm', userInput.addEventListener('{input}'));
var contactBtn = document.getElementById('submit-form');

contactBtn.addEventListener('click', function(userInput) {
  console.log('{input}');
});