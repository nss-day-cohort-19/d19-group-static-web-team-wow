"use strict";

var btmBtn = document.getElementById('footerBtn');

btmBtn.addEventListener('click', function() {
  window.scrollTo(0, 0);
});




//*doesnt work yet*//

var contactBtn = document.getElementById('submit-form');

var userSubmit = document.querySelector('form.contactForm')
  contactBtn.addEventListener('click', function() {
      console.log(document.getElementsByClass('userInput').getAttribute('value'));
    });
  

